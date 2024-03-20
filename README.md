# Park Passage project

Project created by Einav Kohavi

Welcome to Park Passage!
In here I will describe the purpose and funcionalities of the project.

My project is using ReactJS, Bootstrap, and Routing, Linking etc from `react-router-dom`.<br>
The project's topic is national parks in the US.<br>
I am using a national parks API from US National Park Service governmental website:<br>
`https://www.nps.gov/subjects/developer/api-documentation.htm#/parks/getPark`<br>
This API provides a list of national parks, monuments, historical museums and trails to travel through from all around the US.

---

## Navbar and footer:

The first thing I'd like to address is the navbar and footer.<br>
I made sure to show a navbar at the top and a footer at the bottom of the website while navigating through different pages (components).

### Navbar (Header)

The navbar allows the user to navigate through the different pages inside the website.<br>
It includes:<br>
Home navigation through the home button and the logo as links<br>
National parks page<br>
About page

#### Functionality:

The navbar contains a navbar with an unordered list of list items (logo, and text buttons) with `Link` tags wrapping each one, directing to the required url path inside the website.

#### Image:

## ![Navbar](./public/Navbar.png "Navbar to navigate through the website pages")

### Footer

The footer is always shown at the bottom and includes:<br>
`All rights reserved` text<br>
Links to my different social platforms<br>

#### Functionality:

The footer contains a plain text paragraph for `All rights reserved`, and two image + text, each wrapped with `Link` tags directing to my Github and Linkedin pages.

#### Image:

![Footer](./public/Footer.png "Footer with links and rights reserved")

---

## Pages:

### Home page

In the home page, I introduce the users to the website's name, my name and a button for quick navigation to the parks page.

#### Functionality:

Button wrapped in `Link` tag directing to parks page url path.

#### Image:

![Home Page](./public/Home.png "Home page - Welcome")

---

### About page

The about page provides users with information about the website and a message from the website's manager.

#### Functionality:

Only contains a title div and an information div.

#### Image:

![About Page](./public/About.png "About page - Information")

---

### National parks page

This page presents objects fetched from the national parks API.<br>
Each object is shown inside a container with the name and an image of the park.<br>
The page also allows the user to search for a park by name with an input and a button.<br>
The user can input the whole name, part of it, or even one letter.

#### Functionality:

##### Fetching:

The parks page component fetches API data and saves it into 2 different arrays (`parksArray and allParks`).<br>
Also uses a `loading const` to fill the empty page when the API data has not yet been fetched.<br>
All said consts are using `useState`.<br>
The fetch occurs inside a `useEffect` function, `fetchApiData` async function with `try and catch` to handle errors. This function returns the data fetched from the API.<br>
Below the `useEffect`, a function to use it is introduced called `getApiData`. An async function that collects the API data by calling `fetchApiData` and puts them into the 2 arrays using `useState`.<br>
`parksArray` is later used to show requested parks, while `allParks` is later used to search through all the parks.<br>
Finally, the `getApiData` function is called at the end of the `useEffect`.<br><br>

##### Search park by name:

A `searchParkByName` function is introduced. This function collects the input value from the search input field.<br>
If the input field is empty, it changes `parksArray` to contain all parks to show them.<br>
Now, because the used API does not offer a search by name options, and only a search by park code, the function has to go over `allParks` array to find which park includes the input value given.<br>
The function then collects the appropriate park park code (if no appropriate park is found, `parksArray` is set to be empty).<br>
The function then uses the found park code and places it inside the url parameter to search by park code, and fetches from it.<br>
Finally, sets `parksArray` to the fetched data.<br>
This function is called when the `Search` button is clicked.<br><br>

##### Return:

Finally, the return of the `Parks` page is introduced, providing the title, search div, and `map` function to show all required parks<br>
If `parksArray` is empty, a div saying `No parks found` is returned.<br>
Otherwise, the `map` function is used to go over `parksArray` and show all parks currently inside it.<br>
Each park is displayed as a seperate div, and all elements inside it are wrapped with a `Link` that redirects to the `ParkDetails` component of the current park by using it's park code inside the url path.

#### Image:

![Parks Page](./public/Parks.png "Parks page - API objects")

---

### Park details page

When a user clicks on one of the objects presented in the parks page, he is redirected to the selected park details page.<br>
In this page, the selected park's detailed information is presented.<br>
The title for the page will be the park's full name (different from the short name shown in parks page).<br>
A contained with all the detailed information includes:<br>
Park description<br>
Address<br>
Park activities<br>
Operating hours<br>
Contact information<br>
Park images<br>
Park website link<br>
Below this container there is a button to return to the parks page.<br>

#### Functionality:

##### Fetching:

The `parkDetails` page component fetches API data and saves it into an array of one object containing the required park (`park` const).<br>
A const for park code is collected from the parameters in the url path using `useParams` (`parkCode` const).<br>
The `parkCode` const is then placed inside the url to fetch from.
Also uses a `loading const` to fill the empty page when the API data has not yet been fetched.<br>
All said consts are using `useState`.<br>
The fetch occurs inside a `useEffect` function, `fetchApiData` async function with `try and catch` to handle errors. This function returns the data fetched from the API.<br>
If the fetch was unsuccessful, the `park` array will be set to empty.

##### Return:

Finally, the return of the `parkDetails` page is introduced, providing the detailed information of the park.<br>
If `park` is empty, a div saying `Park not found!` is returned.<br>
Otherwise, returns a div containing the park full name as title, another div containing all detailed park information, and a button to return to the parks page.<br>
The website link inside the detailed information div is wrapped with a `Link` tag directing to the park website.<br>
The button to return to the parks page is wrapped with a `Link` tag directing back to the parks page url path.

#### Images:

##### Top

## ![Park Details Page](./public/ParkInfo1.png "Park details page - Detailed information top")

##### Middle

## ![Park Details Page](./public/ParkInfo2.png "Park details page - Detailed information middle")

##### Bottom

![Park Details Page](./public/ParkInfo3.png "Park details page - Detailed information bottom")

---

### Error 404 Page

When the url a user is trying to redirect to is not found inside the routing system of the website, he is redirected to this error page<br>
The error 404 page includes:<br>
Message saying the routing has failed<br>
Warning image<br>
Button to return to home page

#### Functionality:

A button that is wrapped with a `Link` tag redirects back to home back url path.

#### Image:

![Error 404 Page](./public/Error404.png "Error 404 page")

---

# Thank you for viewing my project and giving feedback! c: