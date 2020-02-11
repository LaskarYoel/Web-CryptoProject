import React from "react";
import PublicTable from "./PublicTable";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { getFavorite } from "../../actions";
import MaterialTable from "material-table";
import { LogoWithName } from "./LogoWithName";
import { connect } from "react-redux";

const user = JSON.parse(localStorage.getItem("user"));

class FavoritesTable extends React.Component {
  componentDidMount() {
    this.props.getFavorite();
  }

  render() {
    return (
      <div>
        {user ? (
          <>
            <h1>
              {user.first_name.toUpperCase()} {user.last_name}
            </h1>
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
              data={this.props.favorite ? this.props.favorite : []}
            />
          </>
        ) : (
          <>
            <h3>Please Login you to access this page</h3>
            <Button
              component={Link}
              to="/login"
              variant="contained"
              color="primary"
              href="#contained-buttons"
            >
              Login
            </Button>
          </>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    favorite: state.favoris
    //props local dans laquelle stocker state du store : state du store (state.nomde la state que je veux recupérérer )
  };
};
//fct connect (boucle sur state du store,{action du store})(Nomdeclassexporté)
export default connect(mapStateToProps, {
  getFavorite
})(FavoritesTable);
