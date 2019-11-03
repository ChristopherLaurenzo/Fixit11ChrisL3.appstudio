var exercises = ["pullups","pushups","situps","jogging","plank","curls"]
var coreExercises = ["situps","plank"]

favExercises.onshow=function(){
  for (i=0; i < exercises.length; i++) {
    selExercises.addItem(exercises[i])
}
  for (i = 0; i < coreExercises.length; i++) {
    selExercises.addItem(coreExercises[i])
    }
}

selExercises.onfocusout=function(){
  let response = "You chose: "
  for (i = 0; i <= selExercises.text.length + 1; i++)
    response = response + " " + selExercises.text[i]
    lblResponse1.value = response
}

btnMobile.onclick=function(){
  ChangeForm(mobileNav)
}
