import { StyleSheet, ImageBackground } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Game from "./Screens/Game";
import Home from "./Screens/Home";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <ImageBackground
        source={require("./assets/Images/home.png")}
        style={styles.backgroundImage}
      ></ImageBackground>

      <NavigationContainer style={styles.container}>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              title: "   the ultimate friendly war game",

              headerStyle: {
                backgroundColor: "black",
              },
              headerTintColor: "white",
            }}
          />
          <Stack.Screen
            name="Game"
            component={Game}
            options={{
              title: "               Game",
              headerStyle: {
                backgroundColor: "black",
              },
              headerTintColor: "white",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "dodgerblue",
    alignItems: "center",
    justifyContent: "center",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
});
