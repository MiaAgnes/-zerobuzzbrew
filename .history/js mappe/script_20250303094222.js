let openSopping=document.querySelector('.shopping');
/* let closeShopping=document.querySelector('.closeShopping'); */
let list=document.querySelector('.product-list');
let listCard=document.querySelector('.listCard');
/* let body=document.querySelector('body'); */
let total=document.querySelector('.total');
let quantity=document.querySelector('.quantity');
openSopping.addEventListener('click', ()=>{
body.classList.add('active');
});
/* closeShopping.addEventListener('click', ()=>{
	container.classList.remove('active');
}) */
/* let products=[
	{
		id:1,
		name:'WEISSBIER',
		image:'img/GetAttachmentThumbnail.png',
		price:30
	},
	{
		id:2,
		name:'STOUT',
		image:'img/image006.png',
		price:30
	},
	{
		id:3,
		name:'SOUR',
		image:'/img/image005.png',
		price:30
	},
	{
		id:4,
		name:'LAGER',
	 	image:'/img/image004.png', 
		price:30
	},
	{
		id:5,
		name:'IPA',
		image:'/img/thumbnail_image001.png', 
		price:30
	},
	{
		id:6,
		name:'PILSNER',
		image:'img/image002.png', 
		price:30
	},
]; */
let listCards=[];//all products  objects are now in listCards
function initApp() {
	products.forEach((value, key) => {
			let newDiv = document.createElement('div');
			newDiv.classList.add('item');
			newDiv.innerHTML = `
					<img src="${value.image}" alt="${value.name}">
					<div class="title">${value.name}</div>
					<div class="price">kr ${value.price.toLocaleString()}</div>
					<button onclick="addToCart(${key})">Add to Cart</button>
			`;
			list.appendChild(newDiv);
	});
}

function addToCart(key) {
	let product = products[key];
	let found = listCards.find(item => item.id === product.id);
	
	if (found) {
			found.quantity++;
	} else {
			listCards.push({
					...product,
					quantity: 1
			});
	}
	updateCart();
}

function updateCart() {
	listCard.innerHTML = "";
	let totalPrice = 0;
	let totalQuantity = 0;

	listCards.forEach((item, index) => {
			totalPrice += item.price * item.quantity;
			totalQuantity += item.quantity;

			let newDiv = document.createElement('div');
			newDiv.classList.add('cartItem');
			newDiv.innerHTML = `
					<img src="${item.image}" alt="${item.name}">
					<div class="title">${item.name}</div>
					<div class="price">Kr ${item.price.toLocaleString()}</div>
					<div class="quantity">
							<button onclick="changeQuantity(${index}, -1)">-</button>
							${item.quantity}
							<button onclick="changeQuantity(${index}, 1)">+</button>
					</div>
			`;
			listCard.appendChild(newDiv);
	});

	total.innerText = `${totalPrice.toLocaleString()}`;
	quantity.innerText = totalQuantity;
}

function changeQuantity(index, change) {
	if (listCards[index].quantity + change <= 0) {
			listCards.splice(index, 1);
	} else {
			listCards[index].quantity += change;
	}
	updateCart();
}

initApp();
//https://www.youtube.com/watch?v=bCTd1eRX7Iw
