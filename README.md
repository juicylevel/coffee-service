# Installation and run

### Install the Firebase CLI
```
$ npm install -g firebase-tools
```
See more [Firebase CLI reference](https://firebase.google.com/docs/cli).

### Install npm packages
Run command into functions directory:
```
$ cd functions
$ npm install 
```

### Run
```
$ cd functions
$ npm run serve
```

Firebase [project console](https://console.firebase.google.com/project/coffee-7be5e).
Playground [http://localhost:5000/coffee-7be5e/us-central1/graphql](http://localhost:5000/coffee-7be5e/us-central1/graphql).

# API examples

### Create account

```
mutation CreateAccount {
    createAccount(
      input: { 
        phone: "+79009990001" 
      }
    ) {
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
    createOrder(
      input: { 
        accountId: "bcWiTD34hAZKySWLVh9Z", 
        isFree: false
      }
    ) {
        id
        createAt
        isFree
    }
}
```

### Login

```
mutation Login {
    login(
      input: { 
        phone: "+79009990001" 
      }
    ) {
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