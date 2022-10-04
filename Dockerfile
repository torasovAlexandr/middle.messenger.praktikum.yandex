FROM node

WORKDIR /app


COPY app.js ./
COPY webpack.config.js ./
COPY babel.config.js ./
COPY tsconfig.json ./
COPY package.json ./
RUN npm install
COPY src ./src
COPY public ./public
RUN npm run build2

EXPOSE 8080


CMD npm start
