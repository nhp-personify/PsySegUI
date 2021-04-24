/*
// Query camera selection region
const cameraOptions = document.querySelector('.video-options>select');

// Query video element
var video = document.getElementById('input_frame');

// Camera parameters
const constraints = {
	video: {
		width: {
			min: 480,
			ideal: 480,
			max: 1920,
		},
		height: {
			min: 360,
			ideal: 360,
			max: 1080
		},
	}
};

// First of all => query all available cameras
// Note: Disable due to issue
const getCameraSelection = async () => {
	const devices = await navigator.mediaDevices.enumerateDevices();
	const videoDevices = devices.filter(device => device.kind === 'videoinput');
	const options = videoDevices.map((videoDevice => {
		return `<option value="${videoDevice.deviceId}">${videoDevice.label}</option>`;
	});
	cameraOptions.innerHTML = options.join('');
};


// Stream handling
const handleStream = (stream) => {
	
	// Step 1: Adding source for video elements
	video.srcObject = stream;
};

// Update camera parameters & starting stream
const startStream = async (updatedConstraints) => {
	
	// Step 1: Get a stream from mediaDevices libraries
	const stream = await navigator.mediaDevices.getUserMedia(updatedConstraints);
		
	// Step 2: Handling this stream (show, get frame ...)
	handleStream(stream);
	
};

// Starting camera
const startCamera = () => {
	
	// Step 1: Check mediaDevices libraries is supported or not ?
	if ('mediaDevices' in navigator && navigator.mediaDevices.getUserMedia) {
		
		// Case 1: It is supported
		// Step 2: Get camera selector
		//getCameraSelection();
		
		// Step 3: Update camera parameters
		const updatedConstraints = {
			...constraints,
			deviceId: {
				exact: cameraOptions.value
			}
		};
		
		// Step 4: Update camera parameters & starting stream
		startStream(constraints);
		
	}
	else {
		console.log("Media Devices is not supported. Cannot open camera !!!");
	}
};


// Export function
export default startCamera;
