// export async function fetcher(url: string, options?: RequestInit) {
//   const res = await fetch(url, {
//     ...options,
//     credentials: "include", //  important for cookie auth
//   });

//   if (!res.ok) {
//     const error = await res.json();
//     throw new Error(error.message || "Something went wrong");
//   }

//   return res.json();
// }

export async function fetcher(url: string, options?: RequestInit) {
  const res = await fetch(url, {
    ...options,
    credentials: "include",
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Something went wrong");
  }

  return data;
}
