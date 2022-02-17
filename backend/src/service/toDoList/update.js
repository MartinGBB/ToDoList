const update = require('../../model/documents/update');
const { ID_IS_REQUIRE, NOT_UPDATE } = require('../../statusCode');

const validateId = (id) => {
  if (!id) return ID_IS_REQUIRE;
  return true;
}

module.exports = async (data) => {
  const validation = validateId(data.id)
  if (validation.error) throw validation.error;
  const response = await update(data);
  if (response.matchedCount !== 1) return NOT_UPDATE.error;
  return { status: 200, message: "tarefa atualizada" };
};
