import { Box, Stack } from '@mui/material'
import React from 'react'
import { AddNewPack } from './AddNewPack';
import { PaginationComponent } from './PaginationComponent';
import { SortOptions } from './SortOptions/SortOptions';
import TablePacks from './TablePacks';

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
            <SortOptions />
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