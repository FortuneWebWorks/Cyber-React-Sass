import { useContext } from "react";
import ContractAdress from "contexts/collection";
import "styles/apiens/mainApiens.scss";
import ApiensBox from "components/apiens/ApiensBox";
import ApiensTrendingDashboard from "components/apiens/ApiensTrendingDashboard";
import RevealStatus from "components/RevealStatus";
import Search from "components/Search";
import { ReactComponent as WorldIcon } from "assets/images/table-world.svg";
import { ReactComponent as TwitterIcon } from "assets/images/table-twitter.svg";
import { ReactComponent as DiscordIcon } from "assets/images/discordNoBackground.svg";
import { ReactComponent as OpenSeaIcon } from "assets/images/openSeaNoBackground.svg";
import { ReactComponent as EtherScanIcon } from "assets/images/etherscan-logo-circle.svg";
import { ReactComponent as LooksrareIcon } from "assets/images/looksrare.svg";
import { ReactComponent as CopyIcon } from "assets/images/copy.svg";
import { ReactComponent as ExternalLinkIcon } from "assets/images/external-link.svg";
import { ReactComponent as BluetickIcon } from "assets/images/bluebg-check.svg";
import { ReactComponent as TrendingIcon } from "assets/images/Trending.svg";
import { ReactComponent as AnalyticalIcon } from "assets/images/Analytical.svg";
import ApiensList from "components/apiens/ApiensList";
import DropDown from "components/DropDown";

const Collection = () => {
  const { swapData, setSwapData } = useContext(ContractAdress);
  console.log(swapData);

  return (
    <div className="apiens__container">
      <div className="apiens__head_header">
        <div className="hader__cricle_image"></div>
      </div>

      <div className="apiens__head_content">
        <div className="apiens__reveal_container">
          <span>REVEAL STATUS</span>
          <RevealStatus />
        </div>

        <div className="apiens__center_box">
          <h1 className="apiens__title">
            APIENS OFFICIALS <BluetickIcon className="blue_tick" />
          </h1>
          <span className="apiens__id">
            sdfasdfdfsdsadfsdfsdfsdsfadfsaadfsdafsdfs <CopyIcon />
            <ExternalLinkIcon className="external_link_svg" />
          </span>
          <ApiensBox />
        </div>

        <div className="apiens__search">
          <div>
            <WorldIcon />
            <TwitterIcon />
            <DiscordIcon />
            <OpenSeaIcon />
            <LooksrareIcon />
            <EtherScanIcon />
          </div>
          <Search />
        </div>
      </div>

      <div className="apiens__views">
        <div className="active">
          <TrendingIcon />
          <span>Trending Dashboard</span>
        </div>

        <div>
          <AnalyticalIcon />
          <span>Analytical Charts</span>
        </div>
      </div>

      <div style={{ marginBottom: "67px" }}>
        <ApiensTrendingDashboard />
      </div>

      <div className="apiens__lists__cahrts_conatiner">
        <div className="apies__list_container">
          <div className="apies__list__header">
            <h2>Listings</h2>

            <div className="apies__list__header_dropdown">
              <DropDown
                fontSize="3rem"
                innerColor="#244677"
                minWidth="111px"
                items={[{ name: "Date" }, { name: "Price" }, { name: "Rank" }]}
                placeholder={"Sorting"}
              />
            </div>
          </div>
          <ApiensList />
        </div>

        <div className="apiens__charts_container">
          <div className="apiens__charts">
            <div className="apiens__chart_header">
              <button className="active">List</button>
              <button>Delist</button>
            </div>
          </div>

          <div className="apiens__second_chart_container">
            <h2>Momentum Index</h2>
            <div className="apiens__charts">
              <div className="apiens__chart_header">
                <button className="active">List</button>
                <button>Delist</button>
              </div>
            </div>
          </div>
        </div>

        <div className="apies__list_container">
          <div className="apies__list__header">
            <h2>Listings</h2>
          </div>
          <ApiensList />
        </div>
      </div>
    </div>
  );
};

export default Collection;
