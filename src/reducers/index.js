// Reducer
export default (state, action) => {
	
	console.log(state);
	
	// Check type of actions
	switch (action.type) {
		
		// Case 1: Button effects
		case "SET_EFFECT": {
			
			// Only processing if difference
			if (action.effect !== state.effect) {
				
				// Update for UI
				document.getElementById(state.effect).style.backgroundColor = 'white';
				document.getElementById(state.effect).style.color = 'black';
				document.getElementById(action.effect).style.backgroundColor = 'green';
				document.getElementById(action.effect).style.color = 'white';
				
				// Loop for all types of effects
				switch (action.effect) {
					
					// Case 1: Blurring
					case "blur": {
						break;
					}
					
					// Case 2: Overlay Background
					case "overlay": {
						break;
					}
					
					// Case 3: Chroma Key
					case "chroma": {
						break;
					}
					
					// Case 4: Colorize
					case "colorize": {
						break;
					}
					
					// Case 5: Color Aura
					case "aura": {
						break;
					}
					
					default: break;
				};
			}
			
			// Update effect field
			return {
				...state,
				effect: action.effect
			};
			
			break;
		}
		
		// Case 2: Frame size change
		case "SET_SIZE": {
			
			// Loop for all frame size
			switch (action.size) {
				
				// Small size: 480 x 360
				case "small": {
					break;
				}
				
				// Medium size: 640 x 480
				case "medium": {
					break;
				}
				
				// Large size: 1080 x 720
				case "large": {
					break;
				}
				
				default: break;
			}
			
			// Update size field
			return {
				...state,
				size: action.size
			};
			
			break;
		}
		
		// Case 3: Set FPS change
		case "SET_FPS": {
			
			// Loop for all fps
			switch (action.fps) {
				
				// 15 FPS
				case "15": {
					break;
				}
				
				// 24 FPS
				case "24": {
					break;
				}
				
				// 30 FPS
				case "30": {
					break;
				}
				
				default: break;
			}
			
			// Update fps field
			return {
				...state,
				fps: action.fps
			};
			
			break;
		}
		
		// Case 4: Set Mode change
		case "SET_MODE": {
			
			// Loop for all modes
			switch (action.mode) {
				
				// Full mode
				case "full": {
					break;
				}
				
				// DNN only mode
				case "dnn": {
					break;
				}
				
				// Ultra Lite mode
				case "ultralite": {
					break;
				}
				
				default: break;
			}
			
			// Update mode field
			return {
				...state,
				mode: action.mode
			};
			
			break;
		}
		
		// Case 5: Set colorspace
		case "SET_COLORSPACE": {
			
			// Loop for all colorspace
			switch (action.colorspace) {
				
				// RGB colorspace
				case "rgb": {
					break;
				}
				
				// HSV colorspace
				case "hsv": {
					break;
				}
				
				// I420 colorspace
				case "i420": {
					break;
				}
				
				default: break;
			}
			
			// Update colorspace field
			return {
				...state,
				colorspace: action.colorspace
			};
			
			break;
		}
		
		// Case 6: Set Backend
		case "SET_BACKEND": {
			
			// Loop for all backend
			switch (action.backend) {
				
				// Processing by CPU
				case "cpu": {
					break;
				}
				
				// Processing by GPU
				case "gpu": {
					break;
				}
				
				default: break;
			}
			
			// Update backend field
			return {
				...state,
				backend: action.backend
			};
			
			break;
		}
		
		// Case 7: Set Status
		case "SET_STATUS": {
			
			// Loop for all colorspace
			switch (action.status) {
				
				// Starting process
				case "on": {
					document.getElementById("startBtn").style.display = 'none';
					document.getElementById("stopBtn").style.display = 'block';
					break;
				}
				
				// Stopping process
				case "off": {
					document.getElementById("startBtn").style.display = 'block';
					document.getElementById("stopBtn").style.display = 'none';
					break;
				}
				
				default: break;
			}
			
			// Update status field
			return {
				...state,
				status: action.status
			};
			
			break;
		}

		default: break;
	}

	return state;
};