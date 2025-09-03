/** @jsxImportSource @emotion/react */
import * as s from "./styles";

function MyBoard() {
  return (
    <div css={s.container}>
      <ul>
        <li>
          <div>
            <span>1.</span>
            <strong>title</strong>
          </div>
          <span>date</span>
        </li>
      </ul>
    </div>
  );
}

export default MyBoard;
