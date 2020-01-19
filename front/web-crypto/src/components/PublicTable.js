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
            { title: 'Surname', field: 'surname' },
            { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
            {
              title: 'Birth Place',
              field: 'birthCity',
              lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
            },
          ]}
          data={[
            { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
            { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
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