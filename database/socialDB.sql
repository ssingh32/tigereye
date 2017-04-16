-- Create database
CREATE DATABASE IF NOT EXISTS TIGEREYEDB;
USE TIGEREYEDB;

DROP TABLE IF EXISTS SocialAreas;

CREATE TABLE SocialAreas
(
UID 					INTEGER			ZEROFILL PRIMARY KEY AUTO_INCREMENT,
Name					VARCHAR(17)		NOT NULL,
Image                   BLOB            NOT NULL,
Description				TEXT					,
Location                TEXT            NOT NULL,
Cost                    INTEGER         NOT NULL
);
