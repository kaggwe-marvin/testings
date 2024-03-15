import "react-native-gesture-handler";

import React from "react";
import { Drawer } from "expo-router/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import CustomDrawerContent from "@/components/CustomDrawerContent";
import { Role, useAuth } from "@/context/AuthContext";

const DrawerLayout = () => {
  const { authState } = useAuth();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer drawerContent={CustomDrawerContent}>
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: "Dashboard",
            headerTitle: "Dashboard",
            drawerIcon: ({ size, color }) => (
              <Ionicons name="stats-chart-outline" size={size} color={color} />
            ),
          }}
        />

        <Drawer.Screen
          name="payments"
          redirect={authState?.role != Role.USER}
          options={{
            drawerLabel: "Payments",
            headerTitle: "Payments",
            drawerIcon: ({ size, color }) => (
              <Ionicons name="wallet-outline" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="analytics"
          redirect={authState?.role != Role.ADMIN}
          options={{
            drawerLabel: "Analytics",
            headerTitle: "Reports",
            drawerIcon: ({ size, color }) => (
              <Ionicons name="cog-outline" size={size} color={color} />
            ),
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
};

export default DrawerLayout;
