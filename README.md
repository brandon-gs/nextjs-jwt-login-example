# Login with Next.js JWT



## Used tools
  - React v18
  - Next.js v12
  - Redux
  - Express
  - JWT
  - Passport
  - Mongodb

## Usage:



### Installation:

Make sure you have Node and NPM installed.

```bash
git clone https://github.com/brandon-gs/nextjs-jwt-login-example
cd nextjs-jwt-login-example
npm install
```

You need create an .env file like below

```
MONGODB_URI=YOUR_MONGODB_URI
JWT_SECRET=YOUR_JWT_SECRET
```


### Starting the app:
```bash
# Run in dev mode:
npm run dev

# Run in production:
npm run build
npm start
```

  


## How it works:
#### The client:
The user sends an auth request from the client. In the response, JWT is received, and stored in browser cookies and redux store. Then the user has access to the token from the client, and can use it to access protected routes.

#### The server:
When the user makes a page request, cookies are also sent along, so the server can read them. To read it, the user is using the `getInitialProps` lifecycle method, provided by Next.js. It gets an argument - the context object that contains some properties. You can read more about it [here](https://github.com/zeit/next.js/#fetching-data-and-component-lifecycle). On the `req` property, we can access `headers` property which contains the cookie with the token. An action creator is dispatched to save the token in the redux store, and the app now has access to the token again.

### Feel free to make PR to improve this repo!
