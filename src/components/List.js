import '../styles/list.scss';
import ListItem from './ListItem';

const items = [
  {
    contractAddress: 'ljksdfl',
    mintPrice: '5',
    fee: '12',
    mode: 'sdfa',
    status: 'idl',
  },
  {
    contractAddress: 'sdfsadffdsfasd',
    mintPrice: '5',
    fee: '12',
    mode: 'sdfa',
    status: 'idl',
  },
  {
    contractAddress: 'ljkssdfadfssdafdfsaadfsdfl',
    mintPrice: '5',
    fee: '12',
    mode: 'sdfa',
    status: 'idl',
  },
];

const List = () => {
  return (
    <div className="list__container">
      <h2>Tasks</h2>
      <ListItem items={items} />
    </div>
  );
};

export default List;
