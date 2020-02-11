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
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import { connect } from "react-redux";
import { getCryptos, updateFavoris } from "../../actions";
import { LogoWithName } from "./LogoWithName";

const user = JSON.parse(localStorage.getItem("user"));

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
          actions={[
            rowData => ({
              icon: () => this.IconToggle(rowData.tableData.id),
              tooltip: "More details",
              onClick: (event, rowData) => {
                this.props.cryptos[rowData.tableData.id].favorite = !this.props
                  .cryptos[rowData.tableData.id].favorite;
                this.setState({});
                this.props.updateFavoris(
                  rowData,
                  this.props.cryptos[rowData.tableData.id].favorite,
                  user._id.$oid
                );

                //   data: this.state.data.map((data, i) => (
                //     i === rowData.tableData.id
                //     ?  { ...data, favorite : !data.favorite }
                //     : data
                //   ))

                // })

                // console.log(rowData.tableData)
                // console.log(rowData.id)
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
  updateFavoris
})(PublicTable);
