import { Tabs } from "expo-router";
import React from "react";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="one"
        options={{ headerTitle: "First Tab", tabBarLabel: "First" }}
      />
      <Tabs.Screen
        name="two"
        options={{ headerTitle: "Second Tab", tabBarLabel: "Second" }}
      />
      <Tabs.Screen
        name="posts"
        options={{ headerTitle: "Posts", tabBarLabel: "Posts", headerShown: false }}
      />
    </Tabs>
  );
}
