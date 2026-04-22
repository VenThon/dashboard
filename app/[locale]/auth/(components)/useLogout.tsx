"use client";

import { useRouter } from "next/navigation";

import { logoutService } from "@/service/auth.service";

import { toast } from "sonner";

export function useLogout() {
  const router = useRouter();

  const logout = async () => {
    await logoutService.logout();

    toast.success("Logged out 👋");

    router.push("/auth/login");
  };

  return { logout };
}
