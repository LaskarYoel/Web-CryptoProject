import React from "react";
import { ListItem, ListItemAvatar, ListItemText } from "@material-ui/core";

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

export const LogoWithName = props => {
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
