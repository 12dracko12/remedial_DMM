import React from "react";
import { View, Text, StyleSheet } from "react-native";

const PostDetailScreen = ({ route }) => {
  const { post } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{post.title}</Text>
      <Text>{post.body}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontWeight: "bold", fontSize: 18, marginBottom: 10 },
});

export default PostDetailScreen;
