import '../styles/board.scss';
import List from './List';
import Menu from './Menu';

const Board = () => {
  return (
    <>
      {/* <h3 className="board__title">
        SELECT ONE OF THE BOTS FROM THE LEFT AND INITIATE A TASK
      </h3>
      <div className="board__bots">
        <Menu active={true} title={'Snipe'} noMenu={true} />
        <Menu active={true} title={'Auto Mint'} noMenu={true} />
        <Menu active={true} title={'Bulk Bidder'} noMenu={true} />
      </div> */}
      <List />
    </>
  );
};

export default Board;
