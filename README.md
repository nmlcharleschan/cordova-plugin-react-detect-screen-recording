# cordova-plugin-detect-screen-recording

This plugin detects screen recording (not screenshot) event.

Supported platforms: **iOS only**.

There is **no plan to support Android** because there is no API to detect screen recording.

## Installation

Specify in package.json as follow:
```json
{
    ...
    "dependencies": {
        ...
        "cordova-plugin-detect-screen-recording": "git+ssh://git@gitlab.com/net-makers/cordova-plugin-react-detect-screen-recording.git",
        ...
    }
}
```

Then run `npm install`. Afterwards, `git clone` its ionic native wrapper from https://gitlab.com/net-makers/ionic-native-detect-screen-recording to `node_modules/@ionic-native` and rename the cloned directory as `detect-screen-recording/` such that you have `node_modules/@ionic-native/detect-screen-recording/`.

Run `ionic cap sync` after installation to update native codes of the project.

## API
### import
Import plugin as follow:
```typescript
import { DetectScreenRecording } from '@ionic-native/detect-screen-recording';
```

### isCaptured

Get current captured status.

See also: https://developer.apple.com/documentation/uikit/uiscreen/2921651-captured?language=objc

```typescript
DetectScreenRecording.isCaptured(function(isCaptured: any) {
    console.log(isCaptured);
    // do something
});
```

### onCaptureStatusChanged

Registers a callback function to invoke when the capture status is changed.

See also: https://developer.apple.com/documentation/uikit/uiscreencaptureddidchangenotification?language=objc

```typescript
DetectScreenRecording.onCaptureStatusChanged(function(isCaptured: any) {
    console.log(isCaptured);
    // do something
});
```
