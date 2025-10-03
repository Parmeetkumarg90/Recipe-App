"use client"
import Typography from '@mui/material/Typography';
import { AppBar, Toolbar, Box, Button, Grid } from '@mui/material';
import Link from 'next/link';
import style from './style.module.css'
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import Tooltip from '@mui/material/Tooltip';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '@/redux/slices/currentUser';
import { redirect } from 'next/navigation';
import { RootState } from '@/redux/store';
import { logInUserSchema } from '@/schema/user';
import { enqueueSnackbar } from 'notistack';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import ListIcon from '@mui/icons-material/List';

const Header = () => {
    const [isMenuOpen, setMenuOpen] = useState<boolean>(false);
    const dispatch = useDispatch();
    const currentUser = useSelector((state: RootState) => state.currentUser);

    const logoutUser = () => {
        const isUserLoggedIn = logInUserSchema.safeParse(currentUser);
        if (isUserLoggedIn.success) {
            enqueueSnackbar("Logout successfully");
            dispatch(logout());
            redirect('/');
        }
        else {
            enqueueSnackbar("Login First");
        }
    }

    const handleClose = () => {
        setMenuOpen(false);
    }

    const handleClick = () => {
        setMenuOpen(true);
    }

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
                <Grid className={` ${style.toolbar} ${style.relative} `}>
                    <Button
                        id="basic-button"
                        onClick={handleClick}
                    >
                        <ListIcon className={`${style.whiteColor} `} />
                    </Button>
                    <Menu
                        id="basic-menu"
                        open={isMenuOpen}
                        onClose={handleClose}
                        className={`${style.absolute} `}
                    >
                        <MenuItem onClick={handleClose}>
                            <Link href="/login" className={`${style.blackBackground}`}>
                                <Typography
                                    variant="h6"
                                    component="div"
                                    className={` ${style.textStyle} ${style.block} ${style.flexGrow} `}
                                >
                                    <Tooltip title="Login">
                                        <LoginIcon />
                                    </Tooltip>
                                </Typography>
                            </Link>
                        </MenuItem>

                        <MenuItem onClick={handleClose}>
                            <Link href="/register" className={`${style.blackBackground}`}>
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
                        </MenuItem>

                        <MenuItem onClick={handleClose}>
                            <Link href="/recipe/create" className={`${style.blackBackground}`}>
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
                        </MenuItem>

                        <MenuItem onClick={handleClose} >
                            <Link href="/recipe/bookmark" className={`${style.blackBackground}`}>
                                <Typography
                                    variant="h6"
                                    component="div"
                                    className={` ${style.textStyle} ${style.block} ${style.flexGrow}`}
                                >
                                    <Tooltip title="Bookmark recipe">
                                        <BookmarkIcon />
                                    </Tooltip>
                                </Typography>
                            </Link>
                        </MenuItem>

                        <MenuItem onClick={handleClose}>
                            <Typography
                                variant="h6"
                                component="div"
                                className={` ${style.textStyle} ${style.block} ${style.flexGrow} ${style.pointer} ${style.blackBackground}`}
                                onClick={logoutUser}
                            >
                                <Tooltip title="Logout">
                                    <LogoutIcon />
                                </Tooltip>
                            </Typography>
                        </MenuItem>
                    </Menu>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default Header;