import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, ScrollView, ActivityIndicator } from "react-native";
import { Text, Button, Card } from "react-native-elements";
import styles from "../styles";
import fetchPosts from "../service/Fetch.js";

export default function HomeScreen({ navigation }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPostsUser = async () => {
    try {
      const data = await fetchPosts();
      setPosts(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPostsUser();
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text>Erro ao carregar os posts: {error.message}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        {posts.map((post) => (
          <Card key={post.id}>
            <Card.Title>{post.title}</Card.Title>
            <Card.Divider />
            <Text style={styles.body}>{post.body}</Text>
            <Button
              title="Ver Detalhes"
              onPress={() =>
                navigation.navigate("Details", { postId: post.id })
              }
            />
          </Card>
        ))}
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}
