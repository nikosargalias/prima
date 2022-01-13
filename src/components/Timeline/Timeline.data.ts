import { event } from './Timeline.types';

export const predefinedEvents: event[] = [
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
