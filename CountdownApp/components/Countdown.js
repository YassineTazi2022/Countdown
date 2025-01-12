import { StyleSheet, Text, View, Image } from "react-native";
import { useState } from "react";
import CountDown from 'react-native-countdown-component';
import { LinearGradient } from 'expo-linear-gradient';

export default function Countdown() {
  const [imageError, setImageError] = useState(false);

  return (
    <LinearGradient
      colors={['rgba(253,244,174,1)', 'rgba(255,193,95,1)']}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
    >
      <View style={styles.dateContainer}>
        <Text style={styles.dayText}>30</Text>
        <Text style={styles.monthText}>March</Text>
        <Text style={styles.timeText}>20:00</Text>
      </View>
      <View style={styles.countdownContainer}>
        <Text style={styles.title}>Next Draw</Text>
        <CountDown
          style={styles.countdown}
          until={10000}
          onFinish={() => alert('finished')}
          onPress={() => alert('hello')}
          digitStyle={{

            width:40,
            height:'auto',
          }}
          digitTxtStyle={{
            color: '#000',
            fontSize: 30,
            fontWeight: '900',
            

          }}
          separatorStyle={{
            color: '#000',
            fontSize: 30,
            marginBottom: 25,
            fontWeight: '900',
            
          }}
          timeLabelStyle={{
            color: '#000',
            fontSize: 13,
            paddingTop: 0,
            fontWeight: '500',
            textAlign:'center',
          }}
          showSeparator
          size={25}
        />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    borderRadius: 5,
    height: 120,
    width: '99%',
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'flex-start',
    marginTop: 10,
    borderColor: '#f1f1f1',
    borderWidth: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.00,
    elevation: 1,
  },
  countdownContainer: {
    height: '100%',
    width:'auto',
    flexDirection: 'column',
    justifyContent: "center",
    alignItems: "flex-start",
    margin: 0,
    padding: 0,
  },
  dateContainer: {
    height: 100,
    width: 100,
    borderRadius: 10,
    flexDirection: 'column',
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
    marginLeft: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: 'white',
    padding: 8,
  },
  dayText: {
    fontSize: 32,
    fontWeight: '700',
    lineHeight: 32,
    marginBottom: 4,
  },
  monthText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#666',
    marginBottom: 4,
  },
  timeText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  title: {
    fontSize: 25,
    fontWeight: "600",
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginBottom: 5,
  },
  countdown: {
    margin:0,
    padding:0,

  }
});