import { View, Text, ScrollView, Pressable } from "react-native";
import { transactions } from "../data/mockData";
import SummaryCard from "../components/SummaryCard";
import TransactionCard from "../components/TransactionCard";

export default function HomeScreen({ navigation }) {
  const income = transactions
    .filter((item) => item.type === "income")
    .reduce((total, item) => total + item.amount, 0);

  const expenses = transactions
    .filter((item) => item.type === "expense")
    .reduce((total, item) => total + item.amount, 0);

  const balance = income - expenses;

  const recentTransactions = transactions.slice(0, 5);

  return (
    <View className="flex-1 bg-gray-50">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName="px-5 pb-28"
      >
        <View className="mb-6 mt-4">
          <Text className="text-sm font-medium text-gray-500">
            Good evening 👋
          </Text>

          <Text className="mt-1 text-3xl font-bold text-gray-900">
            Expense Tracker
          </Text>
        </View>

        <View className="mb-5 rounded-3xl bg-blue-600 p-5">
          <Text className="text-sm text-blue-100">
            Total Balance
          </Text>

          <Text className="mt-2 text-3xl font-bold text-white">
            ₹{balance.toLocaleString("en-IN")}
          </Text>

          <View className="mt-6 flex-row">
            <View className="flex-1">
              <Text className="text-xs text-blue-100">
                Total Income
              </Text>

              <Text className="mt-1 text-lg font-bold text-white">
                ₹{income.toLocaleString("en-IN")}
              </Text>
            </View>

            <View className="flex-1">
              <Text className="text-xs text-blue-100">
                Total Expenses
              </Text>

              <Text className="mt-1 text-lg font-bold text-white">
                ₹{expenses.toLocaleString("en-IN")}
              </Text>
            </View>
          </View>
        </View>

        <View className="mb-5 flex-row gap-3">
          <SummaryCard
            title="Income"
            amount={income}
            icon="↗"
            color="text-emerald-600"
          />

          <SummaryCard
            title="Expenses"
            amount={expenses}
            icon="↘"
            color="text-red-500"
          />
        </View>

        <View className="mb-4 flex-row items-center justify-between">
          <Text className="text-xl font-bold text-gray-900">
            Recent Transactions
          </Text>

          <Pressable
            onPress={() => navigation.navigate("Transactions")}
          >
            <Text className="font-semibold text-blue-600">
              See all
            </Text>
          </Pressable>
        </View>

        {recentTransactions.map((transaction) => (
          <TransactionCard
            key={transaction.id}
            transaction={transaction}
          />
        ))}
      </ScrollView>

      <Pressable
        onPress={() => navigation.navigate("AddTransaction")}
        className="absolute bottom-5 right-5 h-14 w-14 items-center justify-center rounded-full bg-blue-600 shadow-lg"
      >
        <Text className="text-3xl font-light text-white">+</Text>
      </Pressable>
    </View>
  );
}