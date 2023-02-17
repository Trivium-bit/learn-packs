import { Box, TextField } from "@mui/material"
import { ChangeEvent } from "react";
import s from "./NameOptions.module.css";

export type SearchPropsType = {
    searchHandler: (e: ChangeEvent<HTMLInputElement>) => void
    searchValue: string
}

export default function SearchPack({searchHandler, searchValue}: SearchPropsType) {
    
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
                onChange={searchHandler}
                value={searchValue}
            />
        </Box>
    )
}

