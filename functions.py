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
