import React, { useEffect, useMemo, useState } from 'react';
import { generateNewTime } from '../../utils/generateNewTime';
import { predefinedEvents } from './Timeline.data';
import StyledTimeline from './Timeline.styled';
import { event } from './Timeline.types';

let iteration = 0;

const Timeline = () => {
    const [events, setEvents] = useState([] as event[]);

    useEffect(() => {
        const intervalRef = setInterval(() => {
            const nextEvent = {
                ...predefinedEvents[iteration % predefinedEvents.length],
                time: generateNewTime(),
            };
            setEvents((prevState) => {
                if (predefinedEvents.length === prevState.length) {
                    return [
                        nextEvent,
                        ...prevState.slice(0, prevState.length - 1),
                    ];
                }

                return [nextEvent, ...prevState];
            });
            iteration++;
        }, 5000);

        return () => {
            clearInterval(intervalRef);
        };
    }, []);

    const EventComponents = useMemo(() => {
        return events.map((e, i, arr) => {
            const isOdd = i % 2;
            return (
                <div
                    key={i}
                    className={isOdd ? 'module--right' : 'module--left'}
                >
                    <div className='content'>
                        <h2 className='title'>{e.type}</h2>
                        <p className='time'>{e.time}</p>
                        <p className='description'>{e.description}</p>
                    </div>
                    {arr.length - 1 === i && <div className='final-dot'></div>}
                </div>
            );
        });
    }, [events]);

    return (
        <StyledTimeline data-testid='timeline-div'>
            {EventComponents && EventComponents}
        </StyledTimeline>
    );
};

export default Timeline;
