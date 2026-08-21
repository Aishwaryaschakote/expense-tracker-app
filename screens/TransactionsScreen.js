import { useState } from "react";
import { View, Text, ScrollView, Pressable } from "react-native";

import { transactions } from "../data/mockData";
import TransactionCard from "../components/TransactionCard";

const filters = ["All", "Food", "Travel", "Bills", "Income"];

export default function TransactionsScreen() {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const filteredTransactions =
    selectedFilter === "All"
      ? transactions
      : transactions.filter((transaction) => {
          if (selectedFilter === "Income") {
            return transaction.type === "income";
          }

          return transaction.category === selectedFilter;
        });

  return (
    <View className="flex-1 bg-gray-50">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName="px-5 pb-8"
      >
        <View className="mb-5 mt-4">
          <Text className="text-3xl font-bold text-gray-900">
            Transactions
          </Text>

          <Text className="mt-1 text-sm text-gray-500">
            View and filter your transactions
          </Text>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="mb-5"
        >
          {filters.map((filter) => {
            const isSelected = selectedFilter === filter;

            return (
              <Pressable
                key={filter}
                onPress={() => setSelectedFilter(filter)}
                className={`mr-2 rounded-full px-5 py-3 ${
                  isSelected ? "bg-blue-600" : "bg-white"
                }`}
              >
                <Text
                  className={`font-semibold ${
                    isSelected ? "text-white" : "text-gray-600"
                  }`}
                >
                  {filter}
                </Text>
              </Pressable>
            );
          })}
        </ScrollView>

        <View className="mb-4 flex-row items-center justify-between">
          <Text className="text-lg font-bold text-gray-900">
            {selectedFilter === "All"
              ? "All Transactions"
              : `${selectedFilter} Transactions`}
          </Text>

          <Text className="text-sm text-gray-500">
            {filteredTransactions.length} entries
          </Text>
        </View>

        {filteredTransactions.length > 0 ? (
          filteredTransactions.map((transaction) => (
            <TransactionCard
              key={transaction.id}
              transaction={transaction}
            />
          ))
        ) : (
          <View className="mt-16 items-center rounded-3xl bg-white px-6 py-10">
            <Text className="mb-3 text-5xl">🧾</Text>

            <Text className="text-xl font-bold text-gray-900">
              No transactions found
            </Text>

            <Text className="mt-2 text-center text-sm leading-5 text-gray-500">
              There are no transactions in the {selectedFilter} category yet.
            </Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
}