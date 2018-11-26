name="swagger.ui.poc"
echo "Building new docker image for swagger ui tag:$1"
docker build . -t="infobloxcto/$name:$1"
docker push infobloxcto/$name:$1
