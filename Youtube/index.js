// const api_key = "AIzaSyC2gDKEstzYGuPwSYFfaeatRLV__dSU2iU";
const api_key = "AIzaSyAMcR4JJb0KScuNZf6XcioOoLra6jB5rvI";

let click1 = async() =>{
    var cont = document.querySelector('#cont');
       cont.innerHTML = null;
    let query = document.querySelector('#search').value;
    const url= `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&key=${api_key}`;
    try{
        let res = await fetch(url);
        let data = await res.json();
        append(data.items)
        console.log(data.items)
    }catch(err){
        console.log(err);
    }
}
var container = document.querySelector('#container');
let append = (data) =>{
    data.forEach(({id:{videoId},snippet:{thumbnails,title}}) =>{
       let div = document.createElement('div');
       let video ={
        title,
        videoId,
    }
       div.addEventListener("click",()=>{
           playvideo(video);
       })
       let img = document.createElement('img');
       img.src = thumbnails.default.url;
       let textdiv = document.createElement('div');
       textdiv.setAttribute('id','textdiv');
       let h3  = document.createElement("h1");
       h3.innerText = title;
       textdiv.append(h3)
       div.append(img,textdiv);
       container.append(div);
    
    })
}



let home = async () =>{
 
    const url= `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=latest&key=${api_key}`
    try{
        let res = await fetch(url);
        let data = await res.json();
        append1(data.items)
        console.log(data.items)
    }catch(err){
        console.log(err);
    }
}
var cont = document.querySelector('#cont');
let append1 = (data) =>{
    data.forEach(({id:{videoId},snippet:{thumbnails,title}}) =>{
       let div1 = document.createElement('div');
       let video1 ={
        title,
        videoId,
    }
    div1.addEventListener('click',function(){
        playvideo(video1)
    })
    
      
       let img = document.createElement('img');
       img.src = thumbnails.default.url;
       let textdiv = document.createElement('div');
       textdiv.setAttribute('id','text');
       let h3  = document.createElement("h5");
       h3.innerText = title;
       textdiv.append(h3)
       div1.append(img,textdiv);
       cont.append(div1);
    
    })
}
home();


let playvideo = (video) =>{
  
    window.localStorage.setItem("video",JSON.stringify(video));
    window.location.href = "playVideo.html";
}