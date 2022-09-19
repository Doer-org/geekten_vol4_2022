INSERT INTO articles ("title","likes","url","author","kind")
VALUES ('Rust初学者が脱初心者するためにした事',28,'https://qiita.com/wipRust/items/19a46bc471e94f471f34','@wipRust','qiita');

INSERT INTO articles ("title","likes","url","author","kind")
VALUES ('Cから学ぶRustの良さ',16,'https://qiita.com/Cowsisland/items/71248bdd081089b7ba09','@Cowsisland','qiita');


INSERT INTO users ("id","name")
VALUES ('1','Mahiro Mahiro');

INSERT INTO users ("id","name")
VALUES ('2','Shotaro Yamasaki');

INSERT INTO histories ("user_id","article_id")
VALUES ('1',1);

INSERT INTO histories ("user_id","article_id")
VALUES ('2',2);
