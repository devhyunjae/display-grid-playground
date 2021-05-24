import * as React from "react";
import {
  HashRouter,
  Switch,
  Route,
} from "react-router-dom";
import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react";
import "focus-visible/dist/focus-visible";
import List from "./List";
import Detail from "./Detail";

export const App = () => (
  <ChakraProvider theme={theme}>
    <HashRouter>
        <Switch>
        <Route path="/detail">
            <Detail />
          </Route>
          <Route path="*">
            <List />
          </Route>
        </Switch>
    </HashRouter>
  </ChakraProvider>
);
