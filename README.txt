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
