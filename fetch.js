let link = fetch('https://meme-api.herokuapp.com/gimme')
let get = link.then(function (responce){
    return responce.json();
});
get.then(function(data){
   console.log(data.url);
  
});

// response( in not any special keyword , its name of varibale.
// data is also not any special keyword, its name of variable.


// https://meme-api.herokuapp.com/gimme