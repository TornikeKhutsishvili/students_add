

// პერსონის კლასს დავამატოთ 3 ველი. სასწავლო საგნები: ინგლისური, ქართული, მათემატიკა. ყველა პერსონს აქვს ეს 3 საგანი და 
// ამ საგნებში აქვთ რენდომული ქულები. 0-დან 100-ის ჩათვლით. ასევე სტუდენტს აქვს ველი, რომელსაც ეწოდება სტატუსი.
// სტატუსი არის ჩაბარებული იმ შემთხვევაში თუ საგნების საშუალო ქულა აღემატება 51-ს. სხვა შემთხვევაში არის ჩაჭრილი.
// სტუდენტები დავამატოთ ბრაუზერიდან და დამატების პროცესშივე ბრაუზერში გამონჩდეს რამდენი ჩაჭრილი 
// და რამდენი ჩაბარებული სტატუსის მქონე სტუდენტი დაგვემატა.

var fname = document.querySelector('.fname')
var lname = document.querySelector('.lname')
var age = document.querySelector('.age')
var button = document.querySelector(".button")
var english = document.querySelector('.eng')
var georgian = document.querySelector('.geo')
var mathematics = document.querySelector('.math')
var pos = document.querySelector('.pos')
var neg = document.querySelector('.neg')
var studstatus = document.querySelector('.studstatus')

class Student{
    constructor(fname,lname,age,english,georgian,mathematics,statuss){
        this.fname = fname
        this.lname = lname
        this.age = age
        this.english = english
        this.georgian = georgian
        this.mathematics = mathematics
        this.statuss = statuss
    }
}

var pointarr = []
var positive = 1;
var negative = 1;

button.addEventListener("click", function(){
    var student1 = new Student (String(fname.value), String(lname.value), parseInt(age.value), 
                                parseInt(english.value), parseInt(georgian.value), parseInt(mathematics.value))

    if(fname.value != "" && lname.value != "" && age.value != ""){
        fname.value = fname.value+1    // +1 რადგან შემეცვალა ავტომატურად სტუდენტი
        lname.value = lname.value
        age.value = age.value
        english.value = parseInt(Math.random()*100)
        georgian.value = parseInt(Math.random()*100)
        mathematics.value = parseInt(Math.random()*100)
    }
    pointarr.push(parseInt(english.value), parseInt(georgian.value), parseInt(mathematics.value))
    // console.log(pointarr)

    if(parseInt(english.value) >= 51 && parseInt(georgian.value) >= 51 && parseInt(mathematics.value) >= 51){
        Student.statuss = "ჩაბარებული"
        pos.innerText = positive++ + " " + "ჩაბარებული"
        studstatus.style.color = "green"
        studstatus.value = "ჩაბარებული"
    }
    else{
        Student.statuss = "ჩაჭრილი"
        neg.innerText = negative++ + " " + "ჩაჭრილი"
        studstatus.style.color = "red"
        studstatus.value = "ჩაჭრილი"
    }
    console.log(student1.fname + " " + student1.lname + " " + Student.statuss)
});
