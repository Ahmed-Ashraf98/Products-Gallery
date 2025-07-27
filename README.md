# 🛍️ Angular E-Commerce UI

## 📝 Project Overview

This is a responsive e-commerce user interface built with **Angular 19+**, **TailwindCSS**, and **PrimeNG**.  
It includes filtering, sorting, search functionality, product rating display, dark mode toggle, and modular reusable components powered by **NgRx** for state management.

---

## 📸 Screenshots / Demo

| Light Mode                                                                                                                           | Dark Mode                     |
| -----------------------------------------------------------------------------------------------------------------------------------  | ----------------------------- |
|  <img width="1337" height="633" alt="image" src="https://github.com/user-attachments/assets/4dcc5a81-b418-4d77-897b-913ecda28181" /> | <img width="1328" height="627" alt="image" src="https://github.com/user-attachments/assets/a58f3a4f-d11b-4d81-9e42-ba675acccb85" /> |

> 🧪 _To preview locally:_

```bash
npm install
npm start
```

---

## 🧱 Tech Stack Used

| Tool / Library  | Purpose                     |
| --------------- | --------------------------- |
| **Angular 19+** | Frontend framework          |
| **TailwindCSS** | Utility-first CSS framework |
| **PrimeNG**     | UI component library        |
| **NgRx**        | Reactive state management   |
| **Cookie SSR**  | To store theme option       |

---

## 🧠 NgRx State Management

This project uses **NgRx** for efficient state management, ensuring a unidirectional data flow across the app.

### 🔧 Implemented NgRx Features

- **Store** – Global state for products, filters
- **Actions** – Search input, sort selection, filter clear
- **Reducers** – Handle how the state changes
- **Selectors** – Extract relevant slices of state (e.g., filtered products)
- **Effects** – Optional; used if loading data from APIs
