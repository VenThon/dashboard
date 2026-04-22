"use client";

import { useLogout } from "./useLogout";

export default function LogoutButton() {
  const { logout } = useLogout();

  return <button onClick={logout}>Logout</button>;
}
