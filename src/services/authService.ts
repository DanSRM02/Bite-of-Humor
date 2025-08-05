import { ComedianLoginData, ComedianSignUpData } from "@/types/authTypes";
import { createClientServer } from "@/utils/supabase/server";
import { createClient } from "@/utils/supabase/client";

export const comedianSignIn = async (signInData: ComedianLoginData) => {
  try {
    const supabase = await createClientServer();
    const { data, error } = await supabase.auth.signInWithPassword({
      email: signInData.email,
      password: signInData.password,
    });

    if (error) {
      throw error;
    }

    return data.user;
  } catch (error) {    
    throw error;
  }
};

export async function comedianSignUp(signUpData: ComedianSignUpData) {
  try {
    const supabase = await createClientServer();

    const { data, error } = await supabase.auth.signUp({
      email: signUpData.email,
      password: signUpData.password,
      options: {
        data: {
          comedian_name: signUpData.name,
        },
      },
    });

    if (error) throw error;

    return data.user;
  } catch (error) {    
    throw error;
  }
}

export const getCurrentUser = async () => {
  try {
    const supabase = createClient();
    const {
      data: { user },
      error,
    } = await supabase.auth.getUser();

    if (error) {
      if (error.message?.includes("Auth session missing")) {
        return null;
      }
      throw error;
    }

    return user;
  } catch (error: any) {
    if (!error?.message?.includes("Auth session missing")) {
      console.error("Error getting current user:", error);
    }
    return null;
  }
};

export const isAuthenticated = async (): Promise<boolean> => {
  try {
    const user = await getCurrentUser();
    return user !== null;
  } catch (error) {
    
    return false;
  }
};

export const comedianSignOut = async () => {
  try {
    const supabase = createClient();
    const { error } = await supabase.auth.signOut();

    if (error) throw error;
    return true;
  } catch (error) {
    console.error("Error signing out:", error);
    throw error;
  }
};

export const onAuthStateChange = (callback: (user: any) => void) => {
  const supabase = createClient();

  const {
    data: { subscription },
  } = supabase.auth.onAuthStateChange((event, session) => {
    callback(session?.user || null);
  });

  return subscription;
};

export const getUserMetadata = async () => {
  try {
    const user = await getCurrentUser();
    if (!user) return null;

    return {
      id: user.id,
      email: user.email,
      comedianName:
        user.user_metadata?.comedian_name || user.email?.split("@")[0],
      avatarUrl: user.user_metadata?.avatar_url,
    };
  } catch (error) {    
    return error;
  }
};
