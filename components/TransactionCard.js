import { View, Text } from "react-native";

const categoryIcons = {
  Food: "🛒",
  Travel: "🚕",
  Bills: "💡",
  Income: "💰",
};

export default function TransactionCard({ transaction }) {
  const isIncome = transaction.type === "income";

  return (
    <View className="mb-3 flex-row items-center rounded-2xl bg-white p-4">
      <View className="h-11 w-11 items-center justify-center rounded-xl bg-gray-100">
        <Text className="text-xl">
          {categoryIcons[transaction.category] || "💳"}
        </Text>
      </View>

      <View className="ml-3 flex-1">
        <Text
          numberOfLines={1}
          className="font-semibold text-gray-900"
        >
          {transaction.title}
        </Text>

        <Text className="mt-1 text-xs text-gray-500">
          {transaction.category} • {transaction.date}
        </Text>
      </View>

      <Text
        className={`font-bold ${
          isIncome ? "text-emerald-600" : "text-gray-900"
        }`}
      >
        {isIncome ? "+" : "-"}₹
        {transaction.amount.toLocaleString("en-IN")}
      </Text>
    </View>
  );
}