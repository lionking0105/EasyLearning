const { Course, Category, Rating } = require("../../db.js");
const { Op } = require("sequelize");

const updateCourse = async ({
  image,
  image_public_id,
  name,
  description,
  price,
  students,
  category,
  id,
  archieved,
  status,
}) => {
  try {
    let courseDB = await Course.findOne({
      where: { id },
    });

    if (name) courseDB.name = name;
    if (description) courseDB.description = description;
    if (price) courseDB.price = price;
    if (students) courseDB.students = students;
    if (archieved !== undefined) courseDB.archieved = archieved;
    if (status !== undefined) courseDB.status = status;

    //Category
    //RESPECTO A CATEGORIA, FALTARIA HACER LA LOGICA SI LA PERSONA LE QUIERE ELIMINAR UNA CATEGORIA AL CURSO
    //LA LOGICA DEL IF DE ABAJIO, ES SOLAMENTE POR SI LA PERDONA LE QUIERE AGREGAR UNA CATEGORIA.
    if (category) {
      const [categoryDB, categoryCeated] = await Category.findOrCreate({
        where: { name: category },
        defaults: {
          name: category,
        },
      });

      courseDB.addCategory("archieved:", categoryDB);
    }

    await courseDB.save();
    await courseDB.reload();
    return courseDB;
    return "Actualizado";
  } catch (error) {
    return error;
  }
};

module.exports = { updateCourse };
