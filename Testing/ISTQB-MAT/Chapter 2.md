## Mobile Application Test Types 
1. Testing for Compatibility with Device Hardware.
2. Testing for App Interactions with Device Software.
3. Testing for Various Connectivity Methods.
### Testing for Compatibility with Device Hardware.
1. **Testing For Device Features** 
	- Due to this changeability in Hardware (Finger Print), the tester needs a clear understanding of the devices and the features expected by its users.
	- Generally, it is not enough to test if the application works correctly with the expected features.
		- an app that supports the usage of front and rear camera should not crash if it is installed and executed on a device having multiple cameras, only one camera or no camera at all.
2. Testing For Different Displays 
	- Device displays can have various
		- screen sizes
		- viewport sizes
		- aspect ratios
		- resolutions measured in pixels per inch (ppi) and dots per inch (dpi)
	- Testing for different displays needs to be carried out to check the following:
		- The app scales all user elements according to current screen density and size
		- No Overlapping
		- Usability, touch issues do not occur
		- There is no problematic shrinkage of images because of high dpi/ppi
3. Testing for Device Temperature 
4. Testing for Device Input Sensors 
	- Testing for different device input sensors checks the following:
		- The app works as intended for each of the sensors available
		- react to external lighting react correctly under various lighting conditions
		- Location position is accurate under the following conditions:
			- Switching GPS on and off
			- Different GPS signal quality
5. Testing Different Input Methods 
	- allow for a variety of soft keyboards to be installed
	- app ensures that the keyboard pops up by default with appropriate layout and keys
	- user places one or more fingers on the touch screen,
		- double touch, swipe, tap, drag, pinch open/close
	- Cameras used by apps are able to capture images and videos, scan barcodes, QR codes and documents, and measure distances.
6. Testing for Orientation =D 
	- app maintains its state
	- Correct usability and functional
	- Input data fields retain already captured data.
	- *NOTE* not just focus on a single switch because rendering or state issues may not always show up after a single change
7. Testing for Typical Interrupts 
	* Interrupts: Calls, Messages, Charger Switch, Low memory, 
	* Test Follows 
		* app handles the all of the interrupts correctly without negative impact
		* app continues to function correctly, preserving its state,
		* Where the device has a blocking “do-not-disturb” mode which suppresses notifications
8. Testing for Access Permissions to Device Features
	* app is able to work with reduced permissions
	* Permissions are only requested for the resources which are relevant to the app’s functionality; no broad permissions for unrelated resources are allowed.
	* The app functionality responds correctly if a permission is withdrawn or rejected during installation.
	* Any request for permission issued by the app is correct and justified.
9. Testing for Power Consumption and State
	- Data integrity under low power and dead battery conditions
	- Power consumption while the app is active and is under heavy and low use
	- Power consumption while the app is in the background
### Testing for App Interactions with Device Software
1. Testing for Notification 
	- . Sometimes the operating system will either delay the display of the notifications or fail to display them at all in a bid to optimize power consumption
	- The correct handling of notifications received when the app is in the foreground or background, especially under low battery conditions
	- If notifications allow direct interaction with the app content
	- If notifications allow access to the app then the corresponding page of the app must be opened instead of the home screen when the notification contains a deep link to that page
2. ==Testing for Quick-access Links==
	- app shortcuts in Android
	- app shortcuts in Force-touch or 3d-touch for iOS
	- The actions performed in quick-access links are reflected correctly in the app when opened
3. Testing for User Preferences Provided by the Operating System
	- Any preferences (settings) provided to users by the operating system must be tested
		- For example, if the device is set to mute, the app should not play sounds
4. Testing for Different Types of Apps

| **Type of App** | **Testing Conditions**                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Native Apps** | **Device Compatibility**: Ensure the app works on different devices and OS versions.<br>**Utilization of Device Features**: Test integration with device features such as camera, GPS, and accelerometer.                                                                                                                                                                                                                                                                    |
| **Hybrid Apps** | **Interaction with Device Native Features**: Verify the app interacts properly with native device features via plugins.<br>**Performance Issues**: Identify any performance bottlenecks caused by the abstraction layer between native and web code.<br>**Usability**: Assess the look, feel, and responsiveness of the app compared to native apps on the platform.<br>                                                                                                     |
| **Web Apps**    | **Cross-Browser Compatibility**: Test the app across different mobile browsers to ensure consistent behavior.<br>**JavaScript Engine Compatibility**: Ensure functionality is not impacted by varying JavaScript engines across browsers.<br>**Utilization of OS Features**: Test how well the app utilizes OS-specific features like date pickers and keyboards.<br>**Usability**: Ensure the app's look and feel is comparable to native apps on the platform in question. |
5. Testing for Interoperability with Multiple Platforms and Operating System Versions  
6. Testing for Interoperability and Co-existence with other Apps on the Device
### Testing for Various Connectivity Methods
- Device emulators/simulators can simulate various network connections and some remote device access service providers include them within their features.
- Setting up your own mobile network to support various connection types and then applying bandwidth manipulation. This is a very costly alternative
- Field testing is potentially more cost-effective alternative, but is limited with regard to the reproduction of tests

Connectivity testing must ensure that the following test conditions are considered:
* Correct app functionality with different connectivity modes.
* Switching between modes does not cause any unexpected behavior or data loss.
* Clear information is given to the user if functionality is restricted due to limited or no network connection or if bandwidth is low. The message should state the limitations and their reasons