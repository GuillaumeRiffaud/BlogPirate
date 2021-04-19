class TaleView {
    static displayTale(taleNumber) {
        document.getElementById("title").innerHTML += `${tales[taleNumber].title}`;
        document.getElementById("main").innerHTML += `${tales[taleNumber].content}`;
    }
}