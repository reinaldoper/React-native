import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, ScrollView } from 'react-native';
import { Text, Button, Card } from 'react-native-elements';
import styles from '../styles';

export default function HomeScreen({ navigation }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        {posts.map(post => (
          <Card key={post.id}>
            <Card.Title>{post.title}</Card.Title>
            <Card.Divider />
            <Text style={styles.body}>{post.body}</Text>
            <Button
              title="Ver Detalhes"
              onPress={() => navigation.navigate('Details', { postId: post.id })}
            />
          </Card>
        ))}
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}