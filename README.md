# hybr1d-backend-assignment
Hybr1d Backend Assignment

steps to install:
1. install npm packages with "npm install" command
2. make a .env file with the following fields
CLOUD_DB=mongodburl
JWT_SECRET=anysecret
3. start app with "npm run start"

APIs

Auth APIs

POST http://localhost:5000/api/auth/register
body: {
    "userName":"seller4",
    "password":"romans",
    "userType":"seller"
}
response: {
    "ok": true,
    "message": "Registraion Successful",
    "packet": {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyODQ1YjBlNTBhYjc3ZWFiODE4ZmQ3NSIsImlhdCI6MTY1Mjg0MTIzMCwiZXhwIjoxNjUyOTI3NjMwfQ.5kJws3JKBEWLOHvkRTP9fBdWI1On_IP7KQIFRmOUKJs"
    }
}


POST http://localhost:5000/api/auth/login
body: {
    "userName": "ranger",
    "password": "test"
}
response: {
    "ok": true,
    "message": "Login Successful",
    "packet": {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyODQxYWNjMWU2YmUxNmNmZTBkOGQyNyIsImlhdCI6MTY1Mjg0MTMwNSwiZXhwIjoxNjUyOTI3NzA1fQ.NZbaHCn7pb_q_tdpEfV_Yp7fO_5NAsU-NQ3tMh-LH0M"
    }
}


APIs for buyers

GET http://localhost:5000/api/buyer/list-of-sellers
headers: x-auth-token: buyertoken
response:{
    "ok": true,
    "message": "List of Sellers",
    "packet": {
        "sellerList": [
            {
                "userName": "seller1",
                "id": "628420affa32dffaba91029c"
            },
            {
                "userName": "seller2",
                "id": "628420b3fa32dffaba91029f"
            },
            {
                "userName": "seller3",
                "id": "628420b7fa32dffaba9102a2"
            },
            {
                "userName": "seller4",
                "id": "62845b0e50ab77eab818fd75"
            }
        ]
    }
}

GET http://localhost:5000/api/buyer/seller-catalog/:seller_id
headers: x-auth-token: buyertoken
response:{
    "ok": true,
    "message": "Seller Catalog",
    "packet": {
        "sellerCatalog": [
            {
                "userId": "62845b0e50ab77eab818fd75",
                "products": [
                    {
                        "name": "Pepsi",
                        "price": 30,
                        "createdAt": "2022-05-18T02:37:03.200Z",
                        "updatedAt": "2022-05-18T02:37:03.200Z",
                        "id": "62845bcf50ab77eab818fd7c"
                    },
                    {
                        "name": "Coke",
                        "price": 20,
                        "createdAt": "2022-05-18T02:37:03.201Z",
                        "updatedAt": "2022-05-18T02:37:03.201Z",
                        "id": "62845bcf50ab77eab818fd7d"
                    }
                ],
                "createdAt": "2022-05-18T02:37:03.280Z",
                "updatedAt": "2022-05-18T02:37:03.280Z",
                "id": "62845bcf50ab77eab818fd7f"
            }
        ]
    }
}

POST http://localhost:5000/api/buyer/create-order/:seller_id
headers: x-auth-token: buyertoken
response:{
    "ok": true,
    "message": "Order Added",
    "packet": {
        "newOrder": {
            "userId": "62841acc1e6be16cfe0d8d27",
            "sellerId": "62845b0e50ab77eab818fd75",
            "products": [
                "62845bcf50ab77eab818fd7c",
                "62845bcf50ab77eab818fd7d"
            ],
            "id": "62845c5550ab77eab818fd85"
        }
    }
}

APIs for sellers

POST http://localhost:5000/api/seller/create-catalog
headers: x-auth-token: sellertoken
body:{
    "productList":[{
        "name":"Pepsi",
        "price":30
    },{
        "name":"Coke",
        "price":20
    }]
}
response:{
    "ok": true,
    "message": "Catalog Added",
    "packet": {
        "productList": [
            {
                "name": "Pepsi",
                "price": 30,
                "userid": "62845b0e50ab77eab818fd75"
            },
            {
                "name": "Coke",
                "price": 20,
                "userid": "62845b0e50ab77eab818fd75"
            }
        ]
    }
}

GET http://localhost:5000/api/seller/orders
headers: x-auth-token: sellertoken
response:{
    "ok": true,
    "message": "Catalog Added",
    "packet": {
        "orders": [
            {
                "userId": {
                    "userName": "ranger",
                    "id": "62841acc1e6be16cfe0d8d27"
                },
                "sellerId": "62845b0e50ab77eab818fd75",
                "products": [
                    {
                        "id": "62845bcf50ab77eab818fd7c"
                    },
                    {
                        "id": "62845bcf50ab77eab818fd7d"
                    }
                ],
                "createdAt": "2022-05-18T02:39:17.335Z",
                "updatedAt": "2022-05-18T02:39:17.335Z",
                "id": "62845c5550ab77eab818fd85"
            }
        ]
    }
}
