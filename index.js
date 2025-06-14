// check if document is loaded
document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view')
                return
            }
            entry.target.classList.remove('in-view')
        })
    })

    // get all elements with the animated class applied
    const allAnimatedElements = document.querySelectorAll('.animate')

    // add the observer to each of those elements
    allAnimatedElements.forEach(element => {
        observer.observe(element)
    })
})

