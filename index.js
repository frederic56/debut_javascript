var tbody=document.querySelector(".tbody")

var btntbody=document.querySelector(".btntbody")
var DateComplet= new Date()
var fruits, fLen, showbtn;
fruits= ["Banana", "Manga", "Letchis"]
fLen= fruits.length;
var adds= "tomate"
var flag= true
btntbody.addEventListener("click",AfficheDate)
var Fruits= ["Letchis", "Mapaza", "Finesy"]
tbody.innerHTML=Fruits

// setInterval(() => {
//     tbody.innerHTML = new Date()
// }, 1000);

function AfficheDate(){
    // if (tbody.document.querySelector(".tbody")==null) {
    //     setInterval(() => {
    //         tbody.innerHTML = new Date()
    //     }, 1000);
    // } else {
        
    // }
    // var ul = document.createElement('ul')
    
    // for(i= 0; i< fLen; i++){
    //     var li =  document.createElement('li')
    //     li.innerHTML = fruits[i]
    //     ul.append(li)
    // }
   
    
    // if(flag){
    //     tbody.style.display="block"
    //     tbody.append(ul)
    //     flag=false
    // }else{
    //     tbody.append(adds)
    //     flag=true
    // }
    tbody.innerHTML=Fruits.push(adds)
}
