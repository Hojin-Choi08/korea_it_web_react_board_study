/** @jsxImportSource @emotion/react */
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

function OAuth2Signin() {
  const [searchParam] = useSearchParams();

  useEffect(() => {
    localStorage.setItem("accessToken", searchParam.get("accessToken"));
    window.location.href = "/";
  }, [searchParam]);
  
  return <div></div>;
}

export default OAuth2Signin;
