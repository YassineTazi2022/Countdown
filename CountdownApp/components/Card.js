import { StyleSheet, Text, View, Image } from "react-native";
import { useState } from "react";

export default function Card({ title, iconUrl, bgColor = "#FFF" }) {
  const [imageError, setImageError] = useState(false);

  return (
    <View style={styles.container}>
      <View style={[styles.iconContainer, { backgroundColor: bgColor }]}>
        <Image
          style={styles.icon}
          source={{
            uri: iconUrl
          }}
          onError={() => {
            console.log('Image failed to load:', iconUrl);
            setImageError(true);
          }}
        />
      </View>
      {imageError && <Text style={styles.errorText}>Image failed to load</Text>}
      <Text style={styles.title}>{title}</Text>
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
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  icon: {
    width: 25,
    height: 25,
    resizeMode: "contain",
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginBottom: 5,
  }
});