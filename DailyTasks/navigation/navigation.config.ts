import ClassComponent from '../screens/ClassComponent/ClassComponents.screen';
import ContactExample from '../screens/ContactExample/ContactExample.screen';
import HomeScreen from '../screens/Home.screen';
import InternetStatus from '../screens/InternetConnection/InternetStatus.screen';
import LocationPractice from '../screens/LocationPractice/LocationPractice.screen';
import ProductDetailScreen from '../screens/ProductScreens/ProductDetails.screen';
import ProductListScreen from '../screens/ProductScreens/ProductList.screen';
import TodoScreen from '../screens/Todo.screen';
import UsersScreen from '../screens/Users/Users.screen';
import {TScreenConfig} from './navigation.types';

export const ScreenNames = {
  PRODUCT_LIST: 'Product List',
  PRODUCT_DETAIL: 'Product Details',
  CONTACT_EXAMPLE: 'Contact Example',
  USERS: 'Users',
  TODO: 'Todo',
  HOME: 'Home',
  LOCATION_PRACTICE: 'Location Playground',
  INTERNET_STATUS: 'Internet Status',
  CLASS_COMPONENT: 'Class Component',
} as const;

export const screens: TScreenConfig[] = [
  {
    Component: ProductListScreen,
    title: ScreenNames.PRODUCT_LIST,
  },
  {
    Component: ProductDetailScreen,
    title: ScreenNames.PRODUCT_DETAIL,
  },
  {
    Component: ContactExample,
    title: ScreenNames.CONTACT_EXAMPLE,
  },
  {
    Component: UsersScreen,
    title: ScreenNames.USERS,
  },
  {
    Component: TodoScreen,
    title: ScreenNames.TODO,
  },
  {
    Component: HomeScreen,
    title: ScreenNames.HOME,
  },
  {
    Component: LocationPractice,
    title: ScreenNames.LOCATION_PRACTICE,
  },
  {
    Component: InternetStatus,
    title: ScreenNames.INTERNET_STATUS,
  },
  {
    Component: ClassComponent,
    title: ScreenNames.CLASS_COMPONENT,
  },
];
