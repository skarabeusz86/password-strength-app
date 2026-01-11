# 🔐 Password Strength Analyzer (PWA)

An **offline AppSec tool** for analyzing password strength, entropy, and estimating brute‑force cracking time.

The project is built **without any backend**, runs fully in the browser, and **never sends passwords over the network**.

---

## 🚀 Features

* ✅ Password strength analysis (length, complexity, character variety)
* 🧠 Password entropy calculation
* ⏱️ Brute‑force cracking time estimation
* 🎯 Attack modes:

  * 🌐 Online (rate‑limited attacks)
  * 💻 Offline CPU
  * 🖥️ Offline GPU
* 🧪 Detection of common / breached passwords (local hash database)
* 👁️ Show / hide password toggle
* 📱 Progressive Web App (PWA) – offline & installable

---

## 🔐 Security & AppSec Principles

* 🔒 Passwords **never leave the browser**
* 🔑 Breach detection is **hash‑based and fully offline**
* ❌ No external APIs, no network requests
* 📦 No backend = minimal attack surface

> ⚠️ Note: breach detection checks only a **local demo list of common passwords**. This is not a global Have I Been Pwned lookup.

---

## 🧮 How is cracking time calculated?

1. Password entropy is calculated as:

```
entropy = log2(charset_size ^ password_length)
```

2. Total number of combinations:

```
2 ^ entropy
```

3. Estimated cracking time:

```
crack_time = combinations / guesses_per_second
```

### Attack speeds used:

| Mode   | Guesses / second |
| ------ | ---------------- |
| Online | 100              |
| CPU    | 10⁸              |
| GPU    | 10¹⁰             |

---

## 🖼️ Screenshots (to add)

Add 2–3 screenshots:

* Main view
* Different attack modes
* PWA installation prompt

```
/screenshots
  ├── main.png
  ├── attack-modes.png
  └── pwa-install.png
```

---

## 📦 Local setup

```bash
python -m http.server 5500
```

Open in browser:

```
http://localhost:5500
```

---

## 🌍 Live demo (GitHub Pages)

```
https://skarabeusz86.github.io/password-strength-app/
```

---

## 🧑‍💻 Tech Stack

* HTML5
* CSS3 (Flexbox, animations)
* JavaScript (Vanilla)
* Web Crypto API
* Service Worker (PWA)

---

## 🎓 Project purpose

Educational project focused on:

* Application Security (AppSec)
* Password security fundamentals
* Brute‑force attack modeling
* Secure frontend design

Suitable as a **portfolio project** for:

* Junior / Mid Security Engineers
* Backend Developers
* AppSec Engineers

---

## 📄 License

MIT

---

### ✨ Author

Skarabeusz86

Created as an educational AppSec project 🚀
