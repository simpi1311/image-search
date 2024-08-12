const access="kMVzxf4uE6-Yv6ge7_-v1DRP-k0qNGFvhSNjgRtxmxc"
let searchinput=document.getElementById("searchinput");
let searchbtn = document.getElementById("searchbtn");
let showdata = document.querySelector(".showdata");
let morebtn =document.getElementById("morebtn");
let page = 1
const getdata = async (searchvalue,pageno) => {
    let fetching = await fetch(`https://api.unsplash.com/search/photos?page=${pageno}&query=${searchvalue}&client_id=${access}`)
    let jsondata = await fetching.json();
console.log(jsondata);

if(pageno === 1){
    showdata.innerHTML=""
}
if(searchinput.value == "" ){
    showdata.innerHTML=`
    <h1 style="color: aqua;">invalid search</h1>
    `
}else{
    document.querySelector(".loadmore").style.display="block";
}

jsondata.results.forEach(function(data) {
    console.log(data); 

    let div = document.createElement("div");
    div.classList.add("card");
    showdata.appendChild(div);

    div.innerHTML=`
    <img src=${data.urls.small} alt="">
    <a href=${data.links.html} target="_blank">${data.alt_description}</a>
    `
})
}
searchbtn.addEventListener("click" , function(){
let searchvalue = searchinput.value ;
getdata(searchvalue ,1)
})
morebtn.addEventListener("click",function(){
    let searchvalue =searchinput.value;
    getdata(searchvalue,page++)
})


