import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import NavBar from "./components/NavBar";
import DaySelector from "./components/DaySelector";
import MealCard from "./components/MealCard";

const useStyles = makeStyles(() => ({
  app: {
    backgroundColor: "#E4E4E4",
    width: "100%",
    height: "100%",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className={("App", classes.app)}>
      <NavBar />
      <DaySelector />
      <MealCard />
    </div>
  );
}

export default App;
