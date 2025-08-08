# 🏗️ Arquitectura Técnica

## 📚 **Stack Principal**
- **Frontend:** Next.js 14 + TypeScript + Tailwind CSS
- **Backend:** Supabase (Auth + PostgreSQL)
- **State:** React Context API
- **i18n:** next-intl
- **Deploy:** Vercel

---

## 🏛️ **Arquitectura por Capas**

**Presentation:** Pages, Components, Layouts  
**Business:** Contexts, Hooks, Services  
**Data:** API Routes, Database  
**Infrastructure:** Auth, Middleware, Validation

---

## 🔄 **Flujos de Datos**

### **Client-Side (Filtros, Búsquedas):**
Component → Hook → Service → API Route → Database

### **Server Actions (Formularios):**
Component → Server Action → Service → Database (directo)

### **SSR (Datos Iniciales):**
Page → Service → Database (directo)

### **🍪 Autenticación con Cookies:**
- Middleware lee cookies automáticamente
- Token extraído de cookies httpOnly
- Validación antes de acceder a datos mock
- Sin token válido → redirect 401

---

## 🎯 **Casos de Uso Concretos**

### **Login (Client-Side):**
LoginForm → useAuth() → authService → /api/auth → Supabase

### **Crear Chiste (Server Action):**
JokeForm → createJokeAction → jokeService → Supabase DB

### **Filtrar Chistes (Client-Side):**
FilterForm → useJokeList() → jokeService → /api/jokes → Supabase

---

## 📁 **Estructura**
- **app/[locale]/** - Páginas por idioma
- **components/** - UI reutilizable
- **contexts/** - Estado global
- **hooks/** - Lógica custom
- **services/** - Business logic
- **types/** - TypeScript
- **utils/** - Utilidades

---

## 🛡️ **Seguridad**
- **Auth:** JWT automático con Supabase
- **Routes:** Middleware protege rutas privadas
- **Validation:** TypeScript + Runtime + RLS + DB constraints
- **Headers:** CSP, X-Frame-Options, etc.

---

## 📊 **Performance**
- **SSG/SSR** para SEO
- **Code splitting** automático
- **Image optimization**
- **Database indexes**
- **CDN** con Vercel

---

## 🚀 **Deploy**
- **Vercel** deployment automático
- **GitHub Actions** para CI/CD
- **Environment variables** para config

---

**Última actualización:** 5 de agosto, 2025

---

## 🏛️ **Arquitectura de la Aplicación**

### **Patrón: Layered Architecture**

La aplicación sigue una arquitectura por capas bien definida:

**Presentation Layer:** Páginas, componentes y layouts que manejan la interfaz de usuario
**Business Layer:** Contextos, hooks personalizados y servicios que contienen la lógica de negocio
**Data Layer:** APIs, conexiones a base de datos y servicios externos
**Infrastructure Layer:** Autenticación, middleware y validaciones del sistema

### **Flujos de Datos:**

#### **Client-Side Flow (CSR - Client Side Rendering):**
User Interaction → Component → Custom Hook → Service → API Route → Database
↓
UI Update ← State Change ← Response ← Data

#### **Server-Side Flow (SSR/Server Actions):**
User Interaction → Component → Server Action → Service → Database
↓
UI Update ← Revalidation ← Direct DB Response

#### **🎯 Flujo Detallado por Caso de Uso:**

**1. Autenticación (Client-Side):**
LoginForm → useAuth() → authService → /api/auth → Supabase Auth
↓
AuthContext Update → Component Re-render → UI Feedback

**2. Creación de Chiste (Server Action):**
JokeForm → jokeSubmissionAction → jokeService → Supabase DB
↓
revalidatePath() → Router Refresh → Updated UI

**3. Listado de Chistes (SSR + Client):**
Page Component → jokeService → Supabase DB (SSR)
↓
Client Filter → useJokeList() → jokeService → /api/jokes → Filtered Results

#### **🍪 Manejo de Cookies y Autenticación:**

**Para API Routes que requieren autenticación:**
- Las cookies de sesión se leen automáticamente en middleware
- El token de Supabase se extrae de las cookies httpOnly
- Se valida la sesión antes de permitir acceso a datos mockeados
- Si no hay token válido, se redirige al login
- Las API routes protegidas verifican autenticación en cada request

**Flujo de Cookies en API Routes:**
Request → Middleware → Lee Cookies → Valida Token → API Route → Datos Mockeados
↓
Si token inválido → Redirect 401 → Login Page

**Para datos mockeados específicos del usuario:**
- Se extrae el user_id del token en la cookie
- Los datos mock se filtran por usuario autenticado
- Se mantiene consistencia entre datos reales y mockeados

---

## 🗂️ **Estructura de Proyecto**

### **Organización por Feature:**

**src/app/[locale]/** - Páginas del App Router con layout principal, página de inicio, feature de chistes con flujos de configuración, creación y dashboard final, más rutas de API

**src/components/** - Componentes reutilizables organizados por categoría: inputs para formularios, layout para componentes de estructura, feedback para elementos de UI, y dataDisplay para mostrar datos

**src/contexts/** - Contextos de React para manejo de estado global
**src/hooks/** - Hooks personalizados para lógica reutilizable  
**src/services/** - Lógica de negocio y comunicación con APIs
**src/types/** - Definiciones de TypeScript para tipado fuerte
**src/utils/** - Utilidades y funciones auxiliares
**src/validations/** - Esquemas de validación de datos

---

## 🔄 **Patrones de Diseño Utilizados**

### **Provider Pattern**
AuthContext proporciona estado global de autenticación envolviendo toda la aplicación

### **Compound Components** 
Navigation se combina con AuthenticatedUserMenu para crear una navegación modular

### **Custom Hooks**
Lógica reutilizable encapsulada en hooks como useAuth y useRouter para consistencia

### **Higher-Order Components**
Middleware actúa como HOC para protección de rutas y manejo de autenticación

---

## 🔗 **APIs y Servicios**

### **Arquitectura de Peticiones:**

#### **Server-Side Rendering (SSR):**
Flujo directo para datos iniciales donde los componentes de página llaman directamente a servicios sin necesidad de API Routes, renderizando datos en el servidor

#### **Client-Side Rendering (CSR):** 
Flujo para interacciones dinámicas donde los componentes utilizan hooks personalizados que llaman servicios que a su vez consumen API Routes, manejando estado con React y proporcionando loading states y error handling

#### **Server Actions (Next.js 14):**
Flujo para mutations como POST, PUT y DELETE donde los componentes de formulario llaman directamente Server Actions que utilizan servicios para acceder a la base de datos, con revalidación automática sin necesidad de API routes

### **Ejemplos Prácticos:**

#### **Autenticación (Client-Side):**
Hook personalizado useAuth maneja estado de usuario con métodos de login que utilizan authService para comunicarse con API routes de autenticación. El servicio AuthService realiza peticiones fetch a endpoints de autenticación que se comunican con Supabase Auth.

#### **Creación de Chiste (Server Action):**
Server Action createJoke recibe FormData, valida con esquemas, utiliza jokeService directamente sin API route, y ejecuta revalidación automática con redirect. El servicio JokeService es reutilizable para operaciones CRUD en la tabla de chistes.

#### **Filtrado Dinámico (Client-Side):**
Hook useJokeList mantiene estado local de chistes, filtros y loading. El hook incluye función fetchJokes que utiliza jokeService. API Route GET maneja filtros de URL searchParams y llama jokeService.getFiltered. El servicio JokeService construye queries dinámicas en Supabase según filtros aplicados.

### **Cuándo Usar Cada Patrón:**

#### **Server-Side Rendering (SSR):**
Ideal para datos iniciales de página, contenido crítico para SEO, y datos que no cambian frecuentemente. No recomendado para interacciones dinámicas. Los componentes de página pueden llamar directamente a servicios para obtener datos renderizados en servidor.

#### **Server Actions:**
Perfecto para formularios y mutations, operaciones que requieren revalidación automática, y para reducir el bundle de JavaScript. No ideal para estados complejos del UI. Permite crear, actualizar y eliminar datos con lógica directa sin necesidad de API routes.

#### **Client-Side (Hooks + API Routes):**
Excelente para filtros dinámicos, estados complejos de UI, real-time updates e interacciones rápidas. Ideal para búsquedas, filtros y paginación que requieren manejo de estado sofisticado.

### **Supabase Services:**
**Authentication:** signUp, signIn, signOut, getSession, refreshSession
**Database:** insert, select, update, delete con filtros y relaciones

### **Internal APIs:**
**Next.js API Routes** incluyen endpoints para CRUD de jokes, helpers de auth y management de usuarios

---

## 🛡️ **Seguridad**

### **Autenticación:**
**JWT Tokens:** Supabase maneja tokens automáticamente con renovación segura
**Session Management:** Refresh tokens automático para mantener sesiones activas
**Route Protection:** Middleware protege rutas privadas verificando autenticación
**CSRF Protection:** Next.js incluye protección built-in contra ataques CSRF

### **Validación:**
**Input validation en múltiples capas:**
1. Frontend: TypeScript types para validación estática
2. Runtime: Custom validation schemas para datos en tiempo real  
3. Backend: Supabase RLS policies para seguridad a nivel de base de datos
4. Database: PostgreSQL constraints para integridad de datos

### **Content Security:**
**Headers de seguridad implementados:** Content-Security-Policy, X-Frame-Options, X-Content-Type-Options, Referrer-Policy para protección completa

---

## 📊 **Performance**

### **Optimizaciones Frontend:**
**Next.js optimizations:** Static Site Generation (SSG), Image Optimization, Code Splitting automático, Tree Shaking, Bundle Analysis para mejor rendimiento

**React optimizations:** useMemo para cálculos costosos, useCallback para funciones, React.memo para componentes, Lazy loading de componentes para cargar contenido bajo demanda

### **Optimizaciones Backend:**
**Database optimizations:** Indexed queries, Connection pooling, Query optimization, Caching strategies para acceso eficiente a datos

**API optimizations:** Response compression, HTTP/2 support, CDN integration, Edge computing para menor latencia

---

## 🔍 **Monitoring y Logging**

### **Error Tracking:**
**Production error handling** con try-catch blocks comprehensivos, logging detallado de errores y integración con servicios de tracking para monitoreo en tiempo real

### **Performance Monitoring:**
**Core Web Vitals tracking** incluyendo First Contentful Paint (FCP), Largest Contentful Paint (LCP), First Input Delay (FID), y Cumulative Layout Shift (CLS)

### **Analytics:**
**User behavior tracking** para page views, user interactions, conversion funnels y A/B testing metrics para optimización continua

---

## 🚀 **Deployment Architecture**

### **Vercel Deployment:**
Configuración optimizada para Next.js con framework detection automático, build command personalizado, output directory configurado e install command para dependencias

### **Environment Configuration:**
**Production:** URLs de Supabase production con claves anónimas y service role keys seguras
**Development:** URLs locales de Supabase con claves de desarrollo para testing

---

## 🔄 **CI/CD Pipeline**

### **GitHub Actions:**
Pipeline automatizado que se ejecuta en push a branches main y feat/build-part. Incluye setup de Node.js, instalación de dependencias, ejecución de tests, build del proyecto y deploy automático a Vercel con verificación de calidad de código.

---

**Última actualización:** 5 de agosto, 2025
