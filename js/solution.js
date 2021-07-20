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

function table(){
    let div = document.createElement('div')

    document.body.append(div)
    div.style.display = 'flex'
    div.style.flexWrap = 'wrap'
    for (let i = 1 ; i <= 100 ; i++){
        let p = document.createElement('p')
        div.append(p)
        p.style.width = '10%'
        p.style.borderStyle = 'solid'
        p.style.borderWidth = '2px'
        p.style.textAlign = 'center'
        p.style.boxSizing = 'border-box'
        p.innerHTML = i;


    }


}

table()










