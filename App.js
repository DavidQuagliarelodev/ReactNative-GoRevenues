import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/pages/home";
import Catalog from "./src/pages/catalog";
import Revenues01 from "./src/pages/revenues/01";
import Revenues02 from "./src/pages/revenues/02";
import Revenues03 from "./src/pages/revenues/03";
import Revenues04 from "./src/pages/revenues/04";

const stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="Home">
        <stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "",
            headerTransparent: true,
            headerShown: false,
            statusBarTranslucent: false,
            statusBarHidden: true,
          }}
        />
        <stack.Screen
          name="Catalog"
          component={Catalog}
          options={{
            title: "",
            headerTransparent: true,
            headerShown: false,
            statusBarTranslucent: false,
            statusBarHidden: true,
          }}
        />
        <stack.Screen
          name="Revenues01"
          component={Revenues01}
          options={{
            title: "",
            headerTransparent: true,
            headerShown: false,
            statusBarTranslucent: false,
            statusBarHidden: true,
          }}
        />
        <stack.Screen
          name="Revenues02"
          component={Revenues02}
          options={{
            title: "",
            headerTransparent: true,
            headerShown: false,
            statusBarTranslucent: false,
            statusBarHidden: true,
          }}
        />

        <stack.Screen
          name="Revenues03"
          component={Revenues03}
          options={{
            title: "",
            headerTransparent: true,
            headerShown: false,
            statusBarTranslucent: false,
            statusBarHidden: true,
          }}
        />

        <stack.Screen
          name="Revenues04"
          component={Revenues04}
          options={{
            title: "",
            headerTransparent: true,
            headerShown: false,
            statusBarTranslucent: false,
            statusBarHidden: true,
          }}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
}
