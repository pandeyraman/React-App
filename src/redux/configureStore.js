import { createStore } from "redux";
import { Reducer, initialState } from "./reducer";

const ConfigureStore = () => {
  const store = createStore(
    Reducer, // reducer
    initialState // our initialState
  );
};

export default ConfigureStore;
