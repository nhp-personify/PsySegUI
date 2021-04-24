// Set effect actions
export function setEffect(effectType){
	return {
		type: "SET_EFFECT",
		effect: effectType
	}
}

// Set size change actions
export function setSize(frameSize){
	return {
		type: "SET_SIZE",
		size: frameSize
	}
}

// Set fps change actions
export function setFPS(realFPS){
	return {
		type: "SET_FPS",
		fps: realFPS
	}
}

// Set mode change actions
export function setMode(reqMode){
	return {
		type: "SET_MODE",
		mode: reqMode
	}
}

// Set colorspace change actions
export function setColorspace(reqColorspace){
	return {
		type: "SET_COLORSPACE",
		colorspace: reqColorspace
	}
}

// Set backend change actions
export function setBackend(reqBackend){
	return {
		type: "SET_BACKEND",
		backend: reqBackend
	}
}