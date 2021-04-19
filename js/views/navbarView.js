class NavbarView {
    static displayTales() {
        for (let tale of tales) {
            const newListElement = document.getElementById('navbarList').appendChild(document.createElement("li"));
            newListElement.innerHTML = `<a href="tales${tales.indexOf(tale)}.html">${tale.title.replace("</br>"," ")}</a>`;
        }
    }
}