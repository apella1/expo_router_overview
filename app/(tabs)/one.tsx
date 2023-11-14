import { View, Text, Button } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

export default function One() {
  const router = useRouter();
  return (
    <View>
      <Text style={{ fontSize: 20 }}>This is tab one</Text>
      <Button title="Go Back" onPress={() => router.back()} />
    </View>
  );
}
