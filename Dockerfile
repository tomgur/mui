FROM node:18
MAINTAINER "Tom Gur"
RUN mkdir -p /opt/app
COPY . /opt/app
WORKDIR /opt/app
RUN npm install --save react react-dom react-scripts react-router-dom react-router -g
RUN npm install
RUN npm run build
EXPOSE 443
ENTRYPOINT ["/usr/bin/node" , "/opt/app/server.js"]