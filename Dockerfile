FROM node:latest

COPY . /opt/mqtt-dnd-monitor
WORKDIR /opt/mqtt-dnd-monitor

RUN rm -rf node_moduled
RUN npm install
ENTRYPOINT npm start

