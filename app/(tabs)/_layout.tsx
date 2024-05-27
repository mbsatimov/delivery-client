import { Colors } from '@/utils/constants/colors';
import { Home, ListOrdered, User } from '@tamagui/lucide-icons';
import { Tabs } from 'expo-router';

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={() => ({
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        headerStyle: {
          shadowColor: 'transparent',
          backgroundColor: Colors.light.background,
        },
        headerTitleAlign: 'center',
        tabBarStyle: {
          backgroundColor: Colors.light.primary,
          height: 60,
          marginLeft: 10,
          marginRight: 10,
          borderRadius: 30,
          borderColor: Colors.light.primary,
          borderWidth: 3,
          borderTopWidth: 3,
          bottom: 10,
        },
        tabBarItemStyle: {
          borderRadius: 30,
          alignItems: 'center',
          justifyContent: 'center',
        },
        tabBarActiveBackgroundColor: Colors.light.background,
        tabBarInactiveBackgroundColor: Colors.light.primary,
        tabBarActiveTintColor: Colors.light.foreground, // Active icon color
        tabBarInactiveTintColor: Colors.light.primaryForeground, // Inactive icon color
      })}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ color }) => <Home color={color} />,
        }}
      />
      <Tabs.Screen
        name="posts"
        options={{
          title: 'Posts',
          tabBarIcon: ({ color }) => <ListOrdered color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <User color={color} />,
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
