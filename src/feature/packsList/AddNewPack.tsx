import { Box, Button, TextField } from "@mui/material"
import Modal from "components/Modal/Modal";
import { ChangeEvent, useState } from "react";
import { addCardsPackTC } from "redux/packs-reducer";
import { useAppDispatch } from "redux/store";
import s from "./AddNewPack.module.css";


export const AddNewPack: React.FC = () => {

    const [modalActive, setModalActive] = useState<boolean>(false);
    const [newPackName, setNewPackName] = useState('');

    const dispatch = useAppDispatch();

    const handleChangeNewPack = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setNewPackName(event.target.value);
    };
    const handleAddNewCardsPack = () => {
        dispatch(addCardsPackTC({ name: newPackName }));
        setModalActive(false);
    };

    return (
        <>
        <Modal active={modalActive} setActive={setModalActive}>
        <div>
          <TextField
           sx={{
            width: '400px',
            mt: "50px"
          }}
            size="small"
            value={newPackName}
            placeholder={"Enter a new name of card Pack"}
            onChange={handleChangeNewPack}
          />
        </div>
        <div>
          <Button
            sx={{
              width: '200px',
              mb: "20px"
            }}
            variant="contained" onClick={() => (handleAddNewCardsPack())}>
            ADD NEW PACK
          </Button>
        </div>
      </Modal>
        <Box sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: "20px"
        }}>
              <Box className={s.titleName}>
               Packs List
              </Box>
            <Button
                sx={{
                    width: '200px',
                }}
                variant="contained"  onClick={() => { setModalActive(true) }}>
                ADD NEW PACK
            </Button>
        </Box>
        </>
    )
    
}