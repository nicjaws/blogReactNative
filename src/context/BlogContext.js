import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BlogContext = React.createContext();

export const BlogProvider = ({children}) => {
  return (
  <BlogContext.Provider value={15}><Text></Text>
    {children}
  </BlogContext.Provider>
  )
}

export default BlogContext;

