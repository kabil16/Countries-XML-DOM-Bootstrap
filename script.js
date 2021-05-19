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

        const ul = document.createElement('ul');
        ul.className="list-group list-group-flush";
        document.querySelector("#idcard").appendChild(ul);

        const li1 = document.createElement('li');
        li1.className='list-group-item'
        let capitalName = document.createTextNode(ccapital);
        li1.appendChild(capitalName);
        ul.appendChild(li1);

        const li2 = document.createElement('li');
        li2.className='list-group-item'
        let counterCode = document.createTextNode(ccode);
        li2.appendChild(counterCode);
        ul.appendChild(li2);

        const li3 = document.createElement('li');
        li3.className='list-group-item'
        let countryRegion = document.createTextNode(cregion);
        li3.appendChild(countryRegion);
        ul.appendChild(li3);

        const li4 = document.createElement('li');
        li4.className='list-group-item'
        let counLong = document.createTextNode(latLong);
        li4.appendChild(counLong);
        ul.appendChild(li4);
        




    });


}