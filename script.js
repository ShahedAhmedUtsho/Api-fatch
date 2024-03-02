let load = document.getElementById('load')
load.addEventListener('click',loadstart)

// methode 1 
loadstart()
function loadstart(){
   let url = 'https://randomuser.me/api/';
fetch(url)
.then((res) => {
 return  res.json()
   
}).then((data) =>{
 
   pestCard(data)
})

}


// methode 2

// async function loadstart(){
//    let url = await fetch('https://randomuser.me/api/');
//    let data = await url.json();
//    pestCard(data)
// }




function pestCard(data) {


   let personPhoto = data.results[0].picture.large;

   let personName = `${data.results[0].name.title} ${data.results[0].name.first} ${data.results[0].name.last}`;

   let personGender = data.results[0].gender;
   let personEmail = data.results[0].email;
   let personNumber = data.results[0].cell;
   let personAge = data.results[0].dob.age;
   let personAddress = `${data.results[0].location.city}, ${data.results[0].location.state}, ${data.results[0].location.country}`


   let card = document.getElementById('card')
   card.innerHTML = `
<div id="img" class="w-5/6 max-w-80 mx-auto border-2 bg-no-repeat bg-cover bg-center max-h-96 min-h-80 rounded-xl bg-[url('${personPhoto}')]">
   

     </div>
     <div class="max-w-80 mx-auto my-5  ">
        <h2 class="text-2xl">${personName}</h2>
        <h3 class="pt-2 text-xl">Gender: ${personGender}</h3>
        <h3 class=" text-base">Age : ${personAge}</h3>
        <h3 class=" text-base">Email : ${personEmail}</h3>
        <h6>phone: ${personNumber}</h6>
        <p>Address: ${personAddress}</p>
     </div>
`

}