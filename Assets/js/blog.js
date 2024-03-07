// Toggle light/dark mode in Blog's header
function myFunction() {
    var element = document.body;
    element.classList.toggle("darkmode");
}

let storedBlogposts = JSON.parse(localStorage.getItem("userblogs"))

for (let i = 0; i < storedBlogposts.length; i++) {
    let div = document.createElement("div")
    let h3 = document.createElement("h3")
    h3.textContent = storedBlogposts[i].title
    let h5 = document.createElement("h5")
    h5.textContent = storedBlogposts[i].content
    let p = document.createElement("p")
    p.textContent = "Posted By: " + storedBlogposts[i].userName


    div.appendChild(h3)
    div.appendChild(h5)
    div.appendChild(p)



    document.querySelector("#blogPostsSection").appendChild(div)
    
}