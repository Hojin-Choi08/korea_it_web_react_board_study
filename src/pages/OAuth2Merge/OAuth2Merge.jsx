import React, { useState } from "react";
/** @jsxImportSource @emotion/react */
import * as s from "./styles";
import AuthInput from "../../components/AuthInput/AuthInput";
import { useNavigate, useSearchParams } from "react-router-dom";
import { oauth2MergeRequest } from "../../apis/auth/authApis";

function OAuth2Merge() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [searchParam] = useSearchParams();
  const navigate = useNavigate();

  const mergeOnClickHandler = () => {
    console.log(username, password);
    if (username.trim().length === 0 || password.trim().length === 0) {
      alert("아이디 또는 비밀번호를 입력해주세요.");
      return;
    } else {
      //연동 API 요청 보내기
      oauth2MergeRequest({
        username: username,
        password: password,
        provider: searchParam.get("provider"),
        providerUserId: searchParam.get("providerUserId"),
      })
        .then((response) => {
          console.log(response.data);
          if (response.data.status === "success") {
            alert(response.data.message);
            navigate("/auth/signin");
          } else if (response.data.status === "failed") {
            alert(response.data.message);
            return;
          }
        })
        .catch((error) => {
          alert("문제가 발생했습니다. 다시 시도해주세요", error);
          return;
        });
    }
  };

  return (
    <div>
      <div css={s.container}>
        <h1>로그인</h1>
        <div css={s.box}>
          <div css={s.inputBox}>
            <AuthInput
              type={"text"}
              placeholder={"아이디"}
              state={username}
              setState={setUsername}
            />
            <AuthInput
              type={"password"}
              placeholder={"비밀번호"}
              state={password}
              setState={setPassword}
            />
          </div>
          <div css={s.btnBox} onClick={mergeOnClickHandler}>
            <button>연동하기</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OAuth2Merge;
