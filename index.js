// let students = [
//     { name: "John Doe", age: 18, grade: "A", course: "Mathematics"},
//     { name: "Jane Smith", age: 19, grade: "B", course: "Science"},
//     { name: "Emily Davis", age: 17, grade: "A",course: "History"},
//     { name: "Michael Brown", age: 20, grade: "B",course: "Literature"}
// ];
// let arr1=[]
// let arr2 =[]
// let gradeA = students.map((x) => {
//     if (x.grade =="A"){
//         arr1.push(x)
//     }else if (x.grade =="B"){
//         arr2.push(x)
//     }
// }
// )
// console.log(arr1)
// console.log(arr2)

// arr2.push({name: 'Babu', age: 25, grade: 'c', course: 'Literature'}) 

// console.log(arr2)

//  arr2.forEach((x) =>{
//     if(x.name =="Babu"){
//         x.name =toUppercase(x.name)
//     }
// })
// console.log(arr2) 
//map add empty string 

// let studentsClass = 
// [ { name: "John Doe", age: 18, grade: "A", course: "Mathematics"},
//     { name: "Jane Smith", age: 19, grade: "B", course: "Science"},
//     { name: "Emily Davis", age: 17, grade: "A",course: "History"},
//     { name: "Michael Brown", age: 20, grade: "B",course: "Literature"}
// ];
// let arr3=[]
// let studentEmpty =studentsClass.map((x) =>{
//     arr3.push(x.name ,x.age)
// })
//  console.log(arr3);
// let studentsage =studentsClass.map((x) => x.age +1)
// console.log(studentsage)

// let studentsConvertA = studentsClass.map(x =>{
//     console.log(x.grade ="A")
// })

// let studentsAgeBelow20 = studentsClass.map((x)=>{
//     if(x.age < 20){
//         console.log(x)
//     }
// })
// console.log(studentsClass.age)

let studentsClass = 
 [ { name: "John Doe", age: 18, grade: "A", course: "Mathematics"},{ name: "Jane Smith", age: 19, grade: "B", course: "Science"},
 { name: "Emily Davis", age: 17, grade: "A",course: "History"},{ name: "Michael Brown", age: 20, grade: "B",course: "Literature"}
 ];
 let addschool = studentsClass.map((g)=>{
    g.school = "school"
    return studentsClass
 } 
)
 console.log(addschool) 

 let addadressgardeA =studentsClass.map((f)=>{
    if(f.grade =="A"){
        f.address = "Hydra"
        return studentsClass
       }
 })