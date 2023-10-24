#!/bin/bash

docker 

aws ecr get-login-password --region $REGION | docker login --username AWS --password-stdin $ACCOUNT_ID.dkr.ecr.$REGION.amazonaws.com
aws pull $ECR_URL

docker run -it -p $PORT:$PORT $URL