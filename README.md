# Installation and run

### Install the Firebase CLI
```
$ npm install -g firebase-tools
```
See more [Firebase CLI reference](https://firebase.google.com/docs/cli)

### Install npm packages
Run command into functions directory:
```
$ cd functions
$ npm install 
```

### Run
```
$ cd functions
$ firebase serve
```

Playground [http://localhost:5000/coffee-7be5e/us-central1/graphql](http://localhost:5000/coffee-7be5e/us-central1/graphql)

# API examples

### Create account

```
mutation CreateAccount {
    createAccount(phone: "+79009990001") {
        id
        phone
        createAt
    }
}
```

### Get account info

```
{
    account(phone: "+79009990001") {
        id
        phone
        createAt
        lastPaidOrders {
            id
            createAt
            isFree
        }
    }
}
```

### Create order

```
mutation CreateOrder {
    createOrder(accountId: "jZf9v24HPqYx09k1Mv9s") {
        id
        createAt
        isFree
    }
}
```