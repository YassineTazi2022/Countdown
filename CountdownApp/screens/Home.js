import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import Header from "../components/Header";
import Card from "../components/Card";
import Countdown from "../components/Countdown";
import CardStats from "../components/CardStats";
import Voucher from "../components/Voucher Card";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Header />
       
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});