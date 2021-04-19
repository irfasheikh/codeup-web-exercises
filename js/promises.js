"use strict"

function getGithubUsernames(username) {
    let promiseExercise = fetch(`https://api.github.com/users/${username}/events`, {headers: {'Authorization': `token ${promises}`}})

        promiseExercise.then(response => response.json()) // at this point, we will have all the commits
            .then (events  => console.log(events))
}
