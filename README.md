# React, Node, Express, MongoDB and Docker

Code in this repository is based on the following videos.

- [Docker Node, React, MongoDB - Part 2](https://youtu.be/kTPlHXLponE)
- [Docker Node, React, MongoDB - Part 2](https://youtu.be/XDG3bNFV08s)

Commands:

- `docker network create app-net`
- `docker volume create dbdata`
- `docker volume create dbconfig`
- `docker container ls -a`
- `docker container rm db`
- `docker run --name db -p 27017:27017 -v dbdata:/data/db -v dbconfig:/data/configdb --network app-net -d mongo`
- `docker network inspect app-net`
- `docker build -t apiserver .` # in the server directory
- `docker run --name node -p 4000:4000 --network app-net -d apiserver`
- `docker logs node`
- `docker build -t client .` # in the web directory
- `docker run --name client -p 80:80 --network app-net -d client`

Older Commands:

- `docker run --name db -p 27017:27017 -v dbdata:/data/db -v dbconfig:/data/configdb mongo`

To Use:
