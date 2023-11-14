import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function Posts() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>All Posts</Text>
      <Link href="/posts/1">open post 1</Link>
      <Link href="/posts/2">open post 2</Link>
      <Link href="/posts/three">open post three</Link>
    </View>
  );
}
