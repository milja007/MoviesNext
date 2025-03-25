import Link from "next/link";
import HeaderLink from "./header-link";

const MainHeader = () => {
  return (
    <header className="main-header">
      <ul>
        <div>
          <li>
            <Link href="/">Home</Link>
          </li>
        </div>
        <div className="ul-bottom">
          <li>
            <HeaderLink href="/movies">Movies</HeaderLink>
          </li>
          <li>
            <HeaderLink href="/favorite">Favorite</HeaderLink>
          </li>
        </div>
      </ul>
    </header>
  );
};

export default MainHeader;
