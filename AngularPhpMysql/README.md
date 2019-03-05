## Get started

### Clone the repo and inside into the porject folder

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

Now Open the browser and visit url for run the project

```shell
http://localhost:4200
```
## Start the PHP Api Server

Open Terminal or cmd and get into the `/AngularPhpMysql/test` folder and run below command to start the PHP backend Server

```shell
php -S 127.0.0.1:12345
```
it will start the backend server.

### Database setup should be

 

```shell
CREATE DATABASE mydb;
 
 
 
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
###Now Ready to use