import { createContext, ReactNode, useEffect, useState } from "react";
import { setCookie, parseCookies, destroyCookie } from "nookies";
import { api } from "./../services/api";
import { useNavigate } from "react-router-dom";

type User = {
  id: string;
  name: string;
  email: string;
  role: string;
};

type SignInCredentials = {
  email: string;
  password: string;
};

type AuthContextData = {
  signIn(credentials: SignInCredentials): Promise<void>;
  user?: User;
  isAuthenticated: boolean;
};

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextData);

export function DestroyCookies() {
  destroyCookie(undefined, "cursoBeta.token", {
    path: "/home",
  });
}

export function AuthProvider({ children }: AuthProviderProps) {
  const navigate = useNavigate();
  const [user, setUser] = useState<User>();
  const isAuthenticated = !!user;

  useEffect(() => {
    (async () => {
      const { "cursoBeta.token": token } = parseCookies();

      if (token) {
        api
          .get("authenticated-user")
          .then((response) => {
            const { id, name, email, role } = response.data;

            setUser({
              id,
              name,
              email,
              role,
            });
          })
          .catch(() => {
            destroyCookie(undefined, "cursoBeta.token", {
              path: "/home",
            });
            navigate("/home");
          });
      }
    })();
  }, []);

  async function signIn({ email, password }: SignInCredentials) {
    try {
      const response = await api.post("/authenticate/", {
        email,
        password,
      });

      const { token } = response.data;

      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      api
        .get("usuario-autenticado")
        .then((response) => {
          const { id, name, email, role } = response.data;
          setUser({
            id,
            name,
            email,
            role,
          });
        })
        .catch(() => {
          destroyCookie(undefined, "cursoBeta.token");
          navigate("/home");
        });

      setCookie(undefined, "cursoBeta.token", token, {
        maxAge: 60 * 60 * 24 * 30,
        path: "/home",
      });

      navigate("/home");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <AuthContext.Provider value={{ signIn, isAuthenticated, user }}>
      {children}
    </AuthContext.Provider>
  );
}
