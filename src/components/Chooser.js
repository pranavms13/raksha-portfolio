import React from 'react';

const Chooser = (props) => {
  return (
    <div className="chooser_screen">
        <div>
            <div style={{padding: '50px'}}>Turn on Sounds ?</div>
            <div style={{ fontSize: '23px' }}>
                <button style={{paddingLeft: '25px', paddingRight: '25px'}} onClick={() => props.chooseranswer(false)}>Yes</button>
                <button style={{paddingLeft: '25px', paddingRight: '25px'}} onClick={() => props.chooseranswer(true)}>No</button>
            </div>
        </div>

    </div>
  );
};

export default Chooser;