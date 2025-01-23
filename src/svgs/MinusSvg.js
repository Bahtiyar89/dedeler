import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function MinusSvg(props) {
  return (
    <Svg
      width="40px"
      height="40px"
      viewBox="0 -0.5 21 21"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M329.3 371h8.4v-2h-8.4v2zm4.2 7c-4.633 0-8.4-3.589-8.4-8 0-4.412 3.767-8 8.4-8 4.632 0 8.4 3.588 8.4 8 0 4.411-3.768 8-8.4 8zm0-18c-5.8 0-10.5 4.477-10.5 10s4.7 10 10.5 10c5.798 0 10.5-4.477 10.5-10s-4.702-10-10.5-10z"
        transform="translate(-379 -520) translate(56 160)"
        fill="#000"
        stroke="none"
        strokeWidth={1}
        fillRule="evenodd"
      />
    </Svg>
  );
}

export default MinusSvg;
