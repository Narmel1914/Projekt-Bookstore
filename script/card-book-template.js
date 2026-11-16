function buildCard(obj, index) {
    // build all comments of this book

    /*let commentsHtml = "";
    let singleComment = "";
    if (obj.comments && obj.comments.length > 0) {
        singleComment = obj.comments[index];
        commentsHtml = `<div class="card-book-comments">
        <h5>${singleComment.name}: ${singleComment.comment}</h5>
    </div>`;
    
}*/
    return `
    <div class="card-book">
         <div class="name-book">
            <h2 id="card-book-name">${obj.name}</h2>
        </div>
        <hr/>
        <div id="card-book-img" class="img-book">
        <img src="https://images.stockcake.com/public/d/1/c/d1c4811d-c402-4e3c-9fa7-268e7a285bf1_medium/vintage-books-stacked-stockcake.jpg" alt="book"></div>
         <hr/>
        <div class="card-book-property">
              <div class="card-price-likes-counter">
                    <div class="book-price text-danger">
                    <h3 id="card-book-name">${obj.price.toFixed(2).replace(".", ",")} \u20AC</h3>
                    </div>
                    <div class="card-likes-counter">
                    <div class="book-likes">
                        <h3 id="card-book-likes-${index}">${obj.likes}</h3>
                    </div>
                    <div class="book-liked">
                        <div class="is-liked">
                            <i id="heart-liked-${index}" class="bi  bi-heart-fill text-danger" onclick="toggleLike(${index})"></i>
                            
                        </div>
                    </div>
                    </div>
              </div>

              <div class="card-book-reference">
                    <table class="card-book-table">
                        <thead>
                            <tr>
                                <th class="book-author">Author</th>
                                <td id="card-book-author">      :       ${obj.author}</td>
                            </tr>
                            <tr>
                                <th class="book-publishedYear">Erscheinungsjahr</th>
                                 <td id ="book-publishedYear">      :       ${obj.publishedYear}</td>
                            </tr>
                            <tr>
                                <th class="book-genre">Genre:</th>
                                <td id="card-book-genre">       :       ${obj.genre}</td>
                            </tr>
                        </thead>
                    </table>
                </div>
                <hr/>
                <div class="card-receveid-comment">
                <h5 class="title-comment">Kommentare</h5>
                <div class="card-book-all-comment">
                    <div class="card-book-id-comment">
                            comment
                    </div>
                    <div class="scroll-bar">scroll bar see</div>
                </div>
              
                <div class="card-book-send-comment">
                    <div class="card-get-comment">
                        <input type="text" id="get-comment" />
                    </div>
                    <div class="card-icon-commnent">
                        <a href="https://icons.getbootstrap.com/icons/send/"></a>
                    </div>
                </div>  
          </div> 
    </div>`;
}

//buildCard(obj[0].comments[0].comment);
//console.log(buildCard)

