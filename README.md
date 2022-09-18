# Geekten vol_4team, 2022

### Date

2022/8/23 ~ 9/23

<br>

## About
***
[技育展](https://talent.supporterz.jp/geekten/2022/) 用のリポジトリです

テーマは「**スキル・開発支援**」を選びました

<br>

<img width="600px" src="https://img.esa.io/uploads/production/attachments/19248/2022/08/06/130878/0fefe25b-814e-491c-bae9-62a9cf1b789c.png" />

<br>

<br>

## 結果！！

<br>

## アプリ
***

このアプリは「おみくじ」×「技術記事🛠」をテーマにした
#### 「[DITA](https://dita-doer.vercel.app/)」というアプリです！

<br>

デプロイ先はこちら
https://dita-doer.vercel.app/


<br>

## 機能
***

### このアプリを一言でいうと
**新しい技術との遭遇を体験アプリ**です！

### 具体的には...
- おみくじを引いて技術記事をGET!
  - 自分の好みにおみくじをひける！(いいね順だったり、完全ランダムだったり)
  - 気になった記事には**いいね**！
  - 読んだ記事も**履歴**で管理！
  - 記事をtweetして共有！

<br />

<br>
 
## member
***

<table>
  <tr>
    <th>開発人数</th>
    <td>
      4人<br>
      <b><a href="https://github.com/mahiro72"><img src="https://github.com/mahiro72.png" width="50px;" /></b>
      <b><a href="https://github.com/Kouta-fd"><img src="https://github.com/Kouta-fd.png" width="50px;" /></b>
      <b><a href="https://github.com/Yaaagi"><img src="https://github.com/Yaaagi.png" width="50px;" /></b>
      <b><a href="https://github.com/hikari-8"><img src="https://github.com/hikari-8.png" width="50px;" /></b>
    </td>
  </tr>
  <tr>
    <th>担当</th>
    <td>
      <a href="https://github.com/mahiro72">@mahiro72</a> : backend / infra<br>
      <a href="https://github.com/Kouta-fd">@Kouta-fd</a> : frontend / design <br>
      <a href="https://github.com/YagiAyana">@Yaaagi</a> : frontend / design <br>
      <a href="https://github.com/hikari-8">@hikari-8</a> : backend / leader<br>
    </td>
  </tr>
</table>

<br>
       
## slide
***
       
<img width="600px" src="https://img.esa.io/uploads/production/attachments/19248/2022/07/11/130878/65f2660d-af45-4d56-b9dd-19ae8fe9d83b.png"></img>
             
スライドURL
https://docs.google.com/presentation/d/1ajNZPteB8im0skiogqijXCvn5jxa2w1NgL4p2-dQzLU/edit#slide=id.p
       
<br>
        
## 技術スタック
***
        
<img width="600px" src="https://img.esa.io/uploads/production/attachments/19248/2022/07/11/130878/65dbd7aa-9797-499c-895e-575590f55344.png"/>

<br>

<img width="600px" src="https://img.esa.io/uploads/production/attachments/19248/2022/07/11/130878/234673bf-22dd-4ee3-9e8c-2e0165c636b6.png"/>
        
<br>
        
## Getting Started
***

```docker-compose.env```をトップディレクトリに用意する
       
詳しくはトップディレクトリの```docker-compose.env.sample```をご覧ください

例
```
POSTGRES_USER=<USERNAME>
POSTGRES_PASSWORD=<PASSWORD>
PGPASSWORD=<PASSWORD>
POSTGRES_DB=<DBNAME>
TZ=<TIMEZONE>
PORT=<PORT>
```

<br>

## Make
***

<br>

docker-compose 環境を立ち上げます

```
make
```

<br>

dbやcacheは保持したまま再起動

```
make restart
```

<br>

dbやcacheも削除してから再起動

```
make re
```


<br>

docker環境のdbにアクセスします

```
make attach-db
```

<br>

lint

```
make lint
```

<br>
       
do'erからのメッセージ

```
make doer
```

<br>
       
## deploy
***
### backend heroku (branch: release)

<br>

herokuでserver以下をデプロイしてます

```
git subtree push --prefix server/ heroku master
```

<br>
       
### frontend vercel (branch: release-front)
vercelでfront以下をデプロイしてます

<br>


## reference


## member
- mahiro72
- kengo
- Mao
- kai
- Yadon
