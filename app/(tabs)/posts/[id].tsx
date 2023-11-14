import { View, Text } from "react-native";
import React from "react";
import { Stack, useLocalSearchParams } from "expo-router";

export default function SinglePost() {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Stack.Screen options={{ headerTitle: `Post ${id}` }} />
      <Text>Post {id}</Text>
    </View>
  );
}
