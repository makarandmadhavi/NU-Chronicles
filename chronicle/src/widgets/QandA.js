import { InputBase, Divider, Button, Typography} from '@mui/material'
import React from 'react'

function QandA() {
    
  return (
    <>
    <Typography>FullName</Typography>
    

    <Divider sx={{ margin: "1.25rem 0", backgroundColor: "#222" }} />

        <>
        <InputBase
        placeholder='Questions...'
        sx={{width: "90%", backgroundColor: "#DCDCDC", borderRadius: "2rem", padding: "1rem 2rem"}} />
        <Button
        sx={{
          color: "#FFF", mt: 1, width: 80,
          backgroundColor: "#DC143C",
          borderRadius: "3rem",
          "&:hover": { color: "white", backgroundColor: "#8B0000"},
        }}
      >
        POST
      </Button>
      </>


    </>
  )
}

export default QandA