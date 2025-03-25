import Link from "next/link";
import HeaderLink from "./header-link";

const MainHeader = () => {
  return (
    <header className="main-header">
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>

        <li>
          <HeaderLink href="/movies">Movies</HeaderLink>
        </li>
        <li>
          <HeaderLink href="/favorite">Favorite</HeaderLink>
        </li>
      </ul>
    </header>
  );
};

export default MainHeader;
