# ----- Backend build -----
FROM node:lts as backend

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# ----- Frontend build -----
FROM node:lts as frontend

WORKDIR /client

COPY client/package*.json ./

RUN npm install

COPY client/ .

RUN npm run build

# ----- Final image with backend and frontend -----
FROM node:lts

# Backend setup
WORKDIR /app

COPY --from=backend /app .

# Frontend setup
COPY --from=frontend /client/build /app/client/build

# Expose the port the app runs on
EXPOSE 5000

CMD ["npm", "start"]
