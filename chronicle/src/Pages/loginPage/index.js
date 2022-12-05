// import { useTheme } from '@mui/material';
import { Box, Typography, useMediaQuery } from "@mui/material";
import Form from "./Form";

const LoginPage = () => {
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  return (
    <Box>
    <Box
        width={isNonMobileScreens ? "50%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor="#DCDCDC"
      >
        <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem", color: "#000" }}>
          Welcome
        </Typography>
        <Form />
      </Box>
    </Box>    
  )
};

export default LoginPage;
