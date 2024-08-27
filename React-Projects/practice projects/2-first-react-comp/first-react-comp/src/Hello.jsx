function Hello(){
  let myname = "Bhanu";
  let msgNo = 256;
  let fullName = () => {
    return "Bhanu Pratap";
  }
  return <h3>
    MSG NUMBER {msgNo}:  Workig on Dynamic components<br />
    My name is: {myname} <br/>
    my Full Name is: {fullName()}
  </h3>
}

export default Hello;