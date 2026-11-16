
function commentOfUserTemplate(obj, index) {
    // build comments from user
    return `
      <table id="card-comment">
        <thead>
            <tr>
                <th id="name-comment">${obj.comments[index].name}</th>
                <td id="comment">:${obj.comments[index].comment}</td>
            </tr>      
        </thead>
     </table>
    `;
}
//[${getUserNameComment(obj, index)}] ${getUserComment(obj, index)}

function buildCard(obj, index) {
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
                    <div id="card-book-all-comment">
                       
                          <table  class="card-comment">
                            <thead>
                                <tr>
                                    <th id="name-commenter">[${obj.comments[index]}]</th>
                                    <td id="comment">:${obj.comments[index]}</td>
                                </tr>
                              
                            </thead>
                        </table>
                       
                    </div>
               
                    <div class="scroll-bar">scrollbar </div>
                </div>
              
            <div class="card-book-send-comment">
                <div class="input-group">
                    <input type="text" id="get-comment" class="form-control"
                        placeholder="Write comment" aria-label="Comments">
                    <button id="btn_send" class="btn btn-primary" type="button" aria-label="Send">
                    <i class="bi bi-send"></i>
                    </button>
                </div>
            </div> 
          </div> 
    </div>`;
}

//buildCard(obj[0].comments[0].comment);
//console.log(buildCard)



