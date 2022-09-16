from re import A
import requests
from bs4 import BeautifulSoup
import json

from log.logger import logger
from db.insert import insert_db
from setting import api
from const.error import error
from setting import api


# def get_data():
#     print("qiita start")
#     for page in range(1, 11):
#         res = requests.get(api.QIITA_API_URL % (page))
#         resJson = res.json()
#         print(resJson)
#         for r in resJson:
#             print(r)


# https://qiita-api.vercel.app/
# こちらのAPIを利用
def cronjob_get_data(conn):

    res = requests.get(api.QIITA_TREND_API_URL)
    resJson = res.json()

    for r in resJson:
        try:
            title = r["node"]["title"]
            url = r["node"]["linkUrl"]
            author = r["node"]["author"]["urlName"]
            likes = 0
            kind = "qiita"

            insert_db(conn, title, likes, url, author, kind)
        except:
            logger(error.ZENN_GET_DATA_ERR)
