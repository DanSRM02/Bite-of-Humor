"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { User } from "@supabase/supabase-js";
import {
  getCurrentUser,
  comedianSignOut,
  onAuthStateChange,
} from "@/services/authService";

interface AuthContextType {
  user: User | null;
  loading: boolean;
  logout: () => Promise<void>;
  isAuthenticated: boolean;
  userName: string | null;
  refreshAuth: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();
  const router = useRouter();

  const protectedRoutes = [
    "/joke/build/workshop",
    "/joke/build/home",
    "/joke/setup/final",
  ];

  const isPrivateRoute = protectedRoutes.some(
    (route) =>
      pathname.includes(route) ||
      pathname.match(
        new RegExp(`^\/[a-z]{2}(-[A-Z]{2})?${route.replace("/", "\\/")}$`)
      )
  );

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const currentUser = await getCurrentUser();
        setUser(currentUser);
      } catch (error) {
        console.error("AuthContext - Error initializing auth:", error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    initializeAuth();

    const subscription = onAuthStateChange((user) => {
      setUser(user);
      setLoading(false);
    });

    return () => subscription?.unsubscribe();
  }, []);

  useEffect(() => {
    if (isPrivateRoute && !loading && !user) {
      refreshAuth();
    }
  }, [pathname, isPrivateRoute, loading, user]);

  const logout = async () => {
    try {
      await comedianSignOut();
      setUser(null);
      router.refresh();
      router.replace("/joke/setup/log-in");
    } catch (error) {
      console.error("Error during logout:", error);
      throw error;
    }
  };

  const refreshAuth = async () => {
    try {
      const currentUser = await getCurrentUser();
      setUser(currentUser);
    } catch (error) {
      console.error("AuthContext - Error refreshing auth:", error);
      setUser(null);
    }
  };

  const getUserName = () => {
    if (!user) return null;
    return (
      user.user_metadata?.comedian_name || user.email?.split("@")[0] || null
    );
  };

  const value: AuthContextType = {
    user,
    loading,
    logout,
    refreshAuth,
    isAuthenticated: !!user,
    userName: getUserName(),
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
