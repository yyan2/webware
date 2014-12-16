webware
=======
Test LYC

MariaDB [yyan_db]> show columns in pet_info;
+----------------------+--------------+------+-----+---------+----------------+
| Field                | Type         | Null | Key | Default | Extra          |
+----------------------+--------------+------+-----+---------+----------------+
| petID                | int(11)      | NO   | PRI | NULL    | auto_increment |
| pet_name             | varchar(45)  | YES  |     | NULL    |                |
| pet_type             | varchar(45)  | YES  |     | NULL    |                |
| pet_color            | varchar(45)  | YES  |     | NULL    |                |
| pet_age              | int(3)       | YES  |     | NULL    |                |
| pet_gender           | char(1)      | YES  |     | NULL    |                |
| pet_ownerName        | varchar(45)  | YES  |     | NULL    |                |
| pet_ownerLocation    | varchar(225) | YES  |     | NULL    |                |
| pet_ownerContactInfo | varchar(225) | YES  |     | NULL    |                |
| pet_pictureURL       | varchar(225) | YES  |     | NULL    |                |
+----------------------+--------------+------+-----+---------+----------------+
This webpage has 4 top-level container objects which are div1, div2, div3 and div4. 
All 4 containers are rendered by onLoad.js in the public folder using several jade files in the view folder.
div4 is the container where the most main functions of the web service take place.
There are 4 different jade files rendered in div4 such as inputPet, inputResult, querypet and statistics.
There are 4 buttons, which correspond to 4 jade files in div4, will send a request to the server when one of them is clicked.

All jade files rendered in div4 deal with the database in the rous server.
When the server receives a certain request from the browser, it will call a function to either modify the data or get data from the database.
Javascript files which take care of the database are in the db_js folder, 
and the file, which reseive requests, call functions and send responses, is located in the route folder called index.js.


The public folder contains files which are executed by browsers or used by users such as image files, stylesheet files, javascript files, etc.
