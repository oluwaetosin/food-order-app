import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-web";
import HeaderTab from "../components/Header-Tab";
import SearchBar from "../components/SearchBar";

export default function Home() {
  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "#fff", padding: 15 }}>
        <HeaderTab />
        <SearchBar />
      </View>
    </SafeAreaView>
  );
}
