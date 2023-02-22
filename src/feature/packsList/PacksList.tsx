import { Box, Stack } from '@mui/material'
import useDebounce from 'components/UseDebounce/UseDebounce';
import React, { ChangeEvent, useEffect, useState } from 'react'
import { getCardsPacksTC, isMyPacksAC, searchPacksAC } from 'redux/packs-reducer';
import { useAppDispatch, useAppSelector } from 'redux/store';
import { AddNewPack } from './AddNewPack';
import { PaginationComponent } from './PaginationComponent';
import SortOptions from './SortOptions/SortOptions';
import TablePacks from './TablePacks';

export const PacksList: React.FC = () => {

    const dispatch = useAppDispatch();
    const [searchValue, setSearchValue] = useState('');
    const search = useAppSelector((state) => state.packs.search)
    const debouncedValue = useDebounce<string>(searchValue, 200)
    const page = useAppSelector((state) => state.packs.page)
    const pageCount = useAppSelector((state) => state.packs.pageCount)
    const isMyPacks = useAppSelector((state) => state.packs.isMyPacks)

    const searchHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value)
    }

    useEffect(() => {
        if (searchValue === "") {
            dispatch(getCardsPacksTC())
        } else {
            dispatch(searchPacksAC(searchValue))
        }
    }, [debouncedValue, search, page, pageCount, dispatch, searchValue, isMyPacks]);


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
            <SortOptions searchHandler={searchHandler} searchValue={searchValue}/>
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
