import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { GridSpacing } from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import {
  Typography,
  Avatar,
  CssBaseline,
  Paper,
  Button,
  Grid,
  TextField
} from "@material-ui/core/";

const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh",
    background: "#242444"
  },
  paper: {
    margin: theme.spacing(7, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1)
  },
  submit: { margin: theme.spacing(3, 0, 2) }
}));

export default function SignInSide() {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid
        xs={false}
        elevation={6}
        square
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Paper>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <form className={classes.form}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Username"
                name="email"
                autoComplete="email"
                autoFocus
              />

              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Sign In
              </Button>
            </form>
          </div>
        </Paper>
      </Grid>
    </Grid>
  );
}
