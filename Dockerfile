FROM centos/nodejs-10-centos7
COPY package.json .
RUN npm install
RUN npm install -g nodemon
# COPY --from=build ./node_modules ./node_modules
COPY . .
EXPOSE 5000
CMD ["sh", "start.sh"]

# FROM node:lts-slim
# COPY package.json .
# RUN npm install
# RUN npm install -g nodemon
# ENV FRONTEND_URL=http://localhost:3000
# ENV DATABASE_URL=postgres://localhost:5432/postgres
# ENV WEATHER_API_KEY=3815f2d2474d4bf0fd7527bd628f45cb
# ENV NODE_ENV development
# USER node
# COPY --chown=node:node . .
# EXPOSE 5000
# CMD ["sh", "start.sh"]