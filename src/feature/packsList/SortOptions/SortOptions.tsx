import { Box } from '@mui/material'
import React, { ChangeEvent } from 'react'
import { MyAllPacks } from './MyAllPacks'
import SearchPack from './SearchPack'

export type SearchPropsType = {
   searchValue: string
   searchHandler: (event: ChangeEvent<HTMLInputElement>) => void
}


export const SortOptions: React.FC<SearchPropsType> = ({searchValue, searchHandler}) => {

   return (
      <Box sx={{
         display: "flex",
         flexDirection: "row",
         justifyContent: "space-around",
         alignItems: "center",
         mb: "24px"
      }}>
         <SearchPack searchValue={searchValue} searchHandler={searchHandler}/>
         <MyAllPacks />
      </Box>
   )
}