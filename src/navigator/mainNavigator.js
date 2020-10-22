import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings5156369Navigator from '../features/Settings5156369/navigator';
import Messaging6156368Navigator from '../features/Messaging6156368/navigator';
import NotificationList7156367Navigator from '../features/NotificationList7156367/navigator';
import Camera9156365Navigator from '../features/Camera9156365/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings5156369: { screen: Settings5156369Navigator },
Messaging6156368: { screen: Messaging6156368Navigator },
NotificationList7156367: { screen: NotificationList7156367Navigator },
Camera9156365: { screen: Camera9156365Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
