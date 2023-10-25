import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { Font } from '../font';
import { mocks } from './mocks';

const StyledTimeline = styled.div`
  width: 900px;
  height: 20px;
  background-color: #ffffff33;
  border-radius: 50px;
  display: flex;
  position: relative;
`;

const EventContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & > div {
    background-color: black;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 3px solid;
    position: relative;
    z-index: 1;
  }
`;

const ProgressBar = styled.div`
  position: absolute;
  height: 20px;
  width: ${({ width }: { width: string }) => `${width}%`};
  left: 0;
  top: 0;
  background-color: #35b78b;
  border-radius: 50px;
`;

const MoveProgressBar = styled('input')`
  position: absolute;
  width: 500px;
  transform: rotate(-90deg);
  transform-origin: center;
  left: -200px;
`;

const Timeline = () => {
  const [progressBar, setProgressBar] = useState<string>('30');
  const [reachedEventIndex, setReachedEventIndex] = useState(0);

  const eventRefs = useRef<HTMLDivElement[]>([]);
  const progressBarRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const positions = eventRefs.current.map((ref) => {
      return ref.getBoundingClientRect().x;
    });

    const checkIfEventIsReached = () => {
      const ref = progressBarRef.current;
      if (ref === null) throw Error('ProgressBar ref is null');
      const progressBarPosition = ref.getBoundingClientRect().right;
      const reachedEventsPositions = positions.filter(
        (pos) => pos <= progressBarPosition
      );

      setReachedEventIndex(reachedEventsPositions.length - 1);
    };
    checkIfEventIsReached();
  }, [progressBar]);

  return (
    <>
      <StyledTimeline>
        <EventContainer>
          {mocks.map((event, index) => (
            <div
              key={event.title}
              ref={(ref) => {
                if (ref === null) return;
                eventRefs.current[index] = ref;
              }}
              style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderColor:
                  index === 0 || index <= reachedEventIndex
                    ? '#35b78b'
                    : '#ffffff33',
                transition: '0.2s',
              }}
            >
              {index <= reachedEventIndex && index !== mocks.length - 1 && (
                <svg
                  fill="#35b78b"
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  viewBox="0 0 352.62 352.62"
                >
                  <g>
                    <path
                      d="M337.222,22.952c-15.912-8.568-33.66,7.956-44.064,17.748c-23.867,23.256-44.063,50.184-66.708,74.664
		c-25.092,26.928-48.348,53.856-74.052,80.173c-14.688,14.688-30.6,30.6-40.392,48.96c-22.032-21.421-41.004-44.677-65.484-63.648
		c-17.748-13.464-47.124-23.256-46.512,9.18c1.224,42.229,38.556,87.517,66.096,116.28c11.628,12.24,26.928,25.092,44.676,25.704
		c21.42,1.224,43.452-24.48,56.304-38.556c22.645-24.48,41.005-52.021,61.812-77.112c26.928-33.048,54.468-65.485,80.784-99.145
		C326.206,96.392,378.226,44.983,337.222,22.952z M26.937,187.581c-0.612,0-1.224,0-2.448,0.611
		c-2.448-0.611-4.284-1.224-6.732-2.448l0,0C19.593,184.52,22.653,185.132,26.937,187.581z"
                    />
                  </g>
                </svg>
              )}
              {index === mocks.length - 1 && (
                <Font
                  variant="b2"
                  style={{ fontSize: '14px', color: '#35b78b' }}
                >
                  {`${progressBar}`}
                  <span style={{ fontSize: '12px', color: '#35b78b' }}>%</span>
                </Font>
              )}
              <div
                style={{
                  position: 'absolute',
                  bottom: '-120%',
                  left: '50%',
                  transform: 'translateX(-50%)',
                }}
              >
                <Font
                  variant="h3"
                  style={{
                    fontSize: '10px',
                    whiteSpace: 'nowrap',
                    textAlign: 'center',
                    color: index <= reachedEventIndex ? 'white' : '#555',
                  }}
                >
                  {event.title}
                </Font>
                <Font
                  variant="b1"
                  style={{
                    fontSize: '7px',
                    whiteSpace: 'nowrap',
                    textAlign: 'center',
                    color: index <= reachedEventIndex ? 'white' : '#555',
                  }}
                >
                  {event.description}
                </Font>
              </div>
            </div>
          ))}
        </EventContainer>
        <ProgressBar width={progressBar} ref={progressBarRef} />
      </StyledTimeline>
      <MoveProgressBar
        type="range"
        value={progressBar}
        onChange={(e) => setProgressBar(e.target.value)}
      />
    </>
  );
};

export { Timeline };
