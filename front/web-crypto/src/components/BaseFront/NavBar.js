import React from 'react';
import { Route, Switch } from 'react-router-dom'

import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
//import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom'
import Home from '../BaseApp/Home';
import Login from '../UserPages/Login'
import Favorites from '../UserPages/Favorites'
import Register from '../UserPages/Register'
import { icons } from './icons'
import Profil from '../UserPages/Profil';
import ListUsers from '../AdminPages/listUsers';
import ListCrypto from '../AdminPages/listCrypto';
import Error404 from '../BaseApp/Error404';
import Articles from './Articles';
import Grid from './Grid';




const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const user = {
  connect: true,
  admin: false,
}


export default function Navbar(props) {


  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  function renderNavbar() {
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, {
                [classes.hide]: open,
              })}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              Epitech-Crypto
              </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            }),
          }}
        >
          <div className={classes.toolbar}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </div>
          <Divider />
          <List>

            <ListItem component={Link} to='/' button>

              <ListItemIcon>
                {icons.home}
              </ListItemIcon>
              <ListItemText > Home </ListItemText>
            </ListItem>
            <ListItem component={Link} to='/Article' button>

              <ListItemIcon>
                {icons.Article}
              </ListItemIcon>
              <ListItemText > Article </ListItemText>
            </ListItem>

            {user.connect ?
              user.admin ?
                <>
                  <ListItem component={Link} to='/profil' button>
                    <ListItemIcon>
                      {icons.account}
                    </ListItemIcon>
                    <ListItemText >Profil</ListItemText>
                  </ListItem>
                  <ListItem component={Link} to='/list-users' button>
                    <ListItemIcon>
                      {icons.listIcon}
                    </ListItemIcon>
                    <ListItemText >Liste User</ListItemText>
                  </ListItem>
                  <ListItem component={Link} to='/list-crypto' button>
                    <ListItemIcon>
                      {icons.buildIcon}
                    </ListItemIcon>
                    <ListItemText >Liste Crypto</ListItemText>
                  </ListItem>
                </>
                :
                <ListItem component={Link} to='/profil' button>
                  <ListItemIcon>
                    {icons.account}
                  </ListItemIcon>
                  <ListItemText >Profil</ListItemText>
                </ListItem>
              :
              <ListItem component={Link} to='/login' button>
                <ListItemIcon>
                  {icons.login}
                </ListItemIcon>
                <ListItemText >Login</ListItemText>
              </ListItem>
            }

          </List>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/Grid' component={Grid} />

            <Route exact path='/Article' component={Articles} />
            {
              user.connect ? 
                <>
                  <Route exact path='/profil' component={Profil} />
                  <Route exact path='/favorites' component={Favorites} />
                    {
                      user.admin ?
                        <>
                          <Route exact path='/list-users' component={ListUsers} />
                          <Route exact path='/list-crypto' component={ListCrypto} />
                        </>
                      :
                        <>
                          <Route exact path='/list-users' component={Error404} />
                          <Route exact path='/list-crypto' component={Error404} />
                        </>
                    }
                </>
                :<>
                  <Route exact path='/list-users' component={Error404} />
                  <Route exact path='/list-crypto' component={Error404} />
                  <Route exact path='/login' component={Login} />
                  <Route exact path='/register' component={Register} />
                </>
            }
            


          </Switch>
        </main>
      </div>
    )

  }


  return renderNavbar();
}
