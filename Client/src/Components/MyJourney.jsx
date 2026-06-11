import React from 'react';
import Timeline from './Timeline.jsx';
import TVABackground from './TVABackground.jsx';
import './MyJourney.css'; // Make sure this file includes your styles

const MyJourney = () => {
    return (
        <TVABackground>
            <div className='content-wrapper'>
                <h1 className='tva-title'>My Journey</h1>
                    <Timeline/>
            </div>
        </TVABackground>
    );
};

export default MyJourney;
