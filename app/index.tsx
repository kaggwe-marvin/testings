import React, { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

const LoginPage = () => {
  const { onLogin } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isUsernameFocused, setIsUsernameFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  const onAdminSignInPress = async () => {
    onLogin!(username, password);
  };
  const onUserSignInPress = async () => {
    onLogin!("user", "user");
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"} // Adjust behavior based on platform
    >
      <Text style={styles.title}>Login </Text>
      <View
        style={[
          styles.formGroup,
          { borderBottomWidth: isUsernameFocused ? 2 : 1 },
        ]}>
        <Text style={styles.label}>Username:</Text>
        <TextInput
          style={styles.input}
          value={username}
          onChangeText={setUsername}
          placeholder="Enter your username"
          onFocus={() => setIsUsernameFocused(true)}
          onBlur={() => setIsUsernameFocused(false)}
        />
      </View>
      <View
        style={[
          styles.formGroup,
          { borderBottomWidth: isPasswordFocused ? 2 : 1 },
        ]}>
        <Text style={styles.label}>Password:</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          placeholder="Enter your password"
          secureTextEntry
          onFocus={() => setIsPasswordFocused(true)}
          onBlur={() => setIsPasswordFocused(false)}
        />
      </View>
      <TouchableOpacity style={styles.loginButton} onPress={onAdminSignInPress}>
        <Text style={styles.buttonText}>Login with Admin</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginButton} onPress={onUserSignInPress}>
        <Text style={styles.buttonText}>Login with User</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#ffffff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  formGroup: {
    marginBottom: 15,
    width: "100%",
    borderBottomColor: "#89D5C9", // Default border color
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 0,
    fontSize: 16,
    borderBottomWidth: 1,
    borderColor: "#cccccc",
  },
  loginButton: {
    width: "100%",
    backgroundColor: "#89D5C9",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
  },
});

export default LoginPage;
