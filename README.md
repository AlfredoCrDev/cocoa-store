# Ecommerce de Cocoa Store.

Este proyecto es un ecommerce de productos de belleza que utiliza varias librerías para facilitar el desarrollo y mejorar la experiencia del usuario. A continuación, se presentan algunas de las librerías clave utilizadas en este proyecto:

## Librerías Utilizadas

### react

Versión: 18.2.0

React es una biblioteca de JavaScript utilizada para construir interfaces de usuario interactivas y componentes reutilizables.

### @uiball/loaders

Versión: 1.3.0

La librería @uiball/loaders proporciona una colección de animaciones y efectos de carga que pueden ser fácilmente integrados en la interfaz de usuario. Estos loaders pueden añadir un toque de interactividad y profesionalismo a la experiencia del usuario mientras esperan que se cargue el contenido.

### firebase

Versión: 10.1.0

Firebase es una plataforma de desarrollo de aplicaciones móviles y web que ofrece diversas herramientas y servicios, como autenticación de usuarios, bases de datos en tiempo real, almacenamiento en la nube, y más. En este proyecto utilizamos Firestore Database para la creacion de la db con 2 colecciones:
* productos: para guardar todos los productos disponibles en la tienda
* ordenes: para guardar las ordenes de compra

### react-router-dom

Versión: 6.14.1

React Router es una librería de enrutamiento utilizada en aplicaciones React para gestionar las rutas y la navegación entre diferentes vistas. La versión react-router-dom es específica para aplicaciones web y proporciona herramientas para crear rutas y manejar la navegación en el navegador.

### tailwindcss

Versión: 3.3.3

Marco de diseño CSS que ofrece clases utilitarias configurables para acelerar el diseño de interfaces.

### react-toastify

Versión: 9.1.3

React Toastify es una librería que simplifica la creación de notificaciones estilo "toasts" en las aplicaciones React. Las notificaciones toast son útiles para mostrar mensajes de éxito, advertencia o error de una manera no intrusiva para el usuario.

## Creado con Vite

Este proyecto fue creado utilizando Vite, un sistema de construcción y desarrollo rápido para aplicaciones web. Vite se caracteriza por su velocidad y eficiencia al utilizar ES modules nativos del navegador durante el desarrollo, lo que permite una experiencia de desarrollo fluida y un tiempo de inicio rápido.

## Instalación y Ejecución

1. Clonar este repositorio en tu máquina local.

2. Abre la terminal y navega hasta el directorio del proyecto.

3. Instala las dependencias utilizando el siguiente comando:

   ```bash
   npm install

4. Una vez instaladas las dependencias utilizar el siguiente comando:
    ```bash
    npm run dev

## Demo

* [Video demo](https://imgur.com/a/RKpcrhF)
* [deploy](https://cocoa-store.vercel.app/)
