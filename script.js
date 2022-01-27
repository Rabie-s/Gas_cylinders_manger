
let name_field = document.getElementById("name_field");
let phone_field = document.getElementById("phone_field");
let addres_field = document.getElementById("addres_field");
let quantity_field = document.getElementById("quantity_field");
let date_field = document.getElementById("date_field");
let total = document.getElementById("total");

let gas_price = 7;


function clear_field(){
    name_field.value = '';
    phone_field.value = '';
    addres_field.value = '';
    quantity_field.value = '';
    date_field.value = '';
    total.innerHTML = '';
}

function get_date(){
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth()+1;
    let day = String(date.getDate()).padStart(2,'0');
    
    let full_date = year+'-'+month+'-'+day;
    date_field.value = full_date;
}

function total_price(){
    total_p = quantity_field.value * gas_price;
    total.innerHTML = total_p;
}

get_date();

