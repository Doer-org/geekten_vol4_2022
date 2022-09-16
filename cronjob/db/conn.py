import psycopg2
from setting.setting import POSTGRES_DB,POSTGRES_USER,POSTGRES_PASSWORD,DB_HOST

#DBへの接続
def connect_to_db():
    conn = psycopg2.connect(
        database=POSTGRES_DB,
        user=POSTGRES_USER,
        password=POSTGRES_PASSWORD,
        host=DB_HOST,
        port=5432
    )
    return conn


#DBへの接続
def connect_to_dburl(url):
    conn = psycopg2.connect(
        url
    )
    return conn




# DBとの接続を切断
def disconnect_to_db(conn):
    conn.close()
    return
