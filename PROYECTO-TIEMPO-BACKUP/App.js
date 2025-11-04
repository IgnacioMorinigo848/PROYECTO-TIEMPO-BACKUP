import * as React from "react"
import { NavigationContainer } from '@react-navigation/native';
import MainStack from "./src/navigate/mainStack";
import { ContextProvider } from "./src/context/ContextProvider";

export default function App() {
  return (
    <ContextProvider>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </ContextProvider>
  );
}
