import { Box, TextField } from "@mui/material"
import useDebounce from "components/UseDebounce/UseDebounce";
import { ChangeEvent, useEffect, useState } from "react";
import { findNameCardsPackAC, getCardsPacksTC } from "redux/packs-reducer";
import { useAppDispatch } from "redux/store";
import s from "./NameOptions.module.css";


/* export const SearchPack: React.FC = () => {
    
    const dispatch = useAppDispatch();
     
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(findNameCardsPackAC(e.target.value))
    }   

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
                onChange={onChangeHandler}
            />
        </Box>
    )
} */

export default function SearchPack() {

  const [searchValue, setSearchValue] = useState<string>('')
  const debouncedValue = useDebounce<string>(searchValue, 500)

  const dispatch = useAppDispatch();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    
    setSearchValue(event.target.value)
    dispatch(findNameCardsPackAC(searchValue))
  }

  // Fetch API (optional)
  useEffect(() => {
    dispatch(findNameCardsPackAC(searchValue))
  }, [debouncedValue])

  return (
    <div>
      <p>Value real-time: {searchValue}</p>
      <p>Debounced value: {debouncedValue}</p>
      <input className={s.titleName} type="text" value={searchValue} onChange={handleChange} />
    </div>
  )
}
