//Page for login to the app
import React  from 'react';
import MaterialTable from 'material-table'
import SearchIcon from '@material-ui/icons/Search';
import { Button } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import {connect} from 'react-redux';
import {getCryptos} from "../../actions"
import {updateFavoris} from "../../actions"
import { UPDATE_FAVORIS } from '../../actions/type';
class PublicTable extends React.Component {

  componentDidMount(){
    this.props.getCryptos()
  }


  constructor(props){
    super(props)
  }
    state={
      on : true,
    }
    IconToggle = (row)=>{
      // console.log(favorite)
      console.log(this.props.cryptos[row].favorite)
      return this.props.cryptos[row].favorite==1
        ?<StarIcon />
        :<StarBorderIcon />;

    }
    render() {
       
      return (
          <>
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>

        <MaterialTable 
        display="none"
          columns={[
            { title: 'Name', field: 'name' },
            { title: 'Market Cap', field: 'markerCap' },
            { title: 'Price', field: 'price' },
            { title: 'Change', field: 'change' },
            
          ]}
          data={this.props.cryptos}        
          // parentChildData={(row, rows) => console.log(row.favorite)}

          actions={[(rowData) => ({
            icon: () => this.IconToggle(rowData.tableData.id),
            tooltip: "More details",
            onClick: (event, rowData) => { this.props.cryptos[rowData.tableData.id].favorite=
               !this.props.cryptos[rowData.tableData.id].favorite
              this.setState({})
              this.props.updateFavoris(this.props.cryptos)

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

          // actions={[
          //   {
          //     icon:(event, rowData) => console.log(rowData),//(rowData)=>(rowData.favorite===1?"StarIcon":"StarBorderIcon"),
          //     tooltip: 'More details',
          //     onClick: (event, rowData) => {
          //   //     rowData.favorite=!rowData.favorite
          //   //   alert("You ask more detail about " + rowData.favorite)
          //   // console.log(rowData.favorite)
          //   console.log(rowData)
          // }
          //   }
          // ]}
        />       
        </>
      )
    }
  }
  MaterialTable.defaultProps ={
    title:'',
  }


  const mapStateToProps = state =>{
    return {
          cryptos: state.cryptos
        //props local dans laquelle stocker state du store : state du store (state.nomde la state que je veux recupérérer )
    }
  }
  //fct connect (boucle sur state du store,{action du store})(Nomdeclassexporté)
export default connect
(mapStateToProps,{
  getCryptos,updateFavoris
})(PublicTable) 