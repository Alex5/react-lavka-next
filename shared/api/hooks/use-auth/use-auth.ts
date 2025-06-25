"use client"

import { fetcher } from "@/shared/api/fetcher";
import useSWR from "swr";

export type YandexUserInfo = {
  id: string;
  login: string;
  client_id: string;
  display_name: string;
  real_name: string;
  first_name: string;
  last_name: string;
  sex: number | null;
  default_email: string;
  emails: string[];
  birthday: string;
  default_avatar_id: string;
  is_avatar_empty: boolean;
  default_phone: {
    id: number;
    number: string;
  };
  psuid: string;
};

export function useAuth() {
  const { data, mutate, ...rest } = useSWR<
    YandexUserInfo,
    unknown,
    string
  >("me", (key) => fetcher(key, {credentials: 'include'}));

  async function logout() {
    await mutate(undefined, { revalidate: false });

    await fetcher("logout", {
      method: "PATCH",
      credentials: "include",
    });

    await mutate();
  }

  return {
    user: data,
    logout,
    ...rest,
  };
}
