import React from 'react';
import PropTypes from 'prop-types';
import { ItemTr, Table, TableTr, TextTr } from './transaction-history-styled';

export const TransactionHistory = ({ items }) => {
  const transactions = items.map(({ type, amount, currency, id }, i) => {
    return (
      <ItemTr key={id} bg={i % 2 === 0}>
        <TableTr>{type}</TableTr>
        <TableTr>{amount}</TableTr>
        <TableTr>{currency}</TableTr>
      </ItemTr>
    );
  });
  return (
    <Table>
      <thead>
        <tr>
          <TextTr>Type</TextTr>
          <TextTr>Amount</TextTr>
          <TextTr>Currency</TextTr>
        </tr>
      </thead>

      <tbody>{transactions}</tbody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
