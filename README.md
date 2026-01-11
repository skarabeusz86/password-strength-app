[![PWA Ready](https://img.shields.io/badge/PWA-Ready-brightgreen?logo=pwa)](https://skarabeusz86.github.io/secure-password-generator/)
![Offline](https://img.shields.io/badge/Offline-Supported-success)
![Client Side](https://img.shields.io/badge/Client--Side-Only-blue)
![Profile views](https://komarev.com/ghpvc/?username=skarabeusz86&color=blue)


# 🔐 Password Strength Analyzer (PWA)

Offline **AppSec tool** do analizy siły hasła, entropii oraz szacowanego czasu złamania metodą brute‑force.

Projekt stworzony **bez backendu**, w pełni lokalnie w przeglądarce – żadne dane nie są wysyłane do internetu.

---

## 🚀 Funkcje

* ✅ Analiza siły hasła (długość, złożoność, znaki specjalne)
* 🧠 Obliczanie entropii hasła
* ⏱️ Szacowanie czasu łamania hasła (brute‑force)
* 🎯 Tryby ataku:

  * 🌐 Online (rate‑limited)
  * 💻 Offline CPU
  * 🖥️ Offline GPU
* 🧪 Wykrywanie popularnych / wyciekłych haseł (lokalna baza hashy)
* 👁️ Toggle pokaż / ukryj hasło
* 📱 Progressive Web App (PWA) – działa offline, instalowalna

---

## 🔐 Bezpieczeństwo (AppSec)

* 🔒 Hasła **nigdy nie opuszczają przeglądarki**
* 🔑 Sprawdzanie wycieków odbywa się **offline** (hash‑based)
* ❌ Brak połączeń sieciowych / API
* 📦 Brak backendu = brak powierzchni ataku

> ⚠️ Uwaga: sprawdzanie wycieków dotyczy **lokalnej testowej bazy popularnych haseł** (demo). Nie jest to globalny check typu Have I Been Pwned.

---

## 🧮 Jak liczony jest czas złamania hasła?

1. Obliczana jest entropia hasła:

```
entropy = log2(charset_size ^ length)

2. Liczba możliwych kombinacji:

```
2 ^ entropy

```

3. Czas łamania:

```
crack_time = combinations / guesses_per_second

```

### Prędkości ataku:

| Tryb   | Próby / sek |
| ------ | ----------- |
| Online | 100         |
| CPU    | 10⁸         |
| GPU    | 10¹⁰        |

---

## 📦 Instalacja lokalna

```
bash
python -m http.server 5500

Otwórz:

```
http://localhost:5500

---

## 🌍 Demo (GitHub Pages)

```
https://skarabeusz86.github.io/password-strength-app/

---

## 🧑‍💻 Tech Stack

* HTML5
* CSS3 (Flexbox, Animations)
* JavaScript (Vanilla)
* Web Crypto API
* Service Worker (PWA)

---

## 🎓 Cel projektu

Projekt edukacyjny z zakresu:

* Application Security (AppSec)
* Password Security
* Brute‑force attack modeling
* Secure frontend design

Idealny jako **projekt portfolio** dla:

* Junior / Mid Security Engineer
* Backend / AppSec Developer

---

## 📄 Licencja

MIT

---

### ✨ Autor

Skarabeusz86

Stworzone jako projekt edukacyjny AppSec 🚀
