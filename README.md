# Prueba Técnica Oswaldo J. Sotto

Instrucciones para correr el proyecto localmente:

Se debe clonar el repositorio con el siguiente comando en el terminal:

``` git clone https://gitlab.com/oswaldo6741032/technicaltest.git ```

Una vez descargado, puede ir al URL local donde fue instalado el proyecto y correr el siguiente comando en el terminal:
``` npm install ```
Esto va a iniciar el proceso de instalación de las dependencias del proyecto.
Una vez instaladas las dependencias, puede correr el comando:
``` npm run dev ```
y visualizar el proyecto en el siguiente URL:
``` http://localhost:3000/ ```

Documentación básica del proyecto:
Se utilizó la última versión de Next.js para crear y configurar el proyecto.

Se instaló adicionalmente una librería de manejo de estado global, “Zustand”, en su última versión hasta la fecha.

Se consideró Zustand porque es lo que uso para proyectos pequeños, ya que Context API no es lo más adecuado y Redux lo uso para proyectos más grandes y escalables. En este caso, para una prueba técnica no lo vi adecuado.

Se creó un componente para hacer scroll entre el contenido principal y el header.

Hay dos pantallas funcionales. La función principal del proyecto es hacer una recarga, por lo que el botón “Recargar cuenta” no se habilita hasta haber seleccionado algún monto o método de pago.

Si esto fuese un proyecto no de prueba, se podría implementar una librería de validación de datos y formularios, por ejemplo ‘Yup’, para hacer todas las validaciones necesarias antes de efectuar una recarga como tal.

Otra mejora sería usar TypeScript para manejar los tipos de datos manejados en la aplicación. Nuevamente, por ser un fragmento de prueba no lo vi necesario, pero para un proyecto real lo ideal sería usar TypeScript.

El tiempo aproximado invertido en el proyecto fue de 20 horas aprox.

El proyecto, luego de finalizado, fue analizado con Lighthouse para medir los estándares y los resultados (modo incógnito) fueron los siguientes:

Rendimiento: 96/100

Accesibilidad: 100/100

Mejores Prácticas: 100/100

SEO: 100/100

El bajo rendimiento se puede mejorar si en lugar de una imagen, se usa una galería real para las imágenes en la pantalla de “pago realizado correctamente”.
