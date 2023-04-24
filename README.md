# Nodejs and Reactjs assignment

## Getting Started

This repository is the assignment submission of Node.js & Next.js assignement which is to create a “Node.js” Application using Express Framework and MongoDB Database and Connect it to your Frontend Application (Which can be developed using either React or Nextjs).

Since this project will hold both the client application and the server application there will be node modules in two different places. First run `npm install` from the root. After this navigate to the client folder by `cd client` and then run `npm install`. From now on run this command anytime you want to install all modules again. This is a script we have defined in package.json.

Create a “Node.js” Application using Express Framework and MongoDB Database and Connect it to your Frontend Application (Which can be developed using either React or Nextjs)

Use the provided sample data to load your Database. Please refer to sample data file “sample_data.json”. This file is attached separately.

You must fetch the following data using the API and display it on the frontend in a table format:

-> Users which have income lower than $5 USD and have a car of brand “BMW” or “Mercedes”.\
-> Male Users which have phone price greater than 10,000.\
-> Users whose last name starts with “M” and has a quote character length greater than 15 and email includes his/her last name.\
-> Users which have a car of brand “BMW”, “Mercedes” or “Audi” and whose email does not include any digit.\
-> Show the data of top 10 cities which have the highest number of users and their average income.

## Tech Used

### Front-End

-> react-router-dom for routing. \
 -> Axios to make http request from the browser . \
 -> styled-components for styling the frontend \

### Backend

-> Node and Express. \
 -> Mongoose for mongoDB. \

## Installation

### MongoDB Atlas

For connecting to mongodb atlas You will need username and password which will be shared via email to `contactus@oruphones.com`.

To connect to mongodb atlas you will need a `.env` file which is shared via email which contains the mongo uri which is needed for the connection to database. Place the `.env` file in the root folder of the project (i.e. Nodejs task) and then follow the next steps.

### Backend

Install dependencies for the backend with npm in the root folder

```bash
  cd Nodejs task
  npm install
```

Start the development server for the backend

```bash
  npm start
```

The server will listen to `http://localhost:5000/`

### Frontend

Navigate to the client folder by executing:

```bash
  cd client
```

Install dependencies for the frontend with npm in the client's folder

```bash
  npm install
```

Start the development server for the frontend

```bash
  npm start
```

Head over to `http://localhost:3000/` by clicking the link in the terminal or by copying the url in the browser.

## API Reference

Use postman or thunderclient (vscode extension) to check all the apis.

#### Get all items

```http
  GET /user/data
```

Gets all the data from the database mongodb atlas.

URL : http://localhost:3000/

#### Get item 1

Users which have income lower than $5 USD and have a car of brand “BMW” or “Mercedes”.

URL : http://localhost:3000/income-car

```http
  GET /user/income-car
```

#### Get item 2

Male Users which have phone price greater than 10,000.

URL : http://localhost:3000/phone-price

```http
  GET /user/phone-price
```

#### Get item 3

Users whose last name starts with “M” and has a quote character length greater than 15 and email includes his/her last name.

URL : http://localhost:3000/quote

```http
  GET /user/quote
```

#### Get item 4

Users which have a car of brand “BMW”, “Mercedes” or “Audi” and whose email does not include any digit.

URL : http://localhost:3000/car-email

```http
  GET /user/car-email
```

#### Get item 5

Show the data of top 10 cities which have the highest number of users and their average income.

URL : http://localhost:3000/top10cities

```http
  GET /user/top10cities
```

## 🔗 Links

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/pratish-ninawe-6199b2220/)
