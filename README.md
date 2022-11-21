# Docker demo with Nodejs app

## Step 1

Create Nodejs app

## Step 2

Write `Dockerfile` like following:

```
FROM node:14.17.6

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=8080

EXPOSE 8080

CMD ["npm", "start"]
```

## Step 3

Add the `.dockerignore` file with `node_modules` in it so that the container will not copy `node_modules` folder after running npm install

## Step 4

Build the docker image with command:

```
docker build -t theson/demo-nodejs:1.0 .
```

After finish, there will be a docker image in the docker desktop app with the image id

## Step 5

Run the docker image with command:

```
docker run -p 5000:8080 801d180c2a81
```

Where `5000` is the external port from your computer and `8080` is the internal port from the docker container
`801d180c2a81` is the docker image id

## Step 6

Check the result in `localhost:5000` from your computer browser

## Step 7

Stop the docker container with command:

```
docker stop 760e0705a9ac
```

Where `760e0705a9ac` is the container id
