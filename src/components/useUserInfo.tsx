/* eslint-disable react-refresh/only-export-components */
import {
  SetStateAction,
  createContext,
  useContext,
  useState,
  PropsWithChildren,
  Dispatch,
} from "react";

type UserRole =
  | "user:register"
  | "user:edit"
  | "user:delete"
  | "command:see"
  | "command:add"
  | "command:edit"
  | "command:delete"
  | "device:see"
  | "device:delete";

export type UserInfo = {
  user: { id: number; name: string; email: string };
  token: string;
  roles: Array<UserRole>;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const UserContext = createContext<
  [UserInfo | undefined, Dispatch<SetStateAction<UserInfo | undefined>>]
>([undefined, () => {}]);

export function UserContextProvider({ children }: PropsWithChildren) {
  const localUserInfo = localStorage.getItem("userInfo");
  const userInfoState = useState<UserInfo | undefined>(
    localUserInfo ? (JSON.parse(localUserInfo) as UserInfo) : undefined
  );

  return <UserContext.Provider value={userInfoState}>{children}</UserContext.Provider>;
}

export const useUserData = () => useContext(UserContext)?.[0];
export const useSetUserData = () => useContext(UserContext)?.[1];
