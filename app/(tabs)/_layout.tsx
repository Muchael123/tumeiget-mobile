import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { AntDesign } from '@expo/vector-icons';
import { Link, Tabs } from 'expo-router';
import { Pressable } from 'react-native';

export default function TabLayout() {

  return (
    <Tabs
      screenOptions={{
      }}>
      <Tabs.Screen
        name="Home"
        options={{
          
          title: 'Home',
          tabBarIcon: ({ color }) => <AntDesign name="home" size={24} color={color}/>,
          headerRight: () => (
            <Link href="/(modals)/Login" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="Scan"
        options={{
          title: 'Scan',
          tabBarIcon: ({ color }) => <AntDesign name="scan1" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: 'Search',
          tabBarIcon: ({ color }) => <AntDesign name="search1" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <AntDesign name="user" size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}
