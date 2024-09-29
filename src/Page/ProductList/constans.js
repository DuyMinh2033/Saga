export const productListData = [
  {
    id: 1,
    name: "Basic Savings Account",
    description: "A basic savings account with low interest rates.",
    dep_sjt_class: "1", // Banking product
    price: "$1000",
  },
  {
    id: 2,
    name: "Investment Fund A",
    description: "A high-return investment fund.",
    dep_sjt_class: "2", // Investment product
    price: "$5000",
  },
  {
    id: 3,
    name: "Personal Loan",
    description: "Low interest personal loan.",
    dep_sjt_class: "3", // Borrowing product
    price: "$10000",
  },
  {
    id: 4,
    name: "Premium Checking Account",
    description: "Premium account with better benefits and interest rates.",
    dep_sjt_class: "1", // Banking product
    price: "$2000",
  },
  {
    id: 5,
    name: "Investment Fund B",
    description: "A balanced portfolio investment fund.",
    dep_sjt_class: "2", // Investment product
    price: "$7000",
  },
  {
    id: 6,
    name: "Mortgage Loan",
    description: "Affordable mortgage loan with flexible terms.",
    dep_sjt_class: "3", // Borrowing product
    price: "$50000",
  },
];

export const ProductTab = {
  BANKING: "1",
  INVESTMENT: "2",
  BORROWING: "3",
};

export const ProductTabDisplay = {
  [ProductTab.BANKING]: "Banking",
  [ProductTab.INVESTMENT]: "Investment",
  [ProductTab.BORROWING]: "Borrowing",
};
