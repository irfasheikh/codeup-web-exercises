                                                users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];


//2.
let triLang = users.filter(function(name){
    return user.languages.length >= 3;

})
console.log(triLang)




//3.

let List = users.map(function(input){
    return user.email
})

console.log(List)



//4.
//users is an object
let avg = users.reduce((total, user) => { //reduce returns a single number
    return total + user.yearsOfExperience //years is an array
}, 0) // total starts at 0

console.log(avg / users.length)

 //another way make first let be total and then call this one avg

 //let avg = totalYears / users.length;







//5.

let longestEmail = users.reduce((longEmail, user ) => { //user is the singular of the array users
   if(user.email.length > longEmail.length){
       longEmail = user.email
   }
    return longEmail
},"")
console.log(longestEmail)
// loop inserts email after every loop

// = users.reduce(function(longestEmail, user) {
                                                //if (user.email.length > longestEmail.length){
                                                //longestEmail = user.email
                                                //}
                                                //return longestEmail;
                                                //}, "")


//6.

let usernameString = users.reduce((names, user) => {
    return names + (user.name + ", " )
} , " Your instrcutors are: ")

console. log(usernameString)

                                                // users.reduce(function(accumulator, user) {
                                                //return '${accumulator} $ {user.name}';
                                                //}, 'instructors are: ');
                                                //console.log(usernameString);