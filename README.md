# Finance App V2

A personal finance management app built as a refactor of my original Finance App,
using a production-ready front-end stack. Inspired by the
[Personal Finance App challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/personal-finance-app-JfjtZgyMt1).

## Table of contents

- [Overview](#overview)
- [Demo & Screenshots](#-demo--screenshots)
- [Tech Stack](#-tech-stack)
- [Features](#-features)
- [Architecture](#-architecture)
- [Tests](#-test)
- [Links](#-links)
- [What I Learned](#-what-i-learned)
- [Author](#-author)

## Overview

This project is a refactor of my original Finance App, rebuilt with TypeScript, Redux Toolkit,
Jotai and Framer Motion.
The goal was to apply professional front-end practices on a real project with meaningful business logic.

## 🎬 Demo & Screenshots

### 💻 Desktop Views

<p>
  <img src="src/assets/demo/FinanceApp-overview.png" width="48%">
  <img src="src/assets/demo/FinanceApp-budgets.png" width="48%">
</p>
<p>
  <img src="src/assets/demo/FinanceApp-transactions.png" width="48%">
  <img src="src/assets/demo/FinanceApp-pots.png" width="48%">
</p>

### 📱 Mobile Version

<p>
  <img src="src/assets/demo/FinanceApp-responsive.png" width="32%">
    <img src="src/assets/demo/FinanceApp-responsive2.png" width="32%">

</p>

## 🛠️ Tech Stack

- **Language:** TypeScript
- **Frontend:** React 19 + Tailwind CSS v4
- **State Management:** Redux Toolkit + Jotai
- **Animations:** Framer Motion
- **Routing:** React Router v6
- **Build Tool:** Vite
- **Deploy:** Vercel
- **Testing:** Vitest

## ✨ Features

- 📊 **Overview Dashboard** - Balance, income, expenses at a glance
- 💰 **Budget Management** - Create, edit, delete budgets with spending tracking
- 🪙 **Pots** - Savings goals with add/withdraw functionality
- 💳 **Transactions** - Search, filter, sort and paginate transactions
- 🧾 **Recurring Bills** - Paid, upcoming and due soon status
- 🗂️ **Animated Sidebar** - Collapsible with Framer Motion
- 📱 **Fully Responsive** - Mobile navbar + desktop sidebar

## 🏗️ Architecture

- **Redux Toolkit** — global state for budgets and pots (CRUD operations)
- **Jotai** — lightweight UI state for sidebar open/close
- **TypeScript** — strict typing across all components, slices and utilities
- **Feature-based folder structure** — `features/budget`, `features/pot`, `utils/`, `atoms/`
- **Git flow** — one branch per feature, clean commit history

## 🧪 Tests

Unit tests written with **Vitest** on the core business logic :

- Redux slices — `budgetSlice`, `potSlice`
- Utility functions — `calculateBudgetStats`, `paidBills`, `upcomingBills`, `dueSoonBills`

## 🔗 Links

- 🌐 **Live Demo:** [View Application](https://finance-app-melaniecrzx.vercel.app/)
- 💻 **Source Code:** [GitHub Repository](https://github.com/Melaniecrzx/Finance-app-V2.git)
- 🎯 **V1 Frontend:** [Finance App V1 Frontend](https://github.com/Melaniecrzx/Finance-App-client.git)
- 🎯 **V1 Backend:** [Finance App V1 Backeend](https://github.com/Melaniecrzx/Finance-App.git)

## 💡 What I Learned

- Typing a full React app with TypeScript — interfaces, union types, generics
- State management architecture — when to use Redux vs Jotai vs useState
- Redux Toolkit — slices, reducers, PayloadAction, useAppSelector/useAppDispatch
- Framer Motion — AnimatePresence, layout animations, transition between pages
- Feature-based project structure for scalability

## 🚧 Next Steps

- Migrate styling from Tailwind to Styled Components
- Connect to a real backend (Node.js + MongoDB)

## 👤 Author

- GitHub - [@Melaniecrzx](https://github.com/Melaniecrzx)
- Portfolio - [https://portfolio-melaniecrzx.vercel.app](https://portfolio-melaniecrzx.vercel.app)
