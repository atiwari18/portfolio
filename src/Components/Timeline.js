// Timeline.js
import React, { useState, useEffect } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css'; // Import the CSS
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS if using npm
import './Timeline.css'; // Import your custom CSS

const Timeline = () => {
  const [isRightSide, setIsRightSide] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsRightSide(window.innerWidth > 1170);
    };

    // Set initial value
    handleResize();

    // Add event listener for resize
    window.addEventListener('resize', handleResize);

    // Clean up event listener on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <VerticalTimeline>
      {/* Education */}
      <VerticalTimelineElement
        date="August 2024 - December 2025"
        iconStyle={{ background: 'black', color: 'orange' }}
        icon={<i className="fas fa-graduation-cap"></i>}
        className={isRightSide ? 'right-side' : ''} // Conditionally apply the class
      >
        <h3 className="vertical-timeline-element-title">Master of Science in Computer Science</h3>
        <h4 className="vertical-timeline-element-subtitle">Worcester Polytechnic Institute</h4>
      </VerticalTimelineElement>

      {/* Work Experience */}
      <VerticalTimelineElement
        date="August 2020 - December 2024"
        iconStyle={{ background: 'black', color: 'orange' }}
        icon={<i className="fas fa-graduation-cap"></i>}
      >
        <h3 className="vertical-timeline-element-title">Bachelor of Science in Industrial Engineering</h3>
        <h4 className="vertical-timeline-element-subtitle">Worcester Polytechnic Institute</h4>
      </VerticalTimelineElement>

      {/* Add more timeline elements here */}
      
    </VerticalTimeline>
  );
};

export default Timeline;
