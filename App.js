import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "./src/screens/SearchScreen";
import FullScreen from "./src/screens/FullPage";

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    FullScreen: FullScreen,
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "Search Business",
      cardStyle: { backgroundColor: "#fff" },
    },
  }
);

export default createAppContainer(navigator);
