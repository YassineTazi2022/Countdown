import { StyleSheet, Text, View, Image } from "react-native";
import { useState, useEffect } from "react";
import CountDown from 'react-native-countdown-component';
import { LinearGradient } from 'expo-linear-gradient';

export default function Countdown() {
  const [imageError, setImageError] = useState(false);
  const [targetDate, setTargetDate] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [displayDate, setDisplayDate] = useState({ day: '', month: '', time: '' });

  const fetchDate = async () => {
    try {
      const response = await fetch('https://api.mockfly.dev/mocks/00ed5a35-ebcb-44eb-99c6-b871b508de09/date');
      const data = await response.json();
      
      if (data && data.dates && data.dates.length > 0) {
        const earliestDate = new Date(Math.min(...data.dates.map(date => new Date(date))));
        const now = new Date();
        const diffInSeconds = Math.floor((earliestDate - now) / 1000);
        
        // Format date components
        setDisplayDate({
          day: earliestDate.getDate(),
          month: earliestDate.toLocaleString('default', { month: 'long' }),
          time: earliestDate.toLocaleTimeString('default', { 
            hour: '2-digit', 
            minute: '2-digit',
            hour12: false
          })
        });
        
        setTargetDate(diffInSeconds > 0 ? diffInSeconds : 0);
      }
    } catch (error) {
      console.error('Error fetching dates:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchDate();
  }, []);

  if (isLoading) return null;
  if (!targetDate) return null;

  return (
    <LinearGradient
      colors={['rgba(253,244,174,1)', 'rgba(255,193,95,1)']}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
    >
<View style={styles.dateContainer}>
  <Text style={styles.dayText}>{displayDate.day}</Text>
  <Text style={styles.monthText}>{displayDate.month}</Text>
  <Text style={styles.timeText}>{displayDate.time}</Text>
</View>
      <View style={styles.countdownContainer}>
        <Text style={styles.title}>Next Draw</Text>
        <CountDown
          style={styles.countdown}
          until={targetDate}
          onFinish={() => alert('finished')}
          onPress={() => alert('hello')}
          timeToShow={['D', 'H', 'M', 'S']}
          timeLabels={{d: 'Days', h: 'Hours', m: 'Minutes', s: 'Seconds'}}
          digitStyle={{
            width: 40,
            height: 'auto',
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