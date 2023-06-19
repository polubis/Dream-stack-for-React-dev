import { fireEvent, render, screen } from '@testing-library/react';
import { useClientEffect } from './use-client-effect';
import { useState } from 'react';
import { isClient } from '@system/utils';

jest.mock('@system/utils', () => ({
  isClient: jest.fn(),
}));

describe('Effects can be used when: ', () => {
  const PLACEHOLDER = 'Username';

  describe('on client side ', () => {
    beforeEach(() => {
      (isClient as jest.Mock).mockReturnValue(true);
    });

    it('calls effect only once if no deps', () => {
      const cleanUpSpy = jest.fn();
      const effectSpy = jest.fn().mockImplementationOnce(cleanUpSpy);

      const ComponentStub = () => {
        const [username, setUsername] = useState('');

        useClientEffect(effectSpy);

        return (
          <input
            placeholder={PLACEHOLDER}
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        );
      };

      render(<ComponentStub />);

      fireEvent.change(screen.getByPlaceholderText(PLACEHOLDER), {
        target: { value: 'p' },
      });

      expect(effectSpy).toHaveBeenCalledTimes(1);
      expect(cleanUpSpy).toHaveBeenCalledTimes(1);
    });

    it('calls effect and clean up function when deps array changes', () => {
      const cleanUpSpy = jest.fn();
      const effectSpy = jest.fn().mockImplementationOnce(cleanUpSpy);

      const ComponentStub = () => {
        const [username, setUsername] = useState('');

        useClientEffect(effectSpy, [username]);

        return (
          <input
            placeholder={PLACEHOLDER}
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        );
      };

      render(<ComponentStub />);

      fireEvent.change(screen.getByPlaceholderText(PLACEHOLDER), {
        target: { value: 'p' },
      });
      fireEvent.change(screen.getByPlaceholderText(PLACEHOLDER), {
        target: { value: 'po' },
      });
      fireEvent.change(screen.getByPlaceholderText(PLACEHOLDER), {
        target: { value: 'pol' },
      });

      expect(effectSpy).toHaveBeenCalledTimes(4);
      expect(cleanUpSpy).toHaveBeenCalledTimes(1);
    });
  });

  describe('on server side ', () => {
    beforeEach(() => {
      (isClient as jest.Mock).mockReturnValue(false);
    });

    it('blocks effect/clean up function to be called', () => {
      const cleanUpSpy = jest.fn();
      const effectSpy = jest.fn().mockImplementationOnce(cleanUpSpy);

      const ComponentStub = () => {
        const [username, setUsername] = useState('');

        useClientEffect(effectSpy, [username]);

        return (
          <input
            placeholder={PLACEHOLDER}
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        );
      };

      render(<ComponentStub />);

      fireEvent.change(screen.getByPlaceholderText(PLACEHOLDER), {
        target: { value: 'p' },
      });

      expect(effectSpy).toHaveBeenCalledTimes(0);
      expect(cleanUpSpy).toHaveBeenCalledTimes(0);
    });
  });
});
