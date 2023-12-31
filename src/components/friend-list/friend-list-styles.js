import { styled } from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(4)};
`;

export const Item = styled.li`
  width: 230px;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(3)};
  padding: 12px;
  border: 1px solid #0fccce;
  border-radius: ${({ theme }) => theme.spacing(2)};
  box-shadow: ${({ theme }) => theme.shadows.default};
`;
export const Status = styled.span`
  border-radius: 50%;
  width: ${({ theme }) => theme.spacing(3)};
  height: ${({ theme }) => theme.spacing(3)};
  background-color: ${props => (props.$online ? 'green' : 'red')};
`;
export const Avatar = styled.img`
  background-color: lightgray;
  padding: ${({ theme }) => theme.spacing(2)};
  border-radius: ${({ theme }) => theme.spacing(2)};
`;

export const Name = styled.p`
  font-size: ${({ theme }) => theme.spacing(5)};
  font-weight: 500;
`;
