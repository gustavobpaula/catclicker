
const model = {
	currentCat: null,
	admin: false,
	cats: [
		{
			clickCount: 0,
			name: 'Johny',
			image: 'https://www.catster.com/wp-content/uploads/2018/07/Savannah-cat-long-body-shot.jpg'
		},
		{
			clickCount: 0,
			name: 'Gloove',
			image: 'https://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg'
		},
		{
			clickCount: 0,
			name: 'Spike',
			image: 'https://media.mnn.com/assets/images/2018/07/cat_eating_fancy_ice_cream.jpg.838x0_q80.jpg'
		},
		{
			clickCount: 0,
			name: 'Harry',
			image: 'https://media.mnn.com/assets/images/2018/07/cat_one_eye_open.jpg.838x0_q80.jpg'
		},
		{
			clickCount: 0,
			name: 'Eleonor',
			image: 'http://www.royalcanin.ca/~/media/Royal-Canin-Canada/Product-Categories/cat-adult-landing-hero.ashx'
		},
		{
			clickCount: 0,
			name: 'Jason',
			image: 'https://thumbs.mic.com/OTg5ZmJiYmM1YyMvaE8xVS0tenRsM2pYYUtQaU5xekZoZEticUtRPS83eDEyNjozNTAweDIzMjkvODAweDQ1MC9maWx0ZXJzOmZvcm1hdChqcGVnKTpxdWFsaXR5KDgwKS9odHRwczovL3MzLmFtYXpvbmF3cy5jb20vcG9saWN5bWljLWltYWdlcy9hMTI1YWUwNDAyMDc2YzZjZmNmOGE5ODczZmVmMzZjMDAzOTAxNWMzZTc4NzBmY2M0N2Q3OGM3YmJkMDVjNmM5LmpwZw.jpg'
		}
	]
}

const octopus = {

	init: () => {
		model.currentCat = model.cats[0];

		catListView.init();
		catView.init();
	},

	incrementCounter: () => {
		model.currentCat.clickCount++;
		catView.render();
	},

	getCurrentCat: () => {
		return model.currentCat;
	},

	setCurrentCat: (cat) => {
		model.currentCat = cat;
	},

	getCats: () => {
		return model.cats;
	},

	showAdmin: () => {
		model.admin = true;
	}
}

const catView = {
	$catElem: document.getElementById('cat'),
	$catName: document.getElementById('cat-name'),
	$catImage: document.getElementById('cat-image'),
	$clicksElem: document.getElementById('clicks'),

	init: function() {
		this.$catImage.addEventListener('click', () => {
			octopus.incrementCounter();
		});

		this.render();
	},

	render: function() {
		const currentCat = octopus.getCurrentCat();

		this.$clicksElem.textContent = currentCat.clickCount;
		this.$catName.textContent = currentCat.name;
		this.$catImage.src = currentCat.image;
	}
}

const catListView = {

	$menu: document.getElementById('menu'),

	init: function() {
		this.render();
	},

	render: function() {

		const listOfCats = octopus.getCats();

		for (let cat of listOfCats) {
			const elementCat = document.createElement('li');
			elementCat.textContent = cat.name;

			elementCat.addEventListener('click', ((catCopy) => {
				return () => {
					octopus.setCurrentCat(catCopy);
					catView.render();
				}
			})(cat));

			this.$menu.appendChild(elementCat);
		}

	}
}

const adminView = {

	$adminForm: document.getElementById('admin-form'),
	$name: document.getElementById('name'),
	$image: document.getElementById('image'),
	$clickCount: document.getElementById('clickCount'),
	$adminButton: document.getElementById('admin-buttom'),
	$cancel: document.getElementById('cancel'),
	$save: document.getElementById('save'),

	init: function () {

		this.$adminButton.addEventListener('click', () => {
			octopus.showAdmin();
		});

		this.salve.addEventListener('click', () => {
			octopus.showAdmin();
		});
	}



}

octopus.init();

