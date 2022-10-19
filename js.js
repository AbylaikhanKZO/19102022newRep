// // классы
// function createPerson(newFullName = "default name", newAge = 1, newEmail = "asd@mail.ru"){ 
//      return { 
//          fullName: newFullName, 
//          age: newAge, 
//          email: newEmail 
//      } 
//  } 
  
//  function showName(obj){ 
//      console.log(obj.fullName.split(' ')[1]); 
//  } 
  
//  let person2 = createPerson(); 
//  showName(person2);
 

let user = {
     login: "abeke",
     password: ["123,qwerty, cart"],
     location: {
          city: "LA",
          street: "Baller street"
     },
     loginFunc: function() {                               // это синтаксис внутри объекта
          console.log(`${this.city} Konichiwa`)          // this в контексте это этот же объект
     }
}

user.loginFunc();
 
 