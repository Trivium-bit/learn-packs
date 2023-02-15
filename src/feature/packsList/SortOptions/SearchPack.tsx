import { Box, TextField } from "@mui/material"
import { useAppSelector } from "redux/store";
import s from "./NameOptions.module.css";
import { SearchPropsType } from "./SortOptions";

export default function SearchPack({searchValue, searchHandler}: SearchPropsType) {

    const search = useAppSelector((state) => state.packs.search);

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
                value={search}
            />
        </Box>
    )
}
