import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {Category, Power, Settings, Phonelink, ShoppingCart,Person} from '@material-ui/icons';
import ManageCategoryFragment from "../fragments/ManageCategoryFragment";
import ManageProductFragment from "../fragments/ManageProductFragment";
import ManageOrderFragment from "../fragments/ManageOrderFragment";
import ManageUserFragment from "../fragments/ManageUserFragment";


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function ClippedDrawer() {
  const classes = useStyles();

  const [fragment, setfragment] = useState("MANAGE_PRODUCT")

  const loadFragment= () =>{

    switch (fragment)  {
      
      case "MANAGE_CATEGORY":
        return <ManageCategoryFragment/>
      case "MANAGE_PRODUCT":
        return <ManageProductFragment/>
      case "MANAGE_ORDER":
        return <ManageOrderFragment/>
      case "MANAGE_USER":
        return <ManageUserFragment/>
      default:
        break;

    }
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Welcome To Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          
          <List>
          <ListItem button onClick={e=>setfragment("MANAGE_PRODUCT")}>
                <ListItemIcon>
                  <Phonelink/>
                </ListItemIcon>
                <ListItemText primary="Products" />
              </ListItem>
          </List>
          <List>
          <ListItem button onClick={e=>setfragment("MANAGE_CATEGORY")}>
                <ListItemIcon>
                  <Category/>
                </ListItemIcon>
                <ListItemText primary="Categories" />
              </ListItem>
          </List>
          <List>
          <ListItem button onClick={e=>setfragment("MANAGE_USER")}>
                <ListItemIcon>
                  <Person/>
                </ListItemIcon>
                <ListItemText primary="Users" />
              </ListItem>
          </List>
          <List>
          <ListItem button onClick={e=>setfragment("MANAGE_ORDER")}>
                <ListItemIcon>
                  <ShoppingCart/>
                </ListItemIcon>
                <ListItemText primary="Orders" />
              </ListItem>
          </List>
          <List>
              <ListItem button>
                <ListItemIcon>
                  <Settings/>
                </ListItemIcon>
                <ListItemText primary="Settings" />
              </ListItem>
          </List>
          <Divider/>
          <List>
              <ListItem button>
                <ListItemIcon>
                  <Power/>
                </ListItemIcon>
                <ListItemText primary="Logout" />
              </ListItem>
          </List>
          <Divider/>
          
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar/>
        {loadFragment()}
      </main>
    </div>
  );
}
