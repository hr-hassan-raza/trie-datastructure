### ComplainCo

ComplainCo is a basic complaint management system for a fictitious company. his system should allow users to submit complaints and view their status.

The application is example implementation of Trie data structure in microservices environment. 

##### Types of Users

- User - Can create complains
- Admin - Can resolve pending complaints

##### Services

- Frontend - React App
- python-service - FASTAPI service
- Dotnet-service - SQLlite DB connection service


#### How to Run 


1. docker-compose build

2. docker-compose up

3. Add User and admin through endpoint 

```
POST: http://localhost:4000/users

Body: 

{
  "Name": "user",
  "Email": "user@gmail.com",
  "Password": "user",
  "Role": "Admin"
}

4. Add Products 

POST: http://localhost:4000/products

{
    Name: "mouse"
}

Start app at http://localhost:3000



```

##### Snap Shots

