import { setStatus } from "../actions";
import { store } from "../store";

class Camera {

	constructor(width, height){

		// Get Elements
		this.cameraInput = document.getElementById("videoInput");
		this.canvasInput = document.getElementById("canvasInput");
		this.showInput = document.getElementById("showInput");
		this.canvasInput.width = width;
		this.canvasInput.height = height;
		this.context = this.canvasInput.getContext('2d');
		this.status = false;

		// Bind method
		this.clearFrame = this.clearFrame.bind(this);
		this.takeFrame = this.takeFrame.bind(this);
		this.run = this.run.bind(this);
		this.stop = this.stop.bind(this);
		this.render = this.render.bind(this);
	}

	// Clearing frame
	clearFrame() {
    	this.context.fillStyle = "#AAA";
    	this.context.fillRect(0, 0, this.canvasInput.width, this.canvasInput.height);
	    var data = this.canvasInput.toDataURL('image/png');
    	this.showInput.setAttribute('src', data);
	};

	// Taking frame
	takeFrame() {
		this.context.drawImage(this.cameraInput, 0, 0, this.canvasInput.width, this.canvasInput.height);
		if (this.status) {
			var data = this.canvasInput.toDataURL('image/png');
			this.showInput.setAttribute('src', data);
		}	
	};

	// Running
	run() {
		// access video stream from webcam
		navigator.mediaDevices.getUserMedia({
			video:true,
			audio:false
		})
		// on success, stream it in video tag
		.then((stream) => {
			this.cameraInput.srcObject = stream;
			this.cameraInput.play();
			this.status = true;
			this.timerID = setInterval(this.takeFrame, 50);
		})
		.catch(function(err) {
			console.log("An error occurred: " + err);
			store.dispatch(setStatus("off"));
		});
	}

	// Stopping
	stop() {
		if (this.status) {
			clearInterval(this.timerID);
			this.status = false;
			const stream = this.cameraInput.srcObject;
			const tracks = stream.getTracks();
			tracks.forEach(function(track) {
				track.stop();
			});
			this.cameraInput.srcObject = null;
		}
	}

	// Rendering
	render() {
		if (this.status) {
			this.status = false;
		} else {
			this.status = true;
		}
	}
};

export default Camera;
