const passwordInput = document.getElementById("password");
const progressBar = document.getElementById("progress-bar");
const result = document.getElementById("result");
const crackTimeEl = document.getElementById("crack-time");
const breachEl = document.getElementById("breach-check");
const tips = document.getElementById("tips");
const toggleBtn = document.getElementById("togglePassword");
const attackModeSelect = document.getElementById("attackMode");

const ATTACK_SPEEDS = {
    online: 100,
    cpu: 1e8,
    gpu: 1e10
};

/* ================= EVENTS ================= */

passwordInput.addEventListener("input", async () => {
    const password = passwordInput.value;
    tips.innerHTML = "";

    if (!password) {
        resetUI();
        return;
    }

    const analysis = analyzePassword(password);
    updateUI(analysis);

    const compromised = await isBreached(password);
    updateBreachUI(compromised);
});

attackModeSelect.addEventListener("change", () => {
    if (!passwordInput.value) return;

    const analysis = analyzePassword(passwordInput.value);
    updateUI(analysis);
});

toggleBtn.addEventListener("click", () => {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        toggleBtn.textContent = "🙈";
    } else {
        passwordInput.type = "password";
        toggleBtn.textContent = "👁️";
    }
});

/* ================= SECURITY CORE ================= */

function analyzePassword(password) {
    let score = 0;
    let charsetSize = 0;

    if (password.length >= 8) score++; else addTip("Minimum 8 znaków");
    if (/[a-z]/.test(password)) { score++; charsetSize += 26; } else addTip("Add lowercase letters");
    if (/[A-Z]/.test(password)) { score++; charsetSize += 26; } else addTip("Add capital letters");
    if (/[0-9]/.test(password)) { score++; charsetSize += 10; } else addTip("Add numbers");
    if (/[^A-Za-z0-9]/.test(password)) { score++; charsetSize += 32; } else addTip("Add a special character");

    const entropy = Math.log2(Math.pow(charsetSize || 1, password.length));
    const attackSpeed = ATTACK_SPEEDS[attackModeSelect.value];
    const crackTimeSeconds = Math.pow(2, entropy) / attackSpeed;

    return { score, crackTimeSeconds };
}

async function isBreached(password) {
    const hash = await sha1(password);
    return BREACHED_HASHES.has(hash);
}

/* ================= CRYPTO ================= */

async function sha1(text) {
    const buffer = new TextEncoder().encode(text);
    const hashBuffer = await crypto.subtle.digest("SHA-1", buffer);
    return [...new Uint8Array(hashBuffer)]
        .map(b => b.toString(16).padStart(2, "0"))
        .join("");
}

/* ================= UI ================= */

function updateUI({ score, crackTimeSeconds }) {
    const percent = (score / 5) * 100;
    progressBar.style.width = percent + "%";

    if (score <= 2) {
        progressBar.style.background = "#dc2626";
        result.textContent = "❌ Weak password";
    } else if (score === 3) {
        progressBar.style.background = "#facc15";
        result.textContent = "⚠️ Average password";
    } else {
        progressBar.style.background = "#16a34a";
        result.textContent = "✅ Strong password";
    }

    const modeLabel = attackModeSelect.options[attackModeSelect.selectedIndex].text;
    crackTimeEl.textContent =
        `⏱️ Estimated fracture time (${modeLabel}): ${formatTime(crackTimeSeconds)}`;
}

function updateBreachUI(compromised) {
    if (compromised) {
        breachEl.textContent = "🚨 The password is in the local database of popular passwords!";
        breachEl.style.color = "#dc2626";
    } else {
        breachEl.textContent = "ℹ️ No popular terms found in local database";
        breachEl.style.color = "#38bdf8";
    }
}

function formatTime(seconds) {
    const years = seconds / 31536000;
    if (years > 100) return "> 100 lat (virtually unbreakable)";
    if (years >= 1) return `${Math.floor(years)} lat`;
    if (seconds >= 86400) return `${Math.floor(seconds / 86400)} dni`;
    if (seconds >= 3600) return `${Math.floor(seconds / 3600)} godzin`;
    if (seconds >= 60) return `${Math.floor(seconds / 60)} minut`;
    return "< 1 sekundy";
}

function addTip(text) {
    const li = document.createElement("li");
    li.textContent = text;
    tips.appendChild(li);
}

function resetUI() {
    progressBar.style.width = "0%";
    result.textContent = "";
    crackTimeEl.textContent = "";
    breachEl.textContent = "";
    tips.innerHTML = "";
}
