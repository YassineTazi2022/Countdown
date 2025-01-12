import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import ticket from "../assets/ticket.png";

export default function Header() {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.outerProfileContainer}>
        <Image
          style={styles.profilePic}
          source={{
            uri: "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg",
          }}
        />
        <View style={styles.innerProfileContainer}>
          <Text style={styles.headerTextBold}>Hello John!</Text>

          <Text>50+ Scans</Text>
        </View>
      </View>

      <View style={styles.outerContainer}>
        <View style={styles.innerContainer}>
          <Image style={styles.entriesIcon} source={ticket} />
          <Text style={styles.headerTextBold}>124</Text>
        </View>
        <Text style={styles.entriesText}>View Entries</Text>
      </View>
      <View style={styles.bottomLine}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    marginTop: 40,
    marginBottom:10,
    padding: 10,
    paddingLeft: 0,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  bottomLine: {
  position:'absolute',
    top:75,

    borderStyle: "solid",
    borderBottomWidth: 1,
    borderBottomColor: "#efefef",
    width:'100%',

  },
  outerContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
    margin: 0,
  },
  innerContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    padding: 0,
    margin: 0,
  },
  outerProfileContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
    margin: 0,
  },
  innerProfileContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-evenly",
    padding: 0,
    margin: 0,
  },
  profilePic: {
    width: 50,
    height: 50,
    marginRight: 15,
    borderRadius: 100,
  },
  entriesIcon: {
    width: 25,
    height: 25,
    marginRight: 0,
    backgroundColor: "#fff",
  },
  entriesText: {
    color:'orange',
  },
  headerTextBold: {
    fontWeight: "700",
    fontSize: 20,
  },
});
