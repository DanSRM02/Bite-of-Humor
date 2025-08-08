# 🔐 Sistema de Autenticación

## 🏗️ **Stack**
- **Provider:** Supabase Auth
- **Backend:** Supabase PostgreSQL + RLS
- **Frontend:** React Context + Custom Hooks
- **Sessions:** JWT + Refresh Tokens
- **Protection:** Next.js Middleware

---

## 🎯 **AuthContext**

### **Interface:**
- **isAuthenticated:** boolean
- **userName:** string | null
- **loading:** boolean  
- **logout:** () => Promise<void>
- **refreshAuth:** () => Promise<void>

### **Estados:**
- **Loading:** Verificando sesión inicial
- **Authenticated:** Usuario logueado
- **Unauthenticated:** Sin sesión

---

## 🛡️ **Middleware Protection**

### **Rutas Protegidas:**
- **/joke/setup** - Requiere auth
- **/joke/build** - Requiere auth
- **API routes privadas** - Verificación automática

### **Redirects:**
- **Sin auth → /login** 
- **Con auth en /login → /joke/setup**

---

## 🔑 **Flujos de Auth**

### **Login:**
1. Form submit → authService.login()
2. Supabase.auth.signInWithPassword()
3. AuthContext actualización
4. Redirect a dashboard

### **Register:**
1. Form submit → authService.signup()
2. Supabase.auth.signUp()
3. Email confirmation
4. Auto login post confirmación

### **Logout:**
1. User click → authService.logout()
2. Supabase.auth.signOut()
3. Clear AuthContext
4. Redirect a home

---

## 🎣 **Custom Hooks**

### **useAuth():**
- **Consume AuthContext**
- **Throw error si no hay provider**
- **Return:** auth state + methods

### **useProtectedRoute():**
- **Redirect si no authenticated**
- **Show loading durante verificación**
- **Handle auth state changes**

---

## 🔧 **Services**

### **authService.ts:**
- **login(credentials)** → signIn
- **signup(userData)** → signUp  
- **logout()** → signOut
- **getCurrentUser()** → getUser
- **refreshSession()** → refresh

### **Error Handling:**
- **Invalid credentials** → User friendly message
- **Network errors** → Retry mechanism
- **Session expired** → Auto refresh

---

## 🍪 **Session Management**

### **Cookies:**
- **HttpOnly** para seguridad
- **Secure** en production
- **SameSite** configurado
- **Auto refresh** antes de expirar

### **Storage:**
- **Server-side** verificación en middleware
- **Client-side** Context para UI state
- **Persistent** sessions entre page loads

---

**Última actualización:** 5 de agosto, 2025

  const refreshAuth = async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      setUser(session?.user || null);
    } catch (error) {
      console.error('Error refreshing auth:', error);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      await supabase.auth.signOut();
      setUser(null);
      // Revalidate to update UI
      window.location.href = '/';
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  useEffect(() => {
    refreshAuth();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setUser(session?.user || null);
        setLoading(false);
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: !!user,
        userName: user?.user_metadata?.name || null,
        loading,
        logout,
        refreshAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
```

---

## 📝 **Formularios de Autenticación**

### **Registro de Comedians:**
```typescript
// ComedianSignUpForm component
interface SignUpFormData {
  name: string;
  email: string;
  password: string;
  joke: string; // Required for registration
}

const signUp = async (formData: SignUpFormData) => {
  const supabase = createClient();
  
  const { data, error } = await supabase.auth.signUp({
    email: formData.email,
    password: formData.password,
    options: {
      data: {
        name: formData.name,
        registration_joke: formData.joke,
      },
    },
  });

  if (error) throw error;
  return data;
};
```

### **Login de Usuarios:**
```typescript
// ComedianLoginForm component
interface LoginFormData {
  email: string;
  password: string;
}

const signIn = async (formData: LoginFormData) => {
  const supabase = createClient();
  
  const { data, error } = await supabase.auth.signInWithPassword({
    email: formData.email,
    password: formData.password,
  });

  if (error) throw error;
  return data;
};
```

### **Validación de Campos:**
```typescript
// src/validations/comedianValidation.ts
export const signUpValidation = {
  name: {
    required: "Name is required",
    minLength: { value: 2, message: "Name must be at least 2 characters" },
    maxLength: { value: 50, message: "Name cannot exceed 50 characters" }
  },
  email: {
    required: "Email is required",
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: "Please enter a valid email address"
    }
  },
  password: {
    required: "Password is required",
    minLength: { value: 6, message: "Password must be at least 6 characters" }
  },
  joke: {
    required: "A sample joke is required for registration",
    minLength: { value: 10, message: "Joke must be at least 10 characters" },
    maxLength: { value: 300, message: "Joke cannot exceed 300 characters" }
  }
};
```

---

## 🛡️ **Middleware de Protección**

### **Configuración del Middleware:**
```typescript
// src/middleware.ts
import { createServerClient } from '@supabase/ssr';
import { NextResponse, type NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return request.cookies.get(name)?.value;
        },
        set(name: string, value: string, options: CookieOptions) {
          request.cookies.set({ name, value, ...options });
          response = NextResponse.next({
            request: {
              headers: request.headers,
            },
          });
          response.cookies.set({ name, value, ...options });
        },
        remove(name: string, options: CookieOptions) {
          request.cookies.set({ name, value: '', ...options });
          response = NextResponse.next({
            request: {
              headers: request.headers,
            },
          });
          response.cookies.set({ name, value: '', ...options });
        },
      },
    }
  );

  // Check auth for protected routes
  const { data: { user } } = await supabase.auth.getUser();
  
  // Protected routes
  const protectedPaths = ['/joke/setup/final'];
  const isProtectedRoute = protectedPaths.some(path => 
    request.nextUrl.pathname.includes(path)
  );

  if (isProtectedRoute && !user) {
    // Redirect to login if not authenticated
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = '/comedian/login';
    redirectUrl.searchParams.set('redirectTo', request.nextUrl.pathname);
    return NextResponse.redirect(redirectUrl);
  }

  return response;
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|api/).*)',
  ],
};
```

---

## 🔄 **Server-side Authentication**

### **Server Components:**
```typescript
// src/utils/supabase/server.ts
import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';

export function createClient() {
  const cookieStore = cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value;
        },
      },
    }
  );
}

// Usage in server components
export async function getCurrentUser() {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();
  return user;
}
```

### **Route Handlers:**
```typescript
// app/api/protected/route.ts
import { createClient } from '@/utils/supabase/server';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  // Protected API logic here
  return NextResponse.json({ data: 'Protected data' });
}
```

---

## 🎨 **Componentes de Navegación Autenticados**

### **AuthenticatedUserMenu:**
```typescript
// src/components/layout/navigation/AuthenticatedUserMenu.tsx
interface AuthenticatedUserMenuProps {
  isMobile?: boolean;
  onMenuClose?: () => void;
}

const AuthenticatedUserMenu = ({ isMobile = false, onMenuClose }: AuthenticatedUserMenuProps) => {
  const t = useTranslations("HeaderNavigation");
  const router = useRouter();
  const { isAuthenticated, logout, userName, loading } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
      onMenuClose?.();
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  const handleDashboardClick = () => {
    router.push("/joke/setup/final");
    onMenuClose?.();
  };

  if (!isAuthenticated || loading) {
    return null;
  }

  return (
    <div className={isMobile 
      ? "mt-4 pt-4 border-t border-stone-200 bg-stone-50/50 rounded-lg p-3" 
      : "flex items-center gap-2 ml-4 pl-4 border-l border-stone-200"
    }>
      {/* User greeting */}
      <div className="text-stone-600 text-sm">
        {userName && t("userGreeting", { name: userName })}
      </div>

      {/* Action buttons */}
      <div className={isMobile ? "space-y-2" : "flex gap-2"}>
        <Button
          onClick={handleDashboardClick}
          variant="primary"
          size={isMobile ? "medium" : "small"}
        >
          {t("navItems.dashboard")}
        </Button>

        <Button
          onClick={handleLogout}
          variant="secondary"
          size={isMobile ? "medium" : "small"}
        >
          {t("navItems.logOut")}
        </Button>
      </div>
    </div>
  );
};
```

---

## 🔄 **Actions para Autenticación**

### **Server Actions:**
```typescript
// src/actions/comedianActions.ts
'use server';

import { createClient } from '@/utils/supabase/server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function signUpAction(formData: FormData) {
  const supabase = createClient();

  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
    name: formData.get('name') as string,
    joke: formData.get('joke') as string,
  };

  const { error } = await supabase.auth.signUp({
    email: data.email,
    password: data.password,
    options: {
      data: {
        name: data.name,
        registration_joke: data.joke,
      },
    },
  });

  if (error) {
    console.error('Error during sign up:', error);
    return { error: error.message };
  }

  revalidatePath('/', 'layout');
  redirect('/comedian/login?message=Registration successful');
}

export async function signInAction(formData: FormData) {
  const supabase = createClient();

  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    console.error('Error during sign in:', error);
    return { error: error.message };
  }

  revalidatePath('/', 'layout');
  redirect('/joke/setup/final');
}

export async function signOutAction() {
  const supabase = createClient();
  await supabase.auth.signOut();
  revalidatePath('/', 'layout');
  redirect('/');
}
```

---

## 🛡️ **Seguridad y Mejores Prácticas**

### **Row Level Security (RLS):**
```sql
-- supabase-schema.sql
-- Enable RLS on tables
ALTER TABLE jokes ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;

-- Policy for jokes table
CREATE POLICY "Users can view all jokes" ON jokes
  FOR SELECT USING (true);

CREATE POLICY "Users can insert their own jokes" ON jokes
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own jokes" ON jokes
  FOR UPDATE USING (auth.uid() = user_id);

-- Policy for user_profiles table
CREATE POLICY "Users can view their own profile" ON user_profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile" ON user_profiles
  FOR UPDATE USING (auth.uid() = id);
```

### **Environment Variables:**
```bash
# .env.local
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

# Production
NEXT_PUBLIC_SUPABASE_URL=https://prod-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=prod-anon-key
SUPABASE_SERVICE_ROLE_KEY=prod-service-role-key
```

### **Error Handling:**
```typescript
// Consistent error handling
const handleAuthError = (error: AuthError) => {
  switch (error.message) {
    case 'Invalid login credentials':
      return 'Email or password is incorrect';
    case 'User already registered':
      return 'An account with this email already exists';
    case 'Password should be at least 6 characters':
      return 'Password must be at least 6 characters long';
    default:
      return 'An unexpected error occurred. Please try again.';
  }
};
```

---

## 📊 **Testing de Autenticación**

### **Test de AuthContext:**
```typescript
// __tests__/AuthContext.test.tsx
import { render, screen, waitFor } from '@testing-library/react';
import { AuthProvider, useAuth } from '@/contexts/AuthContext';

const TestComponent = () => {
  const { isAuthenticated, loading } = useAuth();
  
  if (loading) return <div>Loading...</div>;
  return <div>{isAuthenticated ? 'Authenticated' : 'Not authenticated'}</div>;
};

describe('AuthContext', () => {
  it('provides authentication state', async () => {
    render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>
    );

    // Initially loading
    expect(screen.getByText('Loading...')).toBeInTheDocument();

    // After loading
    await waitFor(() => {
      expect(screen.getByText(/authenticated/)).toBeInTheDocument();
    });
  });
});
```

---

**Última actualización:** 5 de agosto, 2025
