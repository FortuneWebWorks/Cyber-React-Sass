import { useEffect, useState } from "react";
import "../styles/trending.scss";
import ButtonGroup from "../components/ButtonGroup";
import Timer from "../components/Timer";
import { ReactComponent as FilterIcon } from "../assets/icons/filtr.svg";
import Filter from "../components/Filter";
import MyTable from "../components/CustomTable";

const timeFrameMoreThan1Day = ["1d", "7d"];
const timeFrameLessThan1Day = ["5m", "30m", "1h", "6h"];

const tableData = {
  headers: ["Collection", "Floor", "Saies", "Listings", "Volume", "Market Cap"],

  spaces: [40, 20, 20, 20, 20, 13],
};

const Traits = () => {
  const [data, setData] = useState(null);
  const [openFilter, setOpenFiter] = useState(false);
  const [sort, setSort] = useState("High/Low");
  const [activeTimeFrame, setActiveTimeFrame] = useState("1h");

  const onClick = (e) => {
    setOpenFiter((prev) => !prev);
  };

  const activeButtonsChange = (value) => {
    setSort(value);
  };

  const closer = () => {
    setOpenFiter(false);
  };

  const fetchData = (time) => {
    const fetcher = async () => {
      const res = await fetch(
        `http://api.cyberdash.app/v1/tables/trending/ticker/${time}`
      );

      const data = await res.json();

      console.log(data);
      setData(data);
    };

    fetcher();
  };

  useEffect(() => {
    const closer = (e) => {
      if (!e.target.closest(".filter")) {
        setOpenFiter(false);
      }
    };

    window && window.addEventListener("mouseup", closer);

    return () => {
      window.removeEventListener("mouseup", closer);
    };
  }, []);

  return (
    <div className="traits">
      {openFilter && <Filter callBack={closer} />}
      <div className="traits__title">
        <h2>Trending NFT Collections</h2>
        <p>See what's selling and listing in real time!</p>
      </div>

      <div className="traist__sort_timer">
        <div className="traits__sort-details">
          <span>Sorted By: </span>
          <ButtonGroup
            items={["High/Low", "%Change"]}
            activeDefault="High/Low"
            font="normal normal bold 12px/14px Roboto"
            containerStyles={{
              border: "1px solid #1956E2",
              height: "30px",
              minWidth: "23rem",
            }}
            callBack={activeButtonsChange}
          />
        </div>

        <div className="timers__filter__container">
          <div className="traits__timers">
            <Timer
              callBack={fetchData}
              items={timeFrameMoreThan1Day}
              activeTimeFrame={activeTimeFrame}
              setActiveTimeFrame={setActiveTimeFrame}
            />
            <Timer
              callBack={fetchData}
              items={timeFrameLessThan1Day}
              activeTimeFrame={activeTimeFrame}
              setActiveTimeFrame={setActiveTimeFrame}
            />
          </div>

          <div id="filter" onClick={onClick}>
            <FilterIcon />
          </div>
        </div>
      </div>

      <div className="table__container">
        {data && (
          <MyTable
            data={data.rows}
            sort={sort}
            info={true}
            area="trending__table"
          />
        )}
      </div>
    </div>
  );
};

export default Traits;
