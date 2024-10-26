import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { FeedProvider } from './src/context/FeedContext';
import { Feed } from './src/components/Screens/Feed';
import { AuthContext, AuthProvider } from './src/context/AuthContext';
import { SessionProvider } from './src/context/SessionContext';
import { Layout } from './src/components/Layout/Layout';
import { ThemeProvider } from './src/context/ThemeContext';

export default function App() {
  return (
    <AuthProvider>
    <SessionProvider>
    <ThemeProvider>
    <FeedProvider>
  < Layout/>
    </FeedProvider>
    </ThemeProvider>
    </SessionProvider>
    </AuthProvider>
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
