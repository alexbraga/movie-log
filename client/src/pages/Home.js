import React from "react";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import CustomContainer from "../layout/CustomContainer";

function Home() {
  const navigate = useNavigate();

  return (
    <CustomContainer
      title="Movie.log"
      content={
        <div>
          <Box sx={{ textAlign: "center" }}>
            <Typography>The cinephile's diary.</Typography>
          </Box>

          <Button
            color="primary"
            fullWidth
            sx={{ marginTop: 2 }}
            type="button"
            variant="contained"
            onClick={() => navigate("/login")}
          >
            Login
          </Button>

          <Button
            color="primary"
            fullWidth
            sx={{ marginTop: 2 }}
            type="button"
            variant="outlined"
            onClick={() => navigate("/register")}
          >
            Create Account
          </Button>

          <Typography align="center" sx={{ mt: 5 }}>
            Movie.log is best viewed on desktop for now
          </Typography>
        </div>
      }
    />
  );
}

export default Home;
