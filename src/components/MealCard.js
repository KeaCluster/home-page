import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  cardWrapper: {},
  container: {
    position: "relative",
    textAlign: "center",
    backgroundColor: "white",
    maxWidth: "15rem",
    borderRadius: "10px",
    marginLeft: "20px",
    marginRight: "20px",
    marginTop: "20px",
    paddingBottom: "10px",
  },
  media: {
    maxWidth: "15rem",
    borderRadius: "inherit",
    width: "100%",
  },
  tag: {
    position: "absolute",
    top: "8px",
    left: "16px",
  },
  name: {
    position: "aboslute",
    bottom: "8px",
    left: "16px",
    fontSize: "15px",
  },
}));

const MealCard = () => {
  const [mealData, setMealData] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    const apiUrl = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef";
    fetch(apiUrl)
      .then((res) => res.json())
      .then(({ meals }) => setMealData(meals));
  }, []);

  return (
    <div className={classes.cardWrapper}>
      <Grid sx={{ flexGrop: 1 }} container spacing={2}>
        {mealData.map((meal, i) => {
          return (
            <div className={classes.container}>
              <img
                className={classes.media}
                src={meal.strMealThumb}
                alt={meal.strMeal}
              />
              <div className={classes.tag}>{meal.strTag}</div>
              <div className={classes.area}>{meal.strArea}</div>
              <div className={classes.name}>{meal.strMeal}</div>
            </div>
          );
        })}
      </Grid>
    </div>
  );
};

export default MealCard;
