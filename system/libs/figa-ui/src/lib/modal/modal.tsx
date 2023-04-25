import type { ModalProps } from './defs';

import styled from 'styled-components';
import { usePortal } from '@system/figa-hooks';
import { tokens } from '../theme-provider';

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${(props) => props.theme.modal.backdrop};
  z-index: ${tokens.z[450]};
`;

const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  min-width: 280px;
  min-height: 280px;
  max-height: 96vh;
  padding: ${tokens.padding[250]};
  transform: translate(-50%, -50%);
  background: ${(props) => props.theme.modal.background};
  border-radius: ${tokens.radius[50]};
  border: 1px solid ${(props) => props.theme.modal.border};
  z-index: ${tokens.z[500]};
  overflow-y: auto;
`;

export const Modal = ({ children, onClose }: ModalProps) => {
  const { render } = usePortal();

  return render(
    <>
      <Backdrop onClick={onClose} />
      <Wrapper>{children}</Wrapper>
    </>
  );
};
