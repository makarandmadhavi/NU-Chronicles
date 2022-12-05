import { useState } from "react";
import {
  Box,
  Button,
  TextField,
  useMediaQuery,
  Typography,

  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl, FormLabel
} from "@mui/material";
import Dropzone from "react-dropzone";

function Form(){
  const [pageType, setPageType] = useState("login");
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const isLogin = pageType === "login";
  const isRegister = pageType === "register";
  return(
    <form >
          <Box
            display="grid"
            gap="30px"
            gridTemplateColumns="repeat(4, minmax(0, 1fr))"
            sx={{
              "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
            }}
          >
            {isLogin && (
              <>
              <TextField
              label="Email"
              variant="standard"
              name="email"
              sx={{ gridColumn: "span 4" }}
            />
            <TextField
              label="Password"
              type="password"
              variant="standard"
              name="password"
              sx={{ gridColumn: "span 4" }}
            />
              </>
            )}
            

            {isRegister && (
              <>
                
                <TextField
                  label="First Name"
                  variant="standard"
                  name="firstName"
                 
                  sx={{ gridColumn: "span 2" }}
                />
                <TextField
                  label="Last Name"
                  variant="standard"
                  name="lastName"
                  sx={{ gridColumn: "span 2" }}
                />
                <TextField
              label="Email"
            
              variant="standard"
   
              name="email"
        
              sx={{ gridColumn: "span 4" }}
            />
            <TextField
              label="Password"
              type="password"
              
              variant="standard"
           
            
              name="password"
      
              sx={{ gridColumn: "span 4" }}
            />
                <TextField
                  label="NUID"
             
                  variant="standard"
                  name="nuid"
                  sx={{ gridColumn: "span 4" }}
                />
                <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                <RadioGroup row>
                <FormControlLabel value="female" control={<Radio />} label="Student" />
                <FormControlLabel value="male" control={<Radio />} label="Alumini" />
                
              </RadioGroup>
              </FormControl>
                
                <Box
                  gridColumn="span 4"
                  border={`1px solid #C2C2C2`}
                  borderRadius="5px"
                  p="1rem"
                >
                  <Dropzone
                    acceptedFiles=".jpg,.jpeg,.png"
                    multiple={false}
                    onDrop={(acceptedFiles) =>
                      console.log(acceptedFiles)
                    }
                  >
                    {({ getRootProps, getInputProps }) => (
                      <Box
                        {...getRootProps()}
                        border={`2px dashed #B20000`}
                        p="1rem"
                        sx={{ "&:hover": { cursor: "pointer" } }}
                      >
                        <input {...getInputProps()} />
                          <p>Add Picture Here</p>
                          
                      </Box>
                    )}
                  </Dropzone>
                </Box>
              </>
            )}

            

            
          </Box>

          {/* BUTTONS */}
          <Box>
            <Button
              fullWidth
              type="submit"
              sx={{
                m: "2rem 0",
                p: "1rem",
                backgroundColor: "#DC143C",
                color: "#000",
                "&:hover": { backgroundColor: "#8B0000" },
              }}
            > {isLogin ? "LOGIN" : "REGISTER"}
            </Button>
            <Typography
              onClick={() => {
                setPageType(isLogin ? "register" : "login");
              }}
              sx={{
                textDecoration: "underline",
                color: "#1E90FF",
                "&:hover": {
                  cursor: "pointer",
                  color : '#00BFFF'
                },
              }}
            >
              {isLogin
                ? "Don't have an account? Sign Up here."
                : "Already have an account? Login here."}
            </Typography>
          </Box>
        </form>
  )
}

export default Form