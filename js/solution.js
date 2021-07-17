let list = document.querySelector('.ulClass').childNodes
let ul = document.querySelector('.ulClass').attributes
let li = []
let sum = 0
let atr =[]
let atrName = []
for (let con of list){
    if (con.innerHTML===undefined)continue;
    li.push(con.innerHTML)
    sum++

}
for (let attr of ul){
    atr.push(attr)
    atrName.push(attr.value)


}
console.log("------------------------------------")
console.log(sum)
console.log("------------------------------------")
console.log(li)
console.log("------------------------------------")
console.log(atr)
console.log("------------------------------------")
console.log(atrName)
console.log("------------------------------------")

document.querySelector('.ulClass').lastChild.innerHTML = "Привект меня зовут Дима"
document.querySelector('.ulClass').firstChild.setAttribute('data-my-name','Дима')
document.querySelector('.ulClass').removeAttribute('data-dog-tail')

function generateList(arr){
    let ul = document.createElement("ul")
        document.body.append(ul)

    for (let i=0;i<=arr.length - 1 ;i++){
        let li =  document.createElement("li")
        if (Array.isArray(arr[i])){
            let newChild = ul.appendChild(li)

            for (let c = 0 ; c <= arr[i].length ; c++){
                ul.appendChild(li)
                li.innerHTML = arr[c];
            }
        }
        else {
            ul.appendChild(li)
            li.innerHTML = arr[i];
        }
    }

}




let array = [1,2,3,[1,2,3],4,5,6]

generateList(atrName)
generateList(array)

function table(num1,num2){
    let div = document.createElement('div')
    document.body.append(div);
    div.style.display = "flex"
    div.style.flexWrap = "wrap"
      let sum = num1 * num2
    for (let i = 1 ; i <= sum ; i++){
        let p = document.createElement('p')
        p.style.width = "10%"
        p.style.textAlign = "center"
        p.style.borderStyle = "solid"
        p.style.borderWidth = "2px"
        p.style.boxSizing = "border-box"
        div.append(p)
        p.innerHTML = i;
    }

}
table(10,10)

