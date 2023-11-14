import { View, Text, Button } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function Register() {
  return (
    <View>
      <Text>Register Page</Text>
      <Link href="/login" asChild>
        <Button title="Open Login Modal" />
      </Link>
    </View>
  );
}
