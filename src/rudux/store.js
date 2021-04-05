import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import addTodo  from "./reducers/addTodo";

export const store = createStore(addTodo, applyMiddleware(logger)) 
