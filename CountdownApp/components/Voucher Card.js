import { StyleSheet, Text, View, Image } from "react-native";
import { useState } from "react";

export default function Voucher({ 
  storeName, 
  amount = "1,000", 
  logoUrl,
  medalUrl,
  color = "#fff",
}) {
  const [logoError, setLogoError] = useState(false);
  const [medalError, setMedalError] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.imageSection}>
        <View style={styles.medalContainer}>
          <Image
            style={styles.medalIcon}
            source={{
              uri: medalUrl
            }}
            onError={() => {
              console.log('Medal image failed to load:', medalUrl);
              setMedalError(true);
            }}
          />
        </View>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={{
              uri: logoUrl
            }}
            onError={() => {
              console.log('Logo failed to load:', logoUrl);
              setLogoError(true);
            }}
          />
        </View>
      </View>
      
      <View style={[styles.contentContainer, { backgroundColor: color }]}>
        <View style={styles.voucherDetails}>
          <Text style={styles.amount}>€{amount}</Text>
        </View>
        <Text style={styles.voucherText}>SHOPPING VOUCHER</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginRight: 5,
    borderRadius: 12,
    height: 'auto',
    flexDirection: "column",
    alignItems: "center",
    justifyContent: 'flex-start',
    flex: 1,
    marginTop: 35,
    backgroundColor: '#fff',
    


    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.00,
    elevation: 1,
  },
  imageSection: {
    alignItems: 'center',
    margin: 0,
  },
  medalContainer: {
    width: 50,
    height: 50,
    marginBottom: -5,
    marginTop: -25,
    zIndex: 1,
  },
  medalIcon: {
    width: '100%',
    height: '100%',
    resizeMode: "cover",
  },
  logoContainer: {
    marginTop: -26,
    width: '100%',
    height: 'auto',
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  logo: {
    width: 125,
    height: 80,
    resizeMode: "cover",

    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,

  },
  contentContainer: {
   alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 15,
width: '100%',
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,

  },
  storeName: {
    fontSize: 18,
    fontWeight: "600",
    color: '#333',
    marginBottom: 5,
  },
  voucherDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  currency: {
    fontSize: 24,
    fontWeight: "700",
    color: '#333',
    marginRight: 2,
  },
  amount: {
    fontSize: 30,
    marginTop: 5,
    fontWeight: "900",
    color: '#fff',
  },
  voucherText: {
    fontSize: 10,
    color: '#fff',
    fontWeight: "500",
    letterSpacing: 0.5,
  }
});