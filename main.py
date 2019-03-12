from flask import Flask, render_template, jsonify
import functions

app = Flask(__name__)


@app.route("/")
def boards():
    ''' this is a one-pager which shows all the boards and cards '''
    board_data = functions.list_boards()
    return render_template('boards.html', board_data=board_data)


@app.route("/data")
def get_all_data():
    ''' this is a one-pager which shows all the boards and cards '''
    board_data = functions.list_boards()
    card_data = functions.list_cards()
    return jsonify(board_data)


def main():
    app.run(debug=True)


if __name__ == '__main__':
    main()
