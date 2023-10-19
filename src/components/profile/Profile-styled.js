import { styled } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(8)};
  width: 250px;
  margin: 0 auto;
  padding: 20px;
  box-shadow: ${({ theme }) => theme.shadows.default};
  border-radius: ${({ theme }) => theme.spacing(1)};
`;
export const Descr = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(3)};
  width: 100%;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.background};
`;
export const Avatar = styled.img`
  width: 240px;
  outline: 2px solid aquamarine;
  padding: 5px;
`;
export const Name = styled.p`
  font-size: 30px;
  font-weight: 700;
`;
export const Tag = styled.p`
  font-size: 20px;
  color: black;
`;
export const Location = styled.p`
  font-size: 20px;
  color: black;
`;

export const Stats = styled.ul`
  display: flex;
  align-items: center;
  // justify-content: space-between;
  width: 100%;
  gap: ${({ theme }) => theme.spacing(4)};
  font-size: ${({ theme }) => theme.spacing(5)};
  color: ${({ theme }) => theme.colors.main};
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};
`;

export const StatsText = styled.span`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.accent};
`;

export const StatsAmount = styled.span`
  font-size: 20px;
`;
