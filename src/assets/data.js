import p1_img from './product_1.png'
import p2_img from './product_2.png'
import p3_img from './p37_img.png'
import p4_img from './product_4.png'
import p5_img from "./product_21.png"
import p6_img from "./product_22.png"
import p7_img from "./product_23.png"
import p8_img from "./product_24.png"
import p9_img from "./product_29.png";
import p10_img from "./product_30.png";
import p11_img from "./product_31.png";
import p12_img from "./product_32.png";

let data_product = [
 {
     id: 1,
     name: "Women's Black Hoodie",
     category: "women",
     image: p1_img,
     new_price: 3499,
     old_price: 4999,
     description: "A comfortable and stylish black hoodie for women, perfect for casual wear and cooler weather.",
     reviews: [
       { user: "Ayesha", rating: 5, text: "The material is so soft and it fits great!" },
       { user: "Sana", rating: 4, text: "Love the minimalist design. It's my new go-to hoodie." },
     ]
   },
   {
     id: 2,
     name: "Women's Pink Shirt",
     category: "women",
     image: p2_img,
     new_price: 7999,
     old_price: 9999,
     description: "An elegant pink shirt with a flowing design, ideal for a chic and feminine look.",
     reviews: [
       { user: "Hina", rating: 5, text: "The color is beautiful and it's very flattering." },
       { user: "Mehwish", rating: 5, text: "Received so many compliments on this shirt!" },
     ]
   },
   {
     id: 3,
     name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
     category: "women",
     image: p3_img,
     new_price: 15499,
     old_price: 18999,
     description: "A luxurious blouse with a unique striped pattern, featuring flutter sleeves and a peplum hem for a sophisticated silhouette.",
     reviews: [
       { user: "Fatima", rating: 5, text: "The craftsmanship is outstanding. Worth the price!" },
       { user: "Zara", rating: 4, text: "Beautiful design, but the sleeves are a bit snug." },
     ]
   },
   {
     id: 4,
     name: "Women's Elegant Dress",
     category: "women",
     image: p4_img,
     new_price: 6499,
     old_price: 8299,
     description: "An elegant dress that transitions from day to night, with a comfortable and flattering fit.",
     reviews: [
       { user: "Saba", rating: 5, text: "This dress is perfect for a formal event." },
       { user: "Iqra", rating: 4, text: "Love the style, but the color is slightly different in person." },
     ]
   },
    {
       id: 21,
       name: "Men Colorful Hoodie",
       category: "men",
       image: p5_img,
       new_price: 6999,
       old_price: 9999,
       description: "A vibrant and fun colorful hoodie for men, designed to stand out and add a pop of color to your outfit.",
       reviews: [
         { user: "Hamza", rating: 4, text: "The design is very unique and eye-catching." },
         { user: "Ahmed", rating: 4, text: "It's a decent hoodie for the price. Not too heavy." },
       ]
     },
     {
       id: 22,
       name: "Men Elegant White Hoodie",
       category: "men",
       image: p6_img,
       new_price: 10999,
       old_price: 14999,
       description: "An elegant and sophisticated white hoodie for men, perfect for a refined casual look.",
       reviews: [
         { user: "Ali", rating: 5, text: "This hoodie feels so luxurious and fits perfectly." },
         { user: "Bilal", rating: 5, text: "I'm very impressed with the craftsmanship." },
       ]
     },
     {
       id: 23,
       name: "Men Green Solid Bomber Jacket",
       category: "men",
       image: p7_img,
       new_price: 7499,
       old_price: 10499,
       description: "A versatile and comfortable green bomber jacket with a solid color, suitable for various occasions.",
       reviews: [
         { user: "Omer", rating: 4, text: "Good quality, but runs a little small." },
         { user: "Usman", rating: 5, text: "I wear this jacket all the time, it's so comfortable." },
       ]
     },
     {
       id: 24,
       name: "Men Black Leather Jacket",
       category: "men",
       image: p8_img,
       new_price: 8999,
       old_price: 11999,
       description: "A classic black leather jacket for men, designed for a sleek and stylish look.",
       reviews: [
         { user: "Hamza", rating: 5, text: "Looks exactly like the photo, very sharp." },
         { user: "Ahmed", rating: 5, text: "Perfect fit and great for all seasons." },
       ]
     },
       {
         id: 29,
         name: "Boys Colorful Jacket",
         category: "kid",
         image: p9_img,
         new_price: 3999,
         old_price: 4999,
         description: "A fun and durable colorful jacket for boys, perfect for adding a vibrant touch to their outfit.",
         reviews: [
           { user: "Fatima", rating: 5, text: "It's so soft and warm. Great for colder days." },
           { user: "Usman", rating: 4, text: "Good quality, but the colors are brighter than expected." },
         ]
       },
       {
         id: 30,
         name: "Boys Beautiful Winter Wear",
         category: "kid",
         image: p10_img,
         new_price: 4499,
         old_price: 5999,
         description: "A warm and stylish winter wear jacket for boys, with a beautiful design to keep them cozy.",
         reviews: [
           { user: "Sara", rating: 5, text: "He looks so handsome in this." },
           { user: "Ahmad", rating: 5, text: "Excellent product, very happy with it." },
         ]
       },
       {
         id: 31,
         name: "Boys Leather Jacket",
         category: "kid",
         image: p11_img,
         new_price: 2999,
         old_price: 3999,
         description: "A cool and casual leather jacket for boys, perfect for a fashionable and edgy look.",
         reviews: [
           { user: "Hina", rating: 4, text: "The fabric is okay, but my son likes it." },
           { user: "Mehwish", rating: 5, text: "It’s a great jacket for the price." },
         ]
       },
       {
         id: 32,
         name: "Boys Sports Wear",
         category: "kid",
         image: p12_img,
         new_price: 3499,
         old_price: 4499,
         description: "A durable and comfortable sports wear set for boys, perfect for athletic activities and everyday play.",
         reviews: [
           { user: "Saba", rating: 5, text: "Very soft and the colors are vibrant." },
           { user: "Iqra", rating: 4, text: "Good for the price, but it runs a bit small." },
         ]
       },


];

export default data_product;
