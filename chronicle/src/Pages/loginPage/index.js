import { Box, Typography, useMediaQuery } from "@mui/material";
import Form from "./Form";

const LoginPage = () => {

  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  return (
   
      <Box sx={{color: "#000"}}
        width={isNonMobileScreens ? "50%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        border="3px solid #DC143C"
        backgroundColor="#FFF"
      >
        <Typography fontWeight="500" variant="h4" sx={{ mb: "1.5rem", textAlign: 'center' }}>
          Welcome
        </Typography>
        <Form />
      </Box>
   
  );
};

export default LoginPage;
