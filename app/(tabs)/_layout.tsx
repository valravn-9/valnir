import { Tabs } from 'expo-router';
import { BlurView } from 'expo-blur';
import { StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';

const TabsLayout = () => {
  const { t } = useTranslation();
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          borderTopWidth: 0,
          paddingTop: 8,
        },
        tabBarBackground: () => (
          <BlurView
            intensity={95}
            style={{
              ...StyleSheet.absoluteFillObject,
              overflow: 'hidden',
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
            }}
          />
        ),
      }}
    >
      <Tabs.Screen
        name="(one)"
        options={{
          headerShown: false,
          title: t('one'),
          tabBarIcon: ({ color }) => (
            <FontAwesome name="code" size={20} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          headerShown: false,
          title: t('two'),
          tabBarIcon: ({ color }) => (
            <FontAwesome name="code" size={20} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="three"
        options={{
          headerShown: false,
          title: t('three'),
          tabBarIcon: ({ color }) => (
            <FontAwesome name="code" size={20} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
