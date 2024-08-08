
let currentPlayer = "X";
let arr = Array(9).fill(null);


function checkWinner(){
  if((arr[0] != null && arr[0] == arr[1] && arr[1] == arr[2]) || 
     (arr[3] != null && arr[3] == arr[4] && arr[4] == arr[5]) || 
     (arr[6] != null && arr[6] == arr[7] && arr[7] == arr[8]) || 
     (arr[0] != null && arr[0] == arr[3] && arr[3] == arr[6]) || 
     (arr[1] != null && arr[1] == arr[4] && arr[4] == arr[7]) || 
     (arr[2] != null && arr[2] == arr[5] && arr[5] == arr[8]) || 
     (arr[0] != null && arr[0] == arr[4] && arr[4] == arr[8]) || 
     (arr[2] != null && arr[2] == arr[4] && arr[4] == arr[6])) {

      alert(currentPlayer + " is Winner!")

      window.location.reload();

      return;
      
  }

  if(!arr.some((e) => e === null)){
    
    alert("It's a Draw!")
    window.location.reload();

  }
}
function handleClick(e){
  
  let pos = e.id;
  if(arr[pos] != null) return;
  arr[pos] = currentPlayer;
  
  e.innerText = currentPlayer;

  checkWinner();
  currentPlayer = currentPlayer === "X"?'O':'X';



}