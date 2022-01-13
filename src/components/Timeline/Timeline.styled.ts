import styled from 'styled-components';
import { device } from '../../styles/media-query.styles';

const StyledTimeline = styled.div`
    position: relative;

    .module--right,
    .module--left {
        position: relative;
        padding: 1rem;

        ::before {
            content: '';
            position: absolute;
            left: 2px;
            top: 0;
            height: 100%;
            width: 3px;
            background: black;
            border-radius: 50px;
        }

        ::after {
            content: '';
            position: absolute;
            left: -1px;
            top: 0;
            height: 10px;
            width: 10px;
            background: black;
            border-radius: 50px;
        }

        .final-dot {
            position: absolute;
            left: -1px;
            bottom: 0;
            height: 10px;
            width: 10px;
            background: black;
            border-radius: 50px;
        }

        .content {
            padding: 1rem;
            background: lightgray;
            display: grid;
            grid-template-areas:
                'title date'
                'paragraph paragraph';
            justify-content: space-between;
            align-items: baseline;
            width: 300px;
            max-width: 100%;
            border: 2px solid black;

            .title {
                font-size: 1.1rem;
                font-weight: 500;
                grid-area: title;
                margin-bottom: 1rem;
            }

            .time {
                grid-area: date;
                padding: 0 0.8rem;
                border: 2px solid black;
                background: white;
                justify-self: end;
            }

            .description {
                grid-area: paragraph;
            }
        }
    }

    @media ${device.tablet} {
        display: grid;
        grid-template-columns: 1fr 5px 1fr;

        .module--left {
            grid-column: 1 / 3;
            grid-row: span 1;

            .content {
                grid-template-areas:
                    'title date'
                    'paragraph paragraph';
            }

            .final-dot {
                left: initial;
                right: -3px;
            }

            ::before {
                left: initial;
                right: 0;
            }

            ::after {
                left: initial;
                right: -4px;
            }
        }

        .module--right {
            grid-column: 2 / 4;
            grid-row: span 1;

            .content {
                grid-template-areas:
                    'date title'
                    '. paragraph';
                justify-content: start;

                .time {
                    margin-right: 1rem;
                }
            }
        }
    }
`;

export default StyledTimeline;
