import { Box } from '@mui/material'
import { TablePaginationComponent } from 'components/TablePaginationComponent'
import React from 'react'
import TablePacks from './Table'



export const PacksList: React.FC = () => {
    return (
        <Box>
            <TablePacks />
            <TablePaginationComponent />
        </Box>
    )
}