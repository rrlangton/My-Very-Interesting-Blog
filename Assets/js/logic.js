const submitBtn = document.querySelector("#submit");
const storedBlogs = [] || JSON.parse(localStorage.getItem("userblogs"))
submitBtn.addEventListener("submit", function(e) {
    e.preventDefault()
    storedBlogs.push({
        userName: document.querySelector("#name").value,
        title: document.querySelector("#title").value,
        content: document.querySelector("#content").value
    })
    localStorage.setItem("userblogs", JSON.stringify (storedBlogs));
})