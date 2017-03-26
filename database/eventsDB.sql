-- Create database
CREATE DATABASE IF NOT EXISTS TIGEREYEDB;
USE TIGEREYEDB;

DROP TABLE IF EXISTS Events;

CREATE TABLE Events
(
UID 					INTEGER			ZEROFILL PRIMARY KEY AUTO_INCREMENT,
Name					VARCHAR(17)		NOT NULL,
Description				TEXT					,
 -- TODO add blob for image?
Location                TEXT            NOT NULL,
EventDate               DATE                    ,
EventStart              TIME                    ,
EventEnd                TIME                    ,
Cost                    INTEGER         NOT NULL,	
);
