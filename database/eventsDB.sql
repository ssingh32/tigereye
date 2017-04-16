-- Create database
CREATE DATABASE IF NOT EXISTS TIGEREYEDB;
USE TIGEREYEDB;

DROP TABLE IF EXISTS Events;

CREATE TABLE Events
(
UID 					INTEGER			ZEROFILL PRIMARY KEY AUTO_INCREMENT,
Name					VARCHAR(17)		NOT NULL,
Image                   TEXT            NOT NULL,
Location                TEXT            NOT NULL,
EventStart              TEXT                    ,
EventEnd                TEXT                    ,
Cost                    INTEGER         NOT NULL,
Description				TEXT					
);
