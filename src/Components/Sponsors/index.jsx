import Sponsor_style from "./style.module.css";

import slack_logo from "@/assets/Sponsors/slack_logo.png";
import figma_logo from "@/assets/Sponsors/figma_logo.png";
import cocaCola_logo from "@/assets/Sponsors/cocaCola_logo.png";

// const sponsorsList = [slack_logo];

const Sponsors = () => {
  return (
    <div className={Sponsor_style.container}>
      <h3 className={Sponsor_style.title}>Brands that trusts us</h3>
      <div className={Sponsor_style.logoContainer}>
        <img className={Sponsor_style.sponsorLogo} src={figma_logo} alt="" />
        <img className={Sponsor_style.sponsorLogo} src={cocaCola_logo} alt="" />
        <img className={Sponsor_style.sponsorLogo} src={slack_logo} alt="" />
      </div>
    </div>
  );
};

export default Sponsors;
