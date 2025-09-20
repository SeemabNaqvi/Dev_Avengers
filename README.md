# 🛍️ ModeSens Clone

## 🧩 Introduction
The **ModeSens Clone** is a responsive e-commerce web app that replicates the design and functionality of the ModeSens fashion platform. It enables users to:
- Browse trending and featured fashion products
- View product descriptions in detail
- Manage a shopping cart
- Handle basic user login/signup
- Enjoy a smooth, clean, and responsive UI

This project simulates a real-world online shopping experience using modern frontend techniques.

---

## 📁 Project Type
**Frontend Only**

---

## 🌐 Deployed App
- **Frontend**: [Visit Site](https://deluxe-jelly-c5d006.netlify.app/index.html)
- **Backend**: _N/A_
- **Database**: _N/A_

---

## 📂 Directory Structure
HomePage/ ├─ index.html ├─ style.css ├─ main.js ├─ login.html ├─ login.css ├─ login.js

## 🎥 Video Walkthrough
[Click to Watch](https://drive.google.com/file/d/14wlqSy0b_WnAMgabqEqfsJCVwVkjWfzk/view?usp=sharing)

---

## ✨ Features
- Product listings via DummyJSON API
- Featured & trending product sections
- Product detail modal view
- Add-to-cart with modal cart preview
- Real-time cart total calculation
- Search functionality
- Login, signup, and forgot password modals
- Responsive UI with hover animations

---

## 🧠 Design Decisions & Assumptions
- Used **DummyJSON API** for demo content (images, titles, prices)
- Login system is **simulated using `localStorage`**
- Custom CSS, no frameworks used
- The 👤 icon conditionally displays user info or triggers login
- No backend or persistent database involved

---

## ✅ How to Use
1. **Clone or download** the project files.
2. Open `index.html` in your browser to launch the homepage.
3. Click the 👤 icon to access login.
4. Browse products or search for specific items.
5. Add items to the cart and view your selections.
6. Explore modal transitions on the `login.html` page.

---

## 🚀 Installation & Getting Started
No build tools are required. Simply run:
```bash
git clone https://github.com/SeemabNaqvi/Dev_Avengers/tree/main/Homepage
open index.html
Walkthrough:

Open index.html

Click on the 👤 icon to log in

Add a product to the cart

View the cart and proceed to simulated "payment"

🔌 APIs Used
DummyJSON API

FakeStoreAPI (used briefly)

API Endpoints
GET https://dummyjson.com/products

GET https://dummyjson.com/products/search?q=shoes

GET https://dummyjson.com/products/category/womens-dresses

GET https://dummyjson.com/products/{id}

🛠️ Technology Stack
HTML5

CSS3

JavaScript (Vanilla)

DummyJSON & FakeStore APIs

LocalStorage (for simulating login)

📄 License
This project is for educational and demo purposes only.
All brand assets and product content belong to their respective owners.
