import { View, Text, Button } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function missing() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Page Not Found</Text>
      <Link href="/" asChild>
        <Button title="Go Home" />
      </Link>
    </View>
  );
}
