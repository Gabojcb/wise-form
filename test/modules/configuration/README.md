# **Configuración de Formularios con WiseForm**

## Ruta de Implementación: `test\modules\configuration`

### Estructura del Proyecto

El componente WiseForm se encuentra implementado dentro de la carpeta `configuration`. A continuación, se detalla la estructura de esta implementación:

- **Carpeta `ts`:**
    - `form`: Contiene formularios en formato JSON que se pasan al WiseForm para construir la estructura del formulario.
    - `interfaces`: Archivos que definen las interfaces utilizadas.
    - `views`:
        - `aside`: Barra lateral con botones para cambiar entre formularios.
        - `components`: Componentes especiales creados para ser utilizados por el WiseForm y construir la estructura de los formularios y sus casos.

- **Carpeta `scss`:**
    Contiene todos los estilos utilizados en la implementación.

### Formularios

Se han creado 5 formularios distintos, cada uno con su función específica:

1. **`Formulario para Formularios:`**
    - Permite la creación de otros formularios. Los usuarios pueden agregar el nombre del formulario, una lista de campos a configurar y guardar los datos para pasar al siguiente formulario. Los campos especificados en el textarea se guardan mediante LocalStorage, y el siguiente formulario consulta y valida la existencia de estos datos.

2. **`Formulario para Campos:`**
    - Recibe los campos ingresados en el formulario anterior y muestra una lista de inputs. Los usuarios pueden agregar valores para configurar estos campos, así como seleccionar el tipo de fórmula deseado para el formulario. Al elegir una opción y hacer clic en "Siguiente", se pasa al formulario correspondiente al tipo de fórmula seleccionado.

3. **`Formulario de Fórmulas Simples:`**
    - Permite cálculos directos sin condiciones. Está compuesto por un input para la fórmula y otro para el nombre.

4. **`Formulario para Fórmulas con Condiciones en Múltiples Campos`:**
    - Diseñado para aplicar fórmulas específicas bajo ciertas condiciones. Los usuarios pueden agregar la fórmula, su nombre y condiciones para asociarla a múltiples campos, así como agregar otras condiciones.

5. **`Formulario para Fórmulas Condicionales Basadas en el Valor de un Campo`:**
    - Ideal para lógicas que requieren evaluación condicional. Consiste en un input para el nombre de la fórmula y un botón para agregar múltiples condiciones, donde se especifica el campo a evaluar y sus fórmulas correspondientes.

Esta estructura modular y los diversos tipos de formularios ofrecen flexibilidad y sencilles a la hora de crear formularios de una manera mas optima y capaz de solventar la problematica de crear formulario a mano.
