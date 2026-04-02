import styled from 'styled-components';

export const Button = styled.button`
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 1000;

  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: none;

  background-color: var(--primary-red);
  color: var(--text-white);

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);

  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    background-color: var(--secondary-pink);
    color: var(--bg-dark);
  }

  svg {
    font-size: 16px;
  }
`;