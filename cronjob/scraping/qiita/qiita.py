from setting import api

import requests



def get_data():
    print("qiita start")
    for page in range(1, 11):
        res = requests.get(api.QIITA_URL % (page))
        resJson = res.json()
        print(resJson)

