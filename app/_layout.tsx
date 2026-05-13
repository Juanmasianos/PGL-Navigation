import React from 'react';
import { Drawer } from 'expo-router/drawer';
import { AuthProvider, useAuth } from '../contexts/AuthContext';
import LoadingScreen from '../components/LoadingScreen';
import { useRouter, useSegments } from 'expo-router';

function AppContent() {
  const { user, isLoading } = useAuth();
  const segments = useSegments();
  const router = useRouter();

  React.useEffect(() => {
    if (isLoading) return;

    const inAuthGroup = segments[0] === '(auth)';

    if (user && inAuthGroup) {
      router.replace('/bienvenida' as any);
    } else if (!user && !inAuthGroup) {
      router.replace('/(auth)/login' as any);
    }
  }, [user, segments, isLoading]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (!user) {
    // Usuario no autenticado, mostrar solo las pantallas de auth
    return (
      <Drawer screenOptions={{ headerShown: false }}>
        <Drawer.Screen
          name="(auth)/login"
          options={{
            drawerLabel: 'Iniciar Sesión',
            title: 'Login',
          }}
        />
        <Drawer.Screen
          name="(auth)/register"
          options={{
            drawerLabel: 'Registro',
            title: 'Registro',
          }}
        />
      </Drawer>
    );
  }

  // Usuario autenticado, mostrar la app completa
  return (
    <Drawer>
      <Drawer.Screen
        name="bienvenida"
        options={{
          drawerLabel: 'Bienvenida',
          title: 'Bienvenida',
        }}
      />
      <Drawer.Screen
        name="portfolio"
        options={{
          drawerLabel: 'Portfolio',
          title: 'Portfolio',
        }}
      />
      <Drawer.Screen
        name="lista"
        options={{
          drawerLabel: 'Lista',
          title: 'Lista',
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