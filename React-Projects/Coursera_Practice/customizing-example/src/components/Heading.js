function Heading(props) {
  return (
    <div style={{backgroundColor:'grey', textAlign:'center'}}>
      <h3>This is child component</h3>
      Thi
      {props.children}
    </div>
  )
}

export default Heading;
