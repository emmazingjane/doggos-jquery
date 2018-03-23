$(document).ready(function() {
    console.log('ready');

    var allTheDoggos = [
        {
            name: 'Petunia', 
            age: 1,
            photo: 'https://fortunedotcom.files.wordpress.com/2017/08/512536165-e1510081190643.jpg',
            city: 'SF',
            state: 'CA'
        },
        {
            name: 'Boris', 
            age: 2,
            photo: 'https://www.stayathomemum.com.au/cache/860x380-0/wp-content/uploads/2015/10/Teacup-Pomeranian-White-e1446515202248.jpg',
            city: 'SF',
            state: 'CA'
        },
        {
            name: 'Millie', 
            age: 1,
            photo: 'https://www.babble.com/wp-content/uploads/2013/09/puppy5-624x398.jpg',
            city: 'LA',
            state: 'CA'
        },
        {
            name: 'Panda', 
            age: 3,
            photo: 'https://tailandfur.com/wp-content/uploads/2016/11/40-Fluffy-Pictures-of-Puppies-that-Looks-like-Pandas-3.jpg',
            city: 'SD',
            state: 'CA'
        },
        {
            name: 'Phoebe', 
            age: 4,
            photo: 'http://www.astro.cornell.edu/~derg/style/3864733873_57e2aae81c_o.jpg',
            city: 'SF',
            state: 'CA'
        },
        {
            name: 'Ian', 
            age: 8,
            photo: 'https://static1.squarespace.com/static/53a096cce4b00d7644776a0b/544d5f5ce4b0b7c1dfbfb70e/544d5fb8e4b048f0ef614dae/1414356922235/Shake+Puppies-1_Mixbreed.jpg',
            city: 'SF',
            state: 'CA'
        }
    ];

    var allPuppies = []; // filter allTheDoggos for just the puppies (< 2 years)
        var allPuppies = allTheDoggos.filter(allTheDoggos => allTheDoggos.age <2);
                console.log(allPuppies);
        
         var puppieUrl = allPuppies.forEach(function(array){
                var puppyImageUrl = array.photo;       
                 var puppyImageUrl = array.photo;       
                var puppyName = array.name
            $('#puppies').append(`<div class="card" style="width: 18rem;">
        <img class="card-img-top" src="${puppyUrl}" alt="Card image cap">
        <div class="card-body">
        <h5 class="card-title"> ${puppyName}</h5>
        </div>
        </div>`)

               });



    // var doggosWithPNames = []; // fillter allTheDoggos for those whose names start with P 
    var doggosWithPNames = allTheDoggos.filter(dog => dog.name[0] === 'P');
           console.log(doggosWithPNames)
        // (allTheDoggos => allTheDoggos.names[0] === 'P')

        var doggosWithPNames = doggosWithPNames.forEach(function(array){
            var puppyImageUrl = array.photo;       
             var puppyImageUrl = array.photo;       
            var puppyName = array.name
            $('#name-p').append(`<div class="card" style="width: 18rem;">
        <img class="card-img-top" src="${puppyUrl}" alt="Card image cap">
        <div class="card-body">
        <h5 class="card-title"> ${puppyName}</h5>
        </div>
        </div>`)

               });


    var doggosInSf = allTheDoggos.filter(dog => dog.city === 'SF');
        console.log(doggosInSf);

          var doggosInSf = doggosInSf.forEach(function(array){
            var puppyImageUrl = array.photo;       
            var puppyName = array.name
           $('#SF').append(`<div class="card" style="width: 18rem;">
        <img class="card-img-top" src="${puppyUrl}" alt="Card image cap">
        <div class="card-body">
        <h5 class="card-title"> ${puppyName}</h5>
        </div>
        </div>`)

               });


    var seniorDoggos = allTheDoggos.filter(dog => dog.age >7);
           console.log(seniorDoggos)
           seniorDoggos.forEach(function(puppyObj){
           var puppyUrl = puppyObj.photo    
           var puppyName = puppyObj.name
           $('#senior').append(`<div class="card" style="width: 18rem;">
        <img class="card-img-top" src="${puppyUrl}" alt="Card image cap">
        <div class="card-body">
        <h5 class="card-title"> ${puppyName}</h5>
        </div>
        </div>`)

               });



    var californiaDoggos = []; // etc

        var californiaDoggos = allTheDoggos.filter(dog => dog.state === 'CA');
        console.log(californiaDoggos);

          var californiaDoggos = californiaDoggos.forEach(function(array){
            var puppyImageUrl = array.photo;       
         var puppyImageUrl = array.photo;       
            var puppyName = array.name
           $('#ca').append(`<div class="card" style="width: 18rem;">
        <img class="card-img-top" src="${puppyUrl}" alt="Card image cap">
        <div class="card-body">
        <h5 class="card-title"> ${puppyName}</h5>
        </div>
        </div>`)

               });

    // 1. Figure out where each array of doggos should be displayed in the index.html
    // 2. Iterate through each array and append the doggo's name and photo to the HTML
    // 3. Use Bootstrap to style these dogs (Check out Bootstrap cards: https://getbootstrap.com/docs/4.0/components/card/)
});