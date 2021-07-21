let list = document.body.querySelector('.ulClass').children;

let sum = 0;

let text = []

for (let con of list){
    sum++;
    text.push(con.innerHTML)


}
console.log(sum);
console.log(text);

let atr = document.body.querySelector(".ulClass").attributes;

let attrName = [];
let attrVal = [];

for (let val of atr){
    attrName.push(val)
    attrVal.push(val.value)


}
console.log(attrName);
console.log(attrVal);


document.body.querySelector('.ulClass').lastElementChild.innerHTML = "Привет меня зовут Дима"

document.body.querySelector('.ulClass').firstElementChild.setAttribute('data-my-name', 'Дима')

document.body.querySelector('.ulClass').removeAttribute('data-dog-tail')

function generateList(arr,place=document.body){
    let ul = document.createElement('ul')
    place.append(ul)
    for (let i = 0; i <= arr.length - 1 ; i++){
        let li = document.createElement("li");
        ul.append(li)

        if (Array.isArray(arr[i])){
            generateList(arr[i],li)
        }
        else{
            li.innerHTML = arr[i]
        }



    }

}

let array = [1,2,3,4,5];
generateList(array)

let array2 = [1,2,3,4,5,[1,2,3,4,5,[1,2,3,4,5]],4];
generateList(array2)
let num = 1
function table(){
    let table = document.createElement('table')
     table.style.width = '100%'


    document.body.append(table)
    for (let i = 1 ; i <= 10 ; i++){
        let tr = document.createElement('tr')
        table.append(tr)

   for (let c = 1 ; c <= 10 ; c++){
       let td = document.createElement('td')
       tr.append(td)
       td.style.borderStyle = 'solid'
       td.style.borderWidth = '2px'
       td.style.textAlign = 'center'
       td.innerHTML = num++
   }


    }


}

table()










