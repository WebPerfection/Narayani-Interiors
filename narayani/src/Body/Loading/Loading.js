// import React from 'react';
// import './LoadingSpinner.css';
// const Loading = () => {

//   return (
//     <div className="loading-spinner-overlay">
//       <div className="loading-spinner"></div>
//     </div>
//   );
// };

// export default Loading;




 import React from 'react';
import { css } from '@emotion/react';
import { BeatLoader } from 'react-spinners';

const Loading = () => {
  const override = css`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
  `;

  return (
    <div className="loading" style={{height:"400px",display:"flex",alignItems:"center"}}>
      <div style={{margin:"auto"}}>
      <BeatLoader color="#36D7B7" size={30} css={override} />
      <h2>Loading...</h2>
      </div>
    </div>
  );
};

export default Loading;
