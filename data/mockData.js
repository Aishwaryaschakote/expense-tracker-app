export const transactions = [
  {
    id: "1",
    title: "Grocery Shopping",
    category: "Food",
    amount: 850,
    type: "expense",
    date: "21 Aug 2026",
  },
  {
    id: "2",
    title: "Monthly Salary",
    category: "Income",
    amount: 45000,
    type: "income",
    date: "20 Aug 2026",
  },
  {
    id: "3",
    title: "Uber Ride",
    category: "Travel",
    amount: 320,
    type: "expense",
    date: "19 Aug 2026",
  },
  {
    id: "4",
    title: "Electricity Bill",
    category: "Bills",
    amount: 1450,
    type: "expense",
    date: "18 Aug 2026",
  },
  {
    id: "5",
    title: "Freelance Project",
    category: "Income",
    amount: 8500,
    type: "income",
    date: "17 Aug 2026",
  },
  {
    id: "6",
    title: "Restaurant Dinner",
    category: "Food",
    amount: 1200,
    type: "expense",
    date: "16 Aug 2026",
  },
  {
    id: "7",
    title: "Flight Tickets",
    category: "Travel",
    amount: 4200,
    type: "expense",
    date: "15 Aug 2026",
  },
  {
    id: "8",
    title: "Internet Bill",
    category: "Bills",
    amount: 799,
    type: "expense",
    date: "14 Aug 2026",
  },
];

const listeners = new Set();

export const addTransaction = (transaction) => {
  transactions.unshift(transaction);

  listeners.forEach((listener) => listener([...transactions]));
};

export const subscribeTransactions = (listener) => {
  listeners.add(listener);

  return () => {
    listeners.delete(listener);
  };
};

export const categories = [
  "All",
  "Food",
  "Travel",
  "Bills",
  "Income",
];