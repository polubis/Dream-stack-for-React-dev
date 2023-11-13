import styled from 'styled-components';
export const LogIn = styled.button`
  color: white;
  border: 0;
  border-radius: 8px;
  box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);
  padding: 8px 12px;
  background-color: #059316;
  font-size: $size-modalButtonMobile;
  margin-top: 10px;
  font-size: 20px;
`;

export const LogOut = styled.button`
  color: white;
  border: 0;
  border-radius: 8px;
  box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);
  padding: 8px 12px;
  background-color: #e4051d;
  font-size: $size-modalButtonMobile;
  margin-top: 10px;
  font-size: 20px;
`;

export const Wrapper = styled.section`
  margin: 40px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  h3 {
    margin-top: 30px;
    font-size: 30px;
  }
  p {
    margin-top: 30px;
    font-size: 20px;
  }
`;
