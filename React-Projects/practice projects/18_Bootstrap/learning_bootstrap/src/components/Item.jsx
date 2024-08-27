import styles from "./Item.module.css"
// const Item = (props) => {
//   return <li className = "list-group-item">{props.foodItem}</li>
// }

// export default Item

// const Item = (props) => {
//   let {foodItem} = props   // destructuring of the object
//   return <li className = "list-group-item">{foodItem}</li>
// }

// export default Item


/* destructuring in the arguments */

// const Item = ({foodItem}) => {
//   // let {foodItem} = props   // destructuring of the object
//   return <li className = "list-group-item">{foodItem}</li>
// }


/* using CSS Module - Item.modules.css */styles

const Item = ({foodItem}) => {
  // let {foodItem} = props   // destructuring of the object
  return <li className ={`${styles["kg-item"]}`}>
    <span className={styles["kg-span"]}>{foodItem}</span></li>
}



export default Item