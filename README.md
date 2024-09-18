# IPE

An web app (PWA) to manage events, musics and people in the Presbyterian Church from Estreito/Floripa(SC)

## Features

- Events view: Visualize your events calendar
- Music Library: Manage the church's music repertoire
- Member Directory: Keep track of church worship members and their information
- Planning Tools: Organize and plan church activities

<img src=".github/assets/planning.png" alt="IPE App Screenshot" width="200" />
<img src=".github/assets/event.png" alt="IPE App Screenshot" width="200" />
<img src=".github/assets/musics.png" alt="IPE App Screenshot" width="200" />
<img src=".github/assets/music.png" alt="IPE App Screenshot" width="200" />

## Getting Started

First of all, setup the .env file copying the content of .env.example to a new file named ".env"

Running the app:

```bash
  yarn

  yarn dev
```

Setting up database:

```bash
  docker compose up -d

  yarn migrate:up
```

Now, open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
