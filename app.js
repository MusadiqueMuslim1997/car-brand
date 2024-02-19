var carlist = {

    BMW: {

        BMWX5: {


            name: "BMW X5",
            model: "2024",
            fulltype: "Hybrid",
            seat: "5 Seaters",
            speed: "130mph",
            color: ["red", "white", "black"],
            price: "PKR 7.4 crore",
            image: "images/bmw5.png"


        },

        BMWX7: {
            name: "BMW X7",
            model: "2024",
            fulltype: "Petrol",
            seat: "5 Seaters",
            speed: "155mph",
            color: ["red", "white", "black"],
            price: "PKR 2.9 crore",
            image: "images/bm7.png"

        },

        BMWXM: {
            name: "BMW XM",
            model: "2023",
            fulltype: "Hybrid",
            seat: "5 Seaters",
            speed: "155mph",
            color: ["red", "white", "black"],
            price: "PKR 3.4 crore",
            image: "images/bmm.png"

        }

    },

    Honda: {

        HondaCivic: {
            name: "Honda Civic",
            model: "2022",
            fulltype: "Petrol",
            seat: "5 Seaters",
            speed: "137mph",
            color: ["red", "white", "black"],
            price: "PKR 99 lacs",
            image: "images/hcivic.png"
        },
        HondaCity: {
            name: "Honda City",
            model: "2023",
            fulltype: "Petrol",
            seat: "5 Seaters",
            speed: "195kmph",
            color: ["red", "white", "black"],
            price: "PKR 47 lacs",
            image: "images/hcity.png"
        },
        HondaAccord: {
            name: "Honda Accord",
            model: "2023",
            fulltype: "Petrol",
            seat: "5 Seaters",
            speed: "116mph",
            color: ["red", "white", "black"],
            price: "PKR 2.5 crore",
            image: "images/hacc.png"
        }

    },

    Audi: {

    },

    Suzuki: {


    }


}


var main = document.getElementById("main");
var brand = document.getElementById("brand");
var model = document.getElementById("model");
brand.innerHTML += `<option>Select Brand Name</option>`
for (var key in carlist) {
    brand.innerHTML += `<option vlaue = "${key}">${key}</option>`
    for (var key1 in carlist[key]) {

        var obj = carlist[key][key1];

        var colorDiv = "";
        for (i = 0; i < obj.color.length; i++) {

            colorDiv += `<div class = "${obj.color[i]}" ></div>`

        }

        main.innerHTML += `
    <div class="card-1">
    <div class="card-img" id="img-1"><img src="${obj.image}""></div>
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


for (var key in carDetail) {

}


function setModel() {
    model.innerHTML = "";
    for (var key in carlist[brand.value]) {
        model.innerHTML += `<option vlaue = "${key}">${key}</option>`
    }
}


function searchCar() {
 var carDetail = document.getElementById("car-detail");
 var car = carlist[brand.value][model.value];
 main.style.display = "none";
 carDetail.style.display = "flex"
 carDetail.innerHTML = `
 <div class="c1">
 <div class="card-img" id="img-1"><img src="${car.image}""></div>
 <div class="card-info">${car.name} (${car.model})</div>
 <div class="para">
 ${car.fulltype}<br />
 ${car.seat}<br />
 ${car.speed}
 </div>
 <div class = "price"><h4>${car.price}</h4></div>
 <div class = "color">${colorDiv}<div>
</div>
 `
}