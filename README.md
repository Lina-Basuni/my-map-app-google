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

## Service Worker

* The Service worker is active only in the production build mode
* Production build mode can be started by running `npm run build`.
