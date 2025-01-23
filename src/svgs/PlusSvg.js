import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function PlusSvg(props) {
  return (
    <Svg
      width="40px"
      height="40px"
      viewBox="0 -0.5 21 21"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M374.55 369h3.15v2h-3.15v3h-2.1v-3h-3.15v-2h3.15v-3h2.1v3zm-1.05 9c-4.632 0-8.4-3.589-8.4-8s3.768-8 8.4-8c4.632 0 8.4 3.589 8.4 8s-3.768 8-8.4 8zm0-18c-5.8 0-10.5 4.477-10.5 10s4.7 10 10.5 10 10.5-4.477 10.5-10-4.7-10-10.5-10z"
        transform="translate(-419 -520) translate(56 160)"
        fill="#000"
        stroke="none"
        strokeWidth={1}
        fillRule="evenodd"
      />
    </Svg>
  );
}

export default PlusSvg;
