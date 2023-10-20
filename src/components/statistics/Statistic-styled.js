import { styled } from 'styled-components';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px auto;
  gap: ${({ theme }) => theme.spacing(4)};
  width: 290px;
  border: 2px solid aquamarine;
  border-radius: 5px;
  box-shadow: ${({ theme }) => theme.shadows.default};
  background-color: ${({ theme }) => theme.colors.background};
`;
export const Title = styled.h2`
  font-size: 20px;
  font-weight: 800;
  text-transform: uppercase;
  line-height: 2em;
  padding: 20px;
  background-color: white;
  width: 80%;
  text-align: center;
`;
export const Stats = styled.ul`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(2)};
`;
export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid aquamarine;
  background-color: ${props => props.bg};
  padding: ${({ theme }) => theme.spacing(1)};
  gap: ${({ theme }) => theme.spacing(2)};
`;
