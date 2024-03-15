import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

export default function Dashboard() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ImageBackground
        source={require("@/assets/background.jpg")}
        style={styles.background}>
        <Text style={styles.title}>Dashboard</Text>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Lease Details</Text>
          <Text style={styles.cardText}>Start Date: January 1, 2024</Text>
          <Text style={styles.cardText}>End Date: December 31, 2024</Text>
          <Text style={styles.cardText}>Rent Amount: $1000/month</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Payment History</Text>
          <Text style={styles.cardText}>January 2024: Paid</Text>
          <Text style={styles.cardText}>February 2024: Paid</Text>
          <Text style={styles.cardText}>March 2024: Pending</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Maintenance Requests</Text>
          <Text style={styles.cardText}>No active requests</Text>
        </View>
        {/* Add more cards for additional features */}
      </ImageBackground>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#f9f9f9", // Light gray background
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#fff", // White
    textAlign: "center",
    textTransform: "uppercase",
  },
  card: {
    backgroundColor: "#fff", // White
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333", // Dark gray
  },
  cardText: {
    fontSize: 16,
    color: "#555", // Medium gray
    marginBottom: 5,
  },
});
