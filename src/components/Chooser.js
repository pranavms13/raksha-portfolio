import React from 'react';
import me from '../images/me.png'

function detectMob() {
  const toMatch = [
      /Android/i,
      /webOS/i,
      /iPhone/i,
      /iPad/i,
      /iPod/i,
      /BlackBerry/i,
      /Windows Phone/i
  ];

  return toMatch.some((toMatchItem) => {
      return navigator.userAgent.match(toMatchItem);
  });
}

const Chooser = (props) => {
  return (
    <div className="chooser_screen">
        <div>
          <center>
            <h2 style={{ fontWeight: 'bold', fontSize: detectMob()?'75%':'185%' , paddingBottom: '30px' }}>
              Welcome To My Portfolio !
            </h2>
            <div className="chooser_me">
              <img src={me}  style={{ borderRadius: '50%' }} alt="me"/>
            </div>
          </center>
          <div style={{padding: '50px', fontSize: '25px'}}>For a better accoustic experience, turn on sounds</div>
          <div style={{ fontSize: '23px' }}>
              <button className="chooserbtn" onClick={() => props.chooseranswer(false)}>Hell Yeah !</button>
              <button className="chooserbtn" onClick={() => props.chooseranswer(true)}>Nope</button>
          </div>
        </div>
    </div>
  );
};

export default Chooser;