import React from 'react';
import { PaperProvider } from 'react-native-paper';
import Core from './src/Core';


const App = () => {

  return (
    <PaperProvider>
      <Core/>
    </PaperProvider>
  );
};


export default App;
