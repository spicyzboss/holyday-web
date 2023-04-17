FROM node:16-alpine

RUN npm i -g pnpm

WORKDIR /app

COPY package.json pnpm-lock.yaml .npmrc ./

RUN pnpm install

COPY . .

ENV NODE_ENV production

RUN pnpm build

EXPOSE 3000

CMD ["pnpm", "start"]

