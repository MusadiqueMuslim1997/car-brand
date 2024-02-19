var carlist = {
   
    BMW:{

        BMWX5:{
         

            name: "BMW X5",
            model: "2024",
            fulltype: "Hybrid",
            seat: "5 Seaters",
            speed: "130mph",
            color:["red" , "white", "black"],
            price: "PKR 7.4 crore"



        },

        BMWX7:{
            name: "BMW X7",
            model: "2024",
            fulltype: "Petrol",
            seat: "5 Seaters",
            speed: "155mph",
            color:["red" , "white", "black"],
            price: "PKR 2.9 crore"

        },
        
        BMWXM:{
            name: "BMW XM",
            model: "2023",
            fulltype: "Hybrid",
            seat: "5 Seaters",
            speed: "155mph",
            color:["red" , "white", "black"],
            price: "PKR 3.4 crore"

        }

    },

    Honda:{

    },

    Audi:{

    },

    Suzuki:{


    }


}


var main = document.getElementById("main");

for(var key in carlist){
for(var key1 in carlist[key]){

    var obj = carlist[key][key1];

    var colorDiv = "";
    for (i = 0; i < obj.color.length; i++){

        colorDiv += `<div class = "${obj.color[i]}" ></div>`
        
    }

    main.innerHTML += `
    <div class="card-1">
    <div class="card-img" id="img-1"><img src="images/bmw5.png" alt=""></div>
    <div class="card-info">${obj.name} (${obj.model})</div>
    <div class="para">
    ${obj.fulltype}<br />
   ${obj.seat}<br />
   ${obj.speed}
    </div>
    <div class = "price"><h4>${obj.price}</h4></div>
    <div class = "color">${colorDiv}<div>

 </div>
    `




}
}