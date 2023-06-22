import { LoaderProps } from "./defs";

import c from 'classnames';

const Loader = ({className, variant = '1', children, ...loaderProps}: LoaderProps) => {
  return (
    <div className={c('loader', className)} {...loaderProps}>
      <div className={c('loader-animation', `loader-${variant}`)}>
        <div>
          <div>
            <div>
              <div>
                <div>
                  <div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>    
      {children && <div className='loader-capttion'>{children}</div>}
      
    </div>    
  );
}

export { Loader };