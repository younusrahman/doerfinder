import { Button } from '@mui/material'
import { Colors } from 'other/customizeStyles'
import React from 'react'

export default function CustomButton({text, icon}) {
  return (
    <Button fullWidth variant="contained" sx={{ backgroundColor:Colors.primary, '&:hover': {
        backgroundColor: 'white',
        color: Colors.primary,
    },
    
    }} endIcon={icon}>
    {text}
  </Button>
  )
}
