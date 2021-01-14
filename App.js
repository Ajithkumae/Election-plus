import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Provider } from 'react-redux';
import MyStack from './src/Navigation/AppNavigation';
import { navigationRef } from './src/Navigation/NavigationService';
import ConfigureStore from './src/redux/store/configureStore';
export default App =()=>{

  return(
    <Provider  store={ConfigureStore()}>
      <NavigationContainer ref={navigationRef}>
        <MyStack/>
      </NavigationContainer>
    </Provider>
  )
}