import axios from "axios";
import React, { createContext, useState, useEffect, ReactNode } from "react";
import { useNavigate } from "react-router-dom";

interface UserProviderProps {
  children: ReactNode;
}

export const UserContext = createContext<string | null>(null);

export const UserProvider: React.FC<UserProviderProps> = (props) => {
  const [userInfo, setUserInfo] = useState<string | null>(null);
  const navigate = useNavigate();
  console.log(userInfo);

  useEffect(() => {
    const hashParams = new URLSearchParams(window.location.hash.slice(1));
    const accessToken = hashParams.get("access_token");
    const tokenType = hashParams.get("token_type");

    console.log(tokenType, accessToken);

    if (accessToken && tokenType) {
      axios
        .get("https://discord.com/api/users/@me", {
          headers: {
            Authorization: `${tokenType} ${accessToken}`,
          },
        })
        .then((res) => {
          localStorage.setItem("discordInfo", JSON.stringify(res.data));
          navigate("/");
        })
        .catch(console.error);
    } else {
      if (!userInfo && localStorage.getItem("discordInfo")) {
        setUserInfo(localStorage.getItem("discordInfo"));
      }
    }
  }, [userInfo]);

  return (
    <UserContext.Provider value={userInfo}>
      {props.children}
    </UserContext.Provider>
  );
};
