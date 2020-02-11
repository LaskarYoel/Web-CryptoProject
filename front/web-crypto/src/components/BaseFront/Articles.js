import react from 'react';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import SimpleTabs from './TableCategories';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});




export default function MediaCard() {
  const classes = useStyles();
  // Déclaration d'un state et de sa fonction setState
  const [data, setData] = React.useState(null)

  const CORS_PROXY = "https://cors-anywhere.herokuapp.com/"
  let Parser = require('rss-parser');
  let parser = new Parser();
  //comme compenentdidmounth
  React.useEffect(() => {
    parser.parseURL(CORS_PROXY + 'https://cointelegraph.com/rss', function (err, feed) {
      if (err) throw err;
      console.log(feed.items);
      setData(feed.items)
      // feed.items.forEach(function(entry) {
      //   console.log(entry.title + ':' + entry.link);
      // })
    })
  }, [])


  console.log()

  const renderList = () => {
    if (!data) {
      return 'loading'
    } else {
      return ( <Grid container spacing={2}>
{data.map(item => {
        return (

        <Grid item xs={4}>
          <Card className={classes.root}>
          <CardActionArea>
            {<CardMedia
              className={classes.media}
              image={item.enclosure.url}
              title=""
            />}
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">

              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {item.contentSnippet}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
      </Button>
            <Button size="small" color="primary">
              <a href={item.link}>Open</a>
      </Button>
          </CardActions>
        </Card>
        </Grid>


        )
        
        
        
    

      })}
</Grid>
      )
      
      


    }

  }

  return renderList()




}