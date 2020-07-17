
const submitButton = document.querySelector("#submit")

submitButton.addEventListener("click", (e) => {
    e.preventDefault()
    const titleValue = document.querySelector("#title").value
    const bodyValue = document.querySelector("#postBody").value
    const postContainer = document.createElement("div")
    const titleElement = document.createElement("h3")
    const postElement = document.createElement("p")
    titleElement.innerHTML = titleValue
    postElement.innerHTML = bodyValue
    document.body.append(postContainer)
    postContainer.append(titleElement)
    postContainer.append(postElement)
})



