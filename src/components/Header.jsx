import Logo from "../assets/logo.png";

export default function Header() {
  return (
    <header id="header">
      <img src={Logo} alt="Green bag with dollars" />
      <h1>Investment Calculator</h1>
    </header>
  );
}
