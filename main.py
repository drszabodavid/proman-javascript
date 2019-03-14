from flask import Flask, render_template, jsonify, request, redirect, url_for
import functions

app = Flask(__name__)


@app.route("/", methods=['GET', 'POST'])
def boards():
    ''' this is a one-pager which shows all the boards and cards '''
    if request.method == 'GET':
        board_data = functions.list_boards()
        return render_template('boards.html', board_data=board_data)
    if request.method == 'POST':
            title = request.form['title']
            functions.add_new_board(title)
            return render_template('boards.html')


@app.route("/add-card", methods=['POST'])
def add_cards():
    if request.method == 'POST':
        if request.form['card_title']:
            card_title = request.form['card_title']
            board_id = request.form['board_id']
            status_id = request.form['status_id']
            functions.add_new_card(card_title, board_id, status_id)
            return redirect(url_for('boards'))


@app.route("/data")
def get_all_data():
    ''' this is a one-pager which shows all the boards and cards '''
    board_data = functions.list_boards()
    return jsonify(board_data)


@app.route("/card-data")
def get_card_data():
    ''' this is a one-pager which shows all the boards and cards '''
    card_data = functions.list_cards()
    return jsonify(card_data)


def main():
    app.run(debug=True)


if __name__ == '__main__':
    main()
