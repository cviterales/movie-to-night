import { useRef } from "react";
import LazyLoad from "react-lazyload";
import styled, { keyframes } from "styled-components";

import style from "./style.module.scss";

const loadingAnimation = keyframes`
  0% {
    background-color: #fff;
  }
  50% {
    background-color: #ccc;
  }
  100% {
    background-color: #fff;
  }
`;

const Placeholder = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  heigth: 100%;
  animation: ${loadingAnimation} 1s infinite;
  -webkit-animation: ${loadingAnimation} 1s infinite;
  -moz-animation: ${loadingAnimation} 1s infinite;
  -o-animation: ${loadingAnimation} 1s infinite;
`;

const Image = ({src}) => {
  const refPlaceholder = useRef();

  const removePlaceholder = () => {
    refPlaceholder.current.remove();
  };
  return (
    <>
      <Placeholder ref={refPlaceholder} />
      <img
        className={style.movie_img}
        src={src}
        alt=""
        onLoad={removePlaceholder}
        onError={removePlaceholder}
        loading={LazyLoad}
      />
    </>
  );
};

export default Image;