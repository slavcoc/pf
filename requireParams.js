// ES6 provides default parameter values that allow us to set default value to be used if the function is called without that parameter.
// we can add function as default values so when parameter value is missing, the required function is called and we get an error

const required = () => {throw new Error('Missing parameter')}

function add (a = required, b = required) {
    return a + b
}

add(1, 2) //3
add(4) // Missing parameter