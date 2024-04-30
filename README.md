# No olvidar

Crear un .env con DATABASE_URL=urlDeConexion

# Generar tus modelos para prisma en javascript

Este comando es importante ya que podrá generar el javascript para que puedas realizar las consultas sql a traves de los métodos que ofrece prisma.

```bash
  npx prisma generate
```

# Prisma podrá crear modelos a traves de tu base de datos

```bash
  npx prisma db pull 
```

# Archivo ./libs/prisma.js

Podrás ver ejemplos de como utilizar prisma para el tratamiento de datos

# Más documentación

 * Prisma schema: https://pris.ly/d/prisma-schema
 * Prisma queries (js): https://www.prisma.io/docs/orm/prisma-client/queries
 * Prisma CLI https://www.prisma.io/docs/orm/tools/prisma-cli
