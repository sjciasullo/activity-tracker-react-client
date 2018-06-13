# Activity Tracker React Client

Front end React client which consumes Spring API for Activity Tracker.

### Technologies
- React, create-react-app, Google Maps API through google-maps-react and react-places-autocomplete packages, data visualization with Recharts

### Dev Running Instructions
1. Clone [activity-tracker-api](https://github.com/sjciasullo/activity-tracker-api) repository and follow instructions to start server
2. If first time cloning this repo, enter "npm install" on command line.
3. Enter "cp -ur google-maps-react/ node_modules/" to overwrite google-maps package with edited version
4. Enter "npm start" to start react app
  - REACT_APP_GOOGLE_API_KEY={YOUR_KEY_HERE} REACT_APP_HOST={YOUR_API_URL_HERE} npm run start