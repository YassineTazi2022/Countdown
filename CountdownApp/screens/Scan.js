import { StatusBar } from "expo-status-bar";
import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import Header from "../components/Header";
import Card from "../components/Card";
import Countdown from "../components/Countdown";
import CardStats from "../components/CardStats";
import Voucher from "../components/Voucher Card";
import ScanButton from "../components/ScanButton";
import SecondaryButton from "../components/SecondaryButton";


export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView
        style={{ width: "100%", height: "100%", padding: 0, margin: 0 }}
      >
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
          <CardStats stat="124" title="Total Tickets" subtitle="View Entries" />
        </View>
        <View style={styles.cardContainer}>
          <Voucher
            amount="1,000"
            logoUrl="https://cdn.prod.website-files.com/653099a9afaa8e05321cf221/65c50e320b747f713932ffb2_Cover-Welbees-Supermarket-Branding.webp"
            medalUrl="https://i.ibb.co/LCZmcrx/image.png"
            color="#3CC8A0"
          />
          <Voucher
            amount="100"
            logoUrl="https://www.zhetainternational.com/greens100.jpg"
            medalUrl="https://i.ibb.co/XpLWZk8/image.png"
            color="#40403E"
          />
          <Voucher
            amount="50"
            logoUrl="https://josannecassar.com/wp-content/uploads/2016/11/PAVIPAMA-CMYK.jpg"
            medalUrl="https://i.ibb.co/t8pGRZk/image.png"
            color="#FF7C5D"
          />
        </View>
        <ScanButton />
        <Text>Know anyone Interested?</Text>
        <Text>
          For every new registration, both yourself & your friend win 1 free
          ticket.
        </Text>
        <SecondaryButton/>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
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
