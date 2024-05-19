document.addEventListener('DOMContentLoaded', function() {
    let post = document.getElementById("firstPost");
    let postsBox = document.getElementById("postsBox");
    
    let avatars = [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg/800px-Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg",
        "https://static.wikia.nocookie.net/masterchefusa/images/7/76/Gordon-Ramsay.jpg/revision/latest?cb=20131110042331",
        "https://static.wikia.nocookie.net/spongebob/images/7/77/KrustyKrabStock.png/revision/latest?cb=20221031053149"
    ];
    
    let usernames = [
        "Cristiano",
        "GordonRamsay'sHotMouth123",
        "ErdarBimukhanov123"
    ];
    
    let posts123 = [
        "https://img.olympics.com/images/image/private/t_s_pog_staticContent_hero_lg/f_auto/primary/yok4kqepjuoba1uobxte",
        "https://static1.srcdn.com/wordpress/wp-content/uploads/2020/06/Gordon-Ramsay-Its-Raw.jpg",
        "https://res.cloudinary.com/momentum-media-group-pty-ltd/image/upload/v1686795211/Space%20Connect/space-exploration-sc_fm1ysf.jpg"
    ];
    
    let postTexts = [
        "Si! Messi you're good so let's go 1v1! Are you ready?",
        "I know it's Meme but guys come on! Where is Respect???",
        "Exploring Space is very good so Enjoy my broadcast Channel where I with Aldiyar will tell you about Space and even more!!!"
    ];

    for(let i = 0; i < 100; i++) {
        let newPost = post.cloneNode(true);
        
        let imgPost = newPost.getElementsByClassName("img")[0];
        imgPost.setAttribute("src", posts123[i % 3]);
        
        let avatar = newPost.getElementsByClassName("ava")[0];
        avatar.setAttribute("src", avatars[i % 3]);
        
        let username = newPost.getElementsByClassName("username")[0];
        username.innerHTML = usernames[i % 3];
        
        let postText = newPost.getElementsByClassName("post-text")[0];
        postText.innerHTML = postTexts[i % 3];
        
        let likeButton = newPost.querySelector('.like');
        likeButton.addEventListener('click', function() {
            let likeCountElement = this.nextElementSibling.nextElementSibling;
            let likeCount = parseInt(likeCountElement.textContent);
            let isLiked = this.getAttribute('src') === '1stlove.png';
            
            if (isLiked) {
                this.setAttribute('src', '2ndlove.png');
                likeCount += 1;
            } else {
                this.setAttribute('src', '1stlove.png');
                likeCount -= 1;
            }
            likeCountElement.textContent = likeCount;
        });
        
        let commentButton = newPost.querySelector('.plain');
        commentButton.addEventListener('click', function() {
            let commentText = newPost.querySelector('#comment').value;
            let commentSave = document.createElement("div");
            commentSave.textContent = commentText;
            let commentSection = newPost.querySelector(".comments");
            commentSection.appendChild(commentSave);
            newPost.querySelector('#comment').value = "";
        });

        postsBox.appendChild(newPost);
    }
});
