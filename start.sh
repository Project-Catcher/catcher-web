#!/bin/bash
source /home/ec2-user/env.sh

aws ecr get-login-password --region $REGION | docker login --username AWS --password-stdin $ACCOUNT_ID.dkr.ecr.$REGION.amazonaws.com
docker pull $ECR_URL

docker rm -f front
docker create -i --name front -p $PORT:$PORT $ECR_URL