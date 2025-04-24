// contexts/ColorContext.js
import {createContext, useContext} from 'react';
import {ThemeProvider} from './ThemeContext';

export const ColorContext = createContext('blue');
export const ShapeContext = createContext('circle');

export const useColor = () => useContext(ColorContext);
export const useShape = () => useContext(ShapeContext);

const ShapeProvider = ({children}: any) => (
  <ShapeContext.Provider value="circle">{children}</ShapeContext.Provider>
);
const ColorProvider = ({children}: any) => (
  <ColorContext.Provider value="blue">{children}</ColorContext.Provider>
);

const contextProviders = [ThemeProvider, ShapeProvider, ColorProvider];

// components/Composer.js
export const ContextComposer = ({children}: any) =>
  contextProviders.reduce(
    (acc, Component) => <Component>{acc}</Component>,
    children,
  );
