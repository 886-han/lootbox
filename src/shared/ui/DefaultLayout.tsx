import { Outlet } from 'react-router';
import Sidebar from './Sidebar';
import {Grid} from '@mui/material';
import Header from './Header'
export default function DefaultLayout(){
    return(
            <Grid container spacing={1}>
                <Grid size={12}>
                    <Header />
                </Grid>
                <Grid size={2}>
                    <Sidebar/>
                </Grid>
                <Grid size={10}>
                    <Outlet/>
                </Grid>
            </Grid>
    )
}