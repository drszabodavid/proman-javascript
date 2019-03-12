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
