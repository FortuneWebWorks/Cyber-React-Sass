import 'styles/apiens/apiensModal.scss';
import { ReactComponent as CloseIcon } from 'assets/images/cancel.svg';

const ApiensModal = ({ data, callBack }) => {
  return (
    <div className="apiens__modal_container">
      <div className="apiens__modal">
        <div className="modal__closer">
          <CloseIcon onClick={callBack} />
        </div>

        <div>
          <div>
            <div></div>
          </div>

          <div></div>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default ApiensModal;
