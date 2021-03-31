CREATE DATABASE IF NOT EXISTS starvana_ships;
USE starvana_ships;
SET GLOBAL local_infile = true;
CREATE TABLE IF NOT EXISTS inventory(
  id INT NOT NULL AUTO_INCREMENT,
  model VARCHAR(200) NOT NULL,
  price INT NOT NULL,
  _description VARCHAR(1000),
  in_stock INT NOT NULL,
  PRIMARY KEY (id)
);
CREATE TABLE IF NOT EXISTS ship_photos(
  id INT NOT NULL AUTO_INCREMENT,
  ship_id INT NOT NULL,
  _url LONGBLOB NOT NULL,
  PRIMARY KEY(id)
);
CREATE TABLE IF NOT EXISTS crew_member(
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(200) NOT NULL,
  occupation VARCHAR(200) NOT NULL,
  priceperweek INT NOT NULL,
  photo VARCHAR(500),
  PRIMARY KEY (id)
);
INSERT INTO inventory (model, price, _description, in_stock)
VALUES (
    'Bebop',
    30000,
    'A converted interplanetary fishing trawler',
    10
  );
INSERT INTO inventory (model, price, _description, in_stock)
VALUES (
    'Millenium Falcon',
    40000,
    'An extensively modified Corellian light frieghter',
    5
  );
INSERT INTO inventory (model, price, _description, in_stock)
VALUES (
    'Outlaw Star',
    20000,
    'State of the art grappler ship developed by the Space Forces',
    6
  );
INSERT INTO inventory (model, price, _description, in_stock)
VALUES (
    'Serenity',
    10000,
    'Firefly-class transport ship, an aught three model, named for the Serenity Valley',
    2
  );