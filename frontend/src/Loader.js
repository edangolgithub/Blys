import React from 'react';
import { css } from "@emotion/react";
import CircleLoader from "react-spinners/CircleLoader";
const override = css`
  display: block;
  margin: 0 auto;
  height : 20 px;
 
`;
const color='white';
const loading=true;
    const Loader = () => (
      <CircleLoader color={color} size={25} loading={loading} css={override}  />
    );  
export default Loader;