import database_common
from psycopg2 import sql


@database_common.connection_handler
def list_boards(cursor):
    cursor.execute("""
                   SELECT * FROM boards
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
def add_new_board(cursor, title, is_active):
    cursor.execute("""
                    INSERT INTO boards (title, is_active)
                    VALUES (%(title)s, 1) 
                    """, ({'title':title, 'is_active': 1}))