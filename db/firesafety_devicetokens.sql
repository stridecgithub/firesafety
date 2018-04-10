-- phpMyAdmin SQL Dump
-- version 4.4.15.9
-- https://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Apr 10, 2018 at 06:34 PM
-- Server version: 10.1.21-MariaDB
-- PHP Version: 5.6.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `denyodev1`
--

-- --------------------------------------------------------

--
-- Table structure for table `firesafety_devicetokens`
--

CREATE TABLE IF NOT EXISTS `firesafety_devicetokens` (
  `device_token_id` int(11) NOT NULL,
  `deviceid` text NOT NULL,
  `onoffsettings` int(11) NOT NULL,
  `walkthrough` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `firesafety_devicetokens`
--
ALTER TABLE `firesafety_devicetokens`
  ADD PRIMARY KEY (`device_token_id`),
  ADD KEY `staffid` (`onoffsettings`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `firesafety_devicetokens`
--
ALTER TABLE `firesafety_devicetokens`
  MODIFY `device_token_id` int(11) NOT NULL AUTO_INCREMENT;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
