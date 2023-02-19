/** @format */

import React, { useState, useEffect, useContext } from "react";
import {
  Box,
  IconButton,
  InputBase,
  Typography,
  Select,
  MenuItem,
  FormControl,
  useTheme,
  useMediaQuery,
  InputLabel,
  FormHelperText,
  Button,
  Stack,
  Grid,
} from "@mui/material";
import {
  Search,
  Message,
  DarkMode,
  LightMode,
  Notifications,
  Help,
  Menu,
  Close,
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { setMode, setLogout, setLogin } from "@/state/index.js";
import { useNavigate, Link } from "react-router-dom";
import FlexBetween from "@/components/FlexBetween";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import ReactGA from "react-ga";
import { login } from "@/scenes/loginPage";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { ReactSVG } from "react-svg";
import { ThemeContext } from "styled-components";
import { ReactComponent as SkynetLogo } from "@/assets/512.svg";

const languages = [
  {
    code: "en",
    name: "English",
    country_code: "gb",
  },
  {
    code: "ee",
    name: "Eesti",
    country_code: "ee",
  },
  {
    code: "fi",
    name: "Suomalainen",
    country_code: "fi",
  },
  {
    code: "swe",
    name: "Svenska",
    country_code: "se",
  },
  {
    code: "nor",
    name: "Norsk",
    country_code: "no",
  },
  {
    code: "rus",
    name: "Русский",
    country_code: "ru",
  },
  {
    code: "ukr",
    name: "Українська",
    country_code: "ua",
  },
];

const LandingNavbar = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  const { t } = useTranslation();
  const theme = useTheme();
  const body = document.body;
  const primaryColor = theme.palette.primary.main;
  const currentTheme = useContext(ThemeContext);

  const [language, setLanguage] = React.useState(
    localStorage.getItem("language") || navigator.language
  );

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const handleChange = (event) => {
    setLanguage(event.target.value);
  };

  const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

  const neutralLight = theme.palette.neutral.light;
  const dark = theme.palette.neutral.dark;
  const background = theme.palette.primary.darkMain;
  const primaryLight = theme.palette.primary.light;
  const alt = theme.palette.background.alt;
  const border = theme.palette.neutral.main;

  const fullName = "John Doe";
  //  `${user.firstName} ${user.lastName}`;

  return (
    <FlexBetween padding="0 1rem" backgroundColor={alt}>
      <FlexBetween>
        <Box sx={{ padding: 1 }}>
          <Grid display="flex" alignItems="center">
            <Box
              alignItems="center"
              display="flex"
              justifyContent="center"
              sx={{ paddingTop: 1 }}
            >
              <Link onClick={() => navigate("/")}>
                <SkynetLogo
                  style={{
                    fill: theme.palette.neutral.dark,
                    stroke: theme.palette.neutral.dark,
                    width: "45px",
                  }}
                />
              </Link>
            </Box>
            <Box
              display="flex"
              justifyContent="center"
              sx={{ paddingTop: 0.3 }}
            >
              <Typography
                fontWeight="bold"
                fontSize="clamp(1rem, 1.88rem, 2.25rem)"
                color="neutral.dark"
                onClick={() => navigate("/home")}
                sx={{
                  "&:hover": {
                    color: primaryLight,
                    cursor: "pointer",
                  },
                }}
              >
                KYNET
              </Typography>
            </Box>
          </Grid>
        </Box>

        {isNonMobileScreens && (
          <FlexBetween padding="0 1rem">
            {/* MENU BAR */}
            <Stack direction="row" spacing={2}>
              <Button style={{ whiteSpace: "nowrap" }} href="#text-buttons">
                OUR SERVICES
              </Button>
              <Button style={{ whiteSpace: "nowrap" }} href="#text-buttons">
                APPLY FOR A JOB
              </Button>
              <Button style={{ whiteSpace: "nowrap" }} href="#text-buttons">
                CONTACT
              </Button>
            </Stack>
          </FlexBetween>
        )}
      </FlexBetween>
      {/* DESKTOP NAVBAR */}
      {isNonMobileScreens ? (
        <FlexBetween gap="2rem">
          <IconButton onClick={() => dispatch(setMode())}>
            {theme.palette.mode === "dark" ? (
              <DarkMode sx={{ fontSize: "25px" }} />
            ) : (
              <LightMode sx={{ color: dark, fontSize: "25px" }} />
            )}
          </IconButton>

          {/* LANGUAGE TOGGLE */}
          <FormControl variant="standard" value={t("language")}>
            <InputLabel htmlFor="language-toggle">{t("language")}</InputLabel>
            <Select
              labelId="default-language"
              id="language-toggle"
              value={language}
              onChange={handleChange}
              sx={{
                backgroundColor: neutralLight,
                borderRadius: "0.25rem",
                p: "0.25rem 1rem",
                "& .MuiSvgIcon-root": {
                  pr: "0.25rem",
                  width: "3rem",
                },
                "& .MuiSelect-select:focus": {
                  backgroundColor: neutralLight,
                },
              }}
              input={<InputBase />}
            >
              {languages.map(({ code, name, country_code }) => (
                <MenuItem
                  value={code}
                  key={country_code}
                  onClick={() => i18next.changeLanguage(code)}
                >
                  <span className={`fi fi-${country_code} mx-1`}></span>
                  &nbsp;&nbsp;
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl variant="standard" value={fullName}>
            <MenuItem onClick={() => navigate("/login")}>{t("login")}</MenuItem>
          </FormControl>
        </FlexBetween>
      ) : (
        <IconButton
          onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
        >
          <Menu />
        </IconButton>
      )}
      {/* MOBILE NAVBAR */}
      {!isNonMobileScreens && isMobileMenuToggled && (
        <Box
          position="fixed"
          right="0"
          bottom="0"
          height="100%"
          zIndex="10"
          maxWidth="500px"
          minWidth="300px"
          backgroundColor={alt}
        >
          {/* CLOSE ICON */}
          <Box display="flex" justifyContent="flex-end" p="1rem">
            <IconButton
              onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
            >
              <Close />
            </IconButton>
          </Box>

          {/* MENU ITEMS */}
          <FlexBetween
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap="3rem"
          >
            <IconButton
              onClick={() => dispatch(setMode())}
              sx={{ fontSize: "25px" }}
            >
              {theme.palette.mode === "dark" ? (
                <DarkMode sx={{ fontSize: "25px" }} />
              ) : (
                <LightMode sx={{ color: dark, fontSize: "25px" }} />
              )}
            </IconButton>
            <FlexBetween>
              {/* MENU BAR */}
              <Stack>
                <Button style={{ whiteSpace: "nowrap" }} href="#text-buttons">
                  OUR SERVICES
                </Button>
                <Button style={{ whiteSpace: "nowrap" }} href="#text-buttons">
                  APPLY FOR A JOB
                </Button>
                <Button style={{ whiteSpace: "nowrap" }} href="#text-buttons">
                  CONTACT
                </Button>
              </Stack>
            </FlexBetween>

            {/* ALGUS */}
            <FormControl variant="standard">
              <InputLabel htmlFor="language-toggle">{t("language")}</InputLabel>
              <Select
                labelId="default-language"
                id="language-toggle"
                value={language}
                onChange={handleChange}
                sx={{
                  backgroundColor: neutralLight,
                  borderRadius: "4px",
                  p: "0.25rem 1rem",
                  "& .MuiSvgIcon-root": {
                    pr: "0.25rem",
                    width: "3rem",
                  },
                  "& .MuiSelect-select:focus": {
                    backgroundColor: neutralLight,
                  },
                }}
                input={<InputBase />}
              >
                {languages.map(({ code, name, country_code }) => (
                  <MenuItem
                    value={code}
                    key={country_code}
                    onClick={() => i18next.changeLanguage(code)}
                  >
                    <span className={`fi fi-${country_code} mx-1`}></span>
                    &nbsp;&nbsp;
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl variant="standard" value={fullName}>
              <MenuItem onClick={() => navigate("/login")}>
                {t("login")}
              </MenuItem>
            </FormControl>

            {/* LÕPP */}
          </FlexBetween>
        </Box>
      )}
    </FlexBetween>
  );
};

export default LandingNavbar;
