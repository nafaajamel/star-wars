import S from './styles';

const AddButton = ({ click = () => {} }) => {
  return (
    <S.AddButton onClick={click}>
      <span>+</span>
    </S.AddButton>
  );
};

export default AddButton;
