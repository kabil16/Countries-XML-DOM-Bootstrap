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


        let card = document.createElement('div');
        card.className ='card mycol col-lg-3';
        card.id='idcard';
        document.querySelector('body').appendChild(card);

        let head = document.createElement('h5');
        head.className='card-title ctitle';
        let countryName=document.createTextNode(cname);
        head.appendChild(countryName);
        card.appendChild(head);

        let image = document.createElement("img");
        image.className='card-img-top';
        image.setAttribute("src",flag);
        image.setAttribute("alt",cname);        
        card.appendChild(image); 

        let ul = document.createElement('ul');
        ul.className="list-group list-group-flush";
        card.appendChild(ul);

        let li1 = document.createElement('li');
        li1.className='list-group-item'
        li1.id='capital'
        let capitalName = document.createTextNode("capital :"+" "+ccapital);
        li1.appendChild(capitalName);
        ul.appendChild(li1);
    
        let li2 = document.createElement('li');
        li2.className='list-group-item'
        let counterCode = document.createTextNode("Code :"+" "+ccode);
        li2.appendChild(counterCode);
        ul.appendChild(li2);

        let li3 = document.createElement('li');
        li3.className='list-group-item'
        let countryRegion = document.createTextNode("Region :"+" "+cregion);
        li3.appendChild(countryRegion);
        ul.appendChild(li3);

        let li4 = document.createElement('li');
        li4.className='list-group-item'
        let counLong = document.createTextNode("latlong :"+" "+latLong);
        li4.appendChild(counLong);
        ul.appendChild(li4);
        




    });


}