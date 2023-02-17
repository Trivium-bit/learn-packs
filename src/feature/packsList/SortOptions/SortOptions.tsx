import { Box } from '@mui/material'
import { MyAllPacks } from './MyAllPacks'
import SearchPack, { SearchPropsType } from './SearchPack'

export default function SortOptions(props: SearchPropsType) {

   return (
      <Box sx={{
         display: "flex",
         flexDirection: "row",
         justifyContent: "space-around",
         alignItems: "center",
         mb: "24px"
      }}>
         <SearchPack searchHandler={props.searchHandler}/>
         <MyAllPacks />
      </Box>
   )
}
