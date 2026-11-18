function readAvalaibleComment(obj) {
    if (obj.comments.length === 0) {
        return `<p class="NOT-COMMENT">Noch keine Kommentare</p>`;
    }
    let rows = "";
    for (let c = 0; c < obj.comments.length; c++) {
        rows +=   /*html*/ `
        <table class="card-book-table-comment">
             <thead>
                <tr id="result-${c}">
                    <th>[${obj.comments[c].name}]</th>
                    <td>:${obj.comments[c].comment}</td>
                </tr>
             </thead>
         </table>
        `;
    }
    return rows
}


function isComment(obj, index) {
    return `
    <table class="card-comment">
        <tbody id="rowsColumn-${index}">${readAvalaibleComment(obj)}</tbody>
    </table>`;
}



function buildCard(obj, index) {

    return /*html*/ `
    <div class="card-book">
         <div class="name-book">
            <h2 id="card-book-name">${obj.name}</h2>
        </div>
        <hr class="l1"/>
        <div id="card-book-img" class="img-book">
        <img src="https://images.stockcake.com/public/d/1/c/d1c4811d-c402-4e3c-9fa7-268e7a285bf1_medium/vintage-books-stacked-stockcake.jpg" alt="book"></div>
          <hr class="l2"/>
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
                                <td id="card-book-author">:${obj.author}</td>
                            </tr>
                            <tr>
                                <th class="book-publishedYear">Erscheinungsjahr</th>
                                 <td id ="book-publishedYear">:${obj.publishedYear}</td>
                            </tr>
                            <tr>
                                <th class="book-genre">Genre:</th>
                                <td id="card-book-genre">:${obj.genre}</td>
                            </tr>
                        </thead>
                    </table>
                </div>
                <hr class="l3"/>
                <div class="card-receveid-comment"> 
                    <div  class="title-comment"> <h5>Kommentare</h5></div>
                    
                    <div class="card-book-all-comment">
                        <div id="comments-${index}">
                            <div class="card-comment">
                             
                               ${isComment(obj, index)}
                                
                            </div>
                        </div>
                    </div>
                </div>
                 <div class="card-book-send-comment">
                        <div class="input-group">
                            <input type="text" id="get-comment-${index}" class="input-text " 
                                placeholder="Schreibe dein Kommentar ..." >
                            <button id="btn-send-${index}" class="btn btn-primary" type="button" onclick=" getTextFomInput(${index})">
                                <i class="bi bi-send"></i>
                            </button>
                        </div> 
                    </div> 
                    
            </div> 
        </div>`;
}





