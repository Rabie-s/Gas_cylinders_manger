
let name_field = document.getElementById("name_field");
let phone_field = document.getElementById("phone_field");
let addres_field = document.getElementById("addres_field");
let quantity_field = document.getElementById("quantity_field");
let date_field = document.getElementById("date_field");
let total = document.getElementById("total");

let add_btn = document.getElementById("add_btn");

let gas_price = 7;

//array

let table_arr = [];



function clear_field(){
    name_field.value = '';
    phone_field.value = '';
    addres_field.value = '';
    quantity_field.value = '';
    //date_field.value = '';
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

function get_time(){
    let date = new Date();
    let time = date.getHours()+":"+date.getMinutes();
    return time;
}

function total_price(){
    total_p = quantity_field.value * gas_price;
    total.innerHTML = total_p;
}


add_btn.onclick = function(){
    table_opj={
        name:name_field.value,
        phone:phone_field.value,
        addres:addres_field.value,
        quantity:quantity_field.value,
        date:date_field.value,
        time:get_time()
    }
    clear_field();

    table_arr.push(table_opj);
    console.log(table_arr);
}





get_date();



