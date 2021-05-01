import * as React from 'react';
import { StackNavigator } from './src/navigators/Stack'
import { SafeAreaProvider } from 'react-native-safe-area-context';

export const App = () => {
  return (
    <SafeAreaProvider>
      <StackNavigator />
    </SafeAreaProvider>
  );
}

export default App;