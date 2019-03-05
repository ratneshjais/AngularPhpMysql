## Get started

### Clone the repo

```shell
git clone https://github.com/ratneshjais/AngularPhpMysql
cd AngularPhpMysql
```

### Install npm packages

Install the `npm` packages described in the `package.json` and verify that it works:

```shell
npm install
npm start
```
Open the browser and visit url for front end 

```shell
http://localhost:4200/users
```
## Start the PHP Api Server

Open Terminal or cmd and get into the test folder and run commanf to start the PHP backend Server

```shell
php -S 127.0.0.1:12345
```
it will start the backend server.

### database setup

Schema

```shell
create database mydb;

use mydb;

CREATE TABLE IF NOT EXISTS `user` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `fname` varchar(50),
  `lname` varchar(50),
  `dob` date,
  `phone` varchar(50),
  `email` varchar(50),
  `address` varchar(250),
  `zip` varchar(50),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8;
```
##Ready to use