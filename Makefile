# Makefile

##
# dir
##
SERVER_DIR:=./server
FRONT_DIR:=./front
DB_DIR:=./db/data

##
# container name
##
DB_CONTAINER_NAME:=db-geekten_vol4_2022

##
# command
##
RM := rm -rf

.PHONY: all
all:start


# docker-compose up
.PHONY: start
start:
	@echo ""
	@echo "------------------------"
	@echo "Start the docker-compose environment."
	@echo "Please wait ..."
	@echo "------------------------"
	@echo ""
	docker-compose up -d
	@echo ""
	@echo "The docker-compose environment has been successfully built."
	@echo ""
	@docker-compose ps
	@echo ""


# docker-compose down
# imageやvolumeも削除
.PHONY: down
down:
	@echo ""
	@echo "------------------------"
	@echo "Down the docker-compose environment"
	@echo "Please wait ..."
	@echo "------------------------"
	@echo ""
	docker-compose down --rmi all --volumes --remove-orphans
	@echo ""
	@echo "The docker-compose environment has been successfully down."
	@echo ""


# dbやcacheは保持したまま再起動
.PHONY: restart
restart: down start

.PHONY: clean
clean:

.PHONY: fclean
fclean: clean delete-db

# dbやcacheも削除してから再起動
.PHONY: re
re: fclean restart


##
# delete
##
.PHONY: delete-db
delete-db:
	@echo ""
	@echo "------------------------"
	@echo "delete db ..."
	@echo ""
	$(RM) $(DB_DIR)
	@echo ""
	@echo "delete db success"
	@echo "------------------------"
	@echo ""


##
# lint
##
.PHONY: lint
lint:
	gofmt -l -w ./server


##
# logs
##
.PHONY: logs
logs:
	docker-compose logs -f

##
# docker container attach
##
.PHONY: attach-db
attach-db:
	docker exec -it $(DB_CONTAINER_NAME) /bin/bash


##
# message
##
.PHONY: doer
doer:
	@echo ""
	@echo "do'er saiko---!!!!"
	@echo ""

