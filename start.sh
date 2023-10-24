#!/bin/bash

echo """
aws ecr get-login-password --region $REGION | docker login --username AWS --password-stdin $ACCOUNT_ID.dkr.ecr.$REGION.amazonaws.com
docker pull $ECR_URL

docker run -it -p $PORT:$PORT $ECR_URL
"""

source /home/ec2-user/env.sh
echo $TEST

aws ecr get-login-password --region $REGION | docker login --username AWS --password-stdin $ACCOUNT_ID.dkr.ecr.$REGION.amazonaws.com
docker pull $ECR_URL

docker run -i -p $PORT:$PORT $ECR_URL