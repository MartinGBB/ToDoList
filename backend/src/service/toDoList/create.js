const create = require('../../model/documents/create');
const { EMPTY_TASK, EMPTY_CATEGORY } = require('../../statusCode');

const validateData = ({ task, category }) => {
  if (!task) return EMPTY_TASK;
  if (!category) return EMPTY_CATEGORY
  return true;
}

module.exports = (data) => {
  const validation = validateData(data);
  if (validation.error) return validateData.error
  create(data);
  return { status: 200, message: "task created!" }
};
