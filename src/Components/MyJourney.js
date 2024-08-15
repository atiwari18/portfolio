import React from 'react';
import Timeline from './Timeline.js';
import TVABackground from './TVABackground.js';

const MyJourney = () => {
    return (
        <TVABackground>
            <h1 className='tva-title'> My Journey</h1>
            <Timeline/>
        </TVABackground>
    );
};

export default MyJourney;