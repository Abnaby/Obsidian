## 1.2 Business Models For Mobile Apps 

| Model                                | Description                                                                             | Key Points                                                                                                                                         | Suitable for                                                      |
| ------------------------------------ | --------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| **Freemium model**                   | Applications are free but charge for additional features.<br>                           | - Must provide enough free features to attract users.<br>- Advanced features should appeal to users willing to pay.                                | General apps with upgradeable features.<br>زي Duolingo<br>        |
| **Advertisement-based applications** | Applications display ads while users interact with the app.<br>                         | - Effective for apps with long user interaction time.  <br>- Ads must be prominent without hiding essential content.  <br>- Avoid user distraction | Apps with high user engagement and long usage time.<br>زي يوتيوب  |
| **Transaction-based applications**   | Users are charged per transaction, flat fee, or percentage of transaction value.        | - Limited to specific applications.  <br>- Commonly used in business/financial apps                                                                | Mobile wallets, payment apps.<br>زي فودافون كاش او اوبر مثلا      |
| **Fee-based applications**           | Users pay for downloading and installing the application.                               | - Requires outstanding features or usability.  <br>- Best when no free or freemium alternatives are available.                                     | Premium, unique apps with no free competitors.<br>زي نيتفليكس كدا |
| **Free and enterprise applications** | Applications are free for users and focus on providing access to organization services. | - Not monetized directly through the app.  <br>- Generate revenue by directing users to organization services                                      | Bank apps, e-commerce apps, internal organization apps.           |
## 1.3 Mobile Device Types
- Basic phones:
	• Used for telephone and SMS only.
	• Provide a few built-in apps and games.
	• Installation of apps or browsing is not possible.
- Feature phones:
	• Limited support for apps.
	• Internet access via a built-in browser.
	• May have additional hardware such as camera.
- Smartphones:
	• Several sensors.
	• OS supports features (Application installation - Multimedia support - Browsing).
- Tablets:
	• Like smartphones but larger.
	• May support longer battery life.
- Companion devices / IoT appliances:
	• Computer-powered devices.
	• Used with a smartphone or tablet to access data in more convenient way.
## 1.4 Types of Mobile Applications 
### Types

| **Type**          | **Description**                                                                                                   | **Advantages**                                                                                                | **Disadvantages**                                                                                                                                                | **Testing Considerations**                                                                                                                      |
| ----------------- | ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| **Native**        | Developed using platform-specific SDKs, tools, and features. Installed and updated via app stores.                | - Better performance.  <br>- Full utilization of platform features.  <br>- Platform-specific user experience. | - Higher development cost.  <br>- Device-specific testing required.  <br>- Challenges with supporting multiple platforms.                                        | - Installability testing on devices.  <br>- Device compatibility.  <br>- Performance efficiency.  <br>- Usability testing.                      |
| **Browser-Based** | Accessed via mobile browsers and built with web technologies.                                                     | - Easier multi-platform support.  <br>- Lower development costs.  <br>- No installation required.             | - Limited access to platform-native APIs and sensors.  <br>- Less feature-rich compared to native or hybrid apps.  <br>- Requires browser compatibility testing. | - Browser compatibility testing.  <br>- Testing responsiveness, adaptiveness, and progressiveness.  <br>- ==No installability testing needed==. |
| **Hybrid**        | Combines native app wrapper with a web app inside. Downloaded from app stores and can access all device features. | - Easier to develop and maintain.  <br>- Access to device features.  <br>- Works offline like native apps.    | - Possible performance issues due to the wrapper.  <br>- May diverge from platform-specific expectations.                                                        | - Installability testing on devices.  <br>- Performance testing for wrappers.  <br>- Compatibility testing across platforms.                    |
There are four main ways in which mobile web applications are created
### Subtypes of Browser-Based Apps:

| **Subtype**               | **Description**                                                                      | **Features**                                                    |
| ------------------------- | ------------------------------------------------------------------------------------ | --------------------------------------------------------------- |
| **Mobile-Specific Sites** | Mobile-optimized versions of websites (e.g., m.facebook.com).                        | Redirects mobile browsers to a lightweight version of the site. |
| **Responsive Web Apps**   | Adjust design to form factor and screen size (==expressed by viewports==).           | Flexible and adjusts layout automatically.                      |
| **Adaptive Web Apps**     | Adjust design based on predefined sizes with adjustable features.                    | Different designs for various screen sizes.                     |
| **Progressive Web Apps**  | Allow web pages to be saved as shortcuts on the home screen, resembling native apps. | Can work offline and are installable.                           |
### Common Testing Parameters for All Types:

- **Device Support**: Ensure compatibility with various devices and their features.
- **Network Conditions**: Test availability and performance under varying network conditions.
- **Installability**: For native and hybrid apps.
- **Compatibility**: Across platforms and browsers (for web apps).
- **Performance Efficiency**: Measure speed and responsiveness.
- **Usability**: Test user experience and ease of use.
## 1.5 Mobile Application Architecture
### Architectural decisions include
#### Client-side architecture
- Thin Client Apps (Browser-based applications)
	- Don’t contain application code customized to the device.
	- Makes minimal use of mobile operating system features.
	- Use the web browser as the front-end and ==JavaScript as the language for implementing client-side== logic.
- Thick/Fat Client Apps (Native/Hybrid applications)
	- May have multiple layers of application code.
	- May use mobile operating system features.
#### Server-side Architecture
- Single-tier Arch 
	- They are monolithic (متجانس)
	- All Servers in same machine
	- less scalable and harder to secure.
- Multi-tier Arch 
	- spread server-side components across various units
	- significantly more expensive to develop
	- manage and host compared to single-tier architectures.
	- **Two-tier**: Separate web and database servers.
	- **Three-tier**: Includes application server.
#### Connection type
A mobile device might be connected to the server via connection types such as Wi-Fi or via cellular data connections such as 2G, 3G, 4G, and 5G. 
**Applications** typically operate in one of the following three modes
- Never Connected Apps 
	- Work Offline and Don't Need to be connected 
- Always Connected Apps
	- Require a permanent network connection during operation 
- Partially Connected Apps 
	- Require a connection for tasks such as data transfer 
	- Can operate for long periods of time without connection.
#### Data synchronization methods
- **Continuous mode** is where the data gets transferred as soon as it is submitted.
- **Store-and-forward mode** is where the data may be stored locally before being transferred, especially when no connectivity is available.
### Data Transfer
- **Synchronous Data Transfer**: The calling function waits for the called function to be completed before returning.
- **Asynchronous Data Transfer**: The called server function returns immediately, giving users more control.
## 1. 6 Test Strategy for Mobile Apps
### The test strategy may consider the challenge posed by 
#### 1. large number of different devices
- **Single Platform Approach**: 
	- Reduce scope to a single type of (Device - OS version - Carrier - Network type).
- **Multi-platform Approach**: 
	- Reduce scope to a representative selection of devices and OS used by most customers.
- **Maximum coverage Approach**:
	- Cover all (Devices - OS versions - Carriers - Network types - Manufacturers),
	- this is exhaustive testing and usually not economically viable.
#### 2. non-availability of devices, networks, or real-life conditions:
- **Remote device access services** 
	- This is a way to access devices over the web which are not otherwise owned.
- **Crowd testing services** 
	- This is as a way to access a huge group of volunteers and their devices.
- **Personal networks** 
	- such as friends and colleagues. This makes use of one’s own private social network.
- **Bug hunting**.
	- This is gamified testing event using volunteers from the company or from the general public
