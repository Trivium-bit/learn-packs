import { Box } from '@mui/material'
import { ChangeEvent } from 'react'
import MyAllPacks from './MyAllPacks'
import RangeSlider from './RangeSlider'
import SearchPack from './SearchPack'

export type SortOptionsPropsType = {
   searchHandler?: (e: ChangeEvent<HTMLInputElement>) => void
   searchValue?: string
}

export default function SortOptions({ searchHandler, searchValue }: SortOptionsPropsType) {

   return (
      <Box sx={{
         display: "flex",
         flexDirection: "row",
         justifyContent: "space-around",
         alignItems: "center",
         mb: "24px"
      }}>
         <SearchPack searchHandler={searchHandler} searchValue={searchValue} />
         <MyAllPacks />
         <RangeSlider />
      </Box>
   )
}
