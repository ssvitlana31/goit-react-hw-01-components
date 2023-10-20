import { styled, css } from 'styled-components';

export const Table = styled.table`
  text-align: center;
  text-transform: capitalize;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 10px 20px;
  border: 1px solid blue;
`;

export const NameTr = styled.tr`
  text-transform: uppercase;
`;
export const TextTr = styled.th`
  padding: 10px 0;
  width: 200px;
  background-color: white;
  color: black;
`;

export const ItemTr = styled.tr`
  border: 1px solid blue;
  ${props =>
    props.bg &&
    css`
      background-color: lightblue;
    `}
`;
export const TableTr = styled.td`
  padding: 10px 0;
`;
