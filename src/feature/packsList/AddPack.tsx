import { Box, Button, TextField } from "@mui/material"
import { ChangeEvent, useState } from "react";
import { addCardsPackTC } from "redux/packs-reducer";
import { useAppDispatch } from "redux/store";


export const AddPack: React.FC = () => {

    const [newPackName, setNewPackName] = useState('');

    const dispatch = useAppDispatch();

    const handleChangeNewPack = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setNewPackName(event.target.value);
    };
    const handleAddNewCardsPack = () => {
        dispatch(addCardsPackTC({ name: newPackName }))
    };

    return (
        <Box sx={{
            display: "flex",
            flexDirection: 'column',
            width: '600px',
            pb: "10px"
        }}>
            <TextField
                size="small"
                value={newPackName}
                placeholder={"Enter a new name of card Pack"}
                onChange={handleChangeNewPack}
            />
            <Button
                sx={{
                    width: '200px',
                    mt: "10px"
                }}
                variant="contained" onClick={handleAddNewCardsPack}>
                add Pack
            </Button>
        </Box>
    )
}