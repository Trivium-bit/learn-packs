import { Box, TextField } from "@mui/material"
import useDebounce from "components/UseDebounce/UseDebounce";
import { ChangeEvent, useEffect, useState } from "react";
import { findNameCardsPackAC, getCardsPacksTC } from "redux/packs-reducer";
import { useAppDispatch } from "redux/store";
import s from "./NameOptions.module.css";

export default function SearchPack() {

  const [searchValue, setSearchValue] = useState<string>('')
  const debouncedValue = useDebounce<string>(searchValue, 200)

  const dispatch = useAppDispatch();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value)
  }

  useEffect(() => {
    dispatch(findNameCardsPackAC(searchValue))
  }, [debouncedValue])

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
