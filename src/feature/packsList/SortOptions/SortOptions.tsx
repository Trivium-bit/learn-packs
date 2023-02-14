import { Box } from '@mui/material'
import React from 'react'
import { MyAllPacks } from './MyAllPacks'
import SearchPack from './SearchPack'



export const SortOptions: React.FC = () => {

   return (
      <Box sx={{
         display: "flex",
         flexDirection: "row",
         justifyContent: "space-around",
         alignItems: "center",
         mb: "24px"
      }}>
         <SearchPack />
         <MyAllPacks />
      </Box>
   )
}