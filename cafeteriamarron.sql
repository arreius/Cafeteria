-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 17-03-2021 a las 03:09:05
-- Versión del servidor: 10.4.14-MariaDB
-- Versión de PHP: 7.4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `cafeteriamarron`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoria`
--

CREATE TABLE `categoria` (
  `idCategoria` int(11) NOT NULL,
  `nombreCategoria` varchar(25) NOT NULL,
  `descripcionCategoria` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `categoria`
--

INSERT INTO `categoria` (`idCategoria`, `nombreCategoria`, `descripcionCategoria`) VALUES
(1, 'Café', 'Bebidas con café o sabor café'),
(2, 'Pastel', 'Pasteles horneados de manera artesanal en nuestra cafeteria '),
(3, 'Bebidas Frias', 'Bebidas frias de distintos tipos'),
(4, 'Bebidas calientes', 'Bebidas calientes que no contienen café'),
(5, 'Platos Fuertes', 'Platos principales'),
(6, 'Extras', 'Añadidos');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `contacto`
--

CREATE TABLE `contacto` (
  `idContacto` int(11) NOT NULL,
  `nombreContacto` varchar(50) NOT NULL,
  `numeroContacto` int(8) NOT NULL,
  `mailContacto` varchar(50) NOT NULL,
  `mensajeContacto` longtext NOT NULL,
  `contactado` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `contacto`
--

INSERT INTO `contacto` (`idContacto`, `nombreContacto`, `numeroContacto`, `mailContacto`, `mensajeContacto`, `contactado`) VALUES
(1, 'Prueba', 9797979, 'prueba@prueba.com', 'esta es una prueba del contacto!', 1),
(6, 'Miguel', 646464, 'miguel@miguel.com', 'esta es una prueba de contacto!', 1),
(7, 'Luis Arrecis ', 97987, 'luisarrecis2@gmail.com', 'Prueba de contacto', 1),
(8, 'Prueba en video', 9797, 'prueba@prueba.com', 'Esta es una prueba', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detalle`
--

CREATE TABLE `detalle` (
  `idDetalle` int(11) NOT NULL,
  `numFactura` int(11) NOT NULL,
  `idProducto` int(11) NOT NULL,
  `cantidad` int(4) NOT NULL,
  `precio` decimal(6,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `detalle`
--

INSERT INTO `detalle` (`idDetalle`, `numFactura`, `idProducto`, `cantidad`, `precio`) VALUES
(1, 23, 2, 1, '15.00'),
(1, 24, 1, 1, '12.00'),
(1, 25, 1, 1, '12.00'),
(1, 26, 7, 1, '15.00'),
(1, 30, 1, 1, '12.00'),
(1, 31, 1, 1, '12.00'),
(1, 32, 1, 1, '12.00'),
(1, 33, 2, 1, '15.00'),
(1, 34, 1, 3, '12.00'),
(1, 35, 1, 1, '12.00'),
(1, 36, 1, 1, '12.00'),
(1, 37, 1, 1, '12.00'),
(1, 38, 1, 1, '12.00'),
(1, 39, 1, 1, '12.00'),
(1, 40, 1, 1, '12.00'),
(1, 41, 1, 1, '12.00'),
(1, 42, 1, 1, '12.00'),
(1, 43, 1, 1, '12.00'),
(1, 44, 1, 1, '12.00'),
(1, 45, 1, 1, '12.00'),
(1, 46, 1, 1, '12.00'),
(1, 47, 1, 1, '12.00'),
(1, 48, 1, 1, '12.00'),
(1, 49, 1, 1, '12.00'),
(1, 50, 1, 1, '12.00'),
(1, 51, 1, 1, '12.00'),
(1, 52, 1, 1, '12.00'),
(1, 53, 1, 1, '12.00'),
(1, 54, 1, 1, '12.00'),
(1, 55, 6, 3, '120.00'),
(1, 56, 1, 1, '12.00'),
(1, 57, 1, 1, '12.00'),
(1, 58, 1, 1, '12.00'),
(1, 60, 1, 1, '12.00'),
(1, 61, 1, 1, '12.00'),
(1, 62, 1, 1, '12.00'),
(1, 63, 1, 1, '12.00'),
(1, 64, 1, 3, '12.00'),
(1, 65, 1, 1, '12.00'),
(1, 66, 1, 1, '12.00'),
(1, 67, 1, 2, '12.00'),
(1, 68, 1, 8, '12.00'),
(1, 69, 6, 4, '120.00'),
(1, 70, 1, 1, '12.00'),
(2, 23, 1, 1, '12.00'),
(2, 24, 2, 1, '15.00'),
(2, 25, 2, 1, '15.00'),
(2, 26, 5, 1, '30.50'),
(2, 30, 2, 1, '15.00'),
(2, 32, 2, 1, '15.00'),
(2, 33, 1, 2, '12.00'),
(2, 34, 2, 5, '15.00'),
(2, 35, 2, 1, '15.00'),
(2, 37, 2, 1, '15.00'),
(2, 38, 2, 1, '15.00'),
(2, 39, 2, 1, '15.00'),
(2, 40, 2, 1, '15.00'),
(2, 43, 2, 1, '15.00'),
(2, 44, 2, 1, '15.00'),
(2, 45, 2, 1, '15.00'),
(2, 50, 2, 1, '15.00'),
(2, 57, 2, 1, '15.00'),
(2, 58, 2, 1, '15.00'),
(2, 60, 2, 1, '15.00'),
(2, 62, 2, 1, '15.00'),
(2, 63, 2, 1, '15.00'),
(2, 64, 2, 2, '15.00'),
(2, 65, 2, 1, '15.00'),
(2, 66, 2, 2, '15.00'),
(2, 67, 2, 5, '15.00'),
(2, 68, 2, 2, '15.00'),
(2, 69, 8, 3, '110.50'),
(2, 70, 2, 1, '15.00'),
(3, 24, 7, 1, '15.00'),
(3, 25, 7, 1, '15.00'),
(3, 26, 6, 1, '120.00'),
(3, 32, 7, 1, '15.00'),
(3, 33, 7, 1, '15.00'),
(3, 34, 7, 3, '15.00'),
(3, 35, 7, 1, '15.00'),
(3, 37, 7, 1, '15.00'),
(3, 38, 7, 1, '15.00'),
(3, 40, 7, 1, '15.00'),
(3, 60, 7, 1, '15.00'),
(3, 67, 15, 4, '25.00'),
(3, 68, 10, 2, '18.00'),
(3, 69, 11, 3, '15.00'),
(4, 25, 5, 1, '30.50'),
(4, 32, 5, 3, '30.50'),
(4, 33, 5, 6, '30.50'),
(4, 34, 5, 4, '30.50'),
(4, 35, 5, 1, '30.50'),
(4, 37, 5, 1, '30.50'),
(4, 67, 18, 2, '15.00'),
(4, 68, 7, 2, '15.00'),
(4, 69, 5, 3, '30.50'),
(5, 25, 6, 4, '120.00'),
(5, 32, 6, 3, '120.00'),
(5, 33, 6, 7, '120.00'),
(5, 34, 6, 2, '120.00'),
(5, 67, 19, 2, '15.00'),
(5, 68, 17, 2, '10.00'),
(5, 69, 17, 3, '10.00'),
(6, 67, 13, 3, '18.00'),
(6, 68, 18, 2, '15.00'),
(6, 69, 1, 1, '12.00'),
(7, 67, 6, 2, '120.00'),
(7, 68, 19, 2, '15.00'),
(8, 67, 11, 2, '15.00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `factura`
--

CREATE TABLE `factura` (
  `idFactura` int(11) NOT NULL,
  `idUsuario` int(11) NOT NULL,
  `fechaCompra` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `factura`
--

INSERT INTO `factura` (`idFactura`, `idUsuario`, `fechaCompra`) VALUES
(23, 1, '2021-03-10 21:29:23'),
(24, 1, '2021-03-11 13:49:40'),
(25, 1, '2021-03-11 13:53:28'),
(26, 2, '2021-03-11 13:58:23'),
(30, 1, '2021-03-11 14:19:16'),
(31, 1, '2021-03-11 15:05:32'),
(32, 1, '2021-03-11 15:34:44'),
(33, 1, '2021-03-11 15:37:27'),
(34, 1, '2021-03-11 15:48:54'),
(35, 1, '2021-03-11 15:52:58'),
(36, 2, '2021-03-11 16:03:38'),
(37, 2, '2021-03-11 16:07:18'),
(38, 1, '2021-03-11 17:28:02'),
(39, 1, '2021-03-11 18:34:16'),
(40, 1, '2021-03-11 18:36:19'),
(41, 1, '2021-03-11 18:46:24'),
(42, 1, '2021-03-11 18:54:00'),
(43, 1, '2021-03-11 19:25:58'),
(44, 1, '2021-03-11 19:30:35'),
(45, 1, '2021-03-11 19:51:33'),
(46, 1, '2021-03-11 19:58:44'),
(47, 1, '2021-03-11 20:10:33'),
(48, 1, '2021-03-11 20:12:41'),
(49, 1, '2021-03-11 20:29:08'),
(50, 1, '2021-03-11 20:31:16'),
(51, 1, '2021-03-11 20:32:28'),
(52, 1, '2021-03-11 20:41:33'),
(53, 1, '2021-03-11 20:41:44'),
(54, 1, '2021-03-11 20:41:44'),
(55, 1, '2021-03-11 20:43:31'),
(56, 1, '2021-03-11 20:45:19'),
(57, 1, '2021-03-11 20:46:25'),
(58, 1, '2021-03-11 20:48:06'),
(59, 1, '2021-03-11 20:52:28'),
(60, 1, '2021-03-11 20:56:29'),
(61, 1, '2021-03-11 21:08:52'),
(62, 1, '2021-03-11 21:19:30'),
(63, 1, '2021-03-11 21:20:31'),
(64, 3, '2021-03-13 20:35:22'),
(65, 3, '2021-03-14 18:07:16'),
(66, 2, '2021-03-14 23:38:42'),
(67, 3, '2021-03-15 21:54:35'),
(68, 3, '2021-03-16 19:44:23'),
(69, 3, '2021-03-16 19:52:52'),
(70, 3, '2021-03-16 19:53:23');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `producto`
--

CREATE TABLE `producto` (
  `idProducto` int(11) NOT NULL,
  `nombreProducto` varchar(30) NOT NULL,
  `descripcion` longtext NOT NULL,
  `precio` decimal(6,2) NOT NULL,
  `stock` int(3) NOT NULL,
  `idCategoria` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `producto`
--

INSERT INTO `producto` (`idProducto`, `nombreProducto`, `descripcion`, `precio`, `stock`, `idCategoria`) VALUES
(1, 'Café Negro', 'Taza de café negro con azúcar al gusto', '12.00', 1000, 1),
(2, 'Expresso', 'Café expresso', '15.00', 1000, 1),
(5, 'Smootie', 'Delicioso smootie de fresa', '30.50', 1000, 3),
(6, 'Cane Asada', 'Una carnita asada la legendaria', '120.00', 30, 5),
(7, 'Pie de queso', 'Delicioso pie de queso si señor', '15.00', 50, 2),
(8, 'Tacos de Pastor', 'Ricos tacos de pastor', '110.50', 30, 5),
(10, 'Pie de piña', 'Invertido de piña', '18.00', 50, 2),
(11, 'Papas Fritas', 'Deliciosa porción de papas fritas', '15.00', 50, 6),
(12, 'cheesecake', 'Delicioso cheesecake', '50.50', 60, 2),
(13, 'Chocolate', 'Taza de chocolate calientito', '18.00', 500, 4),
(14, 'Té de manzanilla', 'Relajante té de manzanilla', '10.10', 500, 4),
(15, 'Cold Brew', 'Café infusionado por 20 horas. Intenso y refrescante ¡Pruébalo!', '25.00', 300, 1),
(16, 'Teavana', 'Hemos tenido una pasión por el té, con los años, nuestro amor para él ha seguido creciendo, lo que nos ha llevado a Teavana', '20.50', 300, 4),
(17, 'Dona de Chocolate', 'Dona de chocolate', '10.00', 30, 2),
(18, 'Rollo de Canela', 'Rollo de canela', '15.00', 300, 2),
(19, 'Limonada', 'Deliciosa limonada', '15.00', 300, 3),
(20, 'Pastel de fresa', 'Rico pastel de fresa', '20.00', 30, 2),
(21, 'Pastel de milhojas', 'Rico pastel de milhojas', '25.00', 30, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `idUsuario` int(11) NOT NULL,
  `nombrePersonal` varchar(40) NOT NULL,
  `nombreUsuario` varchar(10) NOT NULL,
  `contraseña` varchar(15) NOT NULL,
  `direccion` varchar(60) NOT NULL,
  `tipoUsuario` varchar(20) NOT NULL,
  `telefono` int(8) NOT NULL,
  `email` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`idUsuario`, `nombrePersonal`, `nombreUsuario`, `contraseña`, `direccion`, `tipoUsuario`, `telefono`, `email`) VALUES
(1, 'Jefe Jefón', 'Jefe', 'Jefe', 'La casa del Jefe', 'Master', 57789121, 'jefe@asombroso.com'),
(2, 'Henry De León', 'henry96', 'henry69', 'Villa Nueva', 'Empleado', 33286517, 'henry@asombroso.com'),
(3, 'Iram ', 'Beater', 'Beater', 'Las lomas de gente rica', 'Cliente', 42564063, 'iram@clientes.com'),
(19, 'Antonio Arrecis', 'LARRECIS', '123', '123', 'Cliente', 6464, 'prueba@video.com');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categoria`
--
ALTER TABLE `categoria`
  ADD PRIMARY KEY (`idCategoria`);

--
-- Indices de la tabla `contacto`
--
ALTER TABLE `contacto`
  ADD PRIMARY KEY (`idContacto`);

--
-- Indices de la tabla `detalle`
--
ALTER TABLE `detalle`
  ADD PRIMARY KEY (`idDetalle`,`numFactura`),
  ADD KEY `numFactura` (`numFactura`,`idProducto`),
  ADD KEY `idProducto` (`idProducto`);

--
-- Indices de la tabla `factura`
--
ALTER TABLE `factura`
  ADD PRIMARY KEY (`idFactura`),
  ADD KEY `idUsuario` (`idUsuario`);

--
-- Indices de la tabla `producto`
--
ALTER TABLE `producto`
  ADD PRIMARY KEY (`idProducto`),
  ADD KEY `idCategoria` (`idCategoria`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`idUsuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categoria`
--
ALTER TABLE `categoria`
  MODIFY `idCategoria` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `contacto`
--
ALTER TABLE `contacto`
  MODIFY `idContacto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `factura`
--
ALTER TABLE `factura`
  MODIFY `idFactura` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=71;

--
-- AUTO_INCREMENT de la tabla `producto`
--
ALTER TABLE `producto`
  MODIFY `idProducto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `idUsuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `detalle`
--
ALTER TABLE `detalle`
  ADD CONSTRAINT `detalle_ibfk_1` FOREIGN KEY (`numFactura`) REFERENCES `factura` (`idFactura`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `detalle_ibfk_2` FOREIGN KEY (`idProducto`) REFERENCES `producto` (`idProducto`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `factura`
--
ALTER TABLE `factura`
  ADD CONSTRAINT `factura_ibfk_1` FOREIGN KEY (`idUsuario`) REFERENCES `usuarios` (`idUsuario`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `producto`
--
ALTER TABLE `producto`
  ADD CONSTRAINT `producto_ibfk_1` FOREIGN KEY (`idCategoria`) REFERENCES `categoria` (`idCategoria`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
