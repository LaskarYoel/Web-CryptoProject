//Page for login to the app
import React  from 'react';
import MaterialTable from 'material-table'
import SearchIcon from '@material-ui/icons/Search';

class PublicTable extends React.Component {
    render() {
      return (
          
        <MaterialTable
          title="All Crypto Currencies"
          columns={[
            { title: 'Name', field: 'name' },
            { title: 'Market Cap', field: 'markerCap' },
            { title: 'Price', field: 'price' },
            { title: 'Change', field: 'change' },
            
          ]}
          data={[
            { name: 'Bitcoin', markerCap: '$157 359 442 197', price: '8660.49 $', change: '-0,89 %' },
            { name: 'Ethereum', markerCap: '$18 481 348', price: '165.48 $', change: '-5,18 %' },
            { name: 'Bitcoin', markerCap: '$157 359 442 197', price: '8660.49 $', change: '-0,89 %' },
            { name: 'Ethereum', markerCap: '$18 481 348', price: '165.48 $', change: '-5,18 %' },
            { name: 'Bitcoin', markerCap: '$157 359 442 197', price: '8660.49 $', change: '-0,89 %' },
            { name: 'Ethereum', markerCap: '$18 481 348', price: '165.48 $', change: '-5,18 %' },
            { name: 'Bitcoin', markerCap: '$157 359 442 197', price: '8660.49 $', change: '-0,89 %' },
            { name: 'Ethereum', markerCap: '$18 481 348', price: '165.48 $', change: '-5,18 %' },
            { name: 'Bitcoin', markerCap: '$157 359 442 197', price: '8660.49 $', change: '-0,89 %' },
            { name: 'Ethereum', markerCap: '$18 481 348', price: '165.48 $', change: '-5,18 %' },

          ]}        
          actions={[
            {
              icon: SearchIcon,
              tooltip: 'More details',
              onClick: (event, rowData) => alert("You ask more detail about " + rowData.name)
            }
          ]}
        />
      )
    }
  }
  
export default PublicTable