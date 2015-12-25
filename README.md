# Heyu-Web

An __*extremely*__ basic implementation to control a Heyu interface through web requests. This is absolutely overkill (Could've been written without Expressjs), but it made for rapid development so ¯\\_(ツ)_/¯.

#### Requirements:

1. A working Node installation
2. A properly configured Heyu installation

#### Installation:

1. Clone this repository
2. `npm install`
3. Copy `config.example.json` to `config.json`
4. Put some string into `authenticationCode`
5. `npm start`

#### Notes:
* Default port is 3100 (Changeable in bin/www file)
* `authenticationCode` is a static string for extremely basic authentication
* Requests take the format: `GET http://IPADDRESS:3100?authentication=SAME_AS_authenticationCode&light=X10_ADDRESS&action=ON/OFF`

#### To-Do:
* Implement more secure authentication
* Optimization
