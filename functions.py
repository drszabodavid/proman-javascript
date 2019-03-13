import database_common
from psycopg2 import sql


@database_common.connection_handler
def list_boards(cursor):
    cursor.execute("""
                   SELECT * FROM boards
                   ORDER BY id ASC; 
                                      """,
                   )
    board_data = cursor.fetchall()
    return board_data


@database_common.connection_handler
def list_cards(cursor):
    cursor.execute("""
                   SELECT * FROM cards
                   
                                      """,
                   )
    card_data = cursor.fetchall()
    return card_data


@database_common.connection_handler
def add_new_board(cursor, title):
    cursor.execute("""
                    INSERT INTO boards (title)
                    VALUES (%(title)s) 
                    """, ({'title': title}))


@database_common.connection_handler
def add_new_card(cursor, title, board_id, status_id):
    cursor.execute("""
                    INSERT INTO cards (title, board_id, status_id)
                    VALUES (%s, %s, %s) 
                    """, (title, board_id, status_id))
