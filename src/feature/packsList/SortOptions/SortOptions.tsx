import {Box} from '@mui/material'
import React from 'react'
import { MyAllPacks } from './MyAllPacks'
import { SearchPack } from './SearchPack'


export const SortOptions: React.FC = () => {

    return (
       <Box   sx={{
        mb: "24px"
      }}>
         <SearchPack />
         <MyAllPacks />
       </Box>
    )
}