const pincode = document.getElementById('pincode');
const btn = document.getElementById('btn');

btn.addEventListener('click', function(){

        const xhr = new XMLHttpRequest();
        const pincodevalue = pincode.value;
        xhr.open('GET', `http://api.zippopotam.us/IN/${pincodevalue}`, true);
        xhr.onload = function(){
            if(this.status === 200){
                const user = JSON.parse(this.responseText);
                let output = '';
                user.places.forEach(function(pin){
                    output +=  `<li>State: ${pin.state} Place Name: ${pin['place name']} Latitude: ${pin.latitude}</li>`;
                });
                document.getElementById('output').innerHTML = output;
                pincode.value = '';
            } else{
                alert('Something Went Wrong');
                pincode.value = '';
            }
        } 
        xhr.send();
        
});