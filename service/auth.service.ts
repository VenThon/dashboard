import { fetcher } from "@/lib/fetches/fetcher";

export const loginService = {
  userLogin: (data: { username: string; password: string }) =>
    fetcher("/api/login", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }),
};

export const logoutService = {
  logout: () =>
    fetcher("/api/logout", {
      method: "POST",
    }),
};

export const RegisterService = {
  register: (data: {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
  }) =>
    fetcher("/api/register", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }),
};
