import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";

const categories = [
  { name: "Food", icon: "🛒" },
  { name: "Travel", icon: "🚕" },
  { name: "Bills", icon: "💡" },
  { name: "Income", icon: "💰" },
];

export default function AddTransactionScreen({ navigation }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");
  const [date, setDate] = useState("21 Aug 2026");
  const [type, setType] = useState("expense");
  const [error, setError] = useState("");

  const handleSave = () => {
    if (!title.trim()) {
      setError("Please enter a transaction title.");
      return;
    }

    if (!amount.trim()) {
      setError("Please enter an amount.");
      return;
    }

    if (Number(amount) <= 0) {
      setError("Amount must be greater than zero.");
      return;
    }

    if (!date.trim()) {
      setError("Please enter a date.");
      return;
    }

    setError("");

    Alert.alert(
      "Transaction Added",
      `${title} has been added successfully.`,
      [
        {
          text: "OK",
          onPress: () => navigation.goBack(),
        },
      ]
    );
  };

  return (
    <KeyboardAvoidingView
      className="flex-1 bg-gray-50"
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        className="flex-1"
        contentContainerStyle={{ padding: 24, paddingBottom: 40 }}
        keyboardShouldPersistTaps="handled"
      >
        {/* Header */}
        <Text className="text-3xl font-bold text-gray-900">
          Add Transaction
        </Text>

        <Text className="mt-2 text-base text-gray-500">
          Record your income or expense
        </Text>

        {/* Type */}
        <Text className="mt-7 mb-3 text-base font-semibold text-gray-900">
          Transaction Type
        </Text>

        <View className="flex-row gap-3">
          <Pressable
            onPress={() => setType("expense")}
            className={`flex-1 rounded-2xl py-4 items-center ${
              type === "expense" ? "bg-red-500" : "bg-white"
            }`}
          >
            <Text
              className={`font-semibold ${
                type === "expense" ? "text-white" : "text-gray-700"
              }`}
            >
              Expense
            </Text>
          </Pressable>

          <Pressable
            onPress={() => setType("income")}
            className={`flex-1 rounded-2xl py-4 items-center ${
              type === "income" ? "bg-green-600" : "bg-white"
            }`}
          >
            <Text
              className={`font-semibold ${
                type === "income" ? "text-white" : "text-gray-700"
              }`}
            >
              Income
            </Text>
          </Pressable>
        </View>

        {/* Title */}
        <Text className="mt-6 mb-2 text-base font-semibold text-gray-900">
          Title
        </Text>

        <TextInput
          value={title}
          onChangeText={(value) => {
            setTitle(value);
            setError("");
          }}
          placeholder="e.g. Grocery Shopping"
          placeholderTextColor="#9CA3AF"
          className="rounded-2xl bg-white px-4 py-4 text-base text-gray-900"
        />

        {/* Amount */}
        <Text className="mt-5 mb-2 text-base font-semibold text-gray-900">
          Amount
        </Text>

        <View className="flex-row items-center rounded-2xl bg-white px-4">
          <Text className="text-xl font-semibold text-gray-700">₹</Text>

          <TextInput
            value={amount}
            onChangeText={(value) => {
              setAmount(value.replace(/[^0-9.]/g, ""));
              setError("");
            }}
            placeholder="0.00"
            placeholderTextColor="#9CA3AF"
            keyboardType="decimal-pad"
            className="flex-1 px-3 py-4 text-base text-gray-900"
          />
        </View>

        {/* Category */}
        <Text className="mt-5 mb-3 text-base font-semibold text-gray-900">
          Category
        </Text>

        <View className="flex-row flex-wrap gap-3">
          {categories.map((item) => (
            <Pressable
              key={item.name}
              onPress={() => setCategory(item.name)}
              className={`w-[47%] rounded-2xl px-4 py-4 ${
                category === item.name ? "bg-blue-600" : "bg-white"
              }`}
            >
              <Text className="text-2xl">{item.icon}</Text>

              <Text
                className={`mt-2 font-semibold ${
                  category === item.name
                    ? "text-white"
                    : "text-gray-700"
                }`}
              >
                {item.name}
              </Text>
            </Pressable>
          ))}
        </View>

        {/* Date */}
        <Text className="mt-5 mb-2 text-base font-semibold text-gray-900">
          Date
        </Text>

        <TextInput
          value={date}
          onChangeText={(value) => {
            setDate(value);
            setError("");
          }}
          placeholder="e.g. 21 Aug 2026"
          placeholderTextColor="#9CA3AF"
          className="rounded-2xl bg-white px-4 py-4 text-base text-gray-900"
        />

        {/* Error */}
        {error ? (
          <View className="mt-4 rounded-xl bg-red-50 px-4 py-3">
            <Text className="text-sm font-medium text-red-600">
              {error}
            </Text>
          </View>
        ) : null}

        {/* Save */}
        <Pressable
          onPress={handleSave}
          className="mt-7 items-center rounded-2xl bg-blue-600 py-4"
        >
          <Text className="text-lg font-bold text-white">
            Save Transaction
          </Text>
        </Pressable>

        {/* Cancel */}
        <Pressable
          onPress={() => navigation.goBack()}
          className="mt-3 items-center py-3"
        >
          <Text className="font-semibold text-gray-500">
            Cancel
          </Text>
        </Pressable>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}