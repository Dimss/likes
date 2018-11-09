FROM node
WORKDIR /likes
ADD app /likes/app
COPY app.js /likes
COPY package.json /likes
RUN npm install
CMD npm start

