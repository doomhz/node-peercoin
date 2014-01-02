# node-peercoin

node-peercoin is a simple wrapper for the Peercoin client's JSON-RPC API.

The API is equivalent to the API document [here](https://en.bitcoin.it/wiki/Original_Bitcoin_client/API_Calls_list).
The methods are exposed as lower camelcase methods on the `peercoin.Client`
object.

## Install

`npm install node-peercoin`

## Setup

1. Traverse to `~/.ppcoin` or `~/Library/Application Support/PPCoin` and add a file called `ppcoin.conf` if it doesn't already exist.

2. Add these lines to the file:

    rpcuser=username

    rpcpassword=password

You will use these to login to the server.

3. Start your Litecoin client with the `-server` argument or run `ppcoind`

4. You should now be able to communicate with Litecoin JSON-RPC API using the
node-ppcoin library, try it out!

5. Find more installation instructions [here](https://github.com/ppcoin/ppcoin/wiki/Installation)

## Examples

### Create client
```js
var peercoin = require('node-peercoin');
var client = new litecoin.Client('localhost', 9902, 'username', 'password');
```

### Create client with single object
```js
var client = new peercoin.Client({
  host: 'localhost',
  port: 9902,
  username: 'username',
  password: 'password'
});
```

### Get balance across all accounts with minimum confirmations of 6

```js

client.getBalance('*', 6, function(err, balance) {
  if (err) console.log(err);
  console.log('Balance: ' + balance);
});
```

### Get the network hash rate

```js
client.getNetworkHashPS(function(err, hashps) {
  if (err) console.log(err);
  console.log('Network Hash Rate: ' + hashps);
});
```
