/* eslint-disable no-undef */
import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { useRouter } from 'expo-router';
import Img2 from '../../assets/image2.jpg';

export default function Home() {
  const router = useRouter();
  const [state, setState] = useState('contain');

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          router.push('/');
        }}
        style={{
          backgroundColor: '#516beb',
          borderRadius: 5,
          paddingHorizontal: 30,
          paddingVertical: 5,
          marginBottom: 40,
        }}
      >
        <Text
          style={{
            fontSize: 24,
            color: '#fff',
          }}
        >
          Go Back Home
        </Text>
      </TouchableOpacity>

      <View style={styles.imageContainer}>
        <Image
          source={Img2}
          style={styles.image}
          resizeMode={state}
        />
      </View>

      <View style={styles.buttonWrapper}>
        <TouchableOpacity
          style={state === 'cover' ? styles.activeButton : styles.button}
          onPress={() => setState('cover')}
        >
          <Text style={styles.buttonText}>Cover</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={state === 'contain' ? styles.activeButton : styles.button}
          onPress={() => setState('contain')}
        >
          <Text style={styles.buttonText}>Contain</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={state === 'repeat' ? styles.activeButton : styles.button}
          onPress={() => setState('repeat')}
        >
          <Text style={styles.buttonText}>Repeat</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={state === 'stretch' ? styles.activeButton : styles.button}
          onPress={() => setState('stretch')}
        >
          <Text style={styles.buttonText}>Stretch</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={state === 'center' ? styles.activeButton : styles.button}
          onPress={() => setState('center')}
        >
          <Text style={styles.buttonText}>Center</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const windowWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    height: 400,
    width: windowWidth - 20,
    borderWidth: 2,
    borderColor: '#000',
  },
  image: {
    flex: 1,
    width: '100%',
  },
  buttonWrapper: {
    flexDirection: 'row',
    width: windowWidth - 20,
    marginTop: 20,
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  activeButton: {
    backgroundColor: 'green',
    paddingVertical: 7,
    paddingHorizontal: 24,
    borderRadius: 5,
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'grey',
    paddingVertical: 7,
    paddingHorizontal: 24,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: '600',
  },
});
