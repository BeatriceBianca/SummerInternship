CREATE TABLE IF NOT EXISTS movies(
movie_id INT AUTO_INCREMENT,
movie_name VARCHAR(255) NOT NULL,
director VARCHAR (255) NOT NULL,
description VARCHAR(500) NOT NULL,
price VARCHAR(255) NOT NULL,
genre VARCHAR(255) NOT NULL,
photo VARCHAR (255) NOT NULL,
PRIMARY KEY(movie_id)
);

 insert into movies(movie_name, director, description, price, genre, photo)
 values(
        'The Equalizer 2',
        'Antoine Fuqua',
        'Robert McCall serves an unflinching justice for the exploited and oppressed, but how far will he go when that is someone he loves?',
        '99 RON',
        'Action',
         '1.jpg'),
       (
        'Unfriended: Dark Web',
        'Stephen Susco',
        'A teen comes into possession of a new laptop and soon discovers that the previous owner is not only watching him, but will also do anything to get it back.',
        '120 RON',
        'Horror',
        '2.jpg'),
       (
        'Teefa in Trouble',
        'Ahsan Rahim',
        'Teefa goes to Poland to bring Anya to Pakistan to marry gangster Butt s son but gets into trouble with Anya s gangster father and the police.',
        '80 RON',
        'Comedy',
        '3.jpg'),
       (
        'Skyscraper',
        'Rawson Marshall Thurber',
        'A father goes to great lengths to save his family from a burning skyscraper.',
        '100 RON',
        'Action',
        '4.jpg'),
       (
        'Sorry to Bother You',
        'Boots Riley',
        'In an alternate present-day version of Oakland, telemarketer Cassius Green discovers a magical key to professional success, propelling him into a macabre universe.',
        '130 RON',
        'Comedy',
        '5.jpg'),
       (
        'Jurassic World: Fallen Kingdom',
        'J.A. Bayona',
        'When the island s dormant volcano begins roaring to life, Owen and Claire mount a campaign to rescue the remaining dinosaurs from this extinction-level event.',
        '79 RON',
        'Action',
        '6.jpg'
       ),
       (
        'Incredibles 2',
        'Brad Bird',
        'Bob Parr (Mr. Incredible) is left to care for the kids while Helen (Elastigirl) is out saving the world.',
        '85 RON',
        'Animation',
        '7.jpg'
       ),
       (
        'Puzzle',
        'Marc Turtletaub',
        'Agnes, taken for granted as a suburban mother, discovers a passion for solving jigsaw puzzles which unexpectedly draws her into a new world - where her life unfolds in ways she could never have imagined.',
        '90 RON',
        'Drama',
        '8.jpg'
       ),
       (
        'Mission: Impossible - Fallout',
        'Christopher McQuarrie',
        'Ethan Hunt and his IMF team, along with some familiar allies, race against time after a mission gone wrong.',
        '96 RON',
        'Action',
        '9.jpg'
       ),
       (
        'The Darkest Minds',
        'Jennifer Yuh Nelson',
        'Imprisoned by an adult world that now fears everyone under 18, a group of teens form a resistance group to fight back and reclaim control of their future.',
        '100 RON',
        'Thriler',
        '10.jpg'
       );