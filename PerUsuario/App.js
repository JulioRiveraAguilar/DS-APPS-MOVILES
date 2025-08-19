import { useState } from "react";
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";


const firstProfileImage = 'https://i.imgur.com/3MiWOZv.png'; 
const secondProfileImage = 'https://i.imgur.com/asIcNja.png'; 

export default function App() {
  const userName = 'Julio Rivera';
  const userEmail = 'ra22i04001@usonsonate.edu.sv'; 
  const myPlaylists = [
    'Trapperz',
    'Salen las birs',
    'Trip',
    'Anime',
    'Bachata',
    'Rap',
    'English'
  ];
  const [profileImage, setProfileImage] = useState(firstProfileImage);
  function changeProfileImage() {
    if (profileImage === firstProfileImage) {
      setProfileImage(secondProfileImage);
    } else {
      setProfileImage(firstProfileImage);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Image 
          source={{ uri: profileImage }}
          style={styles.avatar}      
        />
        <Text style={styles.userName}>{userName}</Text>
        <Text style={styles.userEmail}>{userEmail}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={changeProfileImage} 
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>Editar Perfil</Text>
        </TouchableOpacity>
        <View style={styles.playlistSection}>
          <Text style={styles.playlistTitle}>PlayLists</Text>
          {myPlaylists.map((playlist, index) => (
            <Text key={index} style={styles.playlistItem}>
              {playlist}
            </Text>
          ))}
        </View>

      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f2f5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#ffffff',
    width: '90%',
    maxWidth: 350,
    borderRadius: 20,
    padding: 25,
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 8,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50, 
    marginBottom: 15,
  },
  userName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  userEmail: {
    fontSize: 14,
    color: '#888',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginBottom: 30,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  playlistSection: {
    width: '100%', 
  },
  playlistTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  playlistItem: {
    fontSize: 16,
    color: '#555',
    marginBottom: 8, 
  },
});