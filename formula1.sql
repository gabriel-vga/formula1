CREATE TABLE IF NOT EXISTS `pilotos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(60) NOT NULL,
  `equipe` varchar(25) NOT NULL,
  `datanasc` date NOT NULL,
  `sexo` varchar(9) NOT NULL,
  `ncarro` INT NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
