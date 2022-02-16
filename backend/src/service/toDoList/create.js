const create = require('../../model/documents/create');
const { EMPTY_TASK, EMPTY_CATEGORY } = require('../../statusCode');

const validateData = ({ task, category }) => {
  if (!task) return EMPTY_TASK;
  if (!category) return EMPTY_CATEGORY;
  return true;
}

module.exports = async (data) => {
  const validation = validateData(data);
  if (validation.error) throw validation.error;
  await create(data);
  return { status: 200, message: "task created!" }
};
