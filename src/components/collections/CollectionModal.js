import 'styles/collections/collectionModal.scss';
import { ReactComponent as CloseIcon } from 'assets/images/cancel.svg';

const CollectionModal = ({ data, callBack }) => {
  return (
    <div className='collection__modal_container'>
      <div className='collection__modal'>
        <div className='modal__closer'>
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

export default CollectionModal;
