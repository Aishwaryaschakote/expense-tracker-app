import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Ionicons } from "@expo/vector-icons";
import { addTransaction } from "../data/mockData";

const expenseCategories = [
  { name: "Food", icon: "🛒" },
  { name: "Travel", icon: "🚕" },
  { name: "Bills", icon: "💡" },
];

export default function AddTransactionScreen({ navigation }) {
  const [type, setType] = useState("Expense");
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [errors, setErrors] = useState({});

  const formatDate = (value) => {
    return value.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  const handleTypeChange = (newType) => {
    setType(newType);

    if (newType === "Income") {
      setCategory("Income");
    } else {
      setCategory("Food");
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!title.trim()) {
      newErrors.title = "Please enter a transaction title";
    }

    if (!amount.trim()) {
      newErrors.amount = "Please enter an amount";
    } else if (
      isNaN(Number(amount)) ||
      Number(amount) <= 0
    ) {
      newErrors.amount = "Enter a valid amount greater than 0";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSave = () => {
    if (!validate()) {
      return;
    }

    const newTransaction = {
      id: Date.now().toString(),
      title: title.trim(),
      category: type === "Income" ? "Income" : category,
      amount: Number(amount),
      type: type === "Income" ? "income" : "expense",
      date: formatDate(date),
    };

    addTransaction(newTransaction);

    navigation.goBack();
  };

  const handleAmountChange = (value) => {
    const cleaned = value.replace(/[^0-9.]/g, "");
    const parts = cleaned.split(".");

    if (parts.length > 2) {
      return;
    }

    setAmount(cleaned);

    if (errors.amount) {
      setErrors((previous) => ({
        ...previous,
        amount: undefined,
      }));
    }
  };

  const handleTitleChange = (value) => {
    setTitle(value);

    if (errors.title) {
      setErrors((previous) => ({
        ...previous,
        title: undefined,
      }));
    }
  };

  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(false);

    if (selectedDate) {
      setDate(selectedDate);
    }
  };

  return (
    <KeyboardAvoidingView
      className="flex-1 bg-gray-50"
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView
        className="flex-1"
        contentContainerClassName="px-5 pt-6 pb-10"
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View className="mb-7">
          <Text className="text-3xl font-bold text-gray-900">
            Add Transaction
          </Text>

          <Text className="mt-2 text-base text-gray-500">
            Add your income or expense
          </Text>
        </View>

        <Text className="mb-3 text-lg font-semibold text-gray-800">
          Transaction Type
        </Text>

        <View className="mb-7 flex-row rounded-3xl bg-white p-1.5">
          <Pressable
            onPress={() => handleTypeChange("Expense")}
            className={`flex-1 items-center rounded-2xl py-4 ${
              type === "Expense"
                ? "bg-blue-600"
                : "bg-white"
            }`}
          >
            <Text
              className={`text-base font-bold ${
                type === "Expense"
                  ? "text-white"
                  : "text-gray-600"
              }`}
            >
              Expense
            </Text>
          </Pressable>

          <Pressable
            onPress={() => handleTypeChange("Income")}
            className={`flex-1 items-center rounded-2xl py-4 ${
              type === "Income"
                ? "bg-blue-600"
                : "bg-white"
            }`}
          >
            <Text
              className={`text-base font-bold ${
                type === "Income"
                  ? "text-white"
                  : "text-gray-600"
              }`}
            >
              Income
            </Text>
          </Pressable>
        </View>

        <Text className="mb-3 text-lg font-semibold text-gray-800">
          Title
        </Text>

        <View
          className={`mb-2 flex-row items-center rounded-2xl border bg-white px-4 ${
            errors.title
              ? "border-red-400"
              : "border-gray-200"
          }`}
        >
          <Ionicons
            name="create-outline"
            size={21}
            color="#9CA3AF"
          />

          <TextInput
            value={title}
            onChangeText={handleTitleChange}
            placeholder="e.g. Grocery Shopping"
            placeholderTextColor="#9CA3AF"
            className="ml-3 flex-1 py-4 text-base text-gray-900"
            maxLength={60}
          />
        </View>

        {errors.title && (
          <Text className="mb-5 ml-1 text-sm text-red-500">
            {errors.title}
          </Text>
        )}

        {!errors.title && <View className="mb-5" />}

        <Text className="mb-3 text-lg font-semibold text-gray-800">
          Amount
        </Text>

        <View
          className={`mb-2 flex-row items-center rounded-2xl border bg-white px-4 ${
            errors.amount
              ? "border-red-400"
              : "border-gray-200"
          }`}
        >
          <Text className="text-xl font-semibold text-gray-700">
            ₹
          </Text>

          <TextInput
            value={amount}
            onChangeText={handleAmountChange}
            placeholder="0"
            placeholderTextColor="#9CA3AF"
            keyboardType="decimal-pad"
            className="ml-3 flex-1 py-4 text-base text-gray-900"
          />
        </View>

        {errors.amount && (
          <Text className="mb-5 ml-1 text-sm text-red-500">
            {errors.amount}
          </Text>
        )}

        {!errors.amount && <View className="mb-5" />}

        {type === "Expense" && (
          <>
            <Text className="mb-3 text-lg font-semibold text-gray-800">
              Category
            </Text>

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              className="mb-7"
            >
              {expenseCategories.map((item) => {
                const selected = category === item.name;

                return (
                  <Pressable
                    key={item.name}
                    onPress={() => setCategory(item.name)}
                    className={`mr-3 flex-row items-center rounded-2xl border px-5 py-4 ${
                      selected
                        ? "border-blue-600 bg-blue-600"
                        : "border-gray-200 bg-white"
                    }`}
                  >
                    <Text className="text-xl">
                      {item.icon}
                    </Text>

                    <Text
                      className={`ml-2 text-base font-semibold ${
                        selected
                          ? "text-white"
                          : "text-gray-700"
                      }`}
                    >
                      {item.name}
                    </Text>
                  </Pressable>
                );
              })}
            </ScrollView>
          </>
        )}

        {type === "Income" && (
          <View className="mb-7 rounded-2xl border border-blue-100 bg-blue-50 p-4">
            <View className="flex-row items-center">
              <View className="h-10 w-10 items-center justify-center rounded-xl bg-white">
                <Ionicons
                  name="arrow-up-circle"
                  size={24}
                  color="#2563EB"
                />
              </View>

              <View className="ml-3">
                <Text className="font-semibold text-gray-900">
                  Income
                </Text>

                <Text className="mt-1 text-xs text-gray-500">
                  This transaction will be added as income
                </Text>
              </View>
            </View>
          </View>
        )}

        <Text className="mb-3 text-lg font-semibold text-gray-800">
          Date
        </Text>

        <Pressable
          onPress={() => setShowDatePicker(true)}
          className="mb-7 flex-row items-center rounded-2xl border border-gray-200 bg-white px-4 py-4"
        >
          <Ionicons
            name="calendar-outline"
            size={22}
            color="#2563EB"
          />

          <View className="ml-3 flex-1">
            <Text className="text-base font-medium text-gray-800">
              {formatDate(date)}
            </Text>

            <Text className="mt-1 text-xs text-gray-400">
              Tap to choose a date
            </Text>
          </View>

          <Ionicons
            name="chevron-forward"
            size={20}
            color="#9CA3AF"
          />
        </Pressable>

        {showDatePicker && (
          <DateTimePicker
            value={date}
            mode="date"
            display={
              Platform.OS === "ios"
                ? "spinner"
                : "default"
            }
            maximumDate={new Date()}
            onChange={handleDateChange}
          />
        )}

        <Pressable
          onPress={handleSave}
          className="mb-3 items-center rounded-2xl bg-blue-600 py-5"
        >
          <Text className="text-lg font-bold text-white">
            Save Transaction
          </Text>
        </Pressable>

        <Pressable
          onPress={() => navigation.goBack()}
          className="items-center rounded-2xl bg-gray-200 py-5"
        >
          <Text className="text-lg font-semibold text-gray-700">
            Cancel
          </Text>
        </Pressable>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}