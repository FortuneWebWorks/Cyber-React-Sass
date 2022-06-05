import '../styles/apiensOfficials.scss';
import ApiensBox from '../components/ApiensBox';
import BarLineChart from '../components/Charts/FirstChart';

const ApiensOfficials = () => {
  return (
    <div className="apiens">
      <h1 className="apiens__title">APIENS OFFICIALS</h1>

      <ApiensBox />

      <div className="apiens__switch">
        <div>
          <span>Trading Dashboard</span>
        </div>
        <div>
          <span>Analytical Charts</span>
        </div>
      </div>

      <div className="chart__container">
        <BarLineChart />
      </div>
    </div>
  );
};

export default ApiensOfficials;
