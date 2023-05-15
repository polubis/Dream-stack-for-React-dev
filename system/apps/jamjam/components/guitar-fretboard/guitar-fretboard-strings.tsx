import type { GuitarFretboardStringsProps } from './defs';

const GuitarFretboardStrings = ({ strings }: GuitarFretboardStringsProps) => {
  return (
    <div className="guitar-fretboard-strings">
      {strings.map(({ number }, idx) => (
        <div key={number} className="guitar-fretboard-string-wrapper">
          <div
            className="guitar-fretboard-string"
            style={{ height: idx + 1 + 'px' }}
          />
        </div>
      ))}
    </div>
  );
};

export { GuitarFretboardStrings };
