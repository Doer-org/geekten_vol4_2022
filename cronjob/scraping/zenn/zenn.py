from cmath import log
import requests
from bs4 import BeautifulSoup

from log.logger import logger
from db.insert import insert_db
from setting import api
from const.error import error

def get_data():

    res = requests.get(api.ZENN_URL)
    soup = BeautifulSoup(res.text, "html.parser")

    for i in range(1,21):
        try:
            title_css_selector = f"#tech-trend > div > div.View_articlesContainer__DVwHH > div > div:nth-child({i}) > article > div > a > h2"
            url_css_selector = f"#tech-trend > div > div.View_articlesContainer__DVwHH > div > div:nth-child({i}) > article > div > a"
            author_css_selector = f"#tech-trend > div > div.View_articlesContainer__DVwHH > div > div:nth-child({i}) > article > div > div > div.ArticleList_userInfo__uTs5A > div.ArticleList_userName__GWXDx > a"

            title = soup.select(title_css_selector)[0].contents[0]
            url = soup.select(url_css_selector)[0].get('href')
            author = soup.select(author_css_selector)[0].contents[0]
            likes = 0
            kind = "zenn"

            insert_db(title, likes, url, author, kind)
        except:
            logger(error.ZENN_GET_DATA_ERR)
