import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import { NavBar } from "./components/NavBar";
import { DaySelector } from "./components/DaySelector";

const useStyles = makeStyles(() => ({
  app: {
    backgroundColor: "#E4E4E4",
    width: "100%",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className={("App", classes.app)}>
      <NavBar />
      <DaySelector />
      <div>
        <h1>Hello body</h1>
      </div>
    </div>
  );
}

export default App;
