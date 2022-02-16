import {
  Content,
} from './style';

function Form() {
  const handleSubmit = ({ target: { value } }) => {
    console.log(value)
  };

  return (
    <Content>
      <input
        placeholder="Crie sua tarefa"
        name="task"
        onChange={ (event) => handleSubmit(event) }
      />
    </Content>
  );
}

export default Form;
