import React from 'react';
import '../styles/listItem.scss';
import { ReactComponent as DeleteIcon } from '../assets/icons/delete.svg';
import { ReactComponent as CopyIcon } from '../assets/icons/copy.svg';
import { ReactComponent as EditIcon } from '../assets/icons/edit.svg';
import { ReactComponent as PauseIcon } from '../assets/icons/pause.svg';
import { ReactComponent as FlagIcon } from '../assets/icons/flag.svg';

const ListItem = ({ items = [], onDelete }) => {
  return (
    <table className="table">
      <thead>
        <tr className="table__head__row">
          <th>Contract Address</th>
          <th>Mint Price</th>
          <th>Gas Price/Fee</th>
          <th>Mode</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <>
            <tr className="table__body__row">
              <td>{item.contractAddress}</td>
              <td>{item.mintPrice}</td>
              <td>{item.fee}</td>
              <td>{item.mode}</td>
              <td>{item.status}</td>
              <td>
                <FlagIcon />
              </td>
              <td>
                <PauseIcon />
              </td>
              <td>
                <EditIcon />
              </td>
              <td>
                <CopyIcon />
              </td>
              <td onClick={onDelete && onDelete}>
                <DeleteIcon />
              </td>
            </tr>
            <tr className="table__space"></tr>
          </>
        ))}
      </tbody>
    </table>
  );
};

export default ListItem;
