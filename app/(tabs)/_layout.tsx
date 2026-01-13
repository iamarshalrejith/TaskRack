import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import {Ionicons} from "@expo/vector-icons"
import useTheme from '@/hooks/useTheme'


const TabsLayout = () => {
  const {colors} = useTheme();
  return (
   <Tabs screenOptions={{
    tabBarActiveTintColor: colors.primary,
    tabBarInactiveTintColor: colors.textMuted,
    tabBarStyle:{
        backgroundColor: colors.surface,
        borderTopWidth: 1,
        borderTopColor: colors.border,
        height: 90,
        paddingBottom: 30,
        paddingTop: 10,
    },
    tabBarLabelStyle: {
        fontSize: 12,
        fontWeight: "600",
    },
    headerShown:false,
   }}>
        <Tabs.Screen name='index' options={{title:"Todos",tabBarIcon:({color,size})=> <Ionicons name="flash-outline" color={color} size={size} /> }} />

        <Tabs.Screen name='settings' options={{title:"Settings",tabBarIcon:({color,size})=> <Ionicons name='settings' color={color} size={size}/> }} />

   </Tabs>
  )
}

export default TabsLayout

// Where does color come from?

// Expo Router:
// Detects if the tab is active or inactive
// Chooses the correct color automatically
// Passes it to tabBarIcon

// same for size but we can override them