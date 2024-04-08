// Selecting the form element
const form = document.getElementById('submit');

// Event listener for form submission
form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Get existing blog posts from localStorage or initialize an empty array
    const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];

    // Get input values
    const name = document.getElementById('name').value.trim();
    const title = document.getElementById('title').value.trim();
    const content = document.getElementById('content').value.trim();

    // Check if input fields are empty
    if (!name || !title || !content) {
        alert('Please fill out all fields.');
        return;
    }

    // Create a new blog post object
    const newBlogPost = {
        name: name,
        title: title,
        content: content
    };

    // Add the new blog post to the array
    blogPosts.push(newBlogPost);

    // Store the updated array back in localStorage
    localStorage.setItem('blogPosts', JSON.stringify(blogPosts));

   // Clear the form inputs
   form.reset();

    // Display the updated list of blog posts
    displayBlogPosts();
});

// Function to display blog posts from localStorage
function displayBlogPosts() {
    const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    const blogPostsContainer = document.getElementById('blogPosts');

    // Clear previous blog posts
    blogPostsContainer.innerHTML = '';

    // Loop through blog posts and create HTML elements to display them
    blogPosts.forEach(blogPost => {
        const postElement = document.createElement('div');
        postElement.innerHTML = `
            <h2>${blogPost.title}</h2>
            <p><strong>Author:</strong> ${blogPost.name}</p>
            <p>${blogPost.content}</p>
        `;
        blogPostsContainer.appendChild(postElement);
    });
}
