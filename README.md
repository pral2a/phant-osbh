# phantconfig-custom

[phant](http://phant.io) deployment for the [OSBH](http://www.opensourcebeehives.net) project.

## Installation
If you have the latest stable version of [node.js](http://nodejs.org) installed, you can extract the downloaded
archive and install the dependencies using [npm](http://npmjs.org).

    $ cd phantconfig-custom
    $ npm install

## Getting Started
After installing the package, you can now start the server.

    $ npm start


## Modules
These modules were configured for a specific user. If you would like to configure your own copy of phant,
please visit [data.sparkfun.com/config](https://data.sparkfun.com/config).


### HTTP
* Port 8085


### Inputs

* HTTP
  * **metadata** - meta
  * **keychain** - keychain


### Outputs

* HTTP
  * **storage** - stream
  * **keychain** - keychain


### Storage

* CSV
  * **directory** - 'osbh_phant_streams'
  * **cap** - 52428800
  * **chunk** - 262144


### Managers

* Telnet
  * **port** - 8086
  * **metadata** - meta
  * **keychain** - keychain


## License
Copyright (c) 2014 SparkFun Electronics. Licensed under the GPL v3 license.

