# Build the docker image
docker-build:
  docker build -f ./Dockerfile -t patrickmen/iaso/iaso-frontend:v1.1 .
