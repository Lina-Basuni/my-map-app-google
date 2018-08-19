# MyReads

This is  the final project for Udacity's Front-End Web Development Nano-Degree.
This is a map app showing Luxor's most famous Temples.

# How To Use

* On starting the app a Map is displayed containing some markers
* Each marker points to a Temple in Luxor
* When you click on a marker an Info Box is opened displaying the name and address of the Temple
* There is side navigation menu that can be open by clicking on the hamburger menu on the top left of the page
* The navigation menu contains a search bar and a list of all the Temples present on the map
* You can search for any Temple present in the list by typing its name in the search bar
* When you click on a temple's name in the list it is zoomed in on  the map and it's info box is opened

## Installing the App

To get started using the app right away:

* clone the app by running `https://github.com/Lina-Basuni/my-map-app-google.git` on your terminal
* cd into the app repository you created
* install the Apps dependencies with `npm install` or `yarn install`
* start the development server with `npm start` or `yarn start`

## Dependencies

* `create-react-app`
* `FourSquare API`
* `Google Maps API`
* `react-google-maps`
* `axios`
* `escape-string-regexp`


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!


### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.


## Service Worker

* The Service worker is active only in the production build mode
* Production build mode can be started by running `npm run build`.
