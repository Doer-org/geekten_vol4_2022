###                ###
#     enviroment     #
###                ###

# 環境変数読み込み
include .env

# dir
FRONT_DIR:=../front
SERVER_DIR:=../server
DB_DIR:=../db
PROXY_DIR:=../proxy
CRONJOB_DIR:=../cronjob


## image
CRONJOB_IMAGE_NAME:=gcr.io/$(PROJECT_ID)/dita-cronjob



# zone
ZONE:=asia-northeast1-a

# service name
SERVICE_NAME:=meet-hack
# container name
CONTAINER_NAME:=meet-hack

RM:=rm -rf

###               ###
#      command      #
###               ###

# gcloud ツールでプロジェクトID と ComputeEngineゾーンのオプションを設定
setup-config:
	gcloud config set project $(PROJECT_ID)
	gcloud config set compute/zone $(ZONE)

# 認証
setup-auth:
	gcloud auth configure-docker


# status 確認
status:
	kubectl get nodes,pods,services

all:build-all-image upload-all-image deploy-all status

# service, deploymentの削除
fclean:
	kubectl delete service $(SERVICE_NAME)
	kubectl delete deployment $(CONTAINER_NAME)



###               ###
#      cronjob      #
###               ###

# cronjob の build
build-cronjob-image:
	cd $(CRONJOB_DIR) && docker build . -t $(CRONJOB_IMAGE_NAME) -f Dockerfile.prd

# cronjob の image のテスト
test-cronjob-image:
	docker run --rm -p 3000:80 $(CRONJOB_IMAGE_NAME)

# cronjob の upload
upload-cronjob-image:setup-auth
	docker push $(CRONJOB_IMAGE_NAME)
