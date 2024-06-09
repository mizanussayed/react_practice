import  Grid from '@mui/material/Grid';

import DashboardSidebar from './dashboard-sidebar';
import { Outlet } from 'react-router-dom';


const Dashboard = () => {
  return (
    <Grid
    direction={'row'}
    container
    justifySelf={'flex-start'}
    alignItems={'flex-start'}
    >
      <DashboardSidebar /> 
      <Outlet />
    </Grid>
  );
};

export default Dashboard;