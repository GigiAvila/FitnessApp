import React from 'react';
import ReactDOM from 'react-dom';
import CloseIcon from '@mui/icons-material/Close';
import { ModalPopover, ModalContainer, CloseButtonContainer, ModalTextContainer, CloseEditionButtonContainer, CloseEditionButton } from './Modal.styles';
import { useTheme } from '@emotion/react';

const Modal = ({ isOpen, children, setIsOpen }) => {
  const theme = useTheme();

  return (
    <>
      {isOpen ? (
        ReactDOM.createPortal(
          <ModalPopover
            style={{
              background: `rgba(${theme.palette.background}, 0.5)`,
              color: theme.palette.color,
            }}>
            <ModalContainer style={{
              background: theme.palette.backgroundAlternative,
              color: theme.palette.color,
              border: `1px solid ${theme.palette.border}`
            }}>
              <CloseButtonContainer onClick={() => setIsOpen(false)}>
                <CloseIcon />
              </CloseButtonContainer>
              <ModalTextContainer>
                {children}
              </ModalTextContainer>
              <CloseEditionButtonContainer>
                <CloseEditionButton
                  to="/profile"
                  onClick={() => setIsOpen(false)}
                  style={{
                    background: theme.palette.ImpButtonBgColor,
                    color: theme.palette.ImpButtonColorText
                  }}>
                  Close edition
                </CloseEditionButton>
              </CloseEditionButtonContainer>

            </ModalContainer>
          </ModalPopover>,
          document.getElementById('portal'))) : null
      }
    </>
  );
};

export default Modal;
