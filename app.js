var carlist = {
   
    BMW:{

        BMWX5:{
         

            name: "BMW X5",
            model: "2024",
            fulltype: "Hybrid",
            color:["red" , "white", "black"],
            price: "PKR 7.4 crore"



        },

        BMWX7:{
            name: "BMW X7",
            model: "2024",
            fulltype: "Petrol",
            color:["red" , "white", "black"],
            price: "PKR 2.9 crore"

        },
        
        BMWXM:{
            name: "BMW XM",
            model: "2023",
            fulltype: "Hybrid",
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

    main.innerHTML += `
    <div class="card-1">
    <div class="card-img" id="img-1"><img src="images/bmw5.png" alt=""></div>
    <div class="card-info">${obj.name}</div>
    <div class="para"></div>
 </div>
    `




}
}