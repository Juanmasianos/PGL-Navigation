import React, { useEffect } from 'react';
import { Drawer } from 'expo-router/drawer';
import { useRouter, useSegments } from 'expo-router';
import { AuthProvider, useAuth } from '../contexts/AuthContext';
import LoadingScreen from '../components/LoadingScreen';

function AppContent() {
  const { user, isLoading } = useAuth();
  const segments = useSegments();
  const router = useRouter();

  React.useEffect(() => {
    if (isLoading) return;

    const inAuthGroup = segments[0] === '(auth)';

    if (user && inAuthGroup) {
      router.replace('/bienvenida');
    } else if (!user && !inAuthGroup) {
      router.replace('/(auth)/login');
    }
  }, [user, segments, isLoading]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <Drawer screenOptions={{ headerShown: !!user }}>
      <Drawer.Screen
        name="(auth)/login"
        options={{
          title: 'Login',
          drawerItemStyle: user ? { display: 'none' } : {} 
        }}
      />
      <Drawer.Screen
        name="(auth)/register"
        options={{
          title: 'Registro',
          drawerItemStyle: user ? { display: 'none' } : {}
        }}
      />
      <Drawer.Screen
        name="bienvenida"
        options={{
          title: 'Inicio',
          drawerItemStyle: !user ? { display: 'none' } : {} 
        }}
      />
      <Drawer.Screen
        name="portfolio"
        options={{
          title: 'Portfolio',
          drawerItemStyle: !user ? { display: 'none' } : {}
        }}
      />
      <Drawer.Screen
        name="Lista"
        options={{
          title: 'Lista',
          drawerItemStyle: !user ? { display: 'none' } : {}
        }}
      />
    </Drawer>
  );
}

export default function AppLayout() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}