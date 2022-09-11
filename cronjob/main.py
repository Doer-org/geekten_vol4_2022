import schedule

from scraping.qiita import qiita
from scraping.zenn import zenn

def task():
    print("task start")
    qiita.get_data()
    zenn.get_data()
    print("task fin")



if __name__ == "__main__":
    # 1時間ごとにmain関数の実行
    print("schedule set")
    schedule.every(1).minutes.do(task)

    print("schedule start")
    while True:
        schedule.run_pending()
