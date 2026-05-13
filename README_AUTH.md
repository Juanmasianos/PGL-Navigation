# PGL Navigation - Autenticación JWT

Esta aplicación incluye funcionalidad de autenticación de usuarios usando JWT tokens.

## Configuración de la API

Para conectar con la API del profesor, necesitas actualizar el archivo `config/api.ts`:

```typescript
export const API_CONFIG = {
  BASE_URL: 'https://url-de-la-api-del-profesor', // Reemplaza con la URL real
  ENDPOINTS: {
    LOGIN: '/login',
    REGISTER: '/register',
    WELCOME: '/welcome',
  },
};
```

### Endpoints esperados

La API debe tener los siguientes endpoints:

#### POST `/register`
**Request:**
```json
{
  "fullname": "Nombre Completo",
  "email": "usuario@email.com",
  "pswd": "password123"
}
```

**Response:**
```json
{
  "token": "jwt_token_aqui",
  "user": {
    "id": "user_id",
    "email": "usuario@email.com",
    "name": "Nombre Completo"
  }
}
```

#### POST `/login`
**Request:**
```json
{
  "email": "usuario@email.com",
  "pswd": "password123"
}
```

**Response:**
```json
{
  "token": "jwt_token_aqui",
  "user": {
    "id": "user_id",
    "email": "usuario@email.com",
    "name": "Nombre Completo"
  }
}
```

#### GET `/welcome`
**Headers:**
```json
{
  "Authorization": "Bearer jwt_token_aqui"
}
```

**Response (una de estas opciones):**
```json
{
  "message": "¡Bienvenido, Juan!"
}
```

o

```json
{
  "msg": "¡Bienvenido, Juan!"
}
```

## Funcionalidades implementadas

- ✅ Pantalla de login
- ✅ Pantalla de registro con validación
- ✅ Autenticación con JWT
- ✅ Almacenamiento seguro del token
- ✅ Navegación protegida
- ✅ Mensaje de bienvenida personalizado del servidor
- ✅ Logout funcional
- ✅ Validación de formularios

## Flujo de autenticación

1. Al abrir la app, se verifica si hay un token almacenado
2. Si no hay token, se redirige a la pantalla de login
3. Después del login/registro exitoso, se almacena el token y se redirige a la app principal
4. Al entrar en la pantalla de bienvenida, se obtiene un mensaje personalizado del endpoint `/welcome`
5. Todas las pantallas principales requieren autenticación
6. El botón de logout elimina el token y redirige al login

## Dependencias agregadas

- `@react-native-async-storage/async-storage`: Para almacenar el token JWT localmente