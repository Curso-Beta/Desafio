import { useQuery } from "react-query";
import { api } from "../api";

type User = {
  id: string;
  email: string;
  nome: string;
};

export async function getUser(): Promise<User[]> {
  const { data } = await api.get("candidatos");

  const users = data.map((user: User) => {
    return {
      id: user.id,
      email: user.email,
      nome: user.nome,
    };
  });

  return users;
}

export function useCandidatos() {
  return useQuery("users", getUser, {
    staleTime: 1000 * 60 * 10,
  });
}
