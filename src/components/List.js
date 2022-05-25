import { useState, useContext, useRef } from 'react';
import '../styles/list.scss';
import ListItem from './ListItem';
import Alert from './Alert';
import { AutoMintContext } from '../contexts/autoMintContext';

const List = () => {
  const { tasks, setTasks, setActive, edit } = useContext(AutoMintContext);
  const deleteTarget = useRef('');
  const [isAlert, setIsAlert] = useState(false);

  const onDeleteHandler = (id) => {
    deleteTarget.current = id;
    setIsAlert(true);
  };

  const onCancelHandler = () => {
    setIsAlert(false);
  };

  const onContinueHandler = () => {
    const newTasks = tasks.filter((item) => item.id !== deleteTarget.current);

    setTasks(newTasks);

    setIsAlert(false);
  };

  const onCopyHandler = (id) => {
    const copy = {
      ...tasks.filter((task) => task.id === id)[0],
      id: tasks.length,
    };
    setTasks((prev) => [...prev, copy]);
  };

  const onEditHandler = (id) => {
    edit.current = tasks.filter((task) => task.id === id)[0];
    setActive('Auto Mint');
  };

  return (
    <div className="list__container">
      <h2 className="list_title">Tasks</h2>
      <ListItem
        items={tasks || []}
        onDelete={onDeleteHandler}
        onCopy={onCopyHandler}
        onEdit={onEditHandler}
      />
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
