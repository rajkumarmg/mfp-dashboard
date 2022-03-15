## setup instruction
### To start dev env in windows, please follow the below steps on Windows Cmd or Bash CLI

Assuming you already have nodejs installed.
Run the following command one by one.
```
git clone https://github.com/rajkumarmg/mfp-dashboard.git
cd mfp-dashboard
npm i
npm start
```
Once started try accessing http://localhost:8083 in Google Chrome.


### To start dev environment in linux, please run,

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