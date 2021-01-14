# Job Recruitment App

Technical interview test from Powered by People.

## Background

This web application allows a recruiter to view a candidates CV and provide comments for a particular candidate CV.

I decided to use Redux as the state management library for the application. Currently, only the candidates data is stored in the Redux store.

If allocated more time I would:

1. Refactor the code where there are duplication and move them to their own component
2. Configure the Redux store to include questions and applications data

## Features

- View CV responses
- Comment on CV responses
- Save comments data

## Tasks

- [x] Choose a candidate from a list
- [x] Open CV of a candidate if the selected candidate has an application
- [x] Display appropriate message if a candidate hasn't attached a CV
- [x] A recruiter can enter comments about a candidates CV
- [x] Save comments to the `api.json` file

## Getting started

1. Clone this repository

```bash
git clone https://github.com/khwilo/job-recruitment-app.git
```

2. Run `yarn` or `npm install` to install the project dependencies

3. Run `yarn run dev` or `npm run dev` to run a local development server

## Credits

[Khwilo Kabaka](https://github.com/khwilo)
