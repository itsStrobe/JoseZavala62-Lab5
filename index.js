
function actionItem(){
    let actionItem = document.getElementById("shopping_list");

    actionItem.addEventListener('click', ( event ) => {
        event.preventDefault();

        if( event.target.matches('.item_check') ){
            console.log("Check Item");
            shopping_item = event.target.parentElement;
            console.log(shopping_item.children);

            if(shopping_item.children[0].style.textDecoration == "line-through"){
                shopping_item.children[0].style.textDecoration = "";
            }
            else{
                shopping_item.children[0].style.textDecoration = "line-through";
            }
        }

        if( event.target.matches('.item_delete') ){
            console.log("Delete Item");
            shopping_item = event.target.parentElement;
            
            shopping_item.parentElement.removeChild(shopping_item);
        }
    });
}

function addItem(){

    let itemSubmit = document.getElementById("item_submit");

    itemSubmit.addEventListener('click', ( event ) => {
        event.preventDefault();

        let itemBox = document.getElementById("item_box");
        let shopping_list = document.getElementById("shopping_list");

        if(itemBox.value == "" || itemBox.value == null){
            console.log("No item provided.")
            return;
        }

        shopping_list.innerHTML += 
        `
            <li class="shopping_item">
                <p class="item_name">${itemBox.value}</p>
                <button class="item_check">check</button>
                <button class="item_delete">delete</button>
            </li>
        `

        itemBox.value = "";
    });
}

function init(){
    addItem();
    actionItem();
    console.log("Initialized");
}

init();
