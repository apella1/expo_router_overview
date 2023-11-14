import { View, Text, Button } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function HomePage() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <StatusBar style="light" />
      <Text>Home Page</Text>
      <Link href="/register/" asChild>
        <Button title="Register Now" />
      </Link>
      <Link href="/one" asChild>
        <Button title="Tab One" />
      </Link>
      <Link href="/two" asChild>
        <Button title="Tab Two" />
      </Link>
    </View>
  );
}
