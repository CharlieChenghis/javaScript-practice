function scheduleGreatMovieReminder (movie) {
  // remind in one min
  window.setTimeout(function () {
      console.log("Remember to watch: " + movie);
    }, 5 * 1000
  );
}

scheduleGreatMovieReminder("Citizen Kane");
scheduleGreatMovieReminder("Touch of Evil");
scheduleGreatMovieReminder("The Third Man");

function remindMovie(movie){
	window.setTimeout(function(){console.log("remember to watch: "+movie)},60*1000)
}