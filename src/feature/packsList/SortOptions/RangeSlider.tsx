import React, { useEffect, useState } from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { Slider } from '@mui/material'
import { useAppDispatch, useAppSelector } from 'redux/store'
import { useDebounce } from 'use-debounce'
import { setPackCardsCountAC } from 'redux/packs-reducer'


export const RangeSlider = () => {
    const minCountCards = useAppSelector((state) => state.packs.minCardsCount)
    const maxCountCards = useAppSelector((state) => state.packs.maxCardsCount)
    const max = useAppSelector((state) => state.packs.max)
    const min = useAppSelector((state) => state.packs.min)

    const dispatch = useAppDispatch()

    const [value, setValue] = useState<Array<number>>([min, max])
    const debouncedValue = useDebounce<Array<number>>(value, 500)

    useEffect(() => {
        setValue([min, max])
    }, [max, min])

    useEffect(() => {
        dispatch(setPackCardsCountAC(minCountCards, maxCountCards))
    }, [maxCountCards, minCountCards])

    useEffect(() => {
        dispatch(setPackCardsCountAC(value[0], value[1]))
    }, [debouncedValue])

    const handleChange = (event: Event, value: number | number[]) => {
        let newValue = value as [number, number]
        setValue(newValue as number[])
    }

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '5px',
                }}
            >
                <Typography variant="h6">Number of cards</Typography>
                <Box
                    sx={{
                        display: 'flex',
                        gap: '10px',
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '36px',
                            height: '36px',
                            background: '#FFFFFF',
                            border: '1px solid #D9D9D9',
                            borderRadius: '2px',
                            margin: '0 15px 0 0',
                        }}
                    >
                        <Typography>{value[0]}</Typography>
                    </Box>
                    <Slider
                        sx={{
                            width: '155px',
                        }}
                        getAriaLabel={() => 'range'}
                        value={[value[0], value[1]]}
                        onChange={handleChange}
                        valueLabelDisplay="off"
                        min={minCountCards}
                        max={maxCountCards}
                    />
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '36px',
                            height: '36px',
                            background: '#FFFFFF',
                            border: '1px solid #D9D9D9',
                            borderRadius: '2px',
                            margin: '0 0 0 15px',
                        }}
                    >
                        <Typography>{value[1]}</Typography>
                    </Box>
                </Box>
            </Box>
        </>
    )
}