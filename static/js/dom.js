// It uses data_handler.js to visualize elements
let dom = {
        loadBoards: function () {
            // retrieves boards and makes showBoards called
            dataHandler.getBoards(this.showBoards);
            dataHandler.getBoards(this.collapseBoards);
        },
        showBoards: function (boards) {
            const createBoard = function (board_name) {
                const template = document.querySelector("#proman_board");
                const clone = document.importNode(template.content, true);
                clone.querySelector('#board_name').textContent = board_name;
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
        }
        ,
        loadCards: function () {
            dataHandler.getCardsData(this.showCards)
        }
        ,
        showCards: function (cards) {
            const createCard = function (card_name) {
                const template = document.querySelector("#proman_card");
                const clone = document.importNode(template.content, true);
                clone.querySelector('#cardTemplate').textContent = card_name;
                return clone;
            };

            for (let i = 0; i < cards.length; i++) {
                const cardContent = createCard();
                if (cards[`${i}`].status_id === 1) {
                    document.querySelector("#new").appendChild(cardContent);
                    temporaryCard = document.getElementById("cardTemplate");
                    temporaryCard.id = "cards" + `${i}`;
                    temporaryCard.innerHTML = cards[`${i}`].title
                } else if (cards[`${i}`].status_id === 2) {
                    document.querySelector("#in_progress").appendChild(cardContent);
                    temporaryCard = document.getElementById("cardTemplate");
                    temporaryCard.id = "cards" + `${i}`;
                    temporaryCard.innerHTML = cards[`${i}`].title
                } else if (cards[`${i}`].status_id === 3) {
                    document.querySelector("#testing").appendChild(cardContent);
                    temporaryCard = document.getElementById("cardTemplate");
                    temporaryCard.id = "cards" + `${i}`;
                    temporaryCard.innerHTML = cards[`${i}`].title
                } else {
                    document.querySelector("#done").appendChild(cardContent);
                    temporaryCard = document.getElementById("cardTemplate");
                    temporaryCard.id = "cards" + `${i}`;
                    temporaryCard.innerHTML = cards[`${i}`].title
                }
            }
        }
        ,
        appendToElement:
            function (elementToExtend, textToAppend, prepend = false) {
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
   collapseBoards: function (boards) {
            let table = document.querySelectorAll('.incollapse');
            let row = document.querySelectorAll('.outcollapse');
            for(let element of table ){
                element.addEventListener('click', function () {
                    let elementsibling = this.parentElement.parentElement.nextSibling.nextSibling;
                    console.log(elementsibling);
                    elementsibling.style.display="none";

                });


    }
       }
}
;
