FROM node:20.15.1-alpine as deps
WORKDIR /usr/app/rest
COPY ./package*.json .
RUN npm install

# This stage compiles TypeScript code to JavaScript and installs only production dependencies
FROM node:20.15.1-alpine as build
WORKDIR /usr/app/rest
COPY --from=deps /usr/app/rest/node_modules ./node_modules
COPY . .
RUN npm run build
RUN npm ci -f --only=production && npm cache clean --force

# This stage copy node modules and dist folder from previous stages
FROM node:20.15.1-alpine as prod
WORKDIR /usr/app/rest
COPY --from=build /usr/app/rest/node_modules ./node_modules
COPY --from=build /usr/app/rest/dist ./dist
EXPOSE 3000
CMD [ "node", "./dist/server.js" ]