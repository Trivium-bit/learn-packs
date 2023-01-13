import { Box, TextField } from "@mui/material"



export const OptionsComponents: React.FC = () => {

    return (
        <Box sx={{
            display: "flex",
            flexDirection: 'column',
            width: '600px',
            pb: "10px"
        }}>
            <TextField
             /*    size="small"
                value={}
                placeholder={"Enter name of card Pack"}
                onChange={} */
            />
        </Box>
    )
}