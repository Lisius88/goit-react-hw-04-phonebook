import styled from '@emotion/styled';

export const Item = styled.li`
  padding: 0;
  margin: 0;
  max-width: 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 3px solid #02788d;
  background-color: white;
  border-radius: 5px;
  margin-top: 15px;
`;

export const Button = styled.button`
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
