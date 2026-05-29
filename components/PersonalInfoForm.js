import { View, TextInput, StyleSheet } from "react-native";

export default function PersonalInfoForm({ 
  name, 
  setName, 
  email, 
  setEmail,
  phone,
  setPhone,
  linkedin,
  setLinkedin,
  location,
  setLocation
}) {
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter your phone number"
        value={phone}
        onChangeText={setPhone}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter your Linkedin"
        value={linkedin}
        onChangeText={setLinkedin}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter your address"
        value={location}
        onChangeText={setLocation}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
  },
});