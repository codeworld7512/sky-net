/** @format */

import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";
import { useNavigate, Link } from "react-router-dom";

const LoginPage = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  return (
    <Box>
      <Box
        width={isNonMobileScreens ? "50%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.primary.darkMain}
      >
        <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }}>
          Welcome to Skynet, the platform for the getting work done!
        </Typography>
        <Form />
      </Box>
    </Box>
  );
};

export default LoginPage;
