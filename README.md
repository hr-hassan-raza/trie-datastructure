## ComplainCo

ComplainCo is a basic complaint management system for a fictitious company. This system should allow users to submit complaints and view their status.

The application is example implementation of Trie data structure in microservices environment. 

### Types of Users

- User - Can create complains
- Admin - Can resolve pending complaints

### Services

- frontend - React web app
- python-service - FastApi service
- dotnet-service - SQ:lite DB connection service


### How to Run 

1. docker-compose build

2. docker-compose up

3. Add User and admin through endpoint 

```
POST: http://localhost:4000/users

Body: 

{
  "Name": "admin",
  "Email": "admin@gmail.com",
  "Password": "user",
  "Role": "Admin"
}

{
  "Name": "user",
  "Email": "user@gmail.com",
  "Password": "user",
  "Role": "User"
}
```

4. Add Products 

```
POST: http://localhost:4000/products

[
  {
    "name": "mouse"
  },
  {
    "name": "mobile"
  },
  {
    "name": "moneypot"
  }, 
  {
    "name": "monitor"
  },
  {
    "name": "mousepod"
  },
  {
    "name": "havana"
  },
]

```

5. Start app at http://localhost:3000


### Data Base Schema

![alt text](assets/DbSchema.png)

##### Snap Shots

![alt text](assets/login.png)


![alt text](assets/complaintForm.png)


![alt text](assets/complaints.png)