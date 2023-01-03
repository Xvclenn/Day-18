let students = [
    //students.length
    {
        //students[0]
        name: 'Сэд-Эрдэнэ',
        age: 19,
        gender: "male"
    },
    {
        //students[1]
        name: 'Индра',
        age: 19,
        gender: "female"
    },
    {
        //students[2]
        name: 'Хатнаа ',
        age: 21,
        gender: "male"
    },
    {
        //students[3]
        name: 'Тэмүүлэн',
        age: 23,
        gender: "male"
    },
    {
        //students[4]
        name: 'Намуун',
        age: 23,
        gender: "female"
    },
]


console.log(students)

let sumM = 0
let sumF = 0
for (let i = 0; i < students.length; i++) {

    if (students[i][`gender`] == `male`) {
        sumM++
    }
    else {
        sumF++
        console.log()
    }

}
console.log(`№1.) Ангид ${sumM}-н эрэгтэй ${sumF}-н эмэгтэй байгааг арай гэж олж тогтоолоо.`)


let dundaj = 0;
for (let i = 0; i < students.length; i++) {

    // console.log(students[i][`age`])
    dundaj = dundaj + students[i][`age`] / 2
}

console.log(`№2.) Сурагчдын насны дундаж: ${dundaj}.`)

for (let i = 0; i < students.length; i++) {

    students[i].SurName = "Bataa"
}

console.log(`№3.) \n Changed: `, students)


let arr1 = []
let arr2 = []

for (let i = 0; i < students.length; i++) {

    let arr1 = []
    let arr2 = []
    if (students[i][`age`] == 19) {
        function F1(name, age) {
            return arr1 = name + ' ' + age
        }
        F1(students[i][`name`], students[i][`age`])
        console.log(`№4.1) ${arr1}`)
    }
    else if (students[i][`age`] == 23) {
        function F1(name, age) {
            return arr2 = name + ' ' + age
        }
        F1(students[i][`name`], students[i][`age`])
        console.log(`№4.2) ${arr2}`)
    }
    else {
        console.log
    }
}