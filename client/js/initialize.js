const state ={}
let user_collection;

function init(weather_type) {
  const controlsElement = document.querySelector('.controls');
  if (state.loggedInUser) {
    fetch(`/api/suggestions/top?weather=${weather_type}`)
      .then((res) => res.json())
      .then((tops) => {
        state.tops = tops;
        renderTopsList();
        setTimeout(revealCarousel_top, 1000);
      });

    fetch(`/api/suggestions/bottom?weather=${weather_type}`)
      .then((res) => res.json())
      .then((bottoms) => {
        state.bottoms = bottoms;
        renderBottomsList();
        setTimeout(revealCarousel_Bottom, 1000);
      });

    fetch(`/api/suggestions/shoe?weather=${weather_type}`)
      .then((res) => res.json())
      .then((shoes) => {
        state.shoes = shoes;
        renderShoesList();
        setTimeout(revealCarousel_shoe, 1000);
      });
      document.querySelector('#tops').style.display = 'block';
    document.querySelector('#bottoms').style.display = 'block';
    document.querySelector('#shoes').style.display = 'block';
    document.querySelector('.controls').style.display = 'block';
    renderLogout()
  } else {
    renderSignUp(); // Render signup form initially
    hideSections();
  }
}

function hideSections() {
  document.querySelector('#tops').style.display = 'none';
  document.querySelector('#bottoms').style.display = 'none';
  document.querySelector('#shoes').style.display = 'none';
  document.querySelector('.controls').style.display = 'none';
}

// function init(weather_type){
//   fetch(`/api/suggestions/top?weather=${weather_type}`)
//   .then(res => res.json())
//   .then(tops => {
//     state.tops = tops
//     renderTopsList()
//     setTimeout(revealCarousel_top,1000)
//   })

// fetch(`/api/suggestions/bottom?weather=${weather_type}`)
//   .then(res => res.json())
//   .then(bottoms => {
//     state.bottoms = bottoms
//     renderBottomsList()
//     setTimeout(revealCarousel_Bottom,1000)
    
    
// })

// fetch(`/api/suggestions/shoe?weather=${weather_type}`)
//   .then(res => res.json())
//   .then(shoes => {
//     state.shoes = shoes
//     renderShoesList()
//     setTimeout(revealCarousel_shoe,1000)
// })
// }

// fetch('/api/sessions')
//   .then(res => res.json())
//   .then(data => {
//     if (data.result === 'successful') {
//       state.loggedInUser = data.email
//     }
//     // else (data.result !== 'successful') 
// })

// fetch('/api/collection')
//   .then(res => res.json())
//   .then(collecton => {
//     console.log('I am printing collections')
//     state.collection = collecton
//     user_collection = state.collection
//     readCollection()
// })



