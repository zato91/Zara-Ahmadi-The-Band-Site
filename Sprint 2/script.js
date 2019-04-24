let myComment = [
    {  username : "Micheal Lyons", date:"12/12/2108",comment:"They BLEW the ROOF off at heire last show, oneeveryone started figuring out the were going. This is still simply the greatest opening of a convert I have EVER witnessed."},
    { username : "Gary Wong", date: "12/12/2108", comment:"Every time I see him shired I feel so motivated to get off my couch and hop on my board. He's so talented! I wish I can ride like him one day so I can really enjoy myself!"},
    { username : "Theodore Duncan", date: "11/15/2108",comment:"How can someone be so good!! You can tell he live for this and loves to do it every day. Everytime I see him I feel instantly happy! He's definitely my favorite ever!"},];



myComment.forEach( i => {

    let fo = document.getElementById('Comments');

    let h3 = document.createElement('h3');
    h3.classList.add('Comments__name');
    h3.innerText = i.username;
    fo.appendChild(h3);

    let dateSection = document.createElement('p');
    dateSection.classList.add('Comments__date');
    dateSection.innerText = i.date;
    fo.appendChild(dateSection);

    let commentSection = document.createElement('p');
    commentSection.classList.add('Comments__text');
    commentSection.innerText = i.comment;
    fo.appendChild(commentSection);
   

});





let myNewComment = {};
document.querySelector('.myform').addEventListener("submit", e => {
    e.preventDefault();
    let userN = (e.target.username.value);
    let userC = (e.target.comment.value);

 myComment.unshift({username:userN,comment:userC});
     
});

// function displayComment(e) {

//     e.preventDefault();
//     let userN = (e.target.username.value);
//     let userC = (e.target.comment.value);
//     let myNewComment = {
//         username:userN,
//         comment:userC,

//     };
//     myComment.unshift(myNewComment);
//     };
    
    
//     document.querySelector('.myform').addEventListener("submit",displayComment);

//     console.log(userN);