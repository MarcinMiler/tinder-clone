# Tinder- clone

Fullstack tinder-clone app made with React/Typescript/Nestjs/Graphql

![app](./AppScreens/App.png)

## Todo

-   [x] MVP (liking/disliking profiles, create matches, messages)
-   [ ] Elasticsearch
-   [ ] List of messages with pairs on sidebar
-   [ ] Settings of profile (select age range, update profile)
-   [ ] Messages infinite loading
-   [ ] Elo score ranking
-   [ ] Optimazation

## Run local

### web:

1. `git clone https://github.com/MarcinMiler/tinder-clone.git`

2. `yarn install` (must be yarn because of yarn workspaces)

3. `yarn build:web`

4. `cd packages/web && yarn start`

### server:

1. `docker build -t tinder-server .`

2. `docker-compose up`

# Screens

![login](./AppScreens/Login.png)
![messages](./AppScreens/Messages.png)
