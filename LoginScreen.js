import React, { useEffect } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Correo inválido").required("Campo requerido"),
  password: Yup.string().min(6, "Al menos 6 caracteres").required("Campo requerido"),
});

const LoginScreen = ({ navigation }) => {
  const saveSession = async (values) => {
    try {
      await AsyncStorage.setItem("userSession", JSON.stringify(values));
      navigation.navigate("HomeScreen");
    } catch (error) {
      console.error("Error al guardar la sesión:", error);
    }
  };

  const checkSession = async () => {
    try {
      const session = await AsyncStorage.getItem("userSession");
      if (session) {
        navigation.navigate("HomeScreen");
      }
    } catch (error) {
      console.error("Error al verificar la sesión:", error);
    }
  };

  useEffect(() => {
    checkSession();
  }, []);

  return (
    <Formik
      initialValues={{ email: "miau12@gmail.com", password: "123456" }}
      validationSchema={LoginSchema}
      onSubmit={(values) => saveSession(values)}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
        <View style={styles.container}>
          <Text>Correo electrónico: miau12@gmail.com</Text>
          <TextInput
            style={styles.input}
            onChangeText={handleChange("email")}
            onBlur={handleBlur("email")}
            value={values.email}
          />
          {errors.email && touched.email && <Text style={styles.error}>{errors.email}</Text>}

          <Text>Contraseña: 123456</Text>
          <TextInput
            style={styles.input}
            onChangeText={handleChange("password")}
            onBlur={handleBlur("password")}
            secureTextEntry
            value={values.password}
          />
          {errors.password && touched.password && <Text style={styles.error}>{errors.password}</Text>}

          <Button onPress={handleSubmit} title="Iniciar Sesión" />
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20 },
  input: { borderWidth: 1, marginBottom: 10, padding: 10, borderRadius: 5 },
  error: { color: "red" },
});

export default LoginScreen;
