import { Box, Slider } from '@mui/material'
import { MyAllPacks } from './MyAllPacks'
import RangeSlider from './RangeSlider'
import SearchPack, { SearchPropsType } from './SearchPack'

export default function SortOptions({ searchHandler, searchValue }: SearchPropsType) {

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
