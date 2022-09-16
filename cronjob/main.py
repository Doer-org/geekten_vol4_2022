import schedule
import sys
from db.conn import connect_to_dburl

from scraping.qiita import qiita
from scraping.zenn import zenn
from db.conn import connect_to_db

# 1度だけ実行
def init_task():
    print("init task start")
    qiita.cronjob_get_data()
    zenn.cronjob_get_data()
    print("init task fin")


def cronjob_task():
    print("cronjob task start")
    qiita.cronjob_get_data()
    zenn.cronjob_get_data()
    print("cronjob task fin")
import os

if __name__ == "__main__":
    args = sys.argv

    # defaultではinsertするだけ
    hoge = os.environ.get('hoge')

    if len(args) == 1:
        init_task()

    ## prd
    # python main.py --inittask dburl
    elif len(args) == 3 and args[1]=="--inittask":
        dbUrl = args[2]
        if dbUrl:
          exit("error dbURL none")
        
        connect_to_dburl(dbUrl)
        init_task()
        # 1日ごとにmain関数の実行
        print("schedule set")
        schedule.every(1).days.do(cronjob_task)
        print("schedule start")

        while True:
            schedule.run_pending()
    
    # python main.py --cronjob dburl
    # 定期実行
    elif len(args) == 3 and args[1]=="--cronjob":
        dbUrl = args[2]
        if dbUrl:
          exit("error dbURL none")
        
        connect_to_dburl(dbUrl)
        # 1日ごとにmain関数の実行
        print("schedule set")
        schedule.every(1).days.do(cronjob_task)
        print("schedule start")

        while True:
            schedule.run_pending()
    else:
        print("command line args is not valid")
