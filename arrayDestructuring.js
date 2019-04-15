// we try to fetch user and reletaed frends
// we are using async / await so the function returns result in an array

async function getUserAndFriends() {
    return await Promise.all([
        fetch('/user'),
        fetch('/friends')
    ])
}

//using array destructuring we are assigning the results directly into coresponding variables
const [user, friends] = getUserAndFriends()