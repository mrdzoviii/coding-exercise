import { ToastContainer } from 'react-toastify';
import styled from 'styled-components';

export const NotificationContainer = styled(ToastContainer)`
  &&&.Toastify__toast-container {
    font-size: ${(props) => props.theme.fontSize.normal};
  }
`;
