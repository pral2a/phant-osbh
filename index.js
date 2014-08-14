#!/usr/bin/env node

var Phant = require('phant'),
    app = Phant();

Phant.HttpServer.listen(8085);

// METADATA
// ========
var meta = require('phant-meta-nedb')({
  directory: 'osbh_phant_streams'
});

var validator = Phant.Validator({
  metadata: meta
});

// KEYCHAIN
// ========
var keychain = require('phant-keychain-hex')({
  keyLength: 6,
  publicSalt: 'Change this public salt',
  privateSalt: 'Change this private salt',
  deleteSalt: 'Change this delete salt'
});

// STORAGE
// =======
var stream = require('phant-stream-csv')({
  directory: 'osbh_phant_streams',
  cap: 52428800,
  chunk: 262144
});

app.registerOutput(stream);

// INPUTS
// ======
var defaultInput = Phant.HttpInput({
  validator: validator,
  metadata: meta,
  keychain: keychain
});

Phant.HttpServer.use(defaultInput);
app.registerInput(defaultInput);

// OUTPUTS
// =======
var defaultOutput = Phant.HttpOutput({
  validator: validator,
  storage: stream,
  keychain: keychain
});

Phant.HttpServer.use(defaultOutput);
app.registerOutput(defaultOutput);

// MANAGERS
// ========
var defaultManager = Phant.TelnetManager({
  validator: validator,
  port: 8086,
  metadata: meta,
  keychain: keychain
});

app.registerManager(defaultManager);

console.log(
  "            .-.._\n      __  \/`" +
  "     '.\n   .-'  `\/   (   a \\" +
  "\n  \/      (    \\,_   \\\n \/|" +
  "       '---` |\\ =|\n` \\    \/_" +
  "_.-\/  \/  | |\n   |  \/ \/ \\ \\" +
  "  \\   \\_\\  jgs\n   |__|_|  |_|" +
  "__\\\n  welcome to phant.\n\n"
);

