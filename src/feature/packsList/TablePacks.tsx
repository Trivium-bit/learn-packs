import React, { ChangeEvent, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import ModeEditIcon from '@mui/icons-material/ModeEdit'
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined'
import { useAppDispatch, useAppSelector } from 'redux/store';
import { deleteCardsPackTC, getCardsPacksTC, changeNameCardsPackTC } from 'redux/packs-reducer';
import { useEffect } from 'react';
import Modal from 'components/Modal/Modal';
import { Button, TextField } from '@mui/material';

export default function TablePacks() {

  const [modalActive, setModalActive] = useState<boolean>(false);
  const [newPackName, setNewPackName] = useState('');
  const cardPacks = useAppSelector((state) => state.packs.cardPacks)

  const hoverStyleIcon = {
    transition: '0.5s',
    cursor: 'pointer',
    '&:hover': { color: '#1976d2', transition: '0.5s' },
  }

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCardsPacksTC());
  }, []);

  const onClickDeletePackHandler = (_id: string) => {
    dispatch(deleteCardsPackTC(_id))
  }

  const handleChangeNewPack = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setNewPackName(event.target.value);
  };
  const onClickChangePackName = (_id: string) => {
    dispatch(changeNameCardsPackTC(_id, newPackName))
    setModalActive(false)
  };

  const rows = cardPacks.map((pack) => {
    return {
      userId: pack.user_id,
      key: pack._id,
      Name: pack.name,
      Cards: pack.cardsCount,
      DateOfCreated: pack.created,
      CreatedBy: pack.user_name,
      Actions: [
        {
          icon: (
            <SchoolOutlinedIcon
              sx={hoverStyleIcon}
            />
          ),
        },
        {
          icon: (
            <ModeEditIcon
              onClick={() => { setModalActive(true) }}
              sx={hoverStyleIcon}
            />
          ),
        },
        {
          icon: (
            <DeleteOutlineIcon
              onClick={() => onClickDeletePackHandler(pack._id)}
              sx={hoverStyleIcon}
            />
          ),
        },
      ],

    }
  })

  return (
    <>
     
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow sx={{ backgroundColor: '#c3ddf7' }} aria-label="simple table">
              <TableCell>Name</TableCell>
              <TableCell align="right">Cards</TableCell>
              <TableCell align="right">Date Of Creation</TableCell>
              <TableCell align="right">Created by</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.key}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">{row.Name}</TableCell>
                <TableCell align="right">{row.Cards}</TableCell>
                <TableCell align="right">{row.DateOfCreated}</TableCell>
                <TableCell align="right">{row.CreatedBy}</TableCell>
                <TableCell align="right">
                  {row.Actions.map((icon, i) => {
                    return (
                      <span style={{ padding: '3px' }} key={i}>
                        {icon.icon}
                      </span>
                    )
                  })}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <Modal active={modalActive} setActive={setModalActive}>
        <div>
          <TextField
            size="small"
            value={newPackName}
            placeholder={"Enter a new name of card Pack"}
            onChange={handleChangeNewPack}
          />
        </div>
        <div>
          <Button
            sx={{
              width: '400px',
              mt: "250px"
            }}
            variant="contained" onClick={() => (onClickChangePackName(_id))}>
            change Name Pack
          </Button>
        </div>
      </Modal>
        </Table>
      </TableContainer>
    </>
  );
}