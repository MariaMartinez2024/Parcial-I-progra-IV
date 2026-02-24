

# martinez2026
Este repositorio es para la entrega del parcial I de programacion IV


situacion problematica
 Sistema de registro de tareas estudiantiles


Situación:
Muchos estudiantes olvidan sus tareas o no llevan un control organizado. Esto provoca entregas tardías y bajo rendimiento 
académico.


Solución:
Crear una página web donde el estudiante pueda agregar tareas, seleccionar prioridad y verlas en pantalla sin recargar.


Sector enfocado:
Sector educativo (estudiantes, escuelas, universidades).


## 1. ¿Qué valor agregado tiene el uso de WebComponents a su proyecto?


El uso de WebComponents permite crear elementos personalizados reutilizables, como el componente `<task-item>` que se utilizó 
para mostrar cada tarea. Esto facilita la organización del código, mejora la estructura del programa y permite reutilizar el 
componente en otras partes del proyecto sin necesidad de repetir código. Además, hace que el sistema sea más moderno y fácil de 
mantener.


---


## 2. ¿De qué forma manipularon los datos sin recargar la página?


Se utilizó JavaScript con el evento `submit` del formulario y el método `appendChild()` para agregar dinámicamente las tareas al 
DOM. También se utilizó `preventDefault()` para evitar que la página se recargue. De esta forma, los datos se muestran 
inmediatamente en pantalla sin necesidad de actualizar la página.


---


## 3. ¿De qué forma validaron las entradas de datos? Expliquen brevemente


Se utilizó una estructura condicional `if` en JavaScript para verificar que los campos de texto y selección no estén vacíos. Si 
alguno está vacío, se muestra un mensaje con `alert()` y no se permite agregar la tarea. Esto asegura que solo se ingresen datos 
válidos al sistema.


Ejemplo usado en el código:


```javascript
if(task === "" || priority === ""){
    alert("Debe completar todos los campos");
    return;
}
```


---


## 4. ¿Cómo manejaría la escalabilidad futura en su página?


Para mejorar la escalabilidad, se podría conectar la aplicación a una base de datos para guardar las tareas permanentemente. 
También se podrían agregar nuevas funciones como editar tareas, guardar usuarios, filtrar tareas por prioridad y usar 
almacenamiento local (localStorage) o un servidor con API. Además, el uso de WebComponents facilita agregar nuevas 
funcionalidades sin afectar el resto del sistema.
