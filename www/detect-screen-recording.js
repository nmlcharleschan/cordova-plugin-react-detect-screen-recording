var exec = require('cordova/exec');

var PLUGIN_NAME = 'DetectScreenRecording';

var DetectScreenRecording = {
	onCaptureStatusChanged: function (success, error) {
		exec(success, error, PLUGIN_NAME, 'onCaptureStatusChanged');
	},
	isCaptured: function (success, error) {
		exec(success, error, PLUGIN_NAME, 'isCaptured');
	},
};

module.exports = DetectScreenRecording;
