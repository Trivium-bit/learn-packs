import { Box, Button } from '@mui/material'
import { setIsMyTableAC } from 'redux/packs-reducer';
import { useAppDispatch } from 'redux/store';
import s from "./NameOptions.module.css";

export default function MyAllPacks() {

    const dispatch = useAppDispatch();

    const onClickChangeMyPackName = () => {
        dispatch(setIsMyTableAC(true))
    };
    const onClickChangeAllPackName = () => {
        dispatch(setIsMyTableAC(false))
    };
    return (
        <Box>
            <Box className={s.titleName}>Shop packs cards</Box>
            <Button variant="contained" onClick={onClickChangeMyPackName}>My</Button>
            <Button variant="contained" onClick={onClickChangeAllPackName}>All</Button>
        </Box>
    )
}