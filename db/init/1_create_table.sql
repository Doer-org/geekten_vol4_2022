-- DB切り替え
\c "hoge"


CREATE TABLE "articles" (
  "id"                 INT NOT NULL PRIMARY KEY,
  "title"              VARCHAR(255) NOT NULL,
  "likes"              INT NOT NULL,
  "first_sentence"     VARCHAR(255) NOT NULL,
  "tag"                VARCHAR(255) NOT NULL,
  "url"                VARCHAR(255) NOT NULL
);

CREATE TABLE "users" (
  "id"                VARCHAR(255) NOT NULL PRIMARY KEY,
  "name"              VARCHAR(255) NOT NULL
);




