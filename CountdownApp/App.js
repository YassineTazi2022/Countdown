import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import Card from "./components/Card";
import Countdown from "./components/Countdown";
import CardStats from "./components/CardStats";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.instructionText}>
        It's simple, to win the following prizes, all you need is to:
      </Text>
      <View style={styles.cardContainer}>
        <Card
          title="Find Products"
          iconUrl="https://i.ibb.co/vzH2MQ6/image.png"
        />
        <Card
          title="Take Photos"
          iconUrl="https://i.ibb.co/SyDkBWK/camera.png"
          bgColor="#FBBD5E"
        />
        <Card
          title="Earn Tickets"
          iconUrl="https://i.ibb.co/3m9WBW8/ticket-White.png"
          bgColor="#38CA9E"
        />
      </View>
      <Countdown />
      <View style={styles.cardContainer}>
        <CardStats
          stat="6"
          statColor="#27AE60"
          title="Scans Today"
          subtitle="View Scans"
        />
        <CardStats
          stat="+12"
       
          title="Tickets Earned"
          subtitle="View Entries"
        />
        <CardStats
          stat="124"
          title="Total Tickets"
          subtitle="View Entries"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingLeft: 25,
    height: "100%",
    flexDirection: "column",
    backgroundColor: "#F8F7F3",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  instructionText: {
    marginBottom: 10,
    marginTop: 10,
  },
  cardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
    margin: 0,
    padding: 0,
  },
});
