/** @jsxImportSource @emotion/react */
import { useQuery } from "@tanstack/react-query";
import { getPrincipalRequest } from "../../apis/auth/authApis";
import Header from "../Header/Header";
import * as s from "./styles";
import { useEffect } from "react";
import { usePrincipalState } from "../../store/usePrincipalStore";
import { data } from "react-router-dom";

function Layout({ children }) {
  const accessToken = localStorage.getItem("accessToken");
  const { isLoggedIn, principal, login, logout } = usePrincipalState();
  const { isLoading } = useQuery({
    queryKey: ["getPrincipal"],
    queryFn: getPrincipalRequest,
    refetch: 1,
    enabled: !!accessToken,
  });

  useEffect(() => {
    if (data.data.status === "success") {
      login(data?.data.data);
    }
  }, [data, login]);

  return (
    <div css={s.layout}>
      {isLoading ? (
        <>
          <p>로딩중...</p>
        </>
      ) : (
        <>
          <Header />
          <div css={s.mainContainer}>{children}</div>
        </>
      )}
    </div>
  );
}

export default Layout;
