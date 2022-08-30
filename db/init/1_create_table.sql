-- DB切り替え
\c "hoge"

--テーブルを作成
CREATE TABLE "articles" (
  "title"     VARCHAR(255) NOT NULL,
  "url"       VARCHAR(255) NOT NULL
);

