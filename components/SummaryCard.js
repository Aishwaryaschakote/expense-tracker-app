import { View, Text } from "react-native";

export default function SummaryCard({ title, amount, icon, color }) {
  return (
    <View className="flex-1 rounded-2xl bg-white p-4 shadow-sm">
      <View className="mb-3 h-10 w-10 items-center justify-center rounded-xl bg-gray-100">
        <Text className="text-lg">{icon}</Text>
      </View>

      <Text className="text-sm text-gray-500">{title}</Text>

      <Text className={`mt-1 text-lg font-bold ${color}`}>
        ₹{amount.toLocaleString("en-IN")}
      </Text>
    </View>
  );
}