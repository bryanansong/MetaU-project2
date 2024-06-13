## Issue: Movie Liked & Watched Status Persistence
I update the watched and liked status of the movie inside of the modal. The problem is that I do not have a way to properly update the list that is rendered inside of the MoviesList component in each screen.

### Solution
In my App.jsx, I created two lists called LikedMovies and Watched Movies. I pass the variables and their setters to both the modal and the moviesList components. Whenever, I change the state of a movies watched/liked attribute, I update that movie object and I update the Liked/watched list. Also, inside of each screen ( Searching screen and Now Pplaying Screen ), I have a useEffect that dettects this change and updates the list accordingly.


## Issue: Load More Button Bug
Whenever the load more button is pressed, it is supposed to append the next page of results to the end of the current list of movies displayed but instead, it repeats the results of page 1, increasing the number of movies in the list but not actually adding new results

### Solution
TODO: Talk about learning how to modify api endpoints for specific queries and how I used that with the old list
