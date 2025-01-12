import { StyleSheet, Text, View } from "react-native";

export default function CardStats({ title, stat, statColor = "#000", subtitle = "View Stats" }) {
  return (
    <View style={styles.container}>
      <Text style={[styles.statStyle, { color: statColor }]}>{stat}</Text>
      <Text style={styles.titleStyle}>{title}</Text>
      <Text style={styles.subtitleStyle}>{subtitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginRight: 5,
    padding: 5,
    borderRadius:5,
    height:125,
    flexDirection: "column",
    alignItems: "center",
    justifyContent:'space-evenly',
    flex:1,
    marginTop: 10,
    backgroundColor:'#fff',
    borderColor:'#f1f1f1',
    borderWidth:1,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.00,
    
    elevation: 1,
  },
  statStyle: {
    fontSize: 32,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 5,
  },
  titleStyle: {
    fontSize: 14,
    color: '#666',
    fontWeight: "500",
    textAlign: "center",
    marginBottom: 0,
  },
  subtitleStyle: {
    fontSize: 11,
    color: 'orange',
    fontWeight: "400",
    textAlign: "center",
    marginTop:-10,
  }
});