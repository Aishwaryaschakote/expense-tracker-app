# 💰 Expense Tracker App

A mobile Expense Tracker application built with **React Native, Expo, NativeWind, and React Navigation**.

A UI-focused frontend internship assessment demonstrating clean mobile design, navigation, reusable components, local mock data, transaction filtering, form validation, and spending summaries.

---

## ✨ Features

- Dashboard with balance, income, expenses, and recent transactions
- Add income or expense transactions
- Category selection: Food, Travel, and Bills
- Date picker for transaction dates
- Transaction filtering by category
- Category-wise spending summary
- Spending percentages and progress bars
- Form validation and error feedback
- Keyboard-friendly transaction form
- Bottom tab and stack navigation
- Responsive mobile UI
- Local mock data with no backend or API

---

## 📱 Screens

### Home / Dashboard

- Total balance
- Income and expense summaries
- Recent transactions
- Quick-add transaction button

### Transactions

- Complete transaction list
- Filters: All, Food, Travel, Bills, Income
- Income and expense indicators

### Add Transaction

- Income / Expense selection
- Title and amount inputs
- Category selection
- Date picker
- Validation
- Save and Cancel actions

### Category Summary

- Total spending
- Category-wise spending
- Spending percentages
- Visual progress bars

---

## 🛠️ Tech Stack

| React Native | Expo | NativeWind | React Navigation |
|---|---|---|---|
| Mobile UI | Development | Styling | Navigation |

| JavaScript | Tailwind CSS | Local Mock Data | Expo Go |
|---|---|---|---|
| Language | Utility Styling | Static Data | Testing |

---

## 📂 Project Structure

```text
expense-tracker-app/
│
├── assets/
├── components/
│   ├── SummaryCard.js
│   └── TransactionCard.js
├── data/
│   └── mockData.js
├── screens/
│   ├── HomeScreen.js
│   ├── TransactionsScreen.js
│   ├── AddTransactionScreen.js
│   └── CategorySummaryScreen.js
├── screenshots/
├── App.js
├── index.js
├── app.json
├── babel.config.js
├── metro.config.js
├── tailwind.config.js
├── global.css
├── package.json
└── README.md
```

---

# 🚀 Getting Started

## Prerequisites

Make sure the following are installed:

- Node.js
- npm
- Expo Go

## Installation

Clone the repository:

```bash
git clone https://github.com/Aishwaryaschakote/expense-tracker-app.git
cd expense-tracker-app
npm install
```

## Run the Application

Start the Expo development server:

```bash
npx expo start
```

Scan the QR code using **Expo Go** on an Android device.

Make sure the computer and mobile device are connected to the same network.

---

## 🧪 Testing

1. Open the Dashboard and verify balance, income, expenses, and recent transactions.
2. Open Transactions and test all category filters.
3. Open Add Transaction and test income/expense selection, validation, amount input, category selection, and date picker.
4. Save a transaction and verify the local state update.
5. Open Categories and verify spending totals and progress bars.

---

## 🔒 Data & Architecture

This is a **UI-only application** created according to the assessment requirements.

- No backend
- No API calls
- No database
- No authentication
- No external data fetching
- Local mock data only
- Functional React components
- NativeWind utility classes for styling

---

## ⚡ Edge Cases

- Empty title
- Empty or invalid amount
- Zero or negative amount
- Invalid amount characters
- Empty transaction list
- Category filtering
- Long transaction titles
- Keyboard covering form fields
- Inline validation errors

---

## 📋 Assessment Requirements

| Requirement | Status |
|---|---|
| Dashboard / Home | ✅ |
| Transactions & Filtering | ✅ |
| Add Transaction | ✅ |
| Date Picker | ✅ |
| Form Validation | ✅ |
| Category Summary | ✅ |
| Progress Bars | ✅ |
| React Navigation | ✅ |
| NativeWind Styling | ✅ |
| Local Mock Data | ✅ |
| Empty & Error States | ✅ |
| Responsive UI | ✅ |

---

## 👩‍💻 Author

**Aishwarya Chakote**

Computer Science & Engineering  
Frontend / AI Software Development

---

## 📄 License

Created for educational and internship assessment purposes.
