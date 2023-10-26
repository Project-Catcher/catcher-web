#!/bin/bash

echo '환경변수 초기화'
source /home/ec2-user/env.sh
echo $FRONT_ECR_URL

echo 'ECR 로그인 후 신규 이미지 PULL'
aws ecr get-login-password --region $REGION | docker login --username AWS --password-stdin $ACCOUNT_ID.dkr.ecr.$REGION.amazonaws.com
docker pull $FRONT_ECR_URL

echo '기존 컨테이너 삭제 후 신규 컨테이너 생성'
docker ps -a

check_cont=$(docker ps -a | grep front)
if [ $(echo $check_cont | awk '{print length($0)}') != 0 ]; then
docker rm -f front
fi

# docker create -i --name front -p $FRONT_PORT:$FRONT_PORT $FRONT_ECR_URL
docker create -i --name front -p 80:$FRONT_PORT $FRONT_ECR_URL # temp
docker start front

echo '기존 이미지 삭제'
check_img=$(docker images | egrep -v "SIZE|$FRONT_TAG" | awk '{print $2}')
if [ $(echo $check_img | awk '{print length($0)}') != 0 ]; then
echo "$ACCOUNT_ID.dkr.ecr.$REGION.amazonaws.com/$FRONT_ECR_NAME:$DELETE_TAG"
docker image rm "$ACCOUNT_ID.dkr.ecr.$REGION.amazonaws.com/$FRONT_ECR_NAME:$DELETE_TAG"
fi