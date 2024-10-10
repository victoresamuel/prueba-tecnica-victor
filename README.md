## INSTALACION

- Utilizar el comando git clone en la terminal

```js
git clone https://github.com/victoresamuel/prueba-tecnica-victor.git
```

- Ingresar al directorio "prueba-tecnica-victor"

- Ejecutar el comando:

```js
pnpm i
```
o
```js
npm i
```

## EJECUCION

- Ejecutar el comando:

```js
pnpm run dev
```
o

```js
npm run dev
```

- Abrir otra instancia de la terminal y ejecutar el comando:

```js
npx json-server db.json
```

- Ingresar a la URL: http://localhost:5173/ o la url que arroje la terminal al momento de ejecutar el comando "pnpm run dev"

## DOCUMENTACION

- La arquitectura de la aplicacion esta basada en paginas, lo que quiere decir que existe un componente completo para cada pagina, estos componentes se encuentran dentro de la carpeta "pages"

- Dentro de la carpeta "components" se encuentran algunos componentes reutilizables para cada una de las paginas, por ahora aqui se encuentran los componentes de los graficos del panel admin.

- En el archivo "data.ts" se guarda informacion estatica de utilidad como por ejemplo un arreglo con todos los estados del pais y un arreglo con todas las especialidades disponibles.

- El manejo de rutas esta hecho con la biblioteca "React Router", dentro del archivo "main.tsx" se pueden ver todas las rutas disponibles.

- En el archivo "chartData.ts" se encuentra toda la data para alimentar los graficos, esta data es ficticia por lo que de momento no muestra la informacion real de la base de datos de la aplicacion.

- La aplicacion de momento no cuenta con autentificacion de usuario por lo que se puede acceder a todas las rutas ingresando la url en el navevegador
