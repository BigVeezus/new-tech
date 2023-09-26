import { SliderWrap } from "./slider-styles";
import travel from "../../assets/travel.svg";
import save from "../../assets/trap-saves.svg";

export const Slider = () => {
  return (
    <SliderWrap>
      <img src={travel} />
      <img src={save} />
    </SliderWrap>
  );
};
