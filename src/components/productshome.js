import React from "react";
import { Row } from "react-bootstrap";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import { Grid } from "@mui/material";
import redbike from "../images/redbike.png";
import bluebike from "../images/bluebike.png";
import greenbike from "../images/greenbike.png";
import yellowbike from "../images/yellowbike.png";
import redscooter from "../images/redscooter.png";
import bluescooter from "../images/bluescooter.png";
import greenscooter from "../images/greenscooter.png";
import yellowscooter from "../images/yellowscooter.png";

const useStyles = makeStyles({
  color: {
    // backgroundColor: "black",
    padding: "0 30px",
  },
});

function ProductsHome() {
  document.title = "Bikes & Scooters";

  const classes = useStyles();

  return (
    <>
      <Grid className={classes.color} container spacing={3}>
        <Grid item xs={6} md={3} lg={3}>
          <Card>
            <CardMedia component="img" image={bluebike} alt="green iguana" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Road Bike
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Road bikes are bicycles designed to take you as far and as fast
                as your legs can manage on paved surfaces. The road bike gets
                its name from the terrain it is designed to be used on – the
                road.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Rent</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={6} md={3} lg={3}>
          <Card>
            <CardMedia component="img" image={redbike} alt="green iguana" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Mountain Bike
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Mountain bikes are bicycles designed to take you as far and as
                fast as your legs can manage on paved surfaces. The road bike
                gets its name from the terrain it is designed to be used on –
                the road.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Rent</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={6} md={3} lg={3}>
          <Card>
            <CardMedia component="img" image={greenbike} alt="green iguana" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Touring Bike
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Touring bikes are bicycles designed to take you as far and as
                fast as your legs can manage on paved surfaces. The road bike
                gets its name from the terrain it is designed to be used on –
                the road.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Rent</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={6} md={3} lg={3}>
          <Card>
            <CardMedia component="img" image={yellowbike} alt="green iguana" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Folding Bike
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Folding bikes are bicycles designed to take you as far and as
                fast as your legs can manage on paved surfaces. The road bike
                gets its name from the terrain it is designed to be used on –
                the road.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Rent</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
      <Grid className={classes.color} container spacing={3}>
        <Grid item xs={6} md={3} lg={3}>
          <Card>
            <CardMedia component="img" image={bluescooter} alt="green iguana" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Red Scooter
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Road bikes are bicycles designed to take you as far and as fast
                as your legs can manage on paved surfaces. The road bike gets
                its name from the terrain it is designed to be used on – the
                road.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Rent</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={6} md={3} lg={3}>
          <Card>
            <CardMedia component="img" image={redscooter} alt="green iguana" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Mountain Bike
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Mountain bikes are bicycles designed to take you as far and as
                fast as your legs can manage on paved surfaces. The road bike
                gets its name from the terrain it is designed to be used on –
                the road.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Rent</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={6} md={3} lg={3}>
          <Card>
            <CardMedia
              component="img"
              image={greenscooter}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Touring Bike
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Touring bikes are bicycles designed to take you as far and as
                fast as your legs can manage on paved surfaces. The road bike
                gets its name from the terrain it is designed to be used on –
                the road.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Rent</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={6} md={3} lg={3}>
          <Card>
            <CardMedia
              component="img"
              image={yellowscooter}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Folding Bike
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Folding bikes are bicycles designed to take you as far and as
                fast as your legs can manage on paved surfaces. The road bike
                gets its name from the terrain it is designed to be used on –
                the road.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Rent</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
      <Row className="m-3">
        <h1>
          Meeting you <span style={{ color: "#61dafb" }}>Halfway !</span>{" "}
        </h1>
      </Row>
    </>
  );
}

export default ProductsHome;
