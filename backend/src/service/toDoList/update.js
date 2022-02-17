const update = require('../../model/documents/update');
const { ID_IS_REQUIRE } = require('../../statusCode');

const validateId = (id) => {
  if (!id) return ID_IS_REQUIRE;
  return true;
}

module.exports = async (data) => {
  const validation = validateId(data.id)
  if (validation.error) throw validation.error;
  await update(data);
  return { status: 200, message: "tarefa atualizada" };
};
