import 'styles/collections/collectionOfficials.scss';
import CollectionBox from 'components/collections/InfoBox';

const CollectionOfficials = () => {
  return (
    <div className='collection'>
      <h1 className='collection__title'>APIENS OFFICIALS</h1>

      <CollectionBox />

      <div className='collection__switch'>
        <div>
          <span>Trading Dashboard</span>
        </div>
        <div>
          <span>Analytical Charts</span>
        </div>
      </div>

      <div className='chart__container'></div>
    </div>
  );
};

export default CollectionOfficials;
