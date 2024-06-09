import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from "@mui/icons-material/ExitToApp"
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from '@mui/material';



const DashboardSidebar = () => {
  useEffect(() => { }, []);

  return (
    <>
      <Box>
        <Drawer
          className="flex-shrink-0"
          variant="permanent"
          classes={{
            paper: 'w-64',
          }}
          anchor="left"
        >
          <Toolbar className="w-24">
            <Link to={`/`} className="flex items-center justify-center h-full w-full text-black">
              Logo
            </Link>
          </Toolbar>
          <div className="overflow-auto">
            <List>
              <Link className="text-black" to={`settings-and-privacy`}>
                <ListItem>
                  <ListItemIcon>
                    <SettingsIcon />
                  </ListItemIcon>
                  <ListItemText primary={'settings and privacy'} />
                </ListItem>
              </Link>
              <Link className="text-black" to={'/'}>
                <ListItem>
                  <ListItemIcon>
                    <ExitToAppIcon />
                  </ListItemIcon>
                  <ListItemText primary={'logout'} />
                </ListItem>
              </Link>
            </List>
          </div>
        </Drawer>
      </Box>
    </>
  );
};

export default DashboardSidebar;