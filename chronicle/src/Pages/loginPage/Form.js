import { useContext, useState } from "react";
import userapi from "../../apiservice/userapi";
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
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import Dropzone from "react-dropzone";
import { useNavigate } from "react-router-dom";

import { UserContext } from "../../App";

const Form = () => {

  const navigate = useNavigate()

  const { state, dispatch } = useContext(UserContext)

  const [pageType, setPageType] = useState("login");
  const [value, setValue] = useState("")

  const isNonMobile = useMediaQuery("(min-width:600px)");
  const isLogin = pageType === "login";
  const isRegister = pageType === "register";

  const handleLogin = async (e) => {
    e.preventDefault();
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
  
    try {
      let response = await userapi.post('/loginApi',
      JSON.stringify({ email: email, password: password }),
      {
        headers: { 'Content-Type': 'application/json' }
      })

      // alert(response.data.message)
      console.log(response.data.user)
      localStorage.setItem('user',JSON.stringify(response.data.user))
      localStorage.setItem('log',true)
      // setIsLoggedin(true)
      // dispatch({type: "USER", payload: true})
      try{
        if(response.data.user.role == "admin"){
          return navigate("/admin")
        }
      }catch(err){
        alert("Unauthorized")
      }
      navigate("/dashboard")


    } catch (error) {
     
     //handle unauthorize scenerio
    }
    
  }

  return (
     
        
        <form >
        <Box
          display="grid "
          gap="30px"
          gridTemplateColumns="repeat(4, minmax(0, 1fr))"
          sx={{
            "& > div": { gridColumn: isNonMobile ? undefined : "span 4" }, color: "black"
          }}
        >
          {isLogin && (
            <>
              <TextField
                id="email"
                label="Email"
                variant="standard"
                name="email"
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                id="password"
                label="Password"
                type="password"
                variant="standard"
                name="password"
                sx={{ gridColumn: "span 4" }}
              />
               <Box
                gridColumn="span 4"
                borderRadius="5px"
                sx={{ color: "black" }}
              >
              <Button
                onClick={(handleLogin)}
                type="submit"
                fullWidth
                sx={{
                  m: "2rem 0",
                  p: "1rem 5rem",
                  backgroundColor: "#DC143C",
                  color: "white",
                  "&:hover": { color: "white", backgroundColor: "#00BFFF" },
                }}
              > LOGIN
              </Button>
              </Box>
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
                  <FormControlLabel value="Student" control={<Radio />} label="Student" />
                  <FormControlLabel value="Male" control={<Radio />} label="Alumini" />

                </RadioGroup>
              </FormControl>

              <Box
                gridColumn="span 4"
                border={`1px solid #222`}
                borderRadius="5px"
                p="1rem"
                sx={{ color: "black" }}
              >
                <Dropzone
                  acceptedFiles="image/*"
                  multiple={false}
                  onDrop={(acceptedFiles) =>
                    setValue(acceptedFiles[0])
                  }

                >
                  {({ getRootProps, getInputProps }) => (
                    <Box
                      {...getRootProps()}
                      border={`2px dashed #DC143C`}
                      p="1rem"
                      textAlign="center"
                      sx={{ "&:hover": { cursor: "pointer" } }}
                    >

                      <input {...getInputProps()} />
                      <ArrowCircleUpIcon />
                      {!value.name ? (
                        <p style={{ textAlign: "center", margin: "5px" }}>Add Picture Here</p>
                      ) : (
                        <Typography sx={{ textAlign: "center" }}>{value.name}</Typography>

                      )}


                    </Box>
                  )}
                </Dropzone>
              </Box>
              <Box
                gridColumn="span 4"
                borderRadius="5px"
                sx={{ color: "black" }}
              >
                <Button
              fullWidth
              type="submit"
              sx={{
                m: "2rem 0",
                p: "1rem",
                backgroundColor: "#DC143C",
                color: "black",
                "&:hover": { color: "white", backgroundColor: "#8B0000"},
              }}
            > REGISTER
            </Button>
                
              </Box>
              
              
            </>
          )}




        </Box>

        {/* BUTTONS */}
        <Box>
          
          {/* <Button
              fullWidth
              type="submit"
              sx={{
                m: "2rem 0",
                p: "1rem",
                backgroundColor: "#DC143C",
                color: "black",
                "&:hover": { color: "white", backgroundColor: "#8B0000"},
              }}
            > {isLogin ? "LOGIN" : "REGISTER"}
            </Button> */}
          <Typography
            onClick={() => {
              setPageType(isLogin ? "register" : "login");
            }}
            sx={{
              textDecoration: "underline",
              color: "black",
              "&:hover": {
                cursor: "pointer",
                color: "#00BFFF",
              },
            }}
          >
            {isLogin
              ? "Don't have an account? Sign Up here."
              : "Already have an account? Login here."}
          </Typography>
        </Box>
      </form>
  );
};

export default Form;
