import { Box, Button} from '@mui/material'
import React from 'react'
import s from "./NameOptions.module.css";


export const MyAllPacks: React.FC = () => {

    return (
        <Box>
            <Box className={s.titleName}>Shop packs cards</Box>
            <Button variant="contained">My</Button>
            <Button variant="contained">All</Button>
        </Box>
    )
}