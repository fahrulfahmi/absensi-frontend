export const authService = {
    login : async (username: string, password: string) => {
          if (username === "admin" && password === "123") {
      return {
        token: "fake-jwt-token",
        user: { id: "1", role: "super-admin" },
      };
    }
    throw new Error("Invalid credentials");
    }
}