# Invitaciones Misteriosas

Tu fiesta empieza en el momento que mandas las invitaciones. Tus invitados van a decidir ir o no ir según el contenido de tu invitación. Por eso, necesitas que el diseño sea lo más divertido posible. Dile adios a las invitaciones aburridas y dale un toque de misterio para crear un juego divertido entre tu y tus invitados.

## Objetivo

- Crear una web que permita al usuario personalizar sus propias invitaciones de     cumpleaños digitales
- Crear una experiencia online positiva, ayudadando a salvar arboles, ahorrar       tiempo y dinero cuando estas planeando una fiesta
- Que esta experiencia tenga un plus en comparacion con las web´s actuales del      mismo ambito generando un juego entre los invitados y su anfitron al permitir     enviar mensajes cifrados en su invitación.

## Definición del producto

La web permite al usuario crear invitaciones digitales personalizadas y agregarles la direccion en un mensaje cifrado para crear un juego entre los invitados y el usuario en el que la web sea la interfaz para decifrar el mensaje. Brinda la opcion de enviar por correo electronico, whatsapp o messenger ahorrando tiempo y dando alcance a todos sus amigos y conocidos. 

## Definicion del usuario

Dirigido a Usuarios que esten planeando una fiesta de cumpleaños y gusten del mundo digital, asi como formar parte de la cultura "paperless".

Se realiza [Encuesta](https://docs.google.com/forms/d/112LpHx_mkxxecc6kCdOZkA4tXOzc0KIMVkED0YODfbQ/edit#responses) para asegurar utilidad en las actuales generaciones. 


## ¿Como funciona?

Cifrar significa codificar. Este web utiliza el [cifrado César](https://en.wikipedia.org/wiki/Caesar_cipher), el cual es uno de los primeros métodos de cifrado conocidos. El emperador romano Julio César lo usaba para enviar órdenes secretas a sus generales en los campos de batalla.

![caeser-cipher](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Caesar3.svg/2000px-Caesar3.svg.png)

El cifrado césar es una de las técnicas más simples para cifrar un mensaje. Es un tipo de cifrado por sustitución, es decir que cada letra del texto original es reemplazada por otra que se encuentra un número fijo de posiciones (desplazamiento) más adelante en el mismo alfabeto.

Por ejemplo, si usamos un desplazamiento (_offset_) de 3 posiciones:

- La letra A se cifra como D.
- La palabra CASA se cifra como FDVD.
- Alfabeto sin cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
- Alfabeto cifrado: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C

Se tienen 2 opciones principalmente:

1.- Si es el Festejado, debe crear la invitacion de acuerdo a su gusto y posteriormente ingresar la direccion donde sera el evento y elegir la llave secreta(_offset_) para cifrarla, una vez que haya finalizado puede enviarla a travez de los medios digitales de comunicacion mas conocidos actualmente (WhatsApp, MSN, Correo).

2.- Si eres el invitado, al recibir tu invitacion debes ingresar a la web para poder decifrar el mensaje y poder descubrir la direccion del evento.

## Interfaz de usuario (UI)


### ¿Cómo puedo descargar, instalar y ejecutar este proyecto?

Para descargar e instalar
- Forkea este repositorio y clonalo en tu equipo
- Necesitas un editor de texto y debes tener instalado Node, npm y la libreria Mocha para poder correr los test con la      terminal de tu equipo 

Para ejecutar el Proyecto puedes solo da click [Aquí](https://blank-tech.github.io/Cifrado-Cesar/src/index.html) o copia esta liga en tu navegador:

https://blank-tech.github.io/Cifrado-Cesar/src/index.html


### Modelo de Negocio

Este Proyecto puede generar ganancias con espacios publicitarios dentro de la web que nos solo seran vistos por el que accede al servicio de las invitaciones, si no que además anima a ingresar a todos los invitados a quienes se envíe si es que desean acudir al evento, también puede considerarse que para acceder a mejores plantillas o funcionalidades para crear una invitacion mas personalizada se genere un costo.