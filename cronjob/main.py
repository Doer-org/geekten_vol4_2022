import schedule
import sys
from db.conn import connect_to_dburl
import os
from scraping.qiita import qiita
from scraping.zenn import zenn
from db.conn import connect_to_db,disconnect_to_db

# 1度だけ実行
def init_task(conn):
    print("init task start")
    qiita.cronjob_get_data(conn)
    zenn.cronjob_get_data(conn)
    print("init task fin")


# def cronjob_task_dev():
#     print("cronjob task start")
#     qiita.cronjob_get_data(conn)
#     zenn.cronjob_get_data(conn)
#     print("cronjob task fin")


def cronjob_task_prd():
    print("cronjob task start")
    conn = connect_to_dburl(sys.argv[2])
    qiita.cronjob_get_data(conn)
    zenn.cronjob_get_data(conn)
    disconnect_to_db(conn)
    print("cronjob task fin")


if __name__ == "__main__":
    args = sys.argv

    # defaultではinsertするだけ
    if len(args) == 1:
        init_task(connect_to_db())

    ## prd
    # python main.py --inittask dburl
    if len(args) == 3 and args[1]=="--inittask":
        print("=====init task prd start=======")
        dbUrl = args[2]
        if not dbUrl:
          exit("error dbURL none")

        conn = connect_to_dburl(dbUrl)
        init_task(conn)
        disconnect_to_db(conn)

        print("========init fin=======")

    # python main.py --cronjob dburl
    # 定期実行
    elif len(args) == 3 and args[1]=="--cronjob":
        dbUrl = args[2]
        if not dbUrl:
          exit("error dbURL none")
        
        # 1日ごとにmain関数の実行
        print("schedule set")
        schedule.every(1).days.do(cronjob_task_prd)
        print("schedule start")

        while True:
            schedule.run_pending()
    else:
        print("command line args is not valid")
