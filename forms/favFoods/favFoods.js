let goodFoods = ["pizza","apples","cookies","sushi","pasta","steak"]
lstFoods.onclick=function(choice){
  if (typeof(choice) == "object")
  return
  lblChoice.value = `You picked ${goodFoods[choice]} -that is a great choice!`
}

btnDessert.onclick=function(){
  ChangeForm(dessertVoting)
}
