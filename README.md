# Learn4Fun

## front-end
### stack:
- React
- Redux

### Setup
- cd frontend
- run $ yarn && yarn start


## backend

- [Features](#features)
- [Getting started](#getting-started)
- API
  - [Methods](#api)
  - [Options](#options)
  - [Validation errors](#validation-errors)
- [Plugins](#plugins)
- [Related packages](#related-packages)
- [Tests](#tests)

## Features

- Login/Register Authentication system
- Add/Edit/Delete/index Question
- Search Enigne
- Roles/Permissions as for student/teacher and Admin Role

 # Getting started
- install package.json (npm install) , this should install all packages required
- create your .env file as similar to .env.example
- Using Sqlite with Sequalize with [Sync] method , Tables are being generated Automatically
- Write in terminal (node server.js) to run the project server
- open browser with localhost:3000 as 3000 the default port


# API
- `/signup post`
    ```
    body {
        "Email":"nada@sys.com",
        "Password":"123456",
        "Username":"nada",
        "FirstName":"Nada",
        "LastName":"Nasser",
        "DateOfBirth":"1234597878",
        "Address":"Hopa Address__SR",
        "Gender":1,
        "PhoneNumber":"01111111",
        "Type":1
    }
    ```

- `/login post`
    ```
    body {
        "Email":"admin@sys.com",
	      "Password":"123456"
    }
    ```

- `/addQuestion post`
    ```
    body {
        "TypeID":1,
        "LessonID":1,
        "Description":"What is your name ?",
        "DifficultyID":"2",
        "Score" : 70,
        "Answers":[{"AnswerBody":"Nada" , "IsValid" : 1}, {"AnswerBody":"Ahmed" , "IsValid" : 0 }, {"AnswerBody": "mohamed", "IsValid": 0}]
    }
    ```

- `/updateQuestion post `
    ```
    body {
        "QuestionID":2,
        "Description":"How Are you ?",
        "DifficultyID":"1",
        "Score" : 50
    }
    ```

- `/deleteQuestion?QuestionID=5 get`

## Tests

> npm test

 ## .ENV FILE

.env file should conatin the following data:

> BASE_URL=http://localhost:8000

> PORT = 8000

> databasestorage = 'SchoolSystem'

> JWT_SECRET ='top_secret'
