import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { useRouter } from 'expo-router';

export default function Page() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>
        React Native Image ResizeMode Tutorial
      </Text>

      <View style={styles.main}>
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              router.push('/home');
            }}
          >
            <Text style={styles.title}>Full App</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const fulllWidth = Dimensions.get('screen').width;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  main: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: fulllWidth - 24,
  },
  button: {
    backgroundColor: '#516beb',
    borderRadius: 5,
    paddingHorizontal: 30,
    paddingVertical: 5,
  },
  title: {
    fontSize: 24,
    color: '#fff',
  },
});
