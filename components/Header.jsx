import Link from "next/link";

const Header = ({ active }) => {
  return (
    <header>
      <h1>Hiya Jain</h1>
      <nav>
        <Link href="/" className={active == "about" ? "active" : ""}>
          about
        </Link>
        {" / "}
        <Link href="/now" className={active == "now" ? "active" : ""}>
          now
        </Link>
        {" / "}
        <a href="https://twitter.com/jainhiya_" target="_blank">
          twitter
        </a>
      </nav>
    </header>
  );
};

export default Header;
