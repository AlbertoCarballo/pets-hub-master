import React from 'react';

const ProfileTool = () => {
  return (
    <>
      <style>
        {`
          .mensaje a {
            color: inherit;
            margin-right: .5rem;
            display: inline-block;
          }
          .mensaje a:hover {
            color: #309B76;
            transform: scale(1.4);
          }
          .mis-redes {
            display: block;
            position: fixed;
            bottom: 1rem;
            left: 1rem;
            opacity: 0.5;
            z-index: 1000;
          }
          .mis-redes p {
            font-size: .75rem;
          }
          .mis-redes a {
            margin-right: 0.5rem;
          }
        `}
      </style>
      <div className="mis-redes">
        <div>
          <a target="_blank" href="https://www.facebook.com/ApockGraficos"><i className="fab fa-facebook-square"></i></a>
          <a target="_blank" href="https://twitter.com/ApockGraficos"><i className="fab fa-twitter"></i></a>
          <a target="_blank" href="https://www.instagram.com/ApockGraficos"><i className="fab fa-instagram"></i></a>
          <a target="_blank" href="https://www.youtube.com/channel/UC15DkMZQ80aoW_Rqk4n2T_w"><i className="fab fa-youtube"></i></a>
        </div>
      </div>
    </>
  );
}

export default ProfileTool;
