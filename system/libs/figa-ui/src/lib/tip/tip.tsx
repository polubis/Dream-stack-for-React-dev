import type { TipProps } from './defs';
import c from 'classnames';
import styled from 'styled-components';
import { tokens } from '../theme-provider';
import { Font } from '../font';
import { row, spacing } from '../shared';

const Container = styled.div<Required<Pick<TipProps, 'offset'>>>`
  position: relative;
  width: max-content;

  &.top {
    .tip-content {
      top: -${(props) => spacing.get(props.offset)};
    }

    &:hover .tip-content {
      transform: translateY(-100%);
    }
  }

  &.right {
    .tip-content {
      top: 0;
      right: ${(props) => `calc(-${spacing.get(props.offset)} * 2)`};
      bottom: 0;
    }

    &:hover .tip-content {
      transform: translateX(100%);
    }
  }

  &.bottom {
    .tip-content {
      top: ${(props) => spacing.get(props.offset)};
    }

    &:hover .tip-content {
      transform: translateY(100%);
    }
  }

  &.left {
    .tip-content {
      top: 0;
      left: ${(props) => `calc(-${spacing.get(props.offset)} * 2)`};
      bottom: 0;
    }

    &:hover .tip-content {
      transform: translateX(-100%);
    }
  }

  &:hover .tip-content {
    opacity: 1;
  }

  .tip-content {
    ${row()}
    height: 100%;
    opacity: 0;
    transform: translateY(0);
    transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1);
    transition-delay: 0.2s;
    position: absolute;
    padding: ${tokens.spacing[100]};
    background: ${(props) => props.theme.box.filled.bg};
    border-radius: ${tokens.radius[50]};
    z-index: ${tokens.z[800]};
    width: max-content;
  }
`;

const Tip = ({
  className,
  children,
  content,
  offset = 50,
  orientation = 'bottom',
}: TipProps) => {
  return (
    <Container className={c('tip', className, orientation)} offset={offset}>
      {children}
      <div className="tip-content">
        <Font variant="b3">{content}</Font>
      </div>
    </Container>
  );
};

export { Tip };
