import React from 'react';
import PublicTable from './PublicTable';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom'



class FavoritesTable extends React.Component{
    constructor(props){
        super(props)
    }
    
    
    render (){

        const user = {
            connect: true
          }

        return(
            <div >
                {
              user.connect ? 
                <>
                      <h1>
                          Nathann
                      </h1>
                    
                </>
                :<>
                  <h3>
                    Please Login you to access this page
                  </h3>
                  <Button component={Link} to='/login' variant="contained" color="primary" href="#contained-buttons">
                     Login
                </Button>
                </>
            }

            </div>
        );
    }

}

export default FavoritesTable
