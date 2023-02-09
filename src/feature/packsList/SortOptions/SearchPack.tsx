import { Box, TextField } from "@mui/material"
import s from "./NameOptions.module.css";


export const SearchPack: React.FC = () => {

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
            />
        </Box>
    )
}