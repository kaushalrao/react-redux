import { Box, Button } from "@mui/material";
import { connect, useDispatch, useSelector } from "react-redux";
import { CounterState } from "../../reducers";
import { ADD_ONE, MINUS_ONE } from "../../actions";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state: CounterState) => state.counter);
  const containerStyle = {
    display: "flex",
  };
  const buttonStyle = {
    backgroundColor: "#e5e7f3",
    margin: "5px",
    border: "1px solid blue",
    fontSize: "1.5rem",
    width: "40px",
    height: "40px",
  };
  const add = () => {
    dispatch({ type: ADD_ONE });
  };

  const subtract = () => {
    if (counter === 0) {
      return;
    }
    dispatch({ type: MINUS_ONE });
  };
  return (
    <div className="App">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div style={containerStyle}>
          <Button sx={buttonStyle} onClick={subtract}>
            -
          </Button>
          <Button sx={buttonStyle} onClick={add} style={buttonStyle}>
            +
          </Button>
        </div>
      </Box>
    </div>
  );
};

const mapStateToProps = (state: { counter: number }) => {
  return {
    counter: state.counter,
  };
};
export default connect(mapStateToProps)(Counter);
