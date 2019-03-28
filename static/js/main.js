// This function is to initialize the application
function init() {
    // init data
    dataHandler.init();
    // loads the boards to the screen
    dom.loadBoards();
    dom.loadCards();
    dom.collapseBoards();

}

init();

function allowDrop(ev) {
    ev.preventDefault();
}


function dragStart(ev) {
    id=ev.target.id;
}


function drop(ev) {
    ev.target.append(document.getElementById(id))
}