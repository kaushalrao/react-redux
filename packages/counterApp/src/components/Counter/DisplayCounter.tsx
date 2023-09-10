import { Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { CounterState } from "../../reducers";

const DisplayCounter = () => {
  const counter = useSelector((state: CounterState) => state.counter);
  return (
    <Typography
      sx={{
        color: "red",
      }}
    >
      {counter}
    </Typography>
  );
};
export default DisplayCounter;
