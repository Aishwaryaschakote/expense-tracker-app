import { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";

import {
  transactions as initialTransactions,
  subscribeTransactions,
} from "../data/mockData";

const categoryIcons = {
  Food: "🛒",
  Travel: "🚕",
  Bills: "💡",
};

export default function CategorySummaryScreen() {
  const [transactions, setTransactions] = useState(initialTransactions);

  useEffect(() => {
    return subscribeTransactions(setTransactions);
  }, []);

  const expenseTransactions = transactions.filter(
    (transaction) => transaction.type === "expense"
  );

  const categories = ["Food", "Travel", "Bills"];

  const categoryData = categories.map((category) => {
    const amount = expenseTransactions
      .filter(
        (transaction) => transaction.category === category
      )
      .reduce(
        (total, transaction) => total + transaction.amount,
        0
      );

    return {
      category,
      amount,
    };
  });

  const totalExpenses = categoryData.reduce(
    (total, item) => total + item.amount,
    0
  );

  return (
    <View className="flex-1 bg-gray-50">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName="px-5 pb-8"
      >
        <View className="mb-6 mt-4">
          <Text className="text-3xl font-bold text-gray-900">
            Category Summary
          </Text>

          <Text className="mt-1 text-sm text-gray-500">
            See where your money is going
          </Text>
        </View>

        <View className="mb-6 rounded-3xl bg-blue-600 p-5">
          <Text className="text-sm text-blue-100">
            Total Spending
          </Text>

          <Text className="mt-2 text-3xl font-bold text-white">
            ₹{totalExpenses.toLocaleString("en-IN")}
          </Text>

          <Text className="mt-2 text-sm text-blue-100">
            Across {categories.length} categories
          </Text>
        </View>

        <Text className="mb-4 text-xl font-bold text-gray-900">
          Spending Breakdown
        </Text>

        {categoryData.map((item) => {
          const percentage =
            totalExpenses > 0
              ? (item.amount / totalExpenses) * 100
              : 0;

          return (
            <View
              key={item.category}
              className="mb-4 rounded-2xl bg-white p-4"
            >
              <View className="flex-row items-center">
                <View className="h-11 w-11 items-center justify-center rounded-xl bg-gray-100">
                  <Text className="text-xl">
                    {categoryIcons[item.category]}
                  </Text>
                </View>

                <View className="ml-3 flex-1">
                  <Text className="font-semibold text-gray-900">
                    {item.category}
                  </Text>

                  <Text className="mt-1 text-xs text-gray-500">
                    {percentage.toFixed(0)}% of total spending
                  </Text>
                </View>

                <Text className="font-bold text-gray-900">
                  ₹{item.amount.toLocaleString("en-IN")}
                </Text>
              </View>

              <View className="mt-4 h-2 overflow-hidden rounded-full bg-gray-100">
                <View
                  className="h-full rounded-full bg-blue-600"
                  style={{ width: `${percentage}%` }}
                />
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}