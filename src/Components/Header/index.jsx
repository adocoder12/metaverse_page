import headerStyle from "./style.module.css";
import Logo from "@/assets/Logo.png";

const Header = () => {
  return (
    <nav className={headerStyle.header}>
      <div className={headerStyle.headerWrapper}>
        <img className={headerStyle.headerLogo} src={Logo} alt="Logo-Company" />
        <div className={headerStyle.linksWrapper}>
          <ul className={headerStyle.navLinks}>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Login</a>
            </li>
          </ul>
          <button className={headerStyle.signUpBtn}>Sign up</button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
