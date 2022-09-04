-- --テーブルにデータを挿入
-- INSERT INTO snacks (name,price,img_url) 
-- VALUES ('test',100,'https://google.com',0);

INSERT INTO tags ("id","name")
VALUES (1,'Rust');

INSERT INTO tags ("id","name")
VALUES (2,'C');

INSERT INTO articles ("id","title","likes","first_sentence","tag","url")
VALUES (1,'Rust初学者が脱初心者するためにした事',28,'プログラミング歴２年目の趣味グラマーで',1,'https://qiita.com/wipRust/items/19a46bc471e94f471f34');

INSERT INTO articles ("id","title","likes","first_sentence","tag","url")
VALUES (2,'Cから学ぶRustの良さ',16,'RustはしばしばCやC++言語と比較される記事が見られ、',2,'https://qiita.com/Cowsisland/items/71248bdd081089b7ba09');

INSERT INTO users ("id","name")
VALUES ('1','Mahiro Mahiro');

INSERT INTO users ("id","name")
VALUES ('2','Shotaro Yamasaki');


