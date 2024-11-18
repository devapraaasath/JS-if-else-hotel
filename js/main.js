function ordernow(){
    console.log('test1');
    var user=document.getElementById('username').value;
    console.log(user);
    var choice=document.getElementById('fochoice').value;
    console.log(choice);
    var quantity=document.getElementById('quantity').value;
    console.log(quantity);
    if (user === "" || quantity === "") {
        if (user === "") {
            document.getElementById('alert1').innerHTML = "Please enter username";
        }
    
        if (quantity === "") {
            document.getElementById('alert2').innerHTML = "Please enter quantity";
        }
    }
    else{
        if(choice=="Briyani"){
            console.log('Briyani');
            var briyani=120;
            var total=parseInt(briyani)* parseInt(quantity);
            console.log(total);
            document.getElementById('name').innerHTML="Hai" +" "+user+" "+"Your bill is here";
            // document.getElementById('bill').innerHTML="1";
            document.getElementById('foods').innerHTML=choice;
            document.getElementById('Quantity').innerHTML=quantity;
            var gstamount=parseInt(total)*5/100;
            document.getElementById('Gst').innerHTML=gstamount+" &#x20B9";
            var Gst_total=parseInt(gstamount)+total;
            document.getElementById('Total').innerHTML=Gst_total;
            if(total>=1000){
                var disc=parseInt(Gst_total)-200;
                document.getElementById('discount').innerHTML=disc;
            }
            else{
                document.getElementById('discount').innerHTML="only valid above 1000 &#x20B9"
            }
        }
        else if(choice=="parotta"){
            console.log('parotta');
            var Parotta=20;
            var total=parseInt(Parotta)* parseInt(quantity);
            console.log(total);
            document.getElementById('name').innerHTML="Hai" +" "+user+" "+"Your bill is here";
            // document.getElementById('bill').innerHTML="1";
            document.getElementById('foods').innerHTML=choice;
            document.getElementById('Quantity').innerHTML=quantity;
            var gstamount=parseInt(total)*5/100;
            document.getElementById('Gst').innerHTML=gstamount+" &#x20B9";
            var Gst_total=parseInt(gstamount)+total;
            document.getElementById('Total').innerHTML=Gst_total;
            if(total>=1000){
                var disc=parseInt(Gst_total)-200;
                document.getElementById('discount').innerHTML=disc;
            }
            else{
                document.getElementById('discount').innerHTML="only valid above 1000 &#x20B9"
            }
        }
        else if(choice=="chicken rice"){
            console.log('chicken rice');
            var Chiken_rice=90;
            var total=parseInt(Chiken_rice)* parseInt(quantity);
            console.log(total);
            document.getElementById('name').innerHTML="Hai" +" "+user+" "+"Your bill is here";
            // document.getElementById('bill').innerHTML="1";
            document.getElementById('foods').innerHTML=choice;
            document.getElementById('Quantity').innerHTML=quantity;
            var gstamount=parseInt(total)*5/100;
            document.getElementById('Gst').innerHTML=gstamount+" &#x20B9";
            var Gst_total=parseInt(gstamount)+total;
            document.getElementById('Total').innerHTML=Gst_total;
            if(total>=1000){
                var disc=parseInt(Gst_total)-200;
                document.getElementById('discount').innerHTML=disc;
            }
            else{
                document.getElementById('discount').innerHTML="only valid above 1000 &#x20B9"
            }
        }
        else if(choice=="pizza"){
            console.log('pizza');
            var pizza=170;
            var total=parseInt(pizza)* parseInt(quantity);
            console.log(total);
            document.getElementById('name').innerHTML="Hai" +" "+user+" "+"Your bill is here";
            // document.getElementById('bill').innerHTML="1";
            document.getElementById('foods').innerHTML=choice;
            document.getElementById('Quantity').innerHTML=quantity;
            var gstamount=parseInt(total)*5/100;
            document.getElementById('Gst').innerHTML=gstamount+" &#x20B9";
            var Gst_total=parseInt(gstamount)+total;
            document.getElementById('Total').innerHTML=Gst_total;
            if(total>=1000){
                var disc=parseInt(Gst_total)-200;
                document.getElementById('discount').innerHTML=disc;
            }
            else{
                document.getElementById('discount').innerHTML="only valid above 1000 &#x20B9"
            }
        }
        else if(choice=="dosa"){
            console.log('dosa');
            var dosa=60;
            var total=parseInt(dosa)* parseInt(quantity);
            console.log(total);
            document.getElementById('name').innerHTML="Hai" +" "+user+" "+"Your bill is here";
            // document.getElementById('bill').innerHTML="1";
            document.getElementById('foods').innerHTML=choice;
            document.getElementById('Quantity').innerHTML=quantity;
            var gstamount=parseInt(total)*5/100;
            document.getElementById('Gst').innerHTML=gstamount+" &#x20B9";
            var Gst_total=parseInt(gstamount)+total;
            document.getElementById('Total').innerHTML=Gst_total;
            if(total>=1000){
                var disc=parseInt(Gst_total)-200;
                document.getElementById('discount').innerHTML=disc;
            }
            else{
                document.getElementById('discount').innerHTML="only valid above 1000 &#x20B9"
            }
        }
        else if(choice=="burger"){
            console.log('burger');
            var burger=110;
            var total=parseInt(burger)* parseInt(quantity);
            console.log(total);
            document.getElementById('name').innerHTML="Hai" +" "+user+" "+"Your bill is here";
            // document.getElementById('bill').innerHTML="1";
            document.getElementById('foods').innerHTML=choice;
            document.getElementById('Quantity').innerHTML=quantity;
            var gstamount=parseInt(total)*5/100;
            document.getElementById('Gst').innerHTML=gstamount+" &#x20B9";
            var Gst_total=parseInt(gstamount)+total;
            document.getElementById('Total').innerHTML=Gst_total;
            if(total>=1000){
                var disc=parseInt(Gst_total)-200;
                document.getElementById('discount').innerHTML=disc;
            }
            else{
                document.getElementById('discount').innerHTML="only valid above 1000 &#x20B9"
            }
        }
    }
   
    
    
}