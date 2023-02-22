import { Box, TextField } from "@mui/material"
import s from "./NameOptions.module.css";
import { SortOptionsPropsType } from "./SortOptions";

export default function SearchPack({searchHandler, searchValue}: SortOptionsPropsType) {
    
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

