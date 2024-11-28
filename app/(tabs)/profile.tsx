import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Image
          source={require("@/assets/images/profile-image.jpg")} 
          style={styles.profileImage}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.name}>Cameron Williamson</Text>
          <Text style={styles.balance}>$ 1,000,000</Text>
        </View>
        <TouchableOpacity style={styles.settingsIcon}>
          <Ionicons name="settings-outline" size={28} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Tab Section */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.tabs}
      >
        {['Pending', 'Packaged', 'Sent', 'Review'].map((tab, index) => (
          <TouchableOpacity key={index} style={styles.tab}>
            <Text style={styles.tabText}>{tab}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Activity Section */}
      <ScrollView style={styles.activitySection}>
        <Text style={styles.sectionTitle}>My Activity</Text>
        {['Transaction History', 'Wishlist', 'Rating', 'Last Seen Product', 'My Voucher'].map((item, index) => (
          <TouchableOpacity key={index} style={styles.listItem}>
            <Text style={styles.listItemText}>{item}</Text>
            <Ionicons name="chevron-forward" size={20} color="#555" />
          </TouchableOpacity>
        ))}

        <Text style={styles.sectionTitle}>Other</Text>
        {['Chat with Customer Service', 'Help Center', 'Info', 'About App'].map((item, index) => (
          <TouchableOpacity key={index} style={styles.listItem}>
            <Text style={styles.listItemText}>{item}</Text>
            <Ionicons name="chevron-forward" size={20} color="#555" />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4a90e2',
    padding: 20,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  profileImage: {
    width: 85,
    height: 85,
    borderRadius: 42.5,
    borderWidth: 3,
    borderColor: '#fff',
  },
  profileInfo: {
    flex: 1,
    marginLeft: 18,
  },
  name: {
    fontSize: 22,
    fontWeight: '700',
    color: '#fff',
  },
  balance: {
    fontSize: 16,
    color: '#e4e4e4',
    marginTop: 5,
  },
  settingsIcon: {
    padding: 10,
    borderRadius: 30,
    backgroundColor: 'rgba(255,255,255,0.3)',
  },
  tabs: {
    flexDirection: 'row',
    marginVertical: 8,
    paddingHorizontal: 8,  
    paddingVertical: 6,    
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderRadius: 20,
    elevation: 2,
  },
  tab: {
    alignItems: 'center',
    backgroundColor: '#e6f2f8',
    paddingHorizontal: 14,  
    paddingVertical: 6,     
    marginHorizontal: 6,    
    borderRadius: 20,
  },
  tabText: {
    fontSize: 14,  
    color: '#4a90e2',
  },
  activitySection: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 22,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    marginTop: 12,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    marginVertical: 18,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    paddingLeft: 18,
    paddingRight: 10,
    marginVertical: 8,
    borderRadius: 15,
    backgroundColor: '#f6f6f6',
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
  },
  listItemText: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
});
