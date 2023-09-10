import React, { FunctionComponent } from "react";
import { Box, Typography } from "@mui/material";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Counter from "./components/Counter/Counter";
import { Provider } from "react-redux";
import store from "./store";
import DisplayCounter from "./components/Counter/DisplayCounter";

const App: FunctionComponent = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Box>
        <Typography>Counter Application</Typography>
      </Box>
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <Provider store={store}>
              <DisplayCounter />
              <Counter />
            </Provider>
          </Route>
        </Switch>
      </BrowserRouter>
    </Box>
  );
};

export default App;
