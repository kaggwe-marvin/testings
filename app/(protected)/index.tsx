import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
  Button,
} from "react-native";
import WitthRole from "@/components/WitthRole";
import { Role } from "@/context/AuthContext";
import { Ionicons } from "@expo/vector-icons";

export default function Dashboard() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <WitthRole role={Role.USER}>
        <View style={styles.propertyDetails}>
          <View style={styles.section}>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Property Details</Text>
              <Text style={styles.sectionDescription}>
                View details about your rental property.
              </Text>
            </View>
            <View style={styles.gridCols2}>
              <View style={styles.propertyDetail}>
                <Text style={styles.formLabel}>Address</Text>
                <Text>5678 Elm St, Apt 32, Springfield, IL, 62701</Text>
              </View>
              <View style={styles.propertyDetail}>
                <Text style={styles.formLabel}>Type</Text>
                <Text>Apartment</Text>
              </View>
              <View style={styles.propertyDetail}>
                <Text style={styles.formLabel}>Amenities</Text>
                <Text>Swimming Pool, Gym, Parking</Text>
              </View>
            </View>
          </View>
          <View style={styles.section}>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Lease Information</Text>
              <Text style={styles.sectionDescription}>
                View details about your lease.
              </Text>
            </View>
            <View style={styles.gridCols2}>
              <View style={styles.propertyDetail}>
                <Text style={styles.formLabel}>Start Date</Text>
                <Text>May 15, 2023</Text>
              </View>
              <View style={styles.propertyDetail}>
                <Text style={styles.formLabel}>End Date</Text>
                <Text>May 14, 2024</Text>
              </View>
              <View style={styles.propertyDetail}>
                <Text style={styles.formLabel}>Monthly Rent</Text>
                <Text>$1,200.00</Text>
              </View>
              <View style={styles.propertyDetail}>
                <Text style={styles.formLabel}>Deposit</Text>
                <Text>$1,200.00</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Payment History</Text>
          <Text style={styles.sectionDescription}>
            View your payment history.
          </Text>
          <View style={styles.paymentCard}>
            <View style={styles.paymentRow}>
              <Text>May 2023</Text>
              <Text>$1,200.00</Text>
            </View>
            <View style={styles.paymentRow}>
              <Text>June 2023</Text>
              <Text>$1,200.00</Text>
            </View>
            <View style={styles.paymentRow}>
              <Text>July 2023</Text>
              <Text>$1,200.00</Text>
            </View>
            <View style={styles.paymentRow}>
              <Text>August 2023</Text>
              <Text>$1,200.00</Text>
            </View>
            <View style={styles.paymentRow}>
              <Text>September 2023</Text>
              <Text>Pending</Text>
            </View>
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Maintenance Requests</Text>
          <Text style={styles.sectionDescription}>
            Submit and track maintenance requests.
          </Text>
          <View style={styles.maintenanceCard}>
            <View style={styles.maintenanceRow}>
              <View>
                <Text style={styles.formLabel}>Water Leak</Text>
                <Text>Submitted: May 10, 2023</Text>
              </View>
              <TouchableOpacity>
                <Text>View</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Profile</Text>
          <Text style={styles.sectionDescription}>
            Update your contact information.
          </Text>
          <View style={styles.gridCols2}>
            <View style={styles.propertyDetail}>
              <Text style={styles.formLabel}>Full Name</Text>
              <Text>Alice Johnson</Text>
            </View>
            <View style={styles.propertyDetail}>
              <Text style={styles.formLabel}>Email</Text>
              <Text>email@example.com</Text>
            </View>
            <View style={styles.propertyDetail}>
              <Text style={styles.formLabel}>Phone</Text>
              <Text>(555) 123-4567</Text>
            </View>
            <View style={styles.propertyDetail}>
              <Text style={styles.formLabel}>Date of Birth</Text>
              <Text>January 1, 1990</Text>
            </View>
            <View style={styles.propertyDetail}>
              <Text style={styles.formLabel}>Address</Text>
              <Text>5678 Elm St, Apt 32, Springfield, IL, 62701</Text>
            </View>
          </View>
        </View>
      </WitthRole>

      <WitthRole role={Role.ADMIN}>
        <View style={styles.header}>
          <Text style={styles.title1}>Tenants</Text>
          <View style={styles.filterContainer}>
            <Text style={styles.filter}>All Tenants</Text>
            <Text style={styles.filter}>Lease Ending Soon</Text>
            <Text style={styles.filter}>Overdue Payments</Text>
          </View>
        </View>
        <View style={styles.tenantsContainer}>
          <View style={styles.tenantCard}>
            <Image
              source={require("@/assets/background.jpg")}
              style={styles.tenantImage}
            />
            <View style={styles.tenantDetails}>
              <Text style={styles.tenantName}>Alice Smith</Text>
              <Text style={styles.tenantEmail}>alice@example.com</Text>
            </View>
          </View>
          <View style={styles.tenantCard}>
            <Image
              source={require("@/assets/background.jpg")}
              style={styles.tenantImage}
            />
            <View style={styles.tenantDetails}>
              <Text style={styles.tenantName}>John Smith</Text>
              <Text style={styles.tenantEmail}>alice@example.com</Text>
            </View>
          </View>
          <View style={styles.tenantCard}>
            <Image
              source={require("@/assets/background.jpg")}
              style={styles.tenantImage}
            />
            <View style={styles.tenantDetails}>
              <Text style={styles.tenantName}>Jane Smith</Text>
              <Text style={styles.tenantEmail}>alice@example.com</Text>
            </View>
          </View>
        </View>
        <View style={styles.otherSections}>
          {/* Search */}
          <View style={styles.searchContainer}>
            <View style={styles.searchInputContainer}>
              <Ionicons name="search-outline" />
              <Text style={styles.searchLabel}>Search</Text>
              <TextInput
                style={styles.searchInput}
                placeholder="Search"
                placeholderTextColor="#808080"
              />
            </View>
          </View>

          {/* Lease Details */}
          <View>
            <View style={styles.cardContent}>
              <View style={styles.cardRow}>
                <View style={styles.cardLabel}>
                  <Text style={styles.labelText}>Lease Details</Text>
                </View>
                <View style={styles.cardText}>
                  <Text>Start Date: January 1, 2024</Text>
                  <Text>End Date: December 31, 2024</Text>
                  <Text>Rent Amount: $1000/month</Text>
                </View>
              </View>
            </View>
          </View>

          {/* Maintenance Requests */}
          <View>
            <View style={styles.cardContent}>
              <View style={styles.cardRow}>
                <View style={styles.cardLabel}>
                  <Text style={styles.labelText}>Maintenance Requests</Text>
                </View>
                <View style={styles.cardText}>
                  <Text>No active requests</Text>
                </View>
              </View>
            </View>
          </View>

          {/* Contact */}
          <View>
            <View style={styles.cardHeader}>
              <Text style={styles.cardHeaderText}>Contact</Text>
              <TouchableOpacity>
                <Text style={styles.editButton}>Edit</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.cardContent}>
              <View style={styles.cardRow}>
                <View style={styles.cardLabel}>
                  <Text style={styles.labelText}>Email</Text>
                </View>
                <View style={styles.cardText}>
                  <Text>alice@example.com</Text>
                </View>
              </View>
              <View style={styles.cardRow}>
                <View style={styles.cardLabel}>
                  <Text style={styles.labelText}>Phone</Text>
                </View>
                <View style={styles.cardText}>
                  <Text>+1 (123) 456-7890</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </WitthRole>
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
  container1: {
    flex: 1,
    padding: 20,
    backgroundColor: "#ffffff",
  },
  header: {
    marginBottom: 20,
  },
  title1: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  filterContainer: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  filter: {
    marginRight: 10,
    marginBottom: 10,
    textDecorationLine: "underline",
    color: "#808080",
  },
  tenantsContainer: {
    flexDirection: "column", // Change direction to column
    alignItems: "flex-start",
    marginBottom: 10,
  },
  tenantCard: {
    width: "100%", // Take up full width of container
    marginBottom: 5,
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#cccccc",
    flexDirection: "row", // Arrange items horizontally
    alignItems: "center", // Align items vertically
  },
  tenantImage: {
    width: 50, // Adjust the width as needed
    height: 50, // Adjust the height as needed
    borderRadius: 25, // Make it a circle
    marginRight: 10, // Add margin to separate image from text
  },
  tenantDetails: {
    flex: 1, // Allow text to take up remaining space
  },
  tenantName: {
    fontSize: 16, // Adjust font size as needed
    fontWeight: "bold",
    marginBottom: 5,
  },
  tenantEmail: {
    fontSize: 14, // Adjust font size as needed
    color: "#808080",
  },
  otherSections: {
    marginBottom: 20,
  },
  searchContainer: {
    marginBottom: 20,
  },
  searchInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#cccccc",
    paddingHorizontal: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchLabel: {
    color: "#808080",
  },
  searchInput: {
    flex: 1,
  },
  cardContent: {
    padding: 20,
  },
  cardRow: {
    flexDirection: "row",
    marginBottom: 10,
  },
  cardLabel: {
    flex: 1,
  },
  labelText: {
    fontWeight: "bold",
  },
  cardText2: {
    flex: 2,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#f9f9f9",
  },
  cardHeaderText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  editButton: {
    color: "#007bff", // or any other color you prefer for edit button
  },
  grid: {
    flex: 1,
    flexDirection: "column",
    gap: 6,
  },
  propertyDetails: {
    flex: 2,
    flexDirection: "column",
    gap: 6,
  },
  section: {
    flexDirection: "column",
    gap: 4,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  sectionDescription: {
    fontSize: 14,
    fontWeight: "500",
    color: "#9CA3AF",
  },
  gridCols2: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 4,
  },
  propertyDetail: {
    flexDirection: "column",
    gap: 2,
  },
  formLabel: {
    fontSize: 14,
  },
  formInput: {
    width: "100%",
    maxWidth: "100%",
  },
  paymentHistory: {
    flexDirection: "column",
    gap: 2,
  },
  paymentCard: {
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 6,
    overflow: "hidden",
  },
  paymentRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: "#E5E7EB",
  },
  maintenanceRequests: {
    flexDirection: "column",
    gap: 4,
  },
  maintenanceCard: {
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 6,
    overflow: "hidden",
  },
  maintenanceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
  },
  profile: {
    flexDirection: "column",
    gap: 2,
  },
});
