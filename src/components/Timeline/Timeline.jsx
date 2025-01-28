import React, { useEffect } from 'react';
import './Timeline.css';

const Timeline = () => {
    useEffect(() => {
        const slider = document.querySelector('.custom-slider');
        const cardsContainer = document.querySelector('.timeline-cards');
        const updateSliderPosition = () => {
            const scrollPercentage =
                cardsContainer.scrollTop / (cardsContainer.scrollHeight - cardsContainer.clientHeight);

            const thumbPosition = scrollPercentage * (cardsContainer.clientHeight - 20); // Adjust thumb position
            slider.style.setProperty('--thumb-top', `${thumbPosition}px`);

            const fillPercentage = scrollPercentage * 100; 

            slider.style.background = `linear-gradient(to bottom, #E35734 ${fillPercentage}%, #E4D9BA ${fillPercentage}%)`;
        };

        cardsContainer.addEventListener('scroll', updateSliderPosition);

        updateSliderPosition();

        return () => {
            cardsContainer.removeEventListener('scroll', updateSliderPosition);
        };
    }, []);

    return (
        <div className="timeline-container">
            <div className="timeline-heading">
                <img src="/pics/timeline-heading.svg" alt="Timeline Heading" />
            </div>
            <div className="timeline-cards">
                <div className="card card1">
                    <div className="header">
                        <img src="/pics/calendar-fold.png" alt="Calendar Icon" />
                        <h2>Registration Starts</h2>
                    </div>
                    <p>March 5, 2025</p>
                </div>
                <div className="card card2">
                    <div className="header">
                        <img src="/pics/calendar-fold.png" alt="Calendar Icon" />
                        <h2>Registration Ends</h2>
                    </div>
                    <p>April 17, 2025</p>
                </div>
                <div className="card card3">
                    <div className="header">
                        <img src="/pics/calendar-fold.png" alt="Calendar Icon" />
                        <h2>Ideathon</h2>
                    </div>
                    <p>April 19-20, 2025</p>
                </div>
                <div className="card card4">
                    <div className="header">
                        <img src="/pics/calendar-fold.png" alt="Calendar Icon" />
                        <h2>Ideathon Results</h2>
                    </div>
                    <p>April 21, 2025</p>
                </div>
                <div className="card card5">
                    <div className="header">
                        <img src="/pics/calendar-fold.png" alt="Calendar Icon" />
                        <h2>Speaker Sessions</h2>
                    </div>
                    <p>April 22-23, 2025</p>
                </div>
                <div className="card card6">
                    <div className="header">
                        <img src="/pics/calendar-fold.png" alt="Calendar Icon" />
                        <h2>Hack&Chill Day-1</h2>
                    </div>
                    <p>April 25, 2025</p>
                </div>
                <div className="card card7">
                    <div className="header">
                        <img src="/pics/calendar-fold.png" alt="Calendar Icon" />
                        <h2>Hack&Chill Day</h2>
                    </div>
                    <p>April 26, 2025</p>
                </div>
                <div className="card card8">
                    <div className="header">
                        <img src="/pics/calendar-fold.png" alt="Calendar Icon" />
                        <h2>Hack&Chill Final</h2>
                    </div>
                    <p>April 27, 2025</p>
                </div>
            </div>
            <div className="custom-slider"></div>
            
        </div>
    );
};

export default Timeline;
