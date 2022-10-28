import PropTypes from 'prop-types';
import {
  Table,
  TableHead,
  TableHeadElement,
  TableHeadColumn,
  TableBody,
  TableInfo,
} from './Transaction.module';
export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <TableHead>
        <TableHeadElement>
          <TableHeadColumn>Type</TableHeadColumn>
          <TableHeadColumn>Amount</TableHeadColumn>
          <TableHeadColumn>Currency</TableHeadColumn>
        </TableHeadElement>
      </TableHead>

      <TableBody>
        {items.map(({ id, type, amount, currency }) => (
          <TableHeadElement key={id}>
            <TableInfo>{type}</TableInfo>
            <TableInfo>{amount}</TableInfo>
            <TableInfo>{currency}</TableInfo>
          </TableHeadElement>
        ))}
      </TableBody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
