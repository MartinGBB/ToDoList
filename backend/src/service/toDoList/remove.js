const remove = require('../../model/documents/remove');

module.exports = async (data) => {
  const removeDB = await remove(data);
  if (removeDB.deletedCount === 0) return { status: 404, message: "Não foi possivel deletar" };
  return { status: 204, message: "deletado com sucesso" };
};
