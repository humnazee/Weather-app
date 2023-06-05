# weather_app

Weather fit app allows users to sign up, log in, and create collections of clothing items based on the current weather. It provides clothing suggestions based on the weather conditions and allows users to manage their collections.

## :computer: [Click here](https://weather-app-mj0p.onrender.com/) to see my live project!

## :page_facing_up: About
The library app has the following functionalities:

- Users can search for a location and view the current weather conditions.
- The app provides personalized attire recommendations for different weather types, including summer, moderate, and winter.
- Users can create an account, log in, and save their preferred attires for different weather conditions.
- The app allows users to perform CRUD operations (Create, Read, Update, Delete) on their saved attires.

- When the app is initialized, it sets up event listeners for the signup and login options.
The signup functionality allows users to create an account by providing their name, email, and password. This information is sent to the server, where it is hashed and stored in the database.
The login functionality allows users to log in with their email and password. The server checks if the user exists and validates the password using bcrypt. If the login is successful, a session is created, and the user's email is returned.
The logout functionality destroys the session.
The getWeather functionality is responsible for fetching the current weather data from the weather API. It sends a request to the server with latitude and longitude coordinates, and the server makes an API call to retrieve the weather information. The server then returns the weather data to the client.
The suggestion functionality retrieves clothing suggestions based on the current weather. It sends a request to the server with the weather condition, and the server queries the database to find clothing items (tops, bottoms, shoes) that are suitable for the given weather. The server returns the clothing suggestions to the client.
The collection functionality allows users to create collections of clothing items. When a user creates a collection, the collection details (name, weather, user ID, top ID, bottom ID, shoe ID) are sent to the server, which inserts the data into the collections table in the database. The server returns the created collection to the client.
The server also provides routes to retrieve collections by user ID and collection ID. These routes query the database and return the requested collections to the client. Client can delete the collection and can update the collection's name.


```zsh
$ 
```
- home page


## :pencil2: Planning & Problem Solving
- For our planning phase of the Weather Attire App, We focused on defining the app's requirements and features, which includes the different attire categories for summer, moderate, and winter weather. We also created basic wireframes and UI/UX on figma to visualize the app's structure and logic.
- (here will add the pics later on)
- ![project.png](https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)
## :pencil2: Planning & Problem Solving
- Struggling with asynchronous javascript.
- Git hub workflow.

![project.png](https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)
![Wireframing](https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)

## :rocket: Cool tech
- Node.js and Express.js for the backend server and API endpoints.
- Weather API for retrieving weather data.
- PostgreSQL database to store user accounts and the attire data
- HTML, CSS for frontend

## :scream: Bugs to fix :poop:
- admin page not done

## :sob: Lessons learnt
What I would do differently if I could wind back the clock...
- organise the code better and push the code more often to track what I have changed.

## :white_check_mark: Future features
Cool things I would add if I can keep working on this
- Search functionality to allow users to search for specific books.
- Sorting and filtering options for better book organization.
