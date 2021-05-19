const request = new XMLHttpRequest();
request.open('GET',"https://restcountries.eu/rest/v2/all",true);
request.send();

request.onload = ()=>{
    let data = JSON.parse(request.response);
    //console.log(data);
    data.forEach(element => {
        //console.log(element);
        let cname=element.name;
        let flag=element.flag;
        let ccapital =element.capital;
        let ccode= element.alpha2Code+", "+element.alpha3Code;
        let cregion = element.region;
        let latLong = element.latlng
        
        // console.log(cname);
        // console.log(flag);
        // console.log(ccapital);
        // console.log(ccode);        
        // console.log(cregion);
        // console.log(latLong);

        const card = document.createElement('div');
        card.className ='card';
        card.id='idcard';
        document.querySelector('body').appendChild(card);

        const head = document.createElement('h5');
        head.className='card-title';
        let countryName=document.createTextNode(cname);
        head.appendChild(countryName);
        document.querySelector('#idcard').appendChild(head);

        const image = document.createElement("img");
        image.className='card-img-top';
        image.setAttribute("src",flag);
        image.setAttribute("alt",cname);        
        document.querySelector("#idcard").appendChild(image); 

        




    });


}