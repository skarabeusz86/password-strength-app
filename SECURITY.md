# 🔐 Security Policy

## 📣 Reporting a Vulnerability

If you discover a security vulnerability in this project, **please do not open a public issue**.

Instead, report it responsibly using one of the methods below:

* 📧 Email: **[skarabeusz461@gmail.com](mailto:security@example.com)** (replace with your real contact)
* 💬 GitHub: Private message to the repository owner

Please include as much detail as possible:

* Description of the vulnerability
* Steps to reproduce
* Potential impact
* Screenshots or proof‑of‑concept (if available)

You will receive an acknowledgment within **72 hours**.

---

## 🛡️ Project Security Scope

This project is an **offline, client‑side security tool**.

### In scope:

* Client‑side JavaScript logic
* Password strength calculation
* Entropy and crack‑time estimation
* Local hash‑based password checks
* PWA Service Worker behavior

### Out of scope:

* Server‑side vulnerabilities (no backend)
* Network‑based attacks (no API calls)
* Third‑party services (none used)

---

## 🔍 Security Assumptions & Limitations

* The application **does not verify passwords against global breach databases** (e.g. Have I Been Pwned)
* Breach detection uses a **local demo list of common password hashes**
* Crack‑time estimates are **educational approximations**, not guarantees
* Attack speeds are simplified models (online / CPU / GPU)

---

## 🔒 Data Privacy

* Passwords are processed **only in memory**
* No data is stored, logged, or transmitted
* No analytics, tracking, or telemetry

---

## 🧠 Responsible Disclosure

Please allow reasonable time to investigate and fix reported issues before public disclosure.

Thank you for helping keep this project secure 🙏

------------------------------------------------------------------------------------------------------------------

## PL

# 🔐 Polityka Bezpieczeństwa

## 📣 Zgłaszanie podatności

Jeśli odkryjesz podatność bezpieczeństwa w tym projekcie, **nie zgłaszaj jej publicznie w Issues**.

Zamiast tego skontaktuj się w odpowiedzialny sposób:

* 📧 Email: **[skarabeusz461@gmail.com](mailto:security@example.com)** (zamień na prawdziwy adres)
* 💬 GitHub: prywatna wiadomość do właściciela repozytorium

W zgłoszeniu uwzględnij:

* Opis podatności
* Kroki umożliwiające odtworzenie
* Potencjalny wpływ
* Screenshoty lub proof‑of‑concept (jeśli dostępne)

Odpowiedź otrzymasz w ciągu **72 godzin**.

---

## 🛡️ Zakres bezpieczeństwa projektu

Projekt jest **narzędziem offline działającym po stronie przeglądarki**.

### W zakresie:

* Logika JavaScript po stronie klienta
* Analiza siły hasła
* Obliczanie entropii i czasu łamania
* Lokalne sprawdzanie hashy haseł
* Działanie Service Workera (PWA)

### Poza zakresem:

* Podatności backendowe (brak backendu)
* Ataki sieciowe (brak połączeń API)
* Usługi zewnętrzne (nieużywane)

---

## 🔍 Założenia i ograniczenia bezpieczeństwa

* Aplikacja **nie sprawdza haseł w globalnych bazach wycieków** (np. Have I Been Pwned)
* Wykorzystywana jest **lokalna, testowa baza popularnych haseł**
* Szacowany czas łamania ma **charakter edukacyjny**
* Prędkości ataku są uproszczonym modelem (online / CPU / GPU)

---

## 🔒 Prywatność danych

* Hasła są przetwarzane **wyłącznie w pamięci przeglądarki**
* Żadne dane nie są zapisywane ani wysyłane
* Brak analityki, trackingu i telemetrii

---

## 🧠 Odpowiedzialne ujawnianie

Prosimy o danie odpowiedniego czasu na analizę i poprawkę przed publicznym ujawnieniem podatności.

Dziękujemy za pomoc w utrzymaniu bezpieczeństwa projektu 🙏

