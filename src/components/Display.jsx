import css   from "./Display.module.css";
const Display = ({displayValue}) => {
return (
  <input type="text" className={css.display} readOnly value={displayValue}/>
)

}
export default Display; 