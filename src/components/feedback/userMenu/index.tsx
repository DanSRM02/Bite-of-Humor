"use client";

import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import Button from "@/components/inputs/button";

interface AuthenticatedUserMenuProps {
  isMobile?: boolean;
  onMenuClose?: () => void;
}

const AuthenticatedUserMenu = ({
  isMobile = false,
  onMenuClose,
}: AuthenticatedUserMenuProps) => {
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
    <div
      className={
        isMobile
          ? "mt-4 pt-4 border-t border-stone-200 bg-stone-50/50 rounded-lg p-3"
          : "flex items-center gap-2 ml-4 pl-4 border-l border-stone-200"
      }
    >
      <div
        className={
          isMobile
            ? "px-2 py-1 text-stone-600 text-sm mb-2"
            : "text-stone-600 text-sm lg:text-base px-2"
        }
      >
        {userName && (
          <span className="font-medium">
            {t("userGreeting", { name: userName })}
          </span>
        )}
      </div>
      <div className={isMobile ? "space-y-2" : "flex gap-2"}>
        <Button
          onClick={handleDashboardClick}
          variant="primary"
          size={isMobile ? "medium" : "small"}
          className={
            isMobile ? "w-full text-left justify-start" : "text-sm lg:text-base"
          }
          aria-label={t("navItems.dashboard")}
        >
          {t("navItems.dashboard")}
        </Button>

        <Button
          onClick={handleLogout}
          variant="secondary"
          size={isMobile ? "medium" : "small"}
          className={
            isMobile ? "w-full text-left justify-start" : "text-sm lg:text-base"
          }
          aria-label={t("navItems.logOut")}
        >
          {t("navItems.logOut")}
        </Button>
      </div>
    </div>
  );
};

export default AuthenticatedUserMenu;
