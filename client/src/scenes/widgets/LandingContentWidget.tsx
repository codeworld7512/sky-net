/** @format */

import {
  Box,
  Divider,
  IconButton,
  Typography,
  useTheme,
  Button,
  Grid,
} from '@mui/material'
import FlexBetween from '@/components/FlexBetween'
import WidgetWrapper from '@/components/WidgetWrapper'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setPost } from '@/state'
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'
import { ReactComponent as Deal } from '@/assets/deal.svg'

const LandingContentWidget = () => {
  const dispatch = useDispatch()
  const token = useSelector((state) => state.token)
  const { t } = useTranslation()

  const { palette } = useTheme()
  const main = palette.neutral.main
  const primary = palette.primary.main

  return (
    <WidgetWrapper>
      <FlexBetween container spacing={1}>
        <Box p="1rem 0">
          <Typography
            variant="h3"
            component="h1"
            sx={{ fontWeight: 700, mb: 2 }}
          >
            {t('home_right_talent')}
          </Typography>
          <Typography
            variant="h1"
            component="h1"
            sx={{ fontWeight: 700, mb: 2 }}
          >
            {t('home_heading')}
          </Typography>
          <Typography
            variant="h5"
            component="h1"
            sx={{ fontWeight: 700, mb: 2 }}
          >
            {t('home_subheading')}
          </Typography>
        </Box>
        <Box p="1rem 0" alignItems="center" justifyContent="center">
          <Deal width="25vw" alignItems="center" justifyContent="center" />
        </Box>
      </FlexBetween>

      <Divider />

      {/* BUTTONS */}
      <Box p="1rem 0">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          gap="1rem"
        >
          <Button variant="contained" size="large">
            {t('home_button1')}
          </Button>
          <Button variant="contained" size="large">
            {t('home_button2')}
          </Button>
        </Box>
      </Box>
    </WidgetWrapper>
  )
}

export default LandingContentWidget
