
const ErrorMsg = ({items}) => {
  // let foodItems = ['Dal', 'Roti', 'Green Vegetables', 'Salad', 'Milk','Ghee'];
  return <>
  {items.length == 0 && <h3>I'm still Hungry.</h3>}
  </>
}

export default ErrorMsg