import { fetcher } from "@/lib/fetches/fetcher";

export const loginService = {
  userLogin: (data: { username: string; password: string }) =>
    fetcher("/api/login", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
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

// export const SettingService = {
//   profile: () =>
//     fetcher("/api/profile", {
//       method: "GET",
//       // credentials: "include",
//     }),
// };
// export const SettingService = {
//   profile: () =>
//     fetcher("/api/profile", {
//       method: "GET",
//     }),
// };

export const SettingService = {
  profile: async () => {
    const res = await fetch("/api/profile", {
      method: "GET",
      credentials: "include",
    });

    const data = await res.json();

    console.log("Profile status:", res.status);
    console.log("Profile response:", data);

    if (!res.ok) {
      throw new Error(data.message || "Failed to fetch profile");
    }

    return data;
  },
};
