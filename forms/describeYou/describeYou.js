let traits = ["optimistic", "pessimistic", "trusting" ,"envious"]

rdoPersonType.onclick=function(){
  if (rdoPersonType.value == 0)
    lblResponse2.value = "I would agree that you are an optimistic person too!"
  else if (rdoPersonType.value == 1)
    lblResponse2.value = "I would agree that you are a pessimistic person too!"
  else if (rdoPersonType.value == 2)
    lblResponse2.value = "I would agree that you are a trusting person too!"
  else if (rdoPersonType.value == 3)
    lblResponse2.value = "I would agree that you are an envious person too!"
}


btnExercises.onclick=function(){
  ChangeForm(favExercises)
}

