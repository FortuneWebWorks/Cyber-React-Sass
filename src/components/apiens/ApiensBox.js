import 'styles/apiens/apiensBox.scss';
import { ReactComponent as ApiensHeaderIcon } from 'assets/images/apiens-header.svg';

const ApiensBox = () => {
  return (
    <div className="apiensBox">
      <div className="apiens__rect">
        <span className="value">10K</span>
        <span className="title">Supply</span>
      </div>
      <div className="apiens__rect">
        <span className="value">2.8K</span>
        <span className="title">Owner</span>
      </div>
      <div className="apiens__rect">
        <div className="box__text_icon">
          <ApiensHeaderIcon />
          <span className="value">1.3</span>
        </div>
        <span className="title">Floor Price</span>
      </div>
      <div className="apiens__rect">
        <span className="value">188</span>
        <span className="title">Volume Traded</span>
      </div>
      <div className="apiens__rect">
        <span className="value">5%</span>
        <span className="title">Loyalty</span>
      </div>
      <div className="apiens__rect">
        <span className="value">50</span>
        <span className="title">% Owner</span>
      </div>
      <div className="apiens__rect">
        <div className="box__text_icon">
          <ApiensHeaderIcon />
          <span className="value">1.5</span>
        </div>
        <span className="title">Average Price</span>
      </div>
      <div className="apiens__rect">
        <span className="value">10K</span>
        <span className="title">Sales Volume</span>
      </div>
    </div>
  );
};

export default ApiensBox;
