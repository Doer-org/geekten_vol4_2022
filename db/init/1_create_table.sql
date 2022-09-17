-- DB切り替え
\c "hoge"


CREATE TABLE "articles" (
  "id"                 SERIAL NOT NULL PRIMARY KEY,
  "title"              VARCHAR(255) NOT NULL,
  "likes"              INT NOT NULL,
  "url"                VARCHAR(255) NOT NULL,
  "author"             VARCHAR(255) NOT NULL,
  "kind"               VARCHAR(255) NOT NULL
);

CREATE TABLE "users" (
  "id"                VARCHAR(255) NOT NULL PRIMARY KEY,
  "name"              VARCHAR(255) NOT NULL
);

CREATE TABLE "historys" (
  "user_id"             VARCHAR(255) NOT NULL,
  "article_id"          INT NOT NULL,
  "created_at"          TIMESTAMP default CURRENT_TIMESTAMP,
  foreign key ("user_id") references "users"("id")
    ON DELETE CASCADE,
  foreign key ("article_id") references "articles"("id")
    ON DELETE CASCADE
);

CREATE TABLE "favorite" (
  "user_id"             VARCHAR(255) NOT NULL,
  "article_id"          INT NOT NULL,
  foreign key ("user_id") references "users"("id")
    ON DELETE CASCADE,
  foreign key ("article_id") references "articles"("id")
    ON DELETE CASCADE
  
);


