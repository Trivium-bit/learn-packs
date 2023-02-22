import { Box, Button } from '@mui/material'
import { isMyPacksAC } from 'redux/packs-reducer';
import { useAppDispatch, useAppSelector } from 'redux/store';
import s from "./NameOptions.module.css";
import { SortOptionsPropsType } from './SortOptions';

export default function MyAllPacks() {

    const isMyPacks = useAppSelector((state) => state.packs.isMyPacks)
    
    const dispatch = useAppDispatch();
    const onClickChangeMyAllPackName = () => {
        dispatch(isMyPacksAC(!isMyPacks))
    };

    return (
        <Box>
            <Box className={s.titleName}>Shop packs cards</Box>
            <Button variant="contained" onClick={onClickChangeMyAllPackName}>My</Button>
            <Button variant="contained">All</Button>
        </Box>
    )
}