import * as React from "react"
import { NavigationContainer } from '@react-navigation/native';
import MainStack from "./src/navigate/mainStack";
import { ContextProvider } from "./src/context/ContextProvider";
import { DataProvider } from "./src/context/DataContext";

export default function App() {
  return (
    <DataProvider>
      <ContextProvider>
        <NavigationContainer>
          <MainStack />
        </NavigationContainer>
      </ContextProvider>
    </DataProvider>
  );
}
