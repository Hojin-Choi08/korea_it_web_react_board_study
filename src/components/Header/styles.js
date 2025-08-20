import { css } from "@emotion/react";

export const header = css`
  height: 60px;
  width: 100%;
  display: flex;
  border-bottom: 1px solid #dbdbdb;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  padding: 8px 20px;

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    & > ul {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 20px;

      & > li {
        cursor: pointer;
        color: #333;

        & > a {
          text-decoration: none;
          color: #333;
        }
      }
    }
  }
`;

export const headerIcon1 = css`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 17px;
  border-radius: 50%;
  border: 1px solid #dbdbdb;
  color: #333;
  width: 40px;
  height: 40px;
  box-sizing: border-box;
`;

export const headerIcon2 = css`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 17px;
  border-radius: 50%;
  border: 1px solid #dbdbdb;
  color: #333;
  width: 40px;
  height: 40px;
  box-sizing: border-box;
  padding-left: 3px;
`;
