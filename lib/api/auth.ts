export interface LoginCredentials {
  email: string;
  password: string;
}

export const loginUser = async (credentials: LoginCredentials) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || "Login failed");
  }
  return res.json();
};

export const refreshToken = async () => {
  const refresh = localStorage.getItem("refreshToken");
  console.log(refresh);
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/login/refresh/`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ refresh }),
    }
  );

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || "Failed to refresh token");
  }
  const result = await res.json();
  localStorage.setItem("accessToken", result.access);
  localStorage.setItem("refreshToken", result.refresh);
};
