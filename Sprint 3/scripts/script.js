let myComment = [];

    const keyApi = 'https://project-1-api.herokuapp.com/comments?api_key=55dd2515-3489-4080-b660-0b1275522325';
    
    const createPost = (i) => {
      let fo = document.getElementById('Comments__bloc');
          let h3 = document.createElement('h3');
          h3.classList.add('Comments__name');
          h3.innerText = i.name;
          
          
          let commentSection = document.createElement('p');
          commentSection.classList.add('Comments__text');
          commentSection.innerText = i.comment;
          
          fo.appendChild(h3);
        fo.appendChild(commentSection);


    };
    
    function putComments () { 
      axios.get(keyApi)
      .then(function (response) { 
        myComment = response.data;
        response.data.forEach(i => {


          createPost(i);

    
        });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
    };

  putComments();

// function displayComment () {myComment.forEach( i => {
//     // let imageSection = document.createElement('img');
//     // imageSection.classList.add('Comments__image');
//     // imageSection.innerText = i.image;
//     // fo.appendChild(imageSection);


//     let dateSection = document.createElement('p');
//     dateSection.classList.add('Comments__date');
//     dateSection.innerText = i.date;
//     fo.appendChild(dateSection);






document.querySelector('.myform').addEventListener("submit", e => {
    e.preventDefault();
    
    let userN = (e.target.username.value);
    let userC = (e.target.comment.value);
    // let userI = (e.target.image.value);
    
    axios.post('https://project-1-api.herokuapp.com/comments?api_key=55dd2515-3489-4080-b660-0b1275522325', {
      
        "name":userN,
        "comment":userC,
        // "timestamp": userD,
      
    })
    .then(function (response) {
      console.log(response.data.name);
    })
    .catch(function (error) {
      console.log(error);
    });
    // let today = new Date();
    // let dd = String(today.getDate()).padStart(2, '0');
    // let mm = String(today.getMonth() + 1).padStart(2, '0');
    // let yyyy = today.getFullYear();

    // today = mm + '/' + dd + '/' + yyyy;

 let x = document.getElementById('Comments__bloc').innerHTML = "";
 myComment.unshift({username:userN,comment:userC});
 
 putComments();
});