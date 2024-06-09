import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';


export default function NavigationBar() {
  return (
    <div className="flex-1">
      <AppBar position="static">
        <Toolbar>
          <Link className=" " to={'/'}>
            LOGO
          </Link>
          <Button color="inherit">
            <Link className="" to={'/'}>
              Home
            </Link>
          </Button>
          <Button color="inherit">
            <Link  to={'/about'}>
              About
            </Link>
          </Button>
          <Button color="inherit">
            <Link to={'/dashboard'}>
              Dashboard
            </Link>
          </Button>
          <Button color="inherit">
            <Link  to={'/login'}>
              Login
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
