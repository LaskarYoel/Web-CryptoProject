//Page for login to the app
import React from "react";
import MaterialTable from "material-table";
import SearchIcon from "@material-ui/icons/Search";

import {
  Button,
  Typography,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText
} from "@material-ui/core";
import StarIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import StarBorderIcon from '@material-ui/icons/CheckBox';
import { connect } from "react-redux";
import { getCryptos } from "../../actions";
import { deleteCryptos } from "../../actions";
import { DELETE_CRYPTOS } from "../../actions/type";

const CryptoName = {
  BTC: "Bitcoin",
  ETH: "Ethereum",
  XRP: "XRP",
  BCH: "Bitcoin Cash",
  BSV: "Bitcoin SV",
  USDT: "Tether",
  LTC: "Litecoin",
  EOS: "EOS",
  BNB: "Binance Coin",
  ADA: "Cardano",
  XTZ: "Tezos",
  ETC: "Ethereum Classic",
  XLM: "Stellar Lumens",
  XMR: "Monero",
  TRX: "TRON",
  DASH: "Dash",
  LINK: "Chainlink",
  MIOTA: "IOTA",
  LEO: "UNUS SED LEO",
  NEO: "Neo",
  HT: "Huobi Token",
  ATOM: "Cosmos",
  CRO: "Crypto.com Coin",
  HEDG: "HedgeTrade",
  ZEC: "Zcash",
  MKR: "Maker",
  ONT: "Ontology",
  USDC: "USD Coin",
  XEM: "NEM",
  VET: "VeChain",
  BAT: "Basic Attention Token",
  DOGE: "Dogecoin",
  ICX: "ICON",
  PAX: "Paxos Standard",
  FTT: "FTX Token",
  QTUM: "Qtum",
  DCR: "Decred",
  BTG: "Bitcoin Gold",
  SNX: "Synthetix Network Token",
  RVN: "Ravencoin",
  REP: "Augur",
  ZRX: "Oz",
  ALGO: "Algorand",
  LSK: "Lisk",
  TUSD: "TrueUSD",
  OMG: "OmiseGO",
  OKB: "#0667D0",
  ZB: "ZB Token",
  SXP: "Swipe",
  BCD: "Bitcoin Diamond"
};

const LogoWithName = props => {
  //www.cryptocompare.com/media/19633/btc.png?width=200
  // <br />;
  // {
  //   CryptoName[props.name];
  // }
  // https:
  return (
    <ListItem style={{ padding: 0 }}>
      <ListItemAvatar>
        <img
          src={`https://www.cryptocompare.com${props.url}?width=40`}
          alt="Img"
          style={{ verticalAlign: "bottom" }}
        />
      </ListItemAvatar>
      <ListItemText primary={props.name} secondary={CryptoName[props.name]} />
    </ListItem>
  );
};


const allCrypto = () => {
//axios   
};

class PublicTable extends React.Component {
  //première fonction lancé de la page 
  componentDidMount() {
    this.props.getCryptos();
  }

  constructor(props) {
    super(props);
  }
  state = {
    on: true
  };
  IconToggle = row => {
    // console.log(favorite)
    console.log(this.props.cryptos[row].favorite);
    return this.props.cryptos[row].favorite == 1 ? (
      <StarIcon />
    ) : (
      <StarBorderIcon />
    );
  };

  cryptoName = row => {
    // console.log(object[row.FROMSYMBOL]);
    // return object[row.FROMSYMBOL];
  };  

  render() {
    return (
      <>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        ></link>
        <Button
            
            variant="contained"
            color="primary"
            onClick={allCrypto}
          >
            Submit
          </Button>
        <MaterialTable
          display="none"
          // "PRICE", "IMAGEURL", "LASTUPDATE", "VOLUMEDAYTO", "MKTCAP", "CHANGEPCT24HOUR"
          columns={[
            {
              field: "FROMSYMBOL",
              title: "Coin",
              render: rowData => (
                <LogoWithName
                  name={rowData.FROMSYMBOL}
                  url={rowData.IMAGEURL}
                />
              )
            },
            { title: "PRICE", field: "PRICE" },
            { title: "LASTUPDATE", field: "LASTUPDATE" },
            { title: "VOLUMEDAYTO", field: "VOLUMEDAYTO" },
            { title: "MKTCAP", field: "MKTCAP" },
            { title: "CHANGEPCT24HOUR", field: "CHANGEPCT24HOUR" }
          ]}
          data={this.props.cryptos}
          parentChildData={(row, rows) => console.log(row.favorite)}

          actions={[
            rowData => ({
              icon: () => this.IconToggle(rowData.tableData.id),
              onClick: (event, rowData) => {
                this.props.cryptos[rowData.tableData.id].favorite = !this.props
                  .cryptos[rowData.tableData.id].favorite;
                this.setState({});
                this.props.deleteCryptos(this.props.cryptos);
                console.log(this.props.cryptos);
              }
            })
          ]}
        />
      </>
    );
  }
}
MaterialTable.defaultProps = {
  title: ""
};

const mapStateToProps = state => {
  return {
    cryptos: state.cryptos
    //props local dans laquelle stocker state du store : state du store (state.nomde la state que je veux recupérérer )
  };
};
//fct connect (boucle sur state du store,{action du store})(Nomdeclassexporté)
export default connect(mapStateToProps, {
  getCryptos,
  deleteCryptos
})(PublicTable);
