import { Box, TextField } from "@mui/material"
import { ChangeEvent } from "react";
import { findNameCardsPackAC } from "redux/packs-reducer";
import { useAppDispatch } from "redux/store";
import s from "./NameOptions.module.css";


export const SearchPack: React.FC = () => {
    
    const dispatch = useAppDispatch();

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(findNameCardsPackAC(e.target.value))
    }

    return (
        <Box 
            sx={{
            display: "flex",
            flexDirection: "column"     
        }}>
            <Box className={s.titleName}>Search</Box>
            <TextField
                label="Search field"
                size="small"
                onChange={onChangeHandler}
            />
        </Box>
    )
}