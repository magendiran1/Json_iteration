const getCountryListwisePolulation =()=>{

    let population_morethan_1crs = new XMLHttpRequest()
    
    population_morethan_1crs.open("GET",'https://restcountries.eu/rest/v2/all')
    
    population_morethan_1crs.responseType="json";
    
    population_morethan_1crs.onload=()=>{
        const filterpolution =population_morethan_1crs.response;
    
        for(var final in filterpolution)
    
        {
            if(filterpolution[final].population>1000000) {
                console.log(filterpolution[final].name,filterpolution[final].population)
            }
        }
    //    const final= filterpolution.filter( (population)=> population.population>1000000).
    //    map((filterpolution)=>filterpolution.name,filterpolution.population)
    
    
        // console.log(final)
    }
    
    population_morethan_1crs.send();
    
     }
    
    
     getCountryListwisePolulation();