# Contact List

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

- Login Authentication system
- Add/getList/getRecentList Contact
- Roles/Permissions as for Users Role

 # Getting started
- install package.json (npm install) , this should install all packages required
- create your .env file as similar to .env.example
- Using Sqlite with Sequalize with [Sync] method , Tables are being generated Automatically
- Write in terminal (node server.js) to run the project server
- open browser with localhost:3000 as 3000 the default port


# API

- `/login post`
    ```
    body {
        "Authorization":"ahbhetggfhhfhfdhfdhgfyygyhhghghdfdhfg",
        "DeviceToken":"54f5df5d4f5d45f4",
        "FingerPrint":"1223455678"
    }
    ```

- `/addContact post`
    ```
    body {
        "FirstName":"Ahmed",
        "LastName":"Ali",
        "PhoneNumber":"232324343",
        "Email":"ahmed@sys.com"
    }
    ```

- `/getList get `



- `/getRecentList get `

## Tests

> npm test

 ## .ENV FILE

.env file should conatin the following data:

> BASE_URL=http://localhost:8000

> PORT = 8000

> databasestorage = 'ContactListSystem'

> JWT_SECRET ='top_secret'
