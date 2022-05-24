import { useState } from 'react';
import '../styles/list.scss';
import ListItem from './ListItem';
import Alert from './Alert';

const items = [
  {
    id: '1',
    contractAddress: 'ljksdfl',
    mintPrice: '5',
    fee: '12',
    mode: 'sdfa',
    status: 'idl',
  },
  {
    id: '2',
    contractAddress: 'sdfsadffdsfasd',
    mintPrice: '5',
    fee: '12',
    mode: 'sdfa',
    status: 'idl',
  },
  {
    id: '3',
    contractAddress: 'ljkssdfadfssdafdfsaadfsdfl',
    mintPrice: '5',
    fee: '12',
    mode: 'sdfa',
    status: 'idl',
  },
];

const List = () => {
  const [isAlert, setIsAlert] = useState(false);

  const onDeleteHandler = () => {
    setIsAlert(true);
  };

  const onCancelHandler = () => {
    setIsAlert(false);
  };

  const onContinueHandler = () => {
    setIsAlert(false);
  };

  return (
    <div className="list__container">
      <h2 className="list_title">Tasks</h2>
      <ListItem items={items} onDelete={onDeleteHandler} />
      <Alert
        message={'Are you sure you want to delete this task?'}
        title="Delete task"
        open={isAlert}
        cancelHandler={onCancelHandler}
        continueHandler={onContinueHandler}
      />
    </div>
  );
};

export default List;
