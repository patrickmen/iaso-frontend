# Build the docker image
docker-build:
  docker build -f ./Dockerfile -t iaso/iaso-frontend:v1.3.1 .
