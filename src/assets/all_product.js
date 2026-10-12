import p1_img from "./product_1.png";
import p2_img from "./product_2.png";
import p4_img from "./product_4.png";
import p5_img from "./product_5.png";
import p6_img from "./product_6.png";
import p7_img from "./product_7.png";
import p8_img from "./product_8.png";
import p9_img from "./product_9.png";
import p10_img from "./product_10.png";
import p12_img from "./product_12.png";
import p13_img from "./product_13.png";
import p14_img from "./product_14.png";
import p15_img from "./product_15.png";
import p16_img from "./product_16.png";
import p17_img from "./product_17.png";
import p18_img from "./product_18.png";
import p19_img from "./product_19.png";
import p20_img from "./product_20.png";
import p21_img from "./product_21.png";
import p22_img from "./product_22.png";
import p23_img from "./product_23.png";
import p24_img from "./product_24.png";
import p25_img from "./product_25.png";
import p26_img from "./product_26.png";
import p27_img from "./product_27.png";
import p28_img from "./product_28.png";
import p29_img from "./product_29.png";
import p30_img from "./product_30.png";
import p31_img from "./product_31.png";
import p32_img from "./product_32.png";
import p33_img from "./product_33.png";
import p34_img from "./product_34.png";
import p35_img from "./product_35.png";
import p36_img from "./product_36.png";
import p37_img from "./p37_img.png";
import p38_img from "./p38_img.png";
import p39_img from "./p39_img.png";
import p40_img from "./p40_img.png";
import p41_img from "./p41_img.png";
import p42_img from "./p42_img.png";
import p43_img from "./p43_img.png";
import p44_img from "./user6.jpeg";
import p45_img from "./p44_img.png";
import p46_img from "./p46_img.png";
import p47_img from "./p47_img.png";
import p48_img from "./p48_img.png";

let all_product = [
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
    image: p37_img,
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
    id: 5,
    name: "Striped Flutter Sleeve Purple Blouse",
    category: "women",
    image: p5_img,
    new_price: 8999,
    old_price: 11999,
    description: "A beautifully crafted blouse with a refined striped pattern in a lovely purple hue, featuring flutter sleeves and a peplum hem.",
    reviews: [
      { user: "Ayesha", rating: 5, text: "The color is gorgeous and it's very well-made." },
      { user: "Sana", rating: 5, text: "Excellent for a dinner party. Very chic!" },
    ]
  },
  {
    id: 6,
    name: "Women's Brown Dress with Scarf",
    category: "women",
    image: p6_img,
    new_price: 10999,
    old_price: 13499,
    description: "A stylish brown dress that comes with a matching scarf, offering a complete and fashionable look.",
    reviews: [
      { user: "Hina", rating: 5, text: "I love this outfit! The scarf adds a nice touch." },
      { user: "Mehwish", rating: 4, text: "Great quality, but the dress is a little long on me." },
    ]
  },
  {
    id: 7,
    name: "Women's Simple Wear",
    category: "women",
    image: p7_img,
    new_price: 5299,
    old_price: 6599,
    description: "A simple yet stylish piece of clothing for women, designed for comfort and ease.",
    reviews: [
      { user: "Fatima", rating: 4, text: "Good everyday wear. The fabric is comfortable." },
      { user: "Zara", rating: 3, text: "It's a bit too plain for my taste." },
    ]
  },
  {
    id: 8,
    name: "Women's Beautiful Black Dress",
    category: "women",
    image: p8_img,
    new_price: 3999,
    old_price: 4999,
    description: "A timeless black dress with a beautiful, elegant design, suitable for any occasion.",
    reviews: [
      { user: "Saba", rating: 5, text: "A classic! Every woman needs a dress like this." },
      { user: "Iqra", rating: 4, text: "Fits perfectly, but I wish the fabric was a bit more stretchy." },
    ]
  },
  {
    id: 9,
    name: "Women's Party Wear",
    category: "women",
    image: p9_img,
    new_price: 7499,
    old_price: 9899,
    description: "A fashionable party dress with a trendy design, perfect for making a statement at any event.",
    reviews: [
      { user: "Ayesha", rating: 5, text: "This dress is so fun and stylish!" },
      { user: "Sana", rating: 4, text: "Looks great, but the embellishments are a bit delicate." },
    ]
  },
  {
    id: 10,
    name: "Women's Elegant Red Dress",
    category: "women",
    image: p10_img,
    new_price: 12499,
    old_price: 16999,
    description: "A show-stopping elegant red dress crafted with premium materials and a graceful silhouette.",
    reviews: [
      { user: "Hina", rating: 5, text: "The color is absolutely stunning and it fits like a glove." },
      { user: "Mehwish", rating: 5, text: "I felt like a queen in this dress. Worth every penny!" },
    ]
  },
  {
    id: 11,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "women",
    image: p5_img,
    new_price: 6999,
    old_price: 8499,
    description: "A stylish and breathable blouse with a classic striped design, flutter sleeves, and a comfortable peplum hem for all-day wear.",
    reviews: [
      { user: "Fatima", rating: 4, text: "It’s a nice blouse, easy to wear." },
      { user: "Zara", rating: 4, text: "Good value and looks just like the photo." },
    ]
  },
  {
    id: 12,
    name: "Women's Winter Wear",
    category: "women",
    image: p12_img,
    new_price: 4999,
    old_price: 6399,
    description: "A cozy and warm winter jacket for women, perfect for staying comfortable and stylish in cold weather.",
    reviews: [
      { user: "Saba", rating: 5, text: "So warm and comfortable! Exactly what I needed." },
      { user: "Iqra", rating: 4, text: "The fit is good, but the zipper can be a bit tricky." },
    ]
  },
  {
    id: 13,
    name: "Men's Green Hoodie",
    category: "men",
    image: p13_img,
    new_price: 7999,
    old_price: 10999,
    description: "A comfortable and casual green hoodie for men, featuring a classic design and soft fabric.",
    reviews: [
      { user: "Ali", rating: 5, text: "This hoodie is so comfortable and the color is great." },
      { user: "Bilal", rating: 4, text: "Fits well and is perfect for a relaxed look." },
    ]
  },
  {
    id: 14,
    name: "Men's White Jacket",
    category: "men",
    image: p14_img,
    new_price: 9499,
    old_price: 12999,
    description: "A sleek and modern white jacket for men, offering a clean and stylish look for any occasion.",
    reviews: [
      { user: "Omer", rating: 5, text: "The quality is amazing. Looks very sharp." },
      { user: "Usman", rating: 5, text: "A great jacket for daily wear, I get a lot of compliments." },
    ]
  },
  {
    id: 15,
    name: "Men's Elegant Jacket",
    category: "men",
    image: p15_img,
    new_price: 8499,
    old_price: 11499,
    description: "An elegant jacket for men, combining style and sophistication with a comfortable fit.",
    reviews: [
      { user: "Hamza", rating: 4, text: "Good jacket, but the sleeves are a bit long." },
      { user: "Ahmed", rating: 5, text: "Looks exactly like the picture. Very happy with my purchase." },
    ]
  },
  {
    id: 16,
    name: "Men's Urban Street Red Jacket",
    category: "men",
    image: p16_img,
    new_price: 6999,
    old_price: 9999,
    description: "A trendy red jacket for men, perfect for an urban street style look.",
    reviews: [
      { user: "Ali", rating: 4, text: "The color is very vibrant. Great for a bold look." },
      { user: "Bilal", rating: 5, text: "The fit is great and it's very comfortable." },
    ]
  },
  {
    id: 17,
    name: "Men's Leather Jacket",
    category: "men",
    image: p17_img,
    new_price: 10999,
    old_price: 14999,
    description: "A classic leather jacket for men, made with high-quality material for a timeless, rugged look.",
    reviews: [
      { user: "Omer", rating: 5, text: "The material feels very premium. Looks expensive." },
      { user: "Usman", rating: 5, text: "Couldn't be happier with this purchase. It's a wardrobe staple." },
    ]
  },
  {
    id: 18,
    name: "Men's Sports Hoodie",
    category: "men",
    image: p18_img,
    new_price: 7499,
    old_price: 10499,
    description: "A comfortable sports hoodie for men, designed for athletic activities and casual wear.",
    reviews: [
      { user: "Hamza", rating: 4, text: "It's a nice hoodie for the gym. Lightweight and breathable." },
      { user: "Ahmed", rating: 3, text: "The zipper feels a bit flimsy." },
    ]
  },
  {
    id: 19,
    name: "Men White Hoodie",
    category: "men",
    image: p19_img,
    new_price: 9999,
    old_price: 13999,
    description: "A clean and simple white hoodie for men, offering a fresh and versatile look.",
    reviews: [
      { user: "Ali", rating: 5, text: "Very stylish and warm. A great addition to my wardrobe." },
      { user: "Bilal", rating: 5, text: "Perfect fit. It's my new favorite hoodie." },
    ]
  },
  {
    id: 20,
    name: "Men Blue Jacket",
    category: "men",
    image: p20_img,
    new_price: 8499,
    old_price: 11499,
    description: "A comfortable and practical blue jacket for men, perfect for everyday casual wear.",
    reviews: [
      { user: "Omer", rating: 4, text: "Good jacket, but the color is a little lighter than I thought." },
      { user: "Usman", rating: 5, text: "Highly recommend it. The fit is superb." },
    ]
  },
  {
    id: 21,
    name: "Men Colorful Hoodie",
    category: "men",
    image: p21_img,
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
    image: p22_img,
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
    image: p23_img,
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
    image: p24_img,
    new_price: 8999,
    old_price: 11999,
    description: "A classic black leather jacket for men, designed for a sleek and stylish look.",
    reviews: [
      { user: "Hamza", rating: 5, text: "Looks exactly like the photo, very sharp." },
      { user: "Ahmed", rating: 5, text: "Perfect fit and great for all seasons." },
    ]
  },
  {
    id: 25,
    name: "Boys Lemon Hoodie",
    category: "kid",
    image: p25_img,
    new_price: 2999,
    old_price: 3999,
    description: "A fun and cozy hooded sweatshirt for boys in a bright lemon color, perfect for adding a pop of cheer to their wardrobe.",
    reviews: [
      { user: "Fatima", rating: 5, text: "My son loves the color! It's so soft inside." },
      { user: "Usman", rating: 4, text: "Good quality, but the hood is a little large." },
    ]
  },
  {
    id: 26,
    name: "Boys Black Hoodie",
    category: "kid",
    image: p26_img,
    new_price: 3499,
    old_price: 4499,
    description: "A classic black hoodie for boys, perfect for a versatile and comfortable everyday look.",
    reviews: [
      { user: "Sara", rating: 5, text: "Great for playing outdoors, very durable." },
      { user: "Ahmad", rating: 5, text: "The fabric is soft and keeps him warm." },
    ]
  },
  {
    id: 27,
    name: "Boys Elegant Hoodie",
    category: "kid",
    image: p27_img,
    new_price: 4999,
    old_price: 6499,
    description: "A stylish and sophisticated hoodie for boys, designed for a modern and elegant look.",
    reviews: [
      { user: "Hina", rating: 5, text: "My son looks so cool in this. The design is great." },
      { user: "Mehwish", rating: 4, text: "The price is a bit high, but the quality is good." },
    ]
  },
  {
    id: 28,
    name: "Boys Green Hoodie",
    category: "kid",
    image: p28_img,
    new_price: 2999,
    old_price: 3999,
    description: "A comfortable and casual green hoodie for boys, perfect for school or relaxed outings.",
    reviews: [
      { user: "Saba", rating: 4, text: "Fits well, but the color is slightly different from the picture." },
      { user: "Iqra", rating: 5, text: "My son won't take it off, he loves it!" },
    ]
  },
  {
    id: 29,
    name: "Boys Colorful Jacket",
    category: "kid",
    image: p29_img,
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
    image: p30_img,
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
    image: p31_img,
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
    image: p32_img,
    new_price: 3499,
    old_price: 4499,
    description: "A durable and comfortable sports wear set for boys, perfect for athletic activities and everyday play.",
    reviews: [
      { user: "Saba", rating: 5, text: "Very soft and the colors are vibrant." },
      { user: "Iqra", rating: 4, text: "Good for the price, but it runs a bit small." },
    ]
  },
  {
    id: 33,
    name: "Boys Elegant Simple Shirt",
    category: "kid",
    image: p33_img,
    new_price: 4999,
    old_price: 6499,
    description: "An elegant and simple shirt for boys, offering a clean and polished look for any occasion.",
    reviews: [
      { user: "Fatima", rating: 5, text: "Keeps him looking smart and it's very easy to wash." },
      { user: "Usman", rating: 5, text: "The quality is fantastic, very durable." },
    ]
  },
  {
    id: 34,
    name: "Boys Blue Hoodie",
    category: "kid",
    image: p34_img,
    new_price: 2999,
    old_price: 3999,
    description: "A lightweight and comfortable blue hoodie for boys, perfect for casual wear and easy layering.",
    reviews: [
      { user: "Sara", rating: 4, text: "It's a nice hoodie for spring." },
      { user: "Ahmad", rating: 3, text: "The seams are a bit loose." },
    ]
  },
  {
    id: 35,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    image: p35_img,
    new_price: 3999,
    old_price: 4999,
    description: "This hooded sweatshirt is a great addition to any boy's wardrobe, offering a cool look with its orange colorblocked design.",
    reviews: [
      { user: "Hina", rating: 5, text: "He loves it, it's very comfy." },
      { user: "Mehwish", rating: 5, text: "Perfect for layering, very versatile." },
    ]
  },
  {
    id: 36,
    name: "Boys White Shirt, Black Jeans and Black Jacket",
    category: "kid",
    image: p36_img,
    new_price: 14499,
    old_price: 15999,
    description: "A complete and stylish outfit for boys, featuring a white shirt, black jeans, and a black jacket for a sharp look.",
    reviews: [
      { user: "Saba", rating: 5, text: "He looks so cool in this outfit. It's a great combination." },
      { user: "Iqra", rating: 4, text: "The fit is good, but the material is a bit stiff." },
    ]
  },
  {
    id: 37,
    name: "Women's Casual Floral Maxi Dress",
    category: "women",
    image: p37_img,
    new_price: 7999,
    old_price: 9499,
    description: "A beautiful maxi dress with a vibrant floral print, perfect for a casual day out or a special occasion.",
    reviews: [
      { user: "Ayesha", rating: 5, text: "Absolutely love the dress! It's so comfortable and the print is gorgeous." },
      { user: "Sana", rating: 4, text: "Fits well, but the fabric is a bit sheer." },
    ]
  },
  {
    id: 38,
    name: "Women's Classic Dress",
    category: "women",
    image: p38_img,
    new_price: 6499,
    old_price: 7999,
    description: "A timeless classic dress that can be styled for any event, from a business meeting to a dinner party.",
    reviews: [
      { user: "Hina", rating: 5, text: "Very elegant and versatile. A must-have." },
      { user: "Mehwish", rating: 5, text: "The fit is perfect and it's very comfortable." },
    ]
  },
  {
    id: 39,
    name: "Women's Party Wear",
    category: "women",
    image: p39_img,
    new_price: 13999,
    old_price: 18999,
    description: "A stunning party wear gown with intricate details and a flattering cut, designed to make you stand out.",
    reviews: [
      { user: "Fatima", rating: 5, text: "This dress is a showstopper. I felt amazing in it!" },
      { user: "Zara", rating: 5, text: "The sequins and embroidery are so well done." },
    ]
  },
  {
    id: 40,
    name: "Women's Elegant Dress",
    category: "women",
    image: p40_img,
    new_price: 9999,
    old_price: 12999,
    description: "An elegant and sophisticated dress with a graceful silhouette, perfect for formal occasions.",
    reviews: [
      { user: "Saba", rating: 5, text: "The dress is beautiful and the fabric is luxurious." },
      { user: "Iqra", rating: 4, text: "Good quality, but it runs a bit small." },
    ]
  },
  {
    id: 41,
    name: "Men's Slim Fit Formal Dress",
    category: "men",
    image: p41_img,
    new_price: 21999,
    old_price: 26999,
    description: "A sharp and modern slim fit formal suit, perfect for a polished professional look or a formal event.",
    reviews: [
      { user: "Ali", rating: 5, text: "The fit is impeccable. Looks very sharp." },
      { user: "Bilal", rating: 5, text: "Great suit for the price. Very comfortable to wear all day." },
    ]
  },
  {
    id: 42,
    name: "Men's Jacket",
    category: "men",
    image: p42_img,
    new_price: 8499,
    old_price: 10499,
    description: "A versatile casual jacket for men, offering a comfortable and stylish layer for any outfit.",
    reviews: [
      { user: "Omer", rating: 4, text: "Good everyday jacket. Not too heavy." },
      { user: "Usman", rating: 5, text: "Very stylish and a great fit." },
    ]
  },
  {
    id: 43,
    name: "Mens Casual Wear",
    category: "men",
    image: p43_img,
    new_price: 5999,
    old_price: 7999,
    description: "A comfortable and stylish casual outfit for men, perfect for daily wear or relaxed social gatherings.",
    reviews: [
      { user: "Hamza", rating: 5, text: "The material is soft and very breathable." },
      { user: "Ahmed", rating: 4, text: "Good value for money." },
    ]
  },
  {
    id: 44,
    name: "Men's Formal Wear",
    category: "men",
    image: p44_img,
    new_price: 16999,
    old_price: 19499,
    description: "A sophisticated formal wear ensemble for men, designed for a polished and elegant look at any event.",
    reviews: [
      { user: "Ali", rating: 5, text: "Looks very expensive and feels great to wear." },
      { user: "Bilal", rating: 5, text: "Received many compliments on this outfit." },
    ]
  },
  {
    id: 45,
    name: "Boys Formal Dress",
    category: "kid",
    image: p45_img,
    new_price: 4999,
    old_price: 6499,
    description: "A charming formal dress for boys, perfect for weddings, parties, and other special events.",
    reviews: [
      { user: "Fatima", rating: 5, text: "My son looks so handsome in this." },
      { user: "Usman", rating: 4, text: "Good quality, but the fabric is a bit stiff." },
    ]
  },
  {
    id: 46,
    name: "Boys Sleeveless Summer Dress",
    category: "kid",
    image: p46_img,
    new_price: 3499,
    old_price: 4999,
    description: "A light and breezy sleeveless summer dress for boys, ideal for keeping them cool and comfortable.",
    reviews: [
      { user: "Sara", rating: 5, text: "Perfect for the hot weather, and very easy to put on." },
      { user: "Ahmad", rating: 4, text: "Good for the price, but the colors are not as vibrant as the picture." },
    ]
  },
  {
    id: 47,
    name: "Boys Winter Wear",
    category: "kid",
    image: p47_img,
    new_price: 7999,
    old_price: 9499,
    description: "A warm and cozy winter wear jacket for boys, designed to provide excellent protection from the cold.",
    reviews: [
      { user: "Hina", rating: 5, text: "Keeps my son very warm. The quality is excellent." },
      { user: "Mehwish", rating: 5, text: "Very durable and easy to clean. Perfect for kids." },
    ]
  },
  {
    id: 48,
    name: "Boys Party Wear",
    category: "kid",
    image: p48_img,
    new_price: 3999,
    old_price: 5499,
    description: "A stylish and comfortable party wear shirt for boys, with a cool design for any celebration.",
    reviews: [
      { user: "Saba", rating: 5, text: "He looks so smart in this shirt. The fabric is soft." },
      { user: "Iqra", rating: 4, text: "Good shirt for the price, but the buttons feel a little loose." },
    ]
  },
];

export default all_product;