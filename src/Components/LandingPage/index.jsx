/* eslint-disable react/prop-types */
import landingPageStyle from "./style.module.css";
const LandingPage = (props) => {
  const { image } = props;
  return (
    <div className={landingPageStyle.hero}>
      <div className={landingPageStyle.heroLeft}>
        <h1 className={landingPageStyle.title}>
          Launch your best product through the Metaverse.
        </h1>
        <h4>
          We provide the best service for your company product in the real world
        </h4>
        <div className={landingPageStyle.btnWrapper}>
          <button>Get started</button>
          <button className={landingPageStyle.secondaryBtn}>Play Demo</button>
        </div>
      </div>
      <div className={landingPageStyle.heroRigth}>
        <img
          className={landingPageStyle.landingImg}
          src={image}
          alt="Landing-image"
        />
      </div>
    </div>
  );
};

export default LandingPage;
