import styled from '@emotion/styled';

export const Button = styled.button`
  margin-top: 10px;
  display: block;
  text-decoration: none;
  border: 2px solid #e8f0f7;
  border-radius: 3px;
  text-align: center;

  overflow: hidden;
  font-size: 10px;
  line-height: 20px;
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
  font-family: 'Roboto Condensed', Тahoma, sans-serif;
  background: #02788d;
  transition: box-shadow 0.3s, transform 0.3s;
  cursor: pointer;
  z-index: 1;

  :hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2), 0 16px 20px rgba(0, 0, 0, 0.2);
  }
`;

export const FormContent = styled.form`
  width: 305px;
  margin-left: auto;
  margin-right: auto;
`;
