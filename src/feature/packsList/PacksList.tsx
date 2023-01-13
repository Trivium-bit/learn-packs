import { Box, Stack } from '@mui/material'
import React from 'react'
import { AddNewPack } from './AddNewPack';
import { OptionsComponents } from './OptionsComponents';
import { PaginationComponent } from './PaginationComponent';
import TablePacks from './TablePacks'

export const PacksList: React.FC = () => {

    return (
        <Box sx={{
            display: "flex",
            justifyContent: "center",
            width: '1280px',
            flexDirection: 'column',
            mt: "60px",
            ml: "120px"
        }}>
            <AddNewPack />
            <OptionsComponents />
            <TablePacks />
            <Stack spacing={2}
                sx={{
                    mt: "60px",
                }}>
                <PaginationComponent />
            </Stack>
        </Box>
    )
}