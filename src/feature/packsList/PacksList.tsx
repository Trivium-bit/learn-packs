import { Box, Button, Stack, TextField } from '@mui/material'
import React, { ChangeEvent, useState } from 'react'
import { addCardsPackTC} from 'redux/packs-reducer';
import { useAppDispatch} from 'redux/store';
import { AddPack } from './AddPack';
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
            <AddPack />
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