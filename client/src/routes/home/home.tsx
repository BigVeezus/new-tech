import { HomeWRap, LinkStyle } from "./home.styles";
import homeAsset from "../../assets/home-asset.svg";
export const Home = () => {
  return (
    <HomeWRap>
      <h1>The money app that does it all. LITERALLY!</h1>
      <img src={homeAsset} />
      <div className="btn-wrap">
        <LinkStyle to="login" className="btn-white">
          Log in
        </LinkStyle>
        <LinkStyle to="get-started" className="btn-yellow">
          {" "}
          Get started
        </LinkStyle>
      </div>
    </HomeWRap>
  );
};
