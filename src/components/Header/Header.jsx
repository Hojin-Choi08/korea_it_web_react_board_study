/** @jsxImportSource @emotion/react */
import { Link, useNavigate } from "react-router-dom";
import * as s from "./styles";
import { LuLogIn, LuUserRoundPlus } from "react-icons/lu";

function Header() {
  const navigate = useNavigate();

  const onClickNavHandler = (path) => {
    navigate(path);
  };

  return (
    <div css={s.header}>
      <div onClick={() => onClickNavHandler("/")}>BOARD</div>
      <div>
        <ul>
          <li>
            <Link to={"/board"}>게시판</Link>
          </li>
          <li>
            <Link to={"/write"}>글쓰기</Link>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li
            css={s.headerIcon1}
            onClick={() => onClickNavHandler("/auth/signin")}
          >
            <LuLogIn />
          </li>
          <li
            css={s.headerIcon2}
            onClick={() => onClickNavHandler("/auth/signup")}
          >
            <LuUserRoundPlus />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
