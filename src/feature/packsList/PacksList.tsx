import { Box, Pagination, Stack } from '@mui/material'
import React from 'react'
import { setCardsPacksTC, setCurrentPageAC } from 'redux/packs-reducer';
import { useAppDispatch, useAppSelector } from 'redux/store';
import TablePacks from './Table'

export const PacksList: React.FC = () => {

    const dispatch = useAppDispatch();
    const totalCardPacksPageCount = useAppSelector((state) => state.packs.cardPacksTotalCount)
    const currentPage = useAppSelector((state) => state.packs.page)

    const handleChangePagination = (event: React.ChangeEvent<unknown>, page: number) => {
        dispatch(setCurrentPageAC(page))
        dispatch(setCardsPacksTC())
    }

    return (
        <Box>
            <TablePacks />
            <Stack spacing={2}>
                <Pagination variant="outlined" shape="rounded" count={totalCardPacksPageCount} onChange={handleChangePagination} page={currentPage} />
            </Stack>
        </Box>
    )
}