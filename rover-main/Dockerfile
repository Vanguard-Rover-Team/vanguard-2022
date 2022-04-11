
# Build
FROM ubuntu:latest AS build

RUN apt update
# RUN apt-get install arm-linux-gnueabi
RUN apt-get install -y g++
RUN apt-get install -y make

COPY . /usr/src/myapp
WORKDIR /usr/src/myapp

RUN make clean
RUN make BIN_DIR=bin/ TARGET=app.out
RUN ls /usr/src/myapp/bin/


# Deploy
FROM ubuntu:latest AS deploy

COPY --from=build /usr/src/myapp/bin/ /usr/bin/myapp/

WORKDIR /usr/bin/myapp/

CMD ./app.out
