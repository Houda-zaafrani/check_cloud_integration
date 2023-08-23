# React Google Maps Integration Example

This is a basic example of integrating Google Maps into a React project using the `@react-google-maps/api` library.

## Prerequisites

Before we wil begin, we need:

- A Google Maps API key. we get the key from :https://console.cloud.google.com

## Installation
In the project directory, install the required dependencies using:
   * npm install dotenv
   * npm install react-google-maps/api

# NConfiguration
Create a .env file in the root of project.

Add Google Maps API key to the .env file. 


Run the following command to start your React app:

npm start
Now app should now be running at http://localhost:3000.

The map will display our current location (if you've granted the necessary permissions) along with a marker.

# Features
- Displays a Google Map with a marker at the user's current location.
- Uses the @react-google-maps/api library for map integration.
- Utilizes the browser's Geolocation API to fetch the user's location.
- Environment variables are loaded using the dotenv package.

- Customization
Adjust the initial map center and zoom level in the Map component within src/App.js.

