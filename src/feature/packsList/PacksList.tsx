import { Box, Stack } from '@mui/material'
import useDebounce from 'components/UseDebounce/UseDebounce';
import React, { ChangeEvent, useEffect, useState } from 'react'
import { findNameCardsPackAC, getCardsPacksTC } from 'redux/packs-reducer';
import { useAppDispatch, useAppSelector } from 'redux/store';
import { AddNewPack } from './AddNewPack';
import { PaginationComponent } from './PaginationComponent';
import { SortOptions } from './SortOptions/SortOptions';
import TablePacks from './TablePacks';

export const PacksList: React.FC = () => {

    const dispatch = useAppDispatch();
    const [searchValue, setSearchValue] = useState<string>('')
    const debouncedValue = useDebounce<string>(searchValue, 200)
    const search = useAppSelector((state) => state.packs.search)
    const page = useAppSelector((state) => state.packs.page)
    const pageCount = useAppSelector((state) => state.packs.pageCount)
    
    const searchHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value)
        findNameCardsPackAC(searchValue)
    }

    useEffect(() => {
        dispatch(getCardsPacksTC());
      }, [debouncedValue, search, page, pageCount, dispatch, searchValue]);

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
            <SortOptions searchValue={searchValue} searchHandler={searchHandler}/>
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