import { css } from "@emotion/react";

export const container = css`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const profileImgBox = css`
  & > div {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 1px solid #dbdbdb;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;

    & > img {
      width: 100%;
    }

    & > input {
      display: none;
    }
  }
`;

export const buttonBox = css`
  & > button {
    border: none;
    border-radius: 8px;
    padding: 10px 12px;
    font-size: 14px;
    color: white;
    background-color: #0d6efd;

    &:hover {
      opacity: 0.8;
    }
  }
`;
