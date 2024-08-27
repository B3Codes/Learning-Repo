import Item from "./Item";

const foodItems = ({items}) =>{
  
  // let foodItems = ['Dal', 'Roti', 'Green Vegetables', 'Salad', 'Milk','Ghee'];

  return <ul className = "list-group">
  {items.map((item) => (
    <Item key = {item} foodItem = {item}></Item>
 ))}
</ul>
}

export default foodItems