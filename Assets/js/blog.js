// Toggle light/dark mode in Blog's header
function toggleDarkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

// Retrieve stored blog posts from localStorage
let storedBlogposts = JSON.parse(localStorage.getItem("userblogs"));

// Check if there are stored blog posts before iterating
if (storedBlogposts) {
    storedBlogposts.forEach(blogPost => {
        let card = document.createElement("div");
        card.classList.add("card");

        let title = document.createElement("h3");
        title.textContent = blogPost.title;

        let content = document.createElement("p");
        content.textContent = blogPost.content;

        let author = document.createElement("p");
        author.textContent = "Posted By: " + blogPost.userName;

        card.appendChild(title);
        card.appendChild(content);
        card.appendChild(author);

        document.querySelector("#blogPostsSection").appendChild(card);
    });
}
