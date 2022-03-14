## setup instruction
To start dev environment, please run,

```
sudo npm start
```

To build for production, please run

```
sudo npm run build
```

To build dev docker imagee please use the following command

```
sudo docker build -f ./Dockerfile.dev -t mfp-dashboard-image-dev .
```
To build prod docker imagee please use the following command

```
sudo docker build -f ./Dockerfile.prod -t mfp-dashboard-image-prod .
```

To start a development container, please run

```
sudo docker container run -d -p 8083:8083 --name mfp-dashboard-dev mfp-dashboard-image-dev
```

To start a prod container, please run

```
sudo docker container run -d -p 8083:80 --name mfp-dashboard-prod mfp-dashboard-image-prod
```

To bash into to the container, please use

```
 sudo docker exec -it mfp-dashboard-dev bash
```

To stop the dev container, use,

```
sudo docker container stop mfp-dashboard-dev
```

To remove the dev container, use,

```
sudo docker container rm mfp-dashboard-dev
```

To remove the dev image, use,

```
sudo docker image rm mfp-dashboard-image-dev
```