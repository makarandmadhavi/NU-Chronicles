import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";

const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  return (
    <Box sx={{color: "white"}}>
      <Box
        width={isNonMobileScreens ? "50%" : "93%"}
        p="2rem"
        m="5rem auto"
        borderRadius="1.5rem"
        backgroundColor="wheat"
      >
        <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }}>
          Welcome
        </Typography>
        <Form />
      </Box>
    </Box>
  );
};

export default LoginPage;
