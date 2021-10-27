Visión general
¡Gracias por postularse a Tekal! El propósito de esta prueba es evaluar sus habilidades técnicas en
tareas a las que se enfrentan los desarrolladores de Tekal todos los días.
Actualmente estamos desarrollando herramientas basadas en modelos de IA para evaluar el impacto cognitivo de
videos e imágenes. Estas herramientas requieren una excelente experiencia de usuario para ser atractivas para nuestros
clientela. Nuestro producto principal se ofrece a través de un tablero donde los usuarios pueden cargar sus
activos y analizar métricas de memorabilidad y prominencia.
La tarea: En esta prueba, te proponemos que desarrolles una herramienta de visualización que ayude a los usuarios
extraer información de un conjunto de archivos. Le proporcionaremos solo los datos necesarios para ser
desplegado. Pondremos a prueba su capacidad para proporcionar una experiencia de usuario de alta calidad que se base en
colas visuales. ¡Ser creativo!
Fecha límite: la tarea vence el 1 de noviembre a las 23.59 p.m. EST. Durante la semana, estaremos en
su disposición en caso de que tenga alguna pregunta!
Evaluación: el código debe estar bien documentado y organizado para ser evaluado correctamente. Nosotros
recomiendo usar formateadores de código como Prettier. Tendremos en cuenta las opciones de diseño.
incluyendo la interfaz gráfica de usuario, la experiencia del usuario y la usabilidad general del
herramienta.
Entrega: esperamos un enlace a una aplicación implementada en una plataforma de alojamiento (como Heroku o
cualquier servicio similar disponible) y acceso a su código a través de un repositorio privado en Github.
El repositorio debe compartirse con los usuarios tekal-ai, cfosco, JHevia23 y
valentintorres02. Además, debe tener un README.md explicando el proyecto y dando
información sobre cómo configurarlo. Este archivo puede describir las diferentes decisiones tomadas durante el
desarrollo de aplicaciones.
Preguntas: si tiene alguna pregunta, envíe un correo electrónico a camilo@tekal.ai y juan.hevia@tekal.ai
con el asunto del correo electrónico "Preguntas de prueba técnica - Desarrollador front-end".
Recursos: todos los recursos de imagen que necesitará para realizar esta prueba se pueden encontrar en
llamando a una solicitud GET al siguiente punto final.
Tecnologías preferidas
● React v17.0 o superior.
● Redux v4.0 o superior.
● Marco / biblioteca de estilos (Bootstrap, Tailwind, Material UI, SASS, etc.)

Para esta tarea, extraerá datos de un punto final para alimentar una visualización
interfaz. La herramienta debería facilitar a cualquier usuario la navegación a través de un conjunto de imágenes y
videos, al tiempo que presenta información importante sobre el archivo seleccionado de una manera limpia.
Para cualquier archivo dado, el punto final devolverá una serie de puntajes relacionados con su memorabilidad (el
capacidad de un humano para recordar el archivo) y la prominencia del texto (la capacidad del texto de una imagen para
destacan en comparación con el resto de la imagen). En el caso de los videos, encontrará lo mismo
puntuaciones calculadas para cada fotograma, así como promedios de todos los fotogramas. Además, serás
concedido acceso al archivo multimedia, con el fin de acceder a los metadatos sobre sus dimensiones u otros
características que considere relevantes (duración del video, nombre de archivo, etc.).
Como línea de base, la herramienta debe permitir al usuario:

- Cambiar entre archivos disponibles a través del punto final
- Ver las métricas de cada archivo de forma ordenada
- Vea visualizaciones atractivas de las métricas del archivo.
- Comparar las métricas de un archivo con las comparativas de toda la población.
  Centrarse en la experiencia del usuario y el diseño son partes esenciales de esta evaluación, por lo que
  Recomendamos prestar atención al recorrido del usuario, junto con las colas visuales y cualquier
  funcionalidad que ayuda a lograr una navegación sin fricciones.
  Recursos
  Este enlace apunta a un punto final a través del cual obtendrá toda la información necesaria para
  realizar la prueba. En él encontrarás:
- url_original: un enlace de activos que lo dirigirá al archivo original
- perc*score* \*: la puntuación de memorabilidad de la imagen. En el caso de los videos, la media
  puntuación de memorabilidad calculada en todos los fotogramas. Esta puntuación se calcula para 3 modelos
  (m1, m2, m3)
- perc*scores* \*: la puntuación de memorabilidad para cada fotograma en un video, presentado como una lista
  de puntuaciones. En el caso de imágenes este campo será nulo.
- altura: la altura del archivo en píxeles.
- ancho: el ancho del archivo en píxeles.
- duración: la duración del video en segundos.
- fps: los fotogramas por segundo del video.
