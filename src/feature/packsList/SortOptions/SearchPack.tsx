import { Box, TextField } from "@mui/material"
import useDebounce from "components/UseDebounce/UseDebounce";
import { ChangeEvent, useEffect, useState } from "react";
import { SetInfoAC } from "redux/app-reducer";
import { findNameCardsPackAC, getCardsPacksTC } from "redux/packs-reducer";
import { useAppDispatch, useAppSelector } from "redux/store";
import s from "./NameOptions.module.css";

export default function SearchPack() {

    const cardPacks = useAppSelector((state) => state.packs.cardPacks)
    const [searchValue, setSearchValue] = useState<string>('')
    const debouncedValue = useDebounce<string>(searchValue, 200)

    const dispatch = useAppDispatch();

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value)
    }

    useEffect(() => {
        dispatch(findNameCardsPackAC(searchValue))
        if (cardPacks.length < 0) {
            dispatch(SetInfoAC("Колоды с введенным название не найдены. Измените параметры запроса"))
        }
        else if (searchValue === "") {
            dispatch(getCardsPacksTC());
        }
    }, [debouncedValue, cardPacks, dispatch, searchValue])

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
                onChange={handleChange}
                value={searchValue}
            />
        </Box>
    )
}
