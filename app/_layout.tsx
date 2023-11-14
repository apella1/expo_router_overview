import { Stack, useRouter } from "expo-router";
import React from "react";
import { Button } from "react-native";

export default function Layout() {
  const router = useRouter();
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "blue" },
        headerTintColor: "white",
      }}
    >
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="register/index"
        options={{
          title: "Register",
          headerRight: () => (
            <Button title="Login" onPress={() => router.push("/login")} />
          ),
        }}
      />
      <Stack.Screen
        name="login"
        options={{ title: "Login Modal", presentation: "modal" }}
      />
      <Stack.Screen
        name="[missing]"
        options={{ title: "404 Page Not Found" }}
      />
    </Stack>
  );
}
