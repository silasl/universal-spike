import { StyleSheet, View } from 'react-native';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import Countries from './src/screens/countries'

export default function App() {
  const cache = new InMemoryCache();
  const client = new ApolloClient({
    uri: 'https://countries.trevorblades.com/',
    cache
  });

  return (
    <View style={styles.container}>
      <ApolloProvider client={client}>
        <Countries />
      </ApolloProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
