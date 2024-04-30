import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Funcion ejemplo de obtener de una tabla `users` a traves su campo unique, en este caso id
export const getUserById = async (id) => {
  const user = await prisma.users.findUnique({
    where: {
      id,
    },
  });
  return user;
};

// Funcion ejemplo de obtener todas las tablas `users`
export const getUsers = async () => {
  const users = await prisma.users.findMany();
  return users;
};

/* Funcion ejemplo de obtener todas las tablas `users` que en este caso, el email contenga el valor de `q.email` y lo filtra
 */
export const getUsersWithFilter = async (q) => {
  const users = await prisma.users.findMany({
    where: {
      email: q.email,
    },
  });
  return users;
};

/* Funcion ejemplo de obtener todas las tablas `users` que en este caso, el email contenga el valor de `q.email` y lo filtra
 */
export const updateUser = async (id, nuevaData) => {
  const updateUser = await prisma.users.update({
    where: {
      id: id,
    },
    data: nuevaData,
  });

  return updateUser;
};

/* Funcion ejemplo de actualizar muchas tabla `users` que esten en el where
 */
export const updateUsers = async (q, nuevaData) => {
  const updateUser = await prisma.users.update({
    where: {
      email: q.email,
    },
    data: nuevaData,
  });

  return updateUser;
};

/* Funcion ejemplo de actualizar o crear un usuario en la tabla `users`
 */
export const updateOrCreateUsers = async (q, dataCreate, dateUpdate) => {
  const user = await prisma.users.upsert({
    where: {
      email: q.email,
    },
    update: {
      name: "Viola the Magnificent",
    },
    create: {
      email: q.email,
      name: "Viola the Magnificent",
    },
  });
  return user;
};

/* Funcion ejemplo de eliminar una tabla `users` que tenga el id
 */
export const deleteUser = async (id) => {
  const deleteUser = await prisma.users.delete({
    where: {
      id,
    },
  });
  return deleteUser;
};

/* Funcion ejemplo de eliminar  tablas `users` que eliminara todo elemento que cumpla con el where
 */
export const deleteUsers = async (q) => {
  const deleteUsers = await prisma.users.deleteMany({
    where: {
      id,
    },
  });

  // const deleteUsers = await prisma.users.deleteMany({}); Elimina todas las talbas `users`
  return deleteUsers;
};
