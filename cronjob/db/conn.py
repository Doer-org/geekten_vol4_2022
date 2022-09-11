import psycopg2
from setting.setting import POSTGRES_DB,POSTGRES_USER,POSTGRES_PASSWORD

#DBへの接続
def connect_to_db():
    conn = psycopg2.connect(
        host="psql-db",
        port=5432,
        dbname=POSTGRES_DB,
        user=POSTGRES_USER,
        password=POSTGRES_PASSWORD
    )

    return conn



# DBとの接続を切断
def disconnect_to_db(conn):
    conn.close()
    return
