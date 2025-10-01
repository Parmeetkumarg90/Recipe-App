import Typography from '@mui/material/Typography';
import { AppBar, Toolbar, Box, Button } from '@mui/material';
import Link from 'next/link';
import TextField from '@mui/material/TextField';
import style from './style.module.css'
import LoginIcon from '@mui/icons-material/Login';
import Tooltip from '@mui/material/Tooltip';

const Header = () => {
    return (
        <AppBar position='relative' className={`${style.appbar}`}>
            <Toolbar className={`${style.toolbar}`}>
                <Link href="/">
                    <Typography
                        variant="h6"
                        component="div"
                        className={`${style.textStyle}${style.block}${style.flexGrow}`}
                    >
                        Recipe App
                    </Typography>
                </Link>
                <Link href="/login">
                    <Typography
                        variant="h6"
                        component="div"
                        className={`${style.textStyle}${style.block}${style.flexGrow}`}
                    >
                        <Tooltip title="Login">
                            <LoginIcon />
                        </Tooltip>
                    </Typography>
                </Link>
            </Toolbar>
        </AppBar>
    )
}

export default Header;