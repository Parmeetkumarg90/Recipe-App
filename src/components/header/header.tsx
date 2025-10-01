import Typography from '@mui/material/Typography';
import { AppBar, Toolbar, Box, Button, Grid } from '@mui/material';
import Link from 'next/link';
import TextField from '@mui/material/TextField';
import style from './style.module.css'
import LoginIcon from '@mui/icons-material/Login';
import Tooltip from '@mui/material/Tooltip';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const Header = () => {
    return (
        <AppBar position='relative' className={` ${style.appbar}`}>
            <Toolbar className={` ${style.toolbar}`}>
                <Link href="/">
                    <Typography
                        variant="h6"
                        component="div"
                        className={` ${style.textStyle} ${style.block} ${style.flexGrow}`}
                    >
                        Recipe App
                    </Typography>
                </Link>
                <Grid className={` ${style.toolbar}`}>
                    <Link href="/login">
                        <Typography
                            variant="h6"
                            component="div"
                            className={` ${style.textStyle} ${style.block} ${style.flexGrow}`}
                        >
                            <Tooltip title="Login">
                                <LoginIcon />
                            </Tooltip>
                        </Typography>
                    </Link>
                    <Link href="/register">
                        <Typography
                            variant="h6"
                            component="div"
                            className={` ${style.textStyle} ${style.block} ${style.flexGrow}`}
                        >
                            <Tooltip title="Register">
                                <PersonAddAltIcon />
                            </Tooltip>
                        </Typography>
                    </Link>
                    <Link href="/recipe/create">
                        <Typography
                            variant="h6"
                            component="div"
                            className={` ${style.textStyle} ${style.block} ${style.flexGrow}`}
                        >
                            <Tooltip title="Create a new recipe">
                                <AddCircleOutlineIcon />
                            </Tooltip>
                        </Typography>
                    </Link>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default Header;