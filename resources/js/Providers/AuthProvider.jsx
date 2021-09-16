import { createContext, useState } from "react";

export const AuthContext = createContext({ user: null });

export default function AuthProvider({ auth: authUser, children }) {
  const [auth, setAuth] = useState(authUser);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
}
