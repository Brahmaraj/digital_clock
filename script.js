var div_var1=0;
var div_var2=0;
var div_var3=0;

function clock() {
    var hours=document.getElementById("hours");
    var minutes=document.getElementById("minutes");
    var seconds=document.getElementById("seconds");
    var am_pm =document.getElementById("am-img"); 

    var time = new Date();
    var hour = time.getHours();
    var ampm = hour >= 12 ? "PM" : "AM";
    
    am_pm.innerHTML = ampm;
    hour = hour%12;
    hour = hour ? hour:12;
    if(hour<10){
        hour = "0"+hour;
    }
    hours.innerHTML = hour;
    minutes.innerHTML = time.getMinutes();
    seconds.innerHTML = time.getSeconds();
}

setInterval(clock,1000);

function makeDive() {
    var container = document.createElement('div');
    container.className="grid-item";
    container.id="dynamic-block";
    document.getElementById("grid-container1").appendChild(container);

    var invalue = document.getElementById("wakeup-time-selector");
    var invalue1 = document.getElementById("lunch-time-selector");
    var invalue2 = document.getElementById("nap-time-selector");
    if(div_var1==1){
    var value = invalue.options[invalue.selectedIndex].text;
    document.getElementById("dynamic-block").innerHTML="Breakfast Time "+ value;
    }
    else if(div_var2==1){
    var value = invalue1.options[invalue1.selectedIndex].text;
    document.getElementById("dynamic-block").innerHTML="Lunch Time "+ value;
    }
    else if(div_var3==1){
    var value = invalue2.options[invalue2.selectedIndex].text;
    document.getElementById("dynamic-block").innerHTML="Nap Time "+ value;
    }
}

function settimefunc() {
    var a = document.getElementById("wakeup-time-selector").value;
    var b = document.getElementById("lunch-time-selector").value;
    var c = document.getElementById("nap-time-selector").value;
    var hourr = new Date().getHours();
    if(a==hourr){
        document.getElementById("right-container-image").style.backgroundImage="url(assets/wakeup_image.svg)";
        document.getElementById("right-container-text").innerHTML="Breakfast Time!"
        div_var1 =1;
    }
    else if(b==hourr){
        document.getElementById("right-container-image").style.backgroundImage="url(assets/lunch_image.svg)";
        document.getElementById("right-container-text").innerHTML="Lunch Time!"
        div_var2 =1;
    }
    else if(c==hourr){
        document.getElementById("right-container-image").style.backgroundImage="url(assets/goodnight_image.svg)";
        document.getElementById("right-container-text").innerHTML="Nap Time!"
        div_var3 = 1;
    }
    makeDive();
}