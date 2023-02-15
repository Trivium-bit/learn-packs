import { Pagination } from '@mui/material'
import { setCurrentPageAC } from 'redux/packs-reducer';
import { useAppDispatch, useAppSelector } from 'redux/store'

export const PaginationComponent: React.FC = () => {

    const dispatch = useAppDispatch();

    const currentPage = useAppSelector((state) => state.packs.page)
    const totalCardPacksPageCount = useAppSelector((state) => state.packs.cardPacksTotalCount)

    const handleChangePagination = (event: React.ChangeEvent<unknown>, page: number) => {
        dispatch(setCurrentPageAC(page))
    }

    return (
        <Pagination variant="outlined" shape="rounded" count={totalCardPacksPageCount} onChange={handleChangePagination} page={currentPage} />
    )
}