    // querySelector for the button in the HTML
    // a link the submit button to take the user to the submission page
    // some if statements that return errors if the field are not given proper inputs 

const usernameInput = document.querySelector('#user-username');
const titleInput = document.querySelector('#user-title');
const contentInput = document.querySelector('#user-content');
const submitButton = document.querySelector('#submit-button');

// the "submit button" stores the user's input from the form
submitButton.addEventListener('click', function(puppies)) {
    // preventDefault functionality to stop the submit button form simply refreshing the page
    puppies.preventDefault();

    const blogPost = {
        name: usernameInput.value,
        tile: titleInput.value,
        content: contentInput.value,
    }
    // Checks that all fields are filled out, triggering an alert if left blank
    if (!usernameInput.value.trim() || !sujectInput.value.trim() || !contentInput.value.trim()) {
        return;
    }
    // JSON.stringify to turn the user input informtation into a string from the object
    // localStorage.setItem logic to store the stringified user input data
    localStorage.setItem('blogPost', JSON.stringify(blogPost));
  
    window.location.href ='blog.html';
    // To clear the text boxes
    usernameInput.value = '';
    subjectInput.value = '';
    contentInput.value = '';
}

