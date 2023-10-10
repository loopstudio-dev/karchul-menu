const menuData = [
        { label: "veg", category: "Coffee - Chai", item: "Americano (Hot)", price: 90 },
        { label: "veg", category: "Coffee - Chai", item: "Americano (Iced)", price: 120 },
        { label: "veg", category: "Coffee - Chai", item: "Latte (Hot)", price: 99 },
        { label: "veg", category: "Coffee - Chai", item: "Latte (Iced)", price: 129 },
        { label: "veg", category: "Coffee - Chai", item: "Latte (Cold)", price: 159 },
        { label: "veg", category: "Coffee - Chai", item: "Cappuccino (Hot)", price: 109 },
        { label: "veg", category: "Coffee - Chai", item: "Cappuccino (Iced)", price: 139 },
        { label: "veg", category: "Coffee - Chai", item: "Cappuccino (Cold)", price: 169 },
        { label: "veg", category: "Coffee - Chai", item: "Hazelnut Latte (Hot)", price: 109 },
        { label: "veg", category: "Coffee - Chai", item: "Hazelnut Latte (Iced)", price: 139 },
        { label: "veg", category: "Coffee - Chai", item: "Hazelnut Latte (Cold)", price: 169 },
        { label: "veg", category: "Coffee - Chai", item: "Mocha (Hot)", price: 109 },
        { label: "veg", category: "Coffee - Chai", item: "Mocha (Iced)", price: 139 },
        { label: "veg", category: "Coffee - Chai", item: "Mocha (Cold)", price: 169 },
        { label: "veg", category: "Coffee - Chai", item: "Hot Chocolate (Hot)", price: 129 },
        { label: "veg", category: "Coffee - Chai", item: "Hot Chocolate (Cold)", price: 199 },
        { label: "veg", category: "Coffee - Chai", item: "Tea", price: 39 },
        { label: "veg", category: "Coffee - Chai", item: "Green Tea", price: 49 },
        { label: "veg", category: "Shakes", item: "Oreo Shake (Milk Shake)", price: 100 },
        { label: "veg", category: "Shakes", item: "Oreo Shake (Thick Shake)", price: 149 },
        { label: "veg", category: "Shakes", item: "Kit-Kat Shake (Milk Shake)", price: 130 },
        { label: "veg", category: "Shakes", item: "Kit-Kat Shake (Thick Shake)", price: 179 },
        { label: "veg", category: "Shakes", item: "Blueberry Shake (Milk Shake)", price: 130 },
        { label: "veg", category: "Shakes", item: "Blueberry Shake (Thick Shake)", price: 179 },
        { label: "veg", category: "Shakes", item: "Biscoff Shake (Milk Shake)", price: 130 },
        { label: "veg", category: "Shakes", item: "Biscoff Shake (Thick Shake)", price: 179 },
        { label: "veg", category: "Mocktails", item: "Virgin Mojito", price: 109 },
        { label: "veg", category: "Mocktails", item: "Watermelon Mocktail", price: 109 },
        { label: "veg", category: "Mocktails", item: "Ocean Tangy Blue", price: 119 },
        { label: "veg", category: "Mocktails", item: "Berry Blush", price: 119 },
        { label: "veg", category: "Sandwiches", item: "Veg Grilled Sandwich", price: 80 },
        { label: "veg", category: "Sandwiches", item: "Cheese Sandwich", price: 100 },
        { label: "veg", category: "Sandwiches", item: "Corn Cheese Sandwich", price: 110 },
        { label: "veg", category: "Sandwiches", item: "Grilled Paneer Sandwich", price: 120 },
        { label: "veg", category: "Sandwiches", item: "Mushroom Sandwich", price: 120 },
        { label: "non-veg", category: "Sandwiches", item: "Egg & Chicken Sandwich", price: 100 },
        { label: "non-veg", category: "Sandwiches", item: "Chicken Cheese Sandwich", price: 120 },
        { label: "non-veg", category: "Sandwiches", item: "Peri Peri Chicken Sandwich", price: 130 },
        { label: "non-veg", category: "Sandwiches", item: "Chipotle Chicken Sandwich", price: 150 },
        { label: "veg", category: "Pasta", item: "Veggies Pasta", price: 149 },
        { label: "veg", category: "Pasta", item: "Mushroom Pasta", price: 149 },
        { label: "non-veg", category: "Pasta", item: "Chicken Pasta", price: 199 },
        { label: "veg", category: "Fries", item: "Classic Salted Fries", price: 129 },
        { label: "veg", category: "Fries", item: "Peri Peri Fries", price: 149 },
        { label: "veg", category: "Fries", item: "Cheese Loaded Fries", price: 179 },
        { label: "veg", category: "Burgers", item: "Veg Patty Burger", price: 119 },
        { label: "veg", category: "Burgers", item: "Paneer Pillow Burger", price: 149 },
        { label: "veg", category: "Burgers", item: "Mushroom Burger", price: 139 },
        { label: "non-veg", category: "Burgers", item: "Egg Patty Burger", price: 99 },
        { label: "non-veg", category: "Burgers", item: "Egg & Cheese Burger", price: 119 },
        { label: "non-veg", category: "Burgers", item: "Classic Chicken Patty Burger", price: 149 },
        { label: "non-veg", category: "Burgers", item: "Peri Peri Chicken Burger", price: 159 },
        { label: "non-veg", category: "Burgers", item: "Chipotle Chicken Burger", price: 159 },
        { label: "non-veg", category: "Burgers", item: "K Chicken Burger", price: 199 },
        { label: "veg", category: "Momo Fried", item: "Veg Momo", price: 129 },
        { label: "veg", category: "Momo Fried", item: "Paneer Momo", price: 149 },
        { label: "non-veg", category: "Momo Fried", item: "Chicken Momo", price: 149 },
        { label: "veg", category: "Pizza-classic", item: "Onion Pizza", price: 179 },
        { label: "veg", category: "Pizza-classic", item: "Veggie Delight Pizza", price: 239 },
        { label: "veg", category: "Pizza-classic", item: "Sweet Corn Pizza", price: 199 },
        { label: "veg", category: "Pizza-classic", item: "Peri Peri Paneer Pizza", price: 249 },
        { label: "veg", category: "Pizza-classic", item: "Mushroom Pizza", price: 229 },
        { label: "non-veg", category: "Pizza-classic", item: "Peri Peri Chicken Pizza", price: 269 },
        { label: "non-veg", category: "Pizza-classic", item: "Chipotle Chicken Pizza", price: 279 },
        { label: "non-veg", category: "Pizza-classic", item: "Grilled Chicken Pizza", price: 299 },
        { label: "non-veg", category: "Pizza-classic", item: "Hawaiian Chicken Pizza", price: 319 },
        { label: "veg", category: "Square Pan Pizza", item: "Veggies Pizza", price: 179 },
        { label: "veg", category: "Square Pan Pizza", item: "Paneer Pizza", price: 229 },
        { label: "veg", category: "Square Pan Pizza", item: "Mushroom Pizza", price: 229 },
        { label: "non-veg", category: "Square Pan Pizza", item: "Peri Peri Chicken Pizza", price: 249 },
        { label: "non-veg", category: "Square Pan Pizza", item: "Chipotle Chicken Pizza", price: 279 },
        { label: "non-veg", category: "Square Pan Pizza", item: "Hawaiian Chicken Pizza", price: 299 },
        { label: "non-veg", category: "Desserts", item: "Brownie Ice Cream", price: 170 },
        { label: "non-veg", category: "Desserts", item: "Brownie Cup", price: 150 },
        { label: "veg", category: "Desserts", item: "Affogato", price: 150 },
        { label: "veg", category: "Desserts", item: "Chocolate Momo", price: 199 },
        { label: "non-veg", category: "K Specials", item: "Inverted Burger", price: 299 },
        { label: "non-veg", category: "K Specials", item: "Loaded Chicken", price: 249 },
        { label: "non-veg", category: "K Specials", item: "24k Ice Cream", price: 299 },
        { label: "non-veg", category: "K Specials", item: "No-Dough Chicken Pizza", price: 399 },
        { label: "non-veg", category: "Continental Mandi", item: "2 Person", price: 499 },
        { label: "non-veg", category: "Continental Mandi", item: "4 Person", price: 799 },
        { label: "veg", category: "Fries Wraps", item: "Cheese Wraps", price: 99 },
        { label: "veg", category: "Fries Wraps", item: "Fries Wrap", price: 119 },
        { label: "veg", category: "Fries Wraps", item: "Paneer & Fries Wrap", price: 129 },
        { label: "non-veg", category: "Fries Wraps", item: "Peri Peri Chicken Wrap", price: 129 },
        { label: "non-veg", category: "Fries Wraps", item: "Chipotle Chicken Wrap", price: 129 },
        { label: "non-veg", category: "Fries Wraps", item: "Grilled Chicken Wrap", price: 149 },
        { label: "veg", category: "Tortias", item: "Cheese", price: 129 },
        { label: "veg", category: "Tortias", item: "Chocolate", price: 99 },
        // Add more menu items as needed
    ];

function displayCategories() {
    const accordion = document.getElementById('menuAccordion');
    const uniqueCategories = [...new Set(menuData.map(item => item.category))];

    uniqueCategories.forEach(category => {
        const categoryItems = menuData.filter(item => item.category === category);

        // Create accordion card
        const card = document.createElement('div');
        card.classList.add('accordion-item');

        // Create card header (category chicklet)
        const categoryChicklet = document.createElement('h2');
        categoryChicklet.classList.add('accordion-header');
        card.appendChild(categoryChicklet);

        const categoryButton = document.createElement('button');
        categoryButton.classList.add('accordion-button');
        categoryButton.setAttribute('type', 'button');
        categoryButton.setAttribute('data-bs-toggle', 'collapse');
        categoryButton.setAttribute('data-bs-target', `#collapse-${category.replace(/\s+/g, '-')}`);
        categoryButton.setAttribute('aria-expanded', 'false');
        categoryButton.setAttribute('aria-controls', `collapse-${category.replace(/\s+/g, '-')}`);
        categoryButton.textContent = category;
        categoryChicklet.appendChild(categoryButton);

        // Create card body (menu items)
        const cardBody = document.createElement('div');
        cardBody.classList.add('accordion-collapse', 'collapse');
        cardBody.setAttribute('id', `collapse-${category.replace(/\s+/g, '-')}`);
        cardBody.setAttribute('aria-labelledby', `heading-${category.replace(/\s+/g, '-')}`);
        card.appendChild(cardBody);

        const itemList = document.createElement('ul');
        itemList.classList.add('list-group');

        categoryItems.forEach(item => {
            const listItem = document.createElement('li');
            listItem.classList.add('list-group-item');
            listItem.textContent = `${item.item} - ₹${item.price}`;
            itemList.appendChild(listItem);
        });

        cardBody.appendChild(itemList);

        accordion.appendChild(card);
    });
}

// Call the displayCategories function to populate the categories and menu items
displayCategories();

// Enable Bootstrap accordion behavior
document.addEventListener('DOMContentLoaded', function () {
    new bootstrap.Collapse(document.querySelectorAll('.accordion-collapse'), {
        toggle: false // Prevents multiple card bodies from being open at once
    });
});
