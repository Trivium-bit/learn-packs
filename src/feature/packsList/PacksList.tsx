import { Box, Button, Pagination, Stack, TextField } from '@mui/material'
import React, { ChangeEvent, useState } from 'react'
import { addCardsPacksTC, getCardsPacksTC, setCurrentPageAC } from 'redux/packs-reducer';
import { useAppDispatch, useAppSelector } from 'redux/store';
import TablePacks from './Table'

export const PacksList: React.FC = () => {

    const [newPackName, setNewPackName] = useState('');

    const dispatch = useAppDispatch();
    const totalCardPacksPageCount = useAppSelector((state) => state.packs.cardPacksTotalCount)
    const currentPage = useAppSelector((state) => state.packs.page)

    const handleChangePagination = (event: React.ChangeEvent<unknown>, page: number) => {
        dispatch(setCurrentPageAC(page))
        dispatch(getCardsPacksTC())
    }
    const handleChangeNewPack = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setNewPackName(event.target.value);
    };
    const handleAddNewCardsPack = () => {
        debugger
        dispatch(addCardsPacksTC({ name: newPackName }))
    }


    return (
        <Box sx={{
            display: "flex",
            justifyContent: "center",
            width: '1280px',
            flexDirection: 'column',
            mt: "60px",
            ml: "120px"
        }}>
            <Box
            sx={{
                display: "flex",
                flexDirection: 'column',
                width: '600px',
                pb: "10px"
            }}>
            <TextField
                value={newPackName}
                placeholder={"Enter a new name of card Pack"}
                onChange={handleChangeNewPack}
            />
            <Button
             sx={{
                width: '200px',
                mt: "10px"
            }}
            variant="contained" onClick={handleAddNewCardsPack}>add Pack</Button>
            </Box>
            <TablePacks />
            <Stack spacing={2}
                sx={{
                    mt: "60px",
                }}>
                <Pagination variant="outlined" shape="rounded" count={totalCardPacksPageCount} onChange={handleChangePagination} page={currentPage} />
            </Stack>
        </Box>
    )
}