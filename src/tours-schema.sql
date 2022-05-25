DROP DATABASE if EXISTS `tour`;

CREATE DATABASE IF NOT EXISTS `tour`;
USE `tour`;

CREATE TABLE IF NOT EXISTS author (
    author_id INT UNSIGNED AUTO_INCREMENT,
    author CHAR(25) NOT NULL,
    CONSTRAINT PRIMARY KEY (author_id)
);

CREATE TABLE IF NOT EXISTS tourName (
    tourName_id INT UNSIGNED AUTO_INCREMENT,
    tourName VARCHAR (500) NOT NULL,
    CONSTRAINT PRIMARY KEY (tourName_id)
);

CREATE TABLE IF NOT EXISTS years (
    years_id INT UNSIGNED AUTO_INCREMENT,
    years CHAR(5) NOT NULL,
    CONSTRAINT PRIMARY KEY (years_id)
);

CREATE TABLE IF NOT EXISTS country (
    country_id INT UNSIGNED AUTO_INCREMENT,
    country VARCHAR(25) NOT NULL,
    CONSTRAINT PRIMARY KEY (country_id)
);

CREATE TABLE IF NOT EXISTS picture (
    picture_id INT UNSIGNED AUTO_INCREMENT,
    picture VARCHAR (500) NOT NULL,
    CONSTRAINT PRIMARY KEY (picture_id)
);

CREATE TABLE IF NOT EXISTS gender (
    gender_id INT UNSIGNED AUTO_INCREMENT,
    gender VARCHAR(6) NOT NULL,
    CONSTRAINT PRIMARY KEY (gender_id)
);

CREATE TABLE IF NOT EXISTS timeframe (
    timeframe_id INT UNSIGNED AUTO_INCREMENT,
    timeframe VARCHAR(6) NOT NULL,
    CONSTRAINT PRIMARY KEY (timeframe_id)
);

CREATE TABLE IF NOT EXISTS tour (
    id INT UNSIGNED AUTO_INCREMENT,
    author VARCHAR (50) NOT NULL,
    tourName ENUM ('Dancing with the Woolf', 'Change your attitude', 'Not I can travel the leaves of grass', 'A Mirrored pool of thought', 'Thin love aint love at all', 'Forever is composed of Nows','The Modern Day Prometheus', 'There is no enjoyment like reading', 'Find what you love and let it kill you', 'Laughing is cheap medicine'),
    years ENUM ('1700s', '1800s', '1900s'),
    county ENUM ('United States of America', 'United Kingdom', 'Germany'),
    picture ENUM (
        'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/George_Charles_Beresford_-_Virginia_Woolf_in_1902_-_Restoration.jpg/220px-George_Charles_Beresford_-_Virginia_Woolf_in_1902_-_Restoration.jpg',
        'https://media.glamourmagazine.co.uk/photos/61dec00fec31c26165e7cb1c/master/w_1600%2Cc_limit/MAYAANGELOU_120122_GettyImages-74252590_P.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/1/1c/Walt_Whitman%2C_steel_engraving%2C_July_1854.jpg',
        'https://www.nybooks.com/wp-content/uploads/2017/11/plath-brunette.jpg',
        'https://static01.nyt.com/images/2019/08/06/books/06Books-Appraisal/06Books-Appraisal-articleLarge.jpg?quality=75&auto=webp&disable=upscale',
        'https://static.faber.co.uk/wp-content/uploads/2021/08/Black-white_photograph_of_Emily_Dickinson_Restored.jpg',
        'https://www2.clarku.edu/faculty/lkasmer/ENG263/Fall04/ghollands/images/Mary_Shelley.jpg',
        'https://th-thumbnailer.cdn-si-edu.com/wC408fAbBm1zjzKZKqGYcYUQfeU=/fit-in/1072x0/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/30/4a/304a1ef2-1c4a-429c-a612-2ec99d797737/jane_austen_1870_memoir_woodcut_-_jane_austens_house.jpg',
        'https://sobotkalitmag.files.wordpress.com/2015/09/bukowski.jpg',
        'https://cdn.britannica.com/15/147615-050-9D75F95E/George-Gordon-Byron.jpg'),
    gender ENUM ('female', 'male'),
    timeframe ENUM ('2', '3', '4'),
    CONSTRAINT pk_id PRIMARY KEY (id)
);

CREATE TABLE famousWorks_to_author
    (
        famousWorks_id INT UNSIGNED,
        author_id MEDIUMINT,
        CONSTRAINT fk_famousWorks_id FOREIGN KEY (famousWorks_id) REFERENCES famousWorks (id),
        CONSTRAINT fk_author_id FOREIGN KEY (author_id) REFERENCES author (author_id)
    );

/* CREATE TABLE IF NOT EXISTS famousWorks (
    famousWorks_id INT UNSIGNED AUTO_INCREMENT,
    famousWorks_id VARCHAR(50) NOT NULL,
    CONSTRAINT PRIMARY KEY (famousWorks_id)
) */


/* creaet famous works table  */
/* create pivot table */
