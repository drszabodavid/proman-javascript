// It uses data_handler.js to visualize elements
let dom = {
    loadBoards: function () {
        // retrieves boards and makes showBoards called
        dataHandler.getBoards(this.showBoards)
    },
    showBoards: function (boards) {
        // // shows boards appending them to #boards div
        // // it adds necessary event listeners also

        const createBoard = function (board_name) {
            const template = document.querySelector("#proman_board");
            const clone = document.importNode(template.content, true);
            clone.querySelector('#board_name').textContent = board_name ;
            return clone;

        };

        for (let i = 0; i < boards.length; i++) {
            const tableContent = createBoard();
            document.querySelector("#container").appendChild(tableContent);
        }
        for (let i = 0; i < boards.length; i++) {
            temporaryBoard = document.getElementById("board_name");
            temporaryBoard.id = "board" + boards[`${i}`].id;
            temporaryBoard.innerHTML = boards[`${i}`].title
        }

        let container = document.querySelectorAll('.container');
        console.log(container);


        let boardid = document.querySelector(".collapsible");
        console.log(boardid)


            boardid.addEventListener("click", function () {
                this.classList.toggle("active");
                let content = document.querySelectorAll('.col');
                for (let i = 0; i < content.length; i++) {

                    if (content[i].style.display === "block") {
                        content[i].style.display = "none";
                    } else {
                        content[i].style.display = "block";
                    }
                }

            });


       $(".delete").click(function () {
    $(this).parent().closest('div').remove();
});


    }
    ,
    loadCards: function (boardId) {
        // retrieves cards and makes showCards called
    }
    ,
    showCards: function (cards) {
        // shows the cards of a board
        // it adds necessary event listeners also
    }
    ,
    appendToElement: function (elementToExtend, textToAppend, prepend = false) {
        // function to append new DOM elements (represented by a string) to an existing DOM element
        let fakeDiv = document.createElement('div');
        fakeDiv.innerHTML = textToAppend.trim();

        for (childNode of fakeDiv.childNodes) {
            if (prepend) {
                elementToExtend.prependChild(childNode);
            } else {
                elementToExtend.appendChild(childNode);
            }
        }


        return elementToExtend.lastChild;
    }
    ,


};
