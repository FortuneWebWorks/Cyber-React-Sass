import '../styles/board.scss';
import Menu from './Menu';

const Board = () => {
  return (
    <>
      <h3 className="board__title">
        SELECT ONE OF THE BOTS FROM THE LEFT AND INITIATE A TASK
      </h3>
      <div className="board__bots">
        <Menu active={true} title={'Snipe'} />
        <Menu active={true} title={'Auto Mint'} />
        <Menu active={true} title={'Bulk Bidder'} />
      </div>
    </>
  );
};

export default Board;
