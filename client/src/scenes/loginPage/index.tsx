import React, { useState } from 'react'
import { Box, Typography, useTheme, useMediaQuery } from '@mui/material'
import { useNavigate, Link } from 'react-router-dom'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import Form from './Form'

function LoginPage() {
  const theme = useTheme()
  const navigate = useNavigate()
  const isNonMobileScreens = useMediaQuery('(min-width: 1000px)')

  const [alignment, setAlignment] = useState('talent')

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setAlignment(newAlignment)
  }

  return (
    <Box>
      <Box
        width="100%"
        backgroundColor={theme.palette.background.alt}
        p="1rem 6%"
        textAlign="center"
        display="flex"
        justifyContent="center"
      >
        <Typography
          fontWeight="bold"
          fontSize="clamp(1rem, 1.88rem, 2.25rem)"
          color="primary"
        >
          SKY
        </Typography>
        <Typography
          fontWeight="bold"
          fontSize="clamp(1rem, 1.88rem, 2.25rem)"
          color="neutral.dark"
        >
          NET
        </Typography>
      </Box>

      <Box
        width={isNonMobileScreens ? '50%' : '93%'}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.primary.darkMain}
      >
        <Box
          m="2rem auto"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
        >
          <ToggleButtonGroup
            color="primary"
            value={alignment}
            exclusive
            onChange={handleChange}
            aria-label="Platform"
          >
            <ToggleButton value="corporate">Corporate</ToggleButton>
            <ToggleButton value="talent">Talent</ToggleButton>
          </ToggleButtonGroup>
        </Box>
        <Form />
      </Box>
    </Box>
  )
}

export default LoginPage
