import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { Text, Button, Card, Icon } from 'react-native-elements';
import styles from '../styles';

export default function DetailsScreen({ route, navigation }) {
  const { postId } = route.params;
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then(response => response.json())
      .then(data => setPost(data))
      .catch(error => console.error(error));
  }, [postId]);

  if (!post) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Card>
        <Card.Title>{post.title}</Card.Title>
        <Card.Divider />
        <Text style={styles.body}>{post.body}</Text>
        <Button
          icon={
            <Icon
              name="arrow-back"
              type="material"
              color="#ffffff"
              iconStyle={{ marginRight: 10 }}
            />
          }
          title="Voltar"
          onPress={() => navigation.goBack()}
        />
      </Card>
    </View>
  );
}