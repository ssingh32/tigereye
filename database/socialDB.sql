-- Create database
CREATE DATABASE IF NOT EXISTS TIGEREYEDB;
USE TIGEREYEDB; -- SOCIALAREADB

DROP TABLE IF EXISTS SocialAreas;

CREATE TABLE SocialAreas
(
UID 					INTEGER			ZEROFILL PRIMARY KEY AUTO_INCREMENT,
Name					VARCHAR(17)		NOT NULL,
 -- TODO add blob for image?
Description				TEXT					,
Location                TEXT            NOT NULL,
Cost                    INTEGER         NOT NULL,	
);
