from db.conn import connect_to_db,disconnect_to_db

def insert_db(conn, title, likes, url, author, kind):
    # db接続とデータの挿入
    cur = conn.cursor()

    insert_sql = f"\
        INSERT INTO articles (title, likes, url, author, kind) \
        VALUES ('{title}','{likes}','{url}','{author}', '{kind}');\
    "

    cur.execute(insert_sql)
    conn.commit()

    cur.close()