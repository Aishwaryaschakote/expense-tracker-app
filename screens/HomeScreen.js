import { View, Text, Pressable } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View className="flex-1 items-center justify-center bg-gray-50 px-6">
      <Text className="mb-4 text-3xl font-bold text-gray-900">
        Dashboard
      </Text>

      <Pressable
        onPress={() => navigation.navigate("AddTransaction")}
        className="rounded-xl bg-blue-600 px-6 py-4"
      >
        <Text className="font-bold text-white">+ Add Transaction</Text>
      </Pressable>
    </View>
  );
}