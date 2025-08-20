import { css } from "@emotion/react";

export const layout = css`
  width: 100svw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const mainContainer = css`
  padding: 0 100px;
  width: 60%;
  height: calc(100vh - 60px);
  min-height: 800px;
  box-sizing: border-box;
`;
