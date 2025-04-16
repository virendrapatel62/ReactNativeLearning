import ClassComponent from '../screens/ClassComponent/ClassComponents.screen';
import ContactExample from '../screens/ContactExample/ContactExample.screen';
import HomeScreen from '../screens/Home.screen';
import InternetStatus from '../screens/InternetConnection/InternetStatus.screen';
import LocationPractice from '../screens/LocationPractice/LocationPractice.screen';
import MiscScreen from '../screens/Misc.screen';
import ProductDetailScreen from '../screens/ProductScreens/ProductDetails.screen';
import ProductListScreen from '../screens/ProductScreens/ProductList.screen';
import TodoScreen from '../screens/Todo.screen';
import UsersScreen from '../screens/Users/Users.screen';
import {TScreenConfig} from './navigation.types';

export const ScreenNames = {
  PRODUCT_LIST: 'ProductList',
  PRODUCT_DETAIL: 'ProductDetails',
  CONTACT_EXAMPLE: 'ContactExample',
  USERS: 'Users',
  TODO: 'Todo',
  HOME: 'Home',
  LOCATION_PRACTICE: 'LocationPlayground',
  INTERNET_STATUS: 'InternetStatus',
  CLASS_COMPONENT: 'ClassComponent',
  MISC_SCREEN: 'MISC_SCREEN',
  HOME_TABS: 'HOME_TABS',
  HOME_TOP_NAVS: 'HOME_TOP_TABS',
} as const;

const _screens: TScreenConfig[] = [
  {
    Component: ProductListScreen,
    name: ScreenNames.PRODUCT_LIST,
  },
  {
    Component: ProductDetailScreen,
    name: ScreenNames.PRODUCT_DETAIL,
  },
  {
    Component: ContactExample,
    name: ScreenNames.CONTACT_EXAMPLE,
  },
  {
    Component: UsersScreen,
    name: ScreenNames.USERS,
  },
  {
    Component: TodoScreen,
    name: ScreenNames.TODO,
  },
  {
    Component: HomeScreen,
    isTabScreen: true,
    name: ScreenNames.HOME,
  },
  {
    Component: LocationPractice,
    name: ScreenNames.LOCATION_PRACTICE,
  },
  {
    Component: InternetStatus,
    name: ScreenNames.INTERNET_STATUS,
    isTabScreen: true,
  },
  {
    Component: ClassComponent,
    name: ScreenNames.CLASS_COMPONENT,
  },
  {
    Component: MiscScreen,
    name: ScreenNames.MISC_SCREEN,
  },
];

export const tabScreens = _screens.filter(screen => screen.isTabScreen);
export const screens = _screens.filter(screen => !screen.isTabScreen);
