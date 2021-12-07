-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2021. Dec 02. 11:37
-- Kiszolgáló verziója: 10.4.6-MariaDB
-- PHP verzió: 7.3.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `anyagok`
--
CREATE DATABASE IF NOT EXISTS `anyagok` DEFAULT CHARACTER SET utf8 COLLATE utf8_hungarian_ci;
USE `anyagok`;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `anyag`
--

CREATE TABLE `anyag` (
  `anyag_id` int(11) NOT NULL,
  `anyag_nevesmeret` varchar(100) COLLATE utf8_hungarian_ci NOT NULL,
  `anyag_mennyiseg` int(11) NOT NULL,
  `anyag_ar` int(11) NOT NULL,
  `anyag_rendelő` varchar(50) COLLATE utf8_hungarian_ci NOT NULL,
  `anyag_kep` varchar(255) COLLATE utf8_hungarian_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `anyag`
--

INSERT INTO `anyag` (`anyag_id`, `anyag_nevesmeret`, `anyag_mennyiseg`, `anyag_ar`, `anyag_rendelő`, `anyag_kep`) VALUES
(1, 'Gerenda 200x60', 3, 60000, 'József István', 'gerenda.jpg'),
(2, 'Léc 400x20', 20, 30000, 'Ádám Éva', 'léc.jpg'),
(3, 'Deszka 300x20', 5, 40000, 'Papp Bálint', 'deszka.jpg'),
(4, 'Dísztégla 30x15', 200, 50000, 'Antal Mária', 'dísztégla.jpg');

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `anyag`
--
ALTER TABLE `anyag`
  ADD PRIMARY KEY (`anyag_id`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `anyag`
--
ALTER TABLE `anyag`
  MODIFY `anyag_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
