import type { LoaderProps } from './defs';

import c from 'classnames';

const Loader = ({ className, size = 'medium', variant = 1 }: LoaderProps) => {
  return (
    <div className={c('loader', size, className)}>
      <div className={c('loader-animation', `loader-${variant}`)}>
        <div>
          <div>
            <div>
              <div>
                <div>
                  <div />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Loader };
