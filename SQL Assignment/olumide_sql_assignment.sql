CREATE TABLE CovenatStudents(
	id INTEGER PRIMARY KEY,
	name VARCHAR(50),
	matric_no VARCHAR(20) NOT NULL UNIQUE,
	gender VARCHAR(8)
)

INSERT INTO students (id, name, matric_no, gender) 
VALUES (1, 'Ayoola Olumide', '21CJ029191', 'Male'),
	(2, 'Egere Joshua', '21CJ029199', 'Male'),
	(3, 'Ayoola Oreofe', '21CJ029192', 'Female'),
	(4, 'Favour Divine', '23CJ029655', 'Female'),
	(5, 'Salewa Edun', '19CJ029876', 'Female'),
	(6, 'Kingsly Kolawole', '22BC029633', 'Male'),
	(7, 'Ogunmepon Jide', '21AF029888', 'Male'),
	(8, 'Tise Aboloma', '23CF028754', 'Female'),
	(9, 'Maxinne Sandro', '22CG028765', 'Female'),
	(10, 'Martins Okporo', '18CK027634', 'Male');