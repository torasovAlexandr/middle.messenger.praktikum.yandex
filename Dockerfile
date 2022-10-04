FROM node

WORKDIR /app


COPY package.json ./
RUN npm install
COPY app.js ./
COPY webpack.config.js ./
COPY babel.config.js ./
COPY tsconfig.json ./
COPY src ./src
COPY public ./public
RUN npm run build

EXPOSE 8080


CMD npm start
