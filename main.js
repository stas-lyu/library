// let array = [{
//         name: 'Maxim',
//         age: 30
//     },
//     {
//         name: 'Oleg',
//         age: 35
//     },
//     {
//         name: 'Olga',
//         age: 23
//     },
// ]

// localStorage.setItem('number', JSON.stringify(array));
// let render = document.querySelector('#render')
// render.innerHTML = JSON.parse(localStorage.getItem('array'));

// let books = [{
//         title: 'book #1',
//         imgSrc: 'img/1.png',
//         author: 'Tolkien',
//         price: '155$',
//     },
//     {
//         title: 'book #2',
//         imgSrc: 'img/2.jpg',
//         author: 'Joan Rolling',
//         price: '20$',
//     },
//     {
//         title: 'book #3',
//         imgSrc: 'img/3.png',
//         author: 'Tolstoi',
//         price: '20$',
//     },
//     {
//         title: 'book #4',
//         imgSrc: 'img/4.jpg',
//         author: 'Lesya Ukrainka',
//         price: '26$',
//     }

// ]

// let cart = []
// let render = document.querySelector('#render')
// let modal = document.querySelector('#modal')
// let renderBook = (booksArray) => {
//     booksArray.forEach((book, index) => {
//         let bookContainer = document.createElement('div')
//         bookContainer.classList.add('book-container');
//         bookContainer.innerHTML = `
//             <h2 class="title">${book.title}</h2>
//             <img class="banner" src="${book.imgSrc}">
//             <p class="author">${book.author}</p>
//             <p class="price">${book.price}</p>
//             <button data-book="${index}" type="button" class="btn-send">Send cart</button>
//             `
//         render.append(bookContainer)
//     })
// }

// renderBook(books)

// let btns = document.querySelectorAll('.btn-send');
// btns.forEach((btn) => {
//     btn.addEventListener('click', () => {
//         let index = btn.getAttribute('data-book');
//         let book = books[index]
//         cart.push(book)
//         btn.setAttribute('disabled', '')
//         cartBtn.style.display = 'block'
//     })
// })
// let cartBtn = document.createElement('button')
// cartBtn.innerText = 'Bag'
// cartBtn.style.display = 'none'
// cartBtn.classList.add('cartBtn')
// render.append(cartBtn)
// renderBook(cart);
// cartBtn.addEventListener('click', () => {
//     modal.style.display = 'block'
//     renderBook(cart);
// })
$(document).ready(function() {
    $('.modal').modal();
    $('.tabs').tabs();
});

let cart = [];
let books = [{
        id: 0,
        title: 'first book',
        imgSrs: 'img/1.png',
        author: 'first author',
        price: '120 $',
    },
    {
        id: 1,
        title: 'second book',
        imgSrs: 'img/2.jpg',
        author: 'second author',
        price: '140 $',
    },
    {
        id: 2,
        title: 'third book',
        imgSrs: 'img/3.png',
        author: 'third author',
        price: '100 $',
    },
    {
        id: 3,
        title: 'fourth book',
        imgSrs: 'img/4.jpg',
        author: 'fourth author',
        price: '160 $',
    },
]
let render = document.querySelector('.render')
let cartModal = document.querySelector('.modal')
let renderBook = (booksArray) => {

    booksArray.forEach((e, index) => {

        render.innerHTML += `
        <div class='bookdiv'>
        <ul class="book">

           <li class='banner'> <img src='${e.imgSrs}'</li>
       <li class='title booktitle'>   Название:<span>${e.title}</span></li>
         <li class='author'>   Автор: ${e.author}</li>
         <li class='price'>   Цена: ${e.price}</li>
            <div class="navigation">
            <input data-cart='false' class='buybtn' data-book="${index}" type="button"value="В корзину">
            <input class='editbtn modal-trigger'  data-target="modal1" type="button" data-book="${index}" value="Изменить">
            <input class='deleteBtn'  data-target="${index}" type="button" onclick="deleteBook()" data-book="${e.id}" value="Удалить">
            </div>
        </ul>
        </div>
        `
    })
}

renderBook(books);

let priceBook = document.querySelectorAll('.bookdiv');
let btns = document.querySelectorAll('.buybtn');
btns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        // let index = btn.getAttribute('data-book');
        let book = books[index];


        if (btn.getAttribute('data-cart') === 'false') {
            cart.push(book);
            btn.setAttribute('data-cart', 'true')
            btn.value = 'Убрать из корзины'

        } else {
            cart = cart.filter((item) => {
                return item.id != index
            })
            btn.setAttribute('data-cart', 'false')
            btn.value = 'Добавить в корзину'
        }
        console.log(cart)
        cartBtn.style.display = 'block';
    })
})

let cartBtn = document.createElement('button');

cartBtn.innerText = 'Корзина'
cartBtn.style.display = 'none';
cartBtn.classList.add('cartBtn');
render.append(cartBtn)
renderBook(cart);
cartBtn.addEventListener('click', () => {
    cartModal.style.display = 'block'
    cartModal.innerHTML = `
    <form> 
    Book: <div id='titleBook'></div>
    Quantity: <input type='text'>
    Name: <input type='text'>
    Delivery address: <textarea name=""  cols="30" rows="10"></textarea>
    Delivery date: <input type='text'>
    Comment:<textarea name=""  cols="30" rows="10"></textarea>
    <button type='button'>Купить</button>
    </form>
    `
    let titleBook = document.querySelector('#titleBook')
    cart.forEach((item) => {
        titleBook.innerHTML += `${item.title} ; `
    })
})

// function test(book) {
//     book.addEventListener('click', (e) => {
//         let index = e.target.getAttribute('data-book');
//         console.log(books[index].title);
//         books[index].title = 'test';


//     })
// }



let modalEdit = document.querySelector('#modal1');
let modalEditContent = modalEdit.querySelector('.modal-content');

function close_modal(modal) {
    let instance = M.Modal.getInstance(modal);
    instance.close();
}

let changeInfoBook = () => {
    let AllBooksBtn = document.querySelectorAll('.editbtn');
    AllBooksBtn.forEach((book) => {
        book.addEventListener('click', (event) => {
            let index = event.target.getAttribute('data-book');
            console.log(index);
            modalEditContent.innerHTML = `
        <input type="text" name="title" id="titleChange" placeholder="Change book title">
        <input type="text" name="author" id="authorChange" placeholder="Change book author">
        <input type="button" id="saveChange" data-book='${index}' value="Save">
        
    
        `
            let saveChangeBtn = document.querySelector('#saveChange');
            let titleInput = document.querySelector('input[name="title"]');
            let authorInput = document.querySelector('input[name="author"]');
            saveChangeBtn.addEventListener('click', (e) => {
                render.innerHTML = ``;
                books[index].title = titleInput.value;
                books[index].author = authorInput.value;
                console.log(books[index]);
                titleInput.value = ``;
                authorInput.value = ``;

                renderBook(books)
                close_modal(modalEdit);
                changeInfoBook();
            })
        })


    })
}
changeInfoBook();

let newBookBtn = document.querySelector('#newBook');
let addBookModal = document.querySelector('#modal2');
let titleNew = document.querySelector('#titleNew')
let authorNew = document.querySelector('#authorNew')
let priceNew = document.querySelector('#priceNew')
let image = document.querySelector('#img')

let renderNewBook = (arr) => {
    let src = "img/" + image.value.slice(12);
    console.log(src);
    let newBook = {
        id: arr.length,
        title: titleNew.value,
        imgSrs: src,
        author: authorNew.value,
        price: priceNew.value,
    };
    arr.push(newBook);
}
newBookBtn.addEventListener('click', () => {
    render.innerHTML = ``
    renderNewBook(books);
    console.log(books);
    renderBook(books)
    close_modal(addBookModal);
})


function deleteBook() {
    this.addEventListener('click', (event) => {
        let eventIndex = event.target.getAttribute("data-book");
        books = books.filter((item, index) => {
            return item.id != eventIndex
        })
        render.innerHTML = '';
        renderBook(books)
        console.log(books);
    })
}


function search() {
    setTimeout(() => {
        let input, filter, ul, li, a, i;
        input = document.querySelector('#search');
        filter = input.value.toUpperCase();
        ul = document.querySelectorAll('.book');
        let dookdiv = document.querySelectorAll('.bookdiv');
        dookdiv.forEach(e => {
            li = e.querySelector('.booktitle');
            span = li.getElementsByTagName('span')[0];
            console.log(span);
            console.log(span.innerHTML.toUpperCase().indexOf(filter));
            if (span.innerHTML.toUpperCase().indexOf(filter) > -1) {
                e.style.display = ''
            } else {
                e.style.display = 'none'
            }
        })
    }, 500)
}

// function search() {
//     setTimeout(() => {
//         let input, filter, ul, li, a, i;
//         input = document.querySelector('#search');
//         filter = input.value.toUpperCase();
//         ul = document.querySelectorAll('.booktitle');
//         ul.forEach((e) => {
//             console.log(e);
//             a = e.getElementsByTagName('span')[0];
//             bookdiv = document.querySelector('.bookdiv')
//             console.log(a.innerHTML.indexOf(filter));
//             if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
//                 bookdiv.style.display = ''
//             } else {
//                 bookdiv.style.display = 'none'
//             }

//         })



//     }, 500)
// }