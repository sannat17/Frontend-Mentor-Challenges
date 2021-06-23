const FAQ_ITEMS = [...document.getElementsByClassName("faq-item")];

const closeAll = (elements) => {
    elements.forEach(element => {
        element.setAttribute("state", "closed")
    })
}

FAQ_ITEMS.forEach(element => {
    element.addEventListener('click', (e) => {
        const state = e.target.parentElement.getAttribute("state");
        closeAll(faq_items);
        if (state === "closed") {
            element.setAttribute("state", "open")
        }
    })
})