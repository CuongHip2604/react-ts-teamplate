import LoadingOverlay from "react-loading-overlay-ts";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

interface PropsDarkBackground {
  disappear: boolean;
}

const DarkBackground = styled.div`
  display: none;
  position: fixed;
  z-index: 1035;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.6);

  ${(props: PropsDarkBackground) =>
    props.disappear &&
    css`
      display: block;
    `}
`;

Loading.propTypes = {
  loading: PropTypes.bool,
};

function Loading(props: any) {
  const { loading } = props;
  const [loaded, setLoaded] = useState(loading);
  useEffect(() => {
    setLoaded(loading);
  }, [loading]);
  return (
    <DarkBackground disappear={loaded}>
      <LoadingOverlay
        active={true}
        spinner={true}
        text="Loading..."
      ></LoadingOverlay>
    </DarkBackground>
  );
}

export default Loading;
