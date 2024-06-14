## My Biggest Issues this week

### Issue: Movie Liked & Watched Status Persistence

After clicking on a movie card and a modal pops up, you can update the watched and liked status of the current movie inside of the modal. The problem is that due to the location of my Modal component, there is no direct way to properly update the list of movies accross my entire site.

### Solution

In my App.jsx, I created two lists called LikedMovies and Watched Movies. I pass the variables and their setters to both the modal and the moviesList components. Whenever, I change the state of a movies watched/liked attribute, I update that movie object and I update the Liked/watched list. Also, inside of each screen ( Searching screen and Now Pplaying Screen ), I have a useEffect that dettects this change and updates the list accordingly.

### Issue: Load More Button Bug

Whenever the load more button is pressed, it is supposed to append the next page of results to the end of the current list of movies displayed but instead, it repeats the results of page 1, increasing the number of movies in the list but not actually adding new results.

### Solution

In my parent component ( App.jsx ), I created a `likedMovies` and a `watchedMovies` array. These arrays stores the ids of liked and watched movies. When the modal is opened and you click either the `like movie` or `watched movie` button, the list of liked and watched ids in the parent component is updated with the new list of ids. When this happens, a useEffect hook in my MoviesList component detects this change and then renders a new list of movies with the correct liked and watched attribute applied using the likedMovies list and watchedMovies list in the parent component.
