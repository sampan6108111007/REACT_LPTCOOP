import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import { useNavigate } from "react-router-dom";
const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

export default function SelectSystem() {
    const navigate = useNavigate();
    function handleClick() {
        navigate("/walfare_1");
      }
  return (
    <Paper
      sx={{
        p: 2,
        margin: "auto",
        maxWidth: 5000,
        flexGrow: 1,
        boxShadow: 20,
        // border: 1,
        display:"flex",
        backgroundColor: (theme) =>
          theme.palette.mode === "dark" ? "#1A2027" : "#fff",
      }}
      
    >
      {/* <Grid container spacing={2} >
        <Grid item sx={{ border: 1 }}>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img
              alt="complex"
              src="https://cdn.pixabay.com/photo/2017/12/03/20/29/android-2995824_960_720.png"
            />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                สงเคราะห์สหกรณ์สมาคมฌาปนกิจออมทรัพย์ครูลำปาง (สสค)
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img
              alt="complex"
              src="https://cdn.pixabay.com/photo/2017/12/03/20/29/android-2995824_960_720.png"
            />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                สงเคราะห์สหกรณ์สมาคมฌาปนกิจออมทรัพย์ครูลำปาง (สสค)
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img
              alt="complex"
              src="https://cdn.pixabay.com/photo/2017/12/03/20/29/android-2995824_960_720.png"
            />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                สงเคราะห์สหกรณ์สมาคมฌาปนกิจออมทรัพย์ครูลำปาง (สสค)
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img
              alt="complex"
              src="https://cdn.pixabay.com/photo/2017/12/03/20/29/android-2995824_960_720.png"
            />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                สงเคราะห์สหกรณ์สมาคมฌาปนกิจออมทรัพย์ครูลำปาง (สสค)
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img
              alt="complex"
              src="https://cdn.pixabay.com/photo/2017/12/03/20/29/android-2995824_960_720.png"
            />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                สงเคราะห์สหกรณ์สมาคมฌาปนกิจออมทรัพย์ครูลำปาง (สสค)
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img
              alt="complex"
              src="https://cdn.pixabay.com/photo/2017/12/03/20/29/android-2995824_960_720.png"
            />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                สงเคราะห์สหกรณ์สมาคมฌาปนกิจออมทรัพย์ครูลำปาง (สสค)
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid> */}
      <Grid onClick={handleClick}>
      <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img
              alt="complex"
              src="https://cdn.pixabay.com/photo/2017/12/03/20/29/android-2995824_960_720.png"
            />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                สงเคราะห์สหกรณ์สมาคมฌาปนกิจออมทรัพย์ครูลำปาง (สสค)
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        </Grid>

        <Grid>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img
              alt="complex"
              src="https://cdn.pixabay.com/photo/2017/12/03/20/29/android-2995824_960_720.png"
            />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                สงเคราะห์สหกรณ์สมาคมฌาปนกิจออมทรัพย์ครูลำปาง (สสค)
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        </Grid>

        
        <Grid>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img
              alt="complex"
              src="https://cdn.pixabay.com/photo/2017/12/03/20/29/android-2995824_960_720.png"
            />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                สงเคราะห์สหกรณ์สมาคมฌาปนกิจออมทรัพย์ครูลำปาง (สสค)
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        </Grid>

        
        <Grid>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img
              alt="complex"
              src="https://cdn.pixabay.com/photo/2017/12/03/20/29/android-2995824_960_720.png"
            />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                สงเคราะห์สหกรณ์สมาคมฌาปนกิจออมทรัพย์ครูลำปาง (สสค)
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        </Grid>
        
        <Grid>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img
              alt="complex"
              src="https://cdn.pixabay.com/photo/2017/12/03/20/29/android-2995824_960_720.png"
            />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                สงเคราะห์สหกรณ์สมาคมฌาปนกิจออมทรัพย์ครูลำปาง (สสค)
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        </Grid>
        
        <Grid>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img
              alt="complex"
              src="https://cdn.pixabay.com/photo/2017/12/03/20/29/android-2995824_960_720.png"
            />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                สงเคราะห์สหกรณ์สมาคมฌาปนกิจออมทรัพย์ครูลำปาง (สสค)
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        </Grid>

        
        <Grid>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img
              alt="complex"
              src="https://cdn.pixabay.com/photo/2017/12/03/20/29/android-2995824_960_720.png"
            />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                สงเคราะห์สหกรณ์สมาคมฌาปนกิจออมทรัพย์ครูลำปาง (สสค)
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        </Grid>

        
    </Paper>
  );
}
