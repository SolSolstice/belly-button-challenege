// use d3 library to read in sample.json 

//.then() tells what happened after you acess the .json endpoint

d3.json("samples.json").then(function(data){
    console.log(data);

});

d3.json("samples.json").then(function(data){

    let trace = {
        x: data.map(data => data.names),
        y: data.map(data => data.metadata),
        type: "bar"
    };

    let dataTrace = [trace];

    let layout = {title: "work plea"};

    Plotly.newplot("plot1",dataTrace,layout);

});



/* 
//function will access the names? 
d3.json("samples.json").then(function(TheNames){
    return TheNames.data

});


*/ 
