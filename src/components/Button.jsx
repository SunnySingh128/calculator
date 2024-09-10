import css from "./Button.module.css";

const Button = ({onButtonClick}) => {
  const ButtonName = ["/","7", "8", "9","-","4", "5", "6","+", "1", "2", "3","*","C", "=","00"];
  
  return (
    <div className={css.container}>
      {ButtonName.map((item) => {
        return (
          <button 
            className={css.Button}
            onClick={()=>onButtonClick(item)}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
};

export default Button;
