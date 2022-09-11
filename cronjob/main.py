import schedule
import sys

from scraping.qiita import qiita
from scraping.zenn import zenn

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


if __name__ == "__main__":
    args = sys.argv

    # defaultではinsertするだけ
    if len(args) == 1:
        init_task()

    # python main.py --cronjob
    # 定期実行
    elif len(args) == 2 and args[1]=="--cronjob":
        # 1日ごとにmain関数の実行
        print("schedule set")
        schedule.every(1).days.do(cronjob_task)
        print("schedule start")

        while True:
            schedule.run_pending()
    else:
        print("command line args is not valid")
