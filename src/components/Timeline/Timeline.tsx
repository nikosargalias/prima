import React, { useEffect, useState } from 'react';
import { generateNewTime } from '../../utils/generateNewTime';
import StyledTimeline from './Timeline.styled';

type events = {
    type: string;
    description: string;
    time?: string;
};

const predefinedEvents: events[] = [
    { type: 'Initial event', description: 'An initial event occured' },
    { type: 'Second event', description: 'We have liftoff' },
    { type: 'Third event', description: 'Hmm, hello again' },
    {
        type: 'Fourth event',
        description: 'Functional tests are ideal for React components',
    },
    {
        type: 'Fifth event',
        description: 'Testing library is a great library for testing',
    },
    { type: 'Sixth event', description: 'Jest goes along nicely with it' },
];

let iteration = 0;

const Timeline = () => {
    const [events, setEvents] = useState([] as events[]);

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
        }, 2000);

        return () => {
            clearInterval(intervalRef);
        };
    }, []);

    return (
        <StyledTimeline>
            {events.map((e, i, arr) => {
                const isOdd = i % 2;
                return (
                    <div className={isOdd ? 'module--right' : 'module--left'}>
                        <div className='content'>
                            <h2 className='title'>{e.type}</h2>
                            <p className='time'>{e.time}</p>
                            <p className='description'>{e.description}</p>
                        </div>
                        {arr.length - 1 === i && (
                            <div className='final-dot'></div>
                        )}
                    </div>
                );
            })}
        </StyledTimeline>
    );
};

export default Timeline;
