# TaskTest
# Evaluación de Habilidades en Angular 16: Gestión de Tareas Pendientes

Este proyecto es una aplicación de gestión de tareas pendientes (To-Do List) desarrollada con Angular 16, creada como parte de una evaluación de habilidades.

## Instrucciones

1.  Asegúrate de tener Node.js y npm instalados en tu sistema.
2.  Clona este repositorio: `git clone https://github.com/Rick6dev/app-test-task.git`
3.  Instala las dependencias: `npm install`
4.  Ejecuta la aplicación: `ng serve --open`

## Funcionalidades

* **Listado de Tareas:**
    * Muestra una lista de tareas con su título y estado (completada o pendiente).
    * Componente: `TaskListComponent`.
* **Agregar Nueva Tarea:**
    * Formulario para agregar nuevas tareas con validación del título (requerido).
    * Componente: `AddTaskComponent`.
* **Editar Estado de Tarea:**
    * Botón para alternar el estado de cada tarea entre pendiente y completada.
* **Filtrar Tareas:**
    * Filtro para mostrar tareas completadas, pendientes o todas.
    * Directiva o servicio de filtro.
* **Uso de Servicios:**
    * Servicio `TaskService` para operaciones CRUD (crear, leer, actualizar, borrar).
    * Almacenamiento temporal de datos en memoria.
* **Manejo de Rutas:**
    * Rutas:
        * `/tasks`: Listado de tareas.
        * `/add-task`: Formulario para agregar tareas.
* **Estilo:**
    * Se utiliza CSS  para una interfaz visualmente atractiva.

## Estructura del Proyecto