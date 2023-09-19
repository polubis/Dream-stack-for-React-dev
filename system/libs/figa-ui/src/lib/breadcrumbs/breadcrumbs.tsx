import { BreadcrumbsProps } from './defs';

import { Link } from '../link';
import { Font } from '../font';

import c from 'classnames';

const Breadcrumbs = ({ items, ...props }: BreadcrumbsProps) => {
  return (
    <div className={c('breadcrumbs', props.className)}>
      {items.map((item, index) =>
        index === items.length - 1 ? (
          <Font variant="b1" motive="primary">
            {item}
          </Font>
        ) : (
          <a href={item}>
            <Link variant="b1">{item}</Link>
          </a>
        )
      )}
    </div>
  );
};

export default Breadcrumbs;
