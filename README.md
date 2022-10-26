# BarcosWeb

PRIMER APARTADO
<hr>

Vamos a crear un proyecto de Angular denominado: barcos.
1. Para los datos crearemos un mock con los siquientes datos: un array de barcos de la armada española (id -me lo invento-, nombre, tipo, imagen)
2. Crearemos un componente que mostrará la lista de los barcos.
3. Crearemos un componente que mostrará el detalle del barco seleccionado
El componente detalle recibirá los datos del barco con el decorador @input....

<hr>
SEGUNDO APARTADO
<hr>

Modificar el proyecto de la armada para que al hacer clic en un barco de la lista, se muestre sólo el componente de detalle. Para ello, habrá que modificar el componente de detalle, configurar las rutas en el módulo de rutas, y usar <app-router-outlet> donde corresponda.
Requisito previo sería crear el servicio (buques) que se encargue de 
1) Enviar la lista completa (getBarcos)
2) Enviar el barco seleccionado (getBarco)

<hr>
