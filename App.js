import "./global.css";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "./screens/HomeScreen";
import TransactionsScreen from "./screens/TransactionsScreen";
import AddTransactionScreen from "./screens/AddTransactionScreen";
import CategorySummaryScreen from "./screens/CategorySummaryScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: true,
        headerTitleAlign: "left",
        headerTitleStyle: {
          fontSize: 22,
          fontWeight: "700",
        },

        tabBarActiveTintColor: "#2563EB",
        tabBarInactiveTintColor: "#9CA3AF",

        tabBarStyle: {
          height: 72,
          paddingTop: 8,
          paddingBottom: 10,
          borderTopWidth: 1,
          borderTopColor: "#E5E7EB",
          backgroundColor: "#FFFFFF",
        },

        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
        },

        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Transactions") {
            iconName = focused ? "receipt" : "receipt-outline";
          } else if (route.name === "Categories") {
            iconName = focused ? "pie-chart" : "pie-chart-outline";
          }

          return (
            <Ionicons
              name={iconName}
              size={focused ? 25 : 23}
              color={color}
            />
          );
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Transactions" component={TransactionsScreen} />
      <Tab.Screen name="Categories" component={CategorySummaryScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: "left",
          headerBackTitleVisible: false,
          headerTitleStyle: {
            fontSize: 22,
            fontWeight: "700",
          },
        }}
      >
        <Stack.Screen
          name="Main"
          component={MainTabs}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="AddTransaction"
          component={AddTransactionScreen}
          options={{
            title: "Add Transaction",
            headerBackTitle: "",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}