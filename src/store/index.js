// Libraries
import { createStore } from "redux";
import reducer from "../reducers";

// Initial State
const initialState = { 
	effect: "overlay",
	size: "small",
	fps: "24",
	colorspace: "rgb",
	mode: "full",
	backend: "cpu",
	status: "off"
};

// Store variable
export const store = createStore(reducer, initialState);