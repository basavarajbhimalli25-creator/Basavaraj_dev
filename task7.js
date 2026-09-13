// // // // // // Task 6 - FakeStore Product Report

// // // // // const apiUrl = "https://fakestoreapi.com/products";
// // // // // const usdToInr = 85;

// // // // // function createProductReport(products) {

// // // // //     console.log("\n========== PRODUCT REPORT ==========\n");

// // // // //     console.log(`Total Products: ${products.length}`);

// // // // //     const productNames = products.map(
// // // // //         product => product.title
// // // // //     );

// // // // //     console.log("\nProduct Names:");

// // // // //     productNames.forEach(name => {
// // // // //         console.log(`- ${name}`);
// // // // //     });

// // // // //     const expensiveProducts = products.filter(
// // // // //         product => product.price > 100
// // // // //     );

// // // // //     console.log("\nProducts Above $100:");

// // // // //     expensiveProducts.forEach(product => {
// // // // //         console.log(
// // // // //             `${product.title} - ₹${(product.price * usdToInr).toFixed(2)}`
// // // // //         );
// // // // //     });

// // // // //     const electronicsProduct = products.find(
// // // // //         product => product.category === "electronics"
// // // // //     );

// // // // //     console.log("\nElectronics Product:");

// // // // //     if (electronicsProduct) {
// // // // //         console.log(
// // // // //             `${electronicsProduct.title} - ₹${(electronicsProduct.price * usdToInr).toFixed(2)}`
// // // // //         );
// // // // //     } else {
// // // // //         console.log("No electronics product found.");
// // // // //     }

// // // // //     const totalPrice = products.reduce(
// // // // //         (total, product) => total + product.price,
// // // // //         0
// // // // //     );

// // // // //     console.log(
// // // // //         `\nTotal Product Value: ₹${(totalPrice * usdToInr).toFixed(2)}`
// // // // //     );

// // // // //     const anyProductAbove500 = products.some(
// // // // //         product => product.price > 500
// // // // //     );

// // // // //     console.log(
// // // // //         `\nAny Product Above $500: ${anyProductAbove500}`
// // // // //     );

// // // // //     const allProductsAbove1 = products.every(
// // // // //         product => product.price > 1
// // // // //     );

// // // // //     console.log(
// // // // //         `All Products Above $1: ${allProductsAbove1}`
// // // // //     );

// // // // //     const sortedProducts = [...products].sort(
// // // // //         (a, b) => b.price - a.price
// // // // //     );

// // // // //     console.log("\nHighest → Lowest:");

// // // // //     sortedProducts.forEach(product => {
// // // // //         console.log(
// // // // //             `${product.title} - ₹${(product.price * usdToInr).toFixed(2)}`
// // // // //         );
// // // // //     });
// // // // // }

// // // // // fetch(apiUrl)
// // // // //     .then(response => response.json())
// // // // //     .then(products => {
// // // // //         createProductReport(products);
// // // // //     })
// // // // //     .catch(error => {
// // // // //         console.log("Something went wrong.");
// // // // //         console.log("Error:", error);
// // // // //     })
// // // // //     .finally(() => {
// // // // //         console.log("\n========== REPORT COMPLETED ==========");
// // // // //     });


// // // // // Task 2 - Product Category Dashboard

// // // // const apiUrl = "https://fakestoreapi.com/products";

// // // // function createDashboard(products) {

// // // //     const totalProducts = products.length;

// // // //     const electronics = products.filter(
// // // //         product => product.category === "electronics"
// // // //     ).length;

// // // //     const jewelery = products.filter(
// // // //         product => product.category === "jewelery"
// // // //     ).length;

// // // //     const mensClothing = products.filter(
// // // //         product => product.category === "men's clothing"
// // // //     ).length;

// // // //     const womensClothing = products.filter(
// // // //         product => product.category === "women's clothing"
// // // //     ).length;

// // // //     const highestPrice = Math.max(
// // // //         ...products.map(product => product.price)
// // // //     );

// // // //     const lowestPrice = Math.min(
// // // //         ...products.map(product => product.price)
// // // //     );

// // // //     const totalPrice = products.reduce(
// // // //         (total, product) => total + product.price,
// // // //         0
// // // //     );

// // // //     const averagePrice = totalPrice / totalProducts;

// // // //     // sort()
// // // //     const sortedProducts = [...products].sort(
// // // //         (a, b) => b.price - a.price
// // // //     );

// // // //     console.log(`
// // // // ===== PRODUCT DASHBOARD =====

// // // // Total Products: ${totalProducts}

// // // // Electronics: ${electronics}
// // // // Jewelery: ${jewelery}
// // // // Men's Clothing: ${mensClothing}
// // // // Women's Clothing: ${womensClothing}

// // // // Highest Price: $${highestPrice.toFixed(2)}
// // // // Lowest Price: $${lowestPrice.toFixed(2)}
// // // // Average Price: $${averagePrice.toFixed(2)}

// // // // ===== HIGHEST TO LOWEST =====
// // // // `);

// // // //     sortedProducts.forEach(product => {
// // // //         console.log(`${product.title} - $${product.price}`);
// // // //     });
// // // // }

// // // // fetch(apiUrl)
// // // //     .then(response => response.json())
// // // //     .then(products => {
// // // //         createDashboard(products);
// // // //     })
// // // //     .catch(error => {
// // // //         console.log("Error:", error);
// // // //     });



// // // // Task 3 - User & Post API

// // // const usersApi = "https://jsonplaceholder.typicode.com/users";
// // // const postsApi = "https://jsonplaceholder.typicode.com/posts";

// // // fetch(usersApi)
// // //     .then(response => response.json())
// // //     .then(users => {

// // //         console.log("===== ALL USER NAMES =====");

// // //         users.forEach(user => {
// // //             console.log(user.name);
// // //         });

// // //         console.log("\n===== USER NAME + EMAIL =====");

// // //         users.forEach(user => {
// // //             console.log(`${user.name} - ${user.email}`);
// // //         });

// // //         // Find user with ID 5
// // //         const user5 = users.find(
// // //             user => user.id === 5
// // //         );

// // //         console.log("\n===== USER ID 5 =====");
// // //         console.log(user5);

// // //         // Filter users from a city
// // //         const city = "South Christy";

// // //         const cityUsers = users.filter(
// // //             user => user.address.city === city
// // //         );

// // //         console.log(`\n===== USERS FROM ${city} =====`);

// // //         cityUsers.forEach(user => {
// // //             console.log(user.name);
// // //         });

// // //         // Fetch posts
// // //         return fetch(postsApi);
// // //     })
// // //     .then(response => response.json())
// // //     .then(posts => {

// // //         // Posts created by user ID 1
// // //         const userPosts = posts.filter(
// // //             post => post.userId === 1
// // //         );

// // //         console.log("\n===== POSTS BY USER ID 1 =====");

// // //         userPosts.forEach(post => {
// // //             console.log(`Title: ${post.title}`);
// // //         });

// // //         // Count posts
// // //         const postCount = userPosts.length;

// // //         console.log(
// // //             `\nUser ID 1 created ${postCount} posts.`
// // //         );

// // //         // Find first post with title > 50 characters
// // //         const longTitlePost = posts.find(
// // //             post => post.title.length > 50
// // //         );

// // //         console.log(
// // //             "\n===== FIRST TITLE WITH MORE THAN 50 CHARACTERS ====="
// // //         );

// // //         console.log(longTitlePost);
// // //     })
// // //     .catch(error => {
// // //         console.log("API Error:", error);
// // //     });




// // // Task 5 - API Shopping Cart

// // const apiUrl = "https://fakestoreapi.com/products";

// // function displayProducts(products) {

// //     console.log("===== AVAILABLE PRODUCTS =====");

// //     products.forEach(product => {
// //         console.log(
// //             `ID: ${product.id} | ${product.title} | $${product.price}`
// //         );
// //     });
// // }

// // function createCart(products, selectedIds) {

// //     const cart = products.filter(
// //         product => selectedIds.includes(product.id)
// //     );

// //     return cart;
// // }

// // function calculateCart(cart) {

// //     const total = cart.reduce(
// //         (sum, product) => sum + product.price,
// //         0
// //     );

// //     let discount = 0;

// //     if (total > 200) {
// //         discount = 20;
// //     } else if (total > 100) {
// //         discount = 10;
// //     }

// //     const discountAmount = total * discount / 100;

// //     const finalAmount = total - discountAmount;

// //     console.log("\n===== CART =====");

// //     cart.forEach((product, index) => {
// //         console.log(`
// // Product ${index + 1}: ${product.title}
// // Price: $${product.price}
// // `);
// //     });

// //     console.log(`Total: $${total.toFixed(2)}`);
// //     console.log(`Discount: ${discount}%`);
// //     console.log(`Discount Amount: $${discountAmount.toFixed(2)}`);
// //     console.log(`Final Amount: $${finalAmount.toFixed(2)}`);
// // }

// // fetch(apiUrl)
// //     .then(response => response.json())
// //     .then(products => {

// //         displayProducts(products);

// //         const input = prompt(
// //             "Enter product IDs separated by comma:"
// //         );

// //         const selectedIds = input
// //             .split(",")
// //             .map(id => Number(id.trim()));

// //         const cart = createCart(products, selectedIds);

// //         if (cart.length === 0) {
// //             console.log("No valid products selected.");
// //             return;
// //         }

// //         calculateCart(cart);
// //     })
// //     .catch(error => {
// //         console.log("API Error:", error);
// //     })
// //     .finally(() => {
// //         console.log("\nShopping cart operation completed.");
// //     });


// // Task 4 - API + Search

// const readline = require("readline");

// const apiUrl = "https://fakestoreapi.com/products";

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// function searchProducts(products, category, maxPrice) {
//     const filteredProducts = products.filter(product =>
//         product.category.toLowerCase() === category.toLowerCase() &&
//         product.price <= maxPrice
//     );

//     console.log("\n===== SEARCH RESULTS =====");

//     if (filteredProducts.length === 0) {
//         console.log("No products found.");
//         return;
//     }

//     filteredProducts.forEach(product => {
//         console.log(`
// Product: ${product.title}
// Price: $${product.price}
// Category: ${product.category}
// -------------------------`);
//     });
// }

// rl.question("Enter product category: ", category => {
//     rl.question("Enter maximum price: ", price => {
//         const maxPrice = Number(price);

//         if (isNaN(maxPrice)) {
//             console.log("Please enter a valid price.");
//             rl.close();
//             return;
//         }

//         fetch(apiUrl)
//             .then(response => response.json())
//             .then(products => {
//                 searchProducts(products, category, maxPrice);
//             })
//             .catch(error => {
//                 console.log("API Error:", error);
//             })
//             .finally(() => {
//                 rl.close();
//             });
//     });
// });


// Task 1 - FakeStore Product API

const apiUrl = "https://fakestoreapi.com/products";

fetch(apiUrl)
    .then(response => response.json())
    .then(products => {

        console.log("===== ALL PRODUCTS =====");

        products.forEach(product => {
            console.log(
                `Title: ${product.title}
Price: $${product.price}
Category: ${product.category}
-------------------------`
            );
        });

        // map() - create title and price array
        const productDetails = products.map(product => ({
            title: product.title,
            price: product.price
        }));

        console.log("===== TITLE AND PRICE =====");
        console.log(productDetails);

        // filter() - products above $100
        const expensiveProducts = products.filter(
            product => product.price > 100
        );

        console.log("===== PRODUCTS ABOVE $100 =====");
        console.log(expensiveProducts);

        // find() - first electronics product
        const electronicsProduct = products.find(
            product => product.category === "electronics"
        );

        console.log("===== FIRST ELECTRONICS PRODUCT =====");
        console.log(electronicsProduct);

        // reduce() - total price
        const totalPrice = products.reduce(
            (total, product) => total + product.price,
            0
        );

        console.log(`Total Price: $${totalPrice.toFixed(2)}`);

        // sort() - highest to lowest
        const sortedProducts = [...products].sort(
            (a, b) => b.price - a.price
        );

        console.log("===== HIGHEST TO LOWEST =====");

        sortedProducts.forEach(product => {
            console.log(`${product.title} - $${product.price}`);
        });
    })
    .catch(error => {
        console.log("API Error:", error);
    })
    .finally(() => {
        console.log("API request completed.");
    });