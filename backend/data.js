import bcrypt from "bcryptjs";
const data = {
    users: [
        {
    name: "Borhen",
    email: "borem3110@gmail.com",
    password: bcrypt.hashSync('1234', 8),
    isAdmin: true
},
{
    name: "Morad",
    email: "momo@gmail.com",
    password: bcrypt.hashSync('1080', 8),
    isAdmin: false
}
    ],
    products: [
        {
           
            name: "Aprilia sr 101",
            image: "../images/p1.jpg",
            category: "mecanic",
            subCategory: "bike",
            price: 18645,
            numInStock: 21,
            brand: "Aprilia",
            rating: 4.8,
            numReviews: 105,
            description: "High quality"
        },
        {
           
            name: "Aprilia cr 150",
            image: "../images/p2.jpg",
            category: "mecanic",
            subCategory: "bike",
            price: 1865,
            numInStock: 35,
            brand: "Aprilia",
            rating: 4,
            numReviews: 103,
            description: "High quality"
        },
        {
           
            name: "Harley Davidson",
            image: "../images/p3.jpg",
            category: "mecanic",
            subCategory: "bike",
            price: 286745,
            numInStock: 7,
            brand: "ApriliaHarley",
            rating: 4.5,
            numReviews: 204,
            description: "High quality"
        },
        {
            
            name: "Honda cbr1001",
            image: "../images/p4.jpg",
            category: "mecanic",
            subCategory: "bike",
            price: 27655,
            numInStock: 6,
            brand: "Honda",
            rating: 5,
            numReviews: 105,
            description: "High quality"
        },
        {
           
            name: "Asus",
            image: "../images/p5.jpg",
            category: "electronic",
            subCategory: "pc",
            price: 1200,
            numInStock: 36,
            brand: "Asus",
            rating: 4,
            numReviews: 135,
            description: "High quality"
        },
        {
            
            name: "Hp pavillon",
            image: "../images/p6.jpg",
            category: "electronic",
            subCategory: "pc",
            price: 965,
            numInStock: 0,
            brand: "Hp",
            rating: 4.8,
            numReviews: 10,
            description: "High quality"
        },
        {
           
            name: "Lenovo 1500",
            image: "../images/p7.jpg",
            category: "electronic",
            subCategory: "pc",
            price: 1345,
            numInStock: 41,
            brand: "Lenovo",
            rating: 5,
            numReviews: 98,
            description: "High quality"
        },
        {
            
            name: "Hp Compaq",
            image: "../images/p8.jpg",
            category: "electronic",
            subCategory: "pc",
            price: 899,
            numInStock: 6,
            brand: "Hp",
            rating: 4.3,
            numReviews: 185,
            description: "High quality"
        },
        {
           
            name: "Toshiba 1400",
            image: "../images/p9.jpg",
            category: "electronic",
            subCategory: "pc",
            price: 1269,
            numInStock: 0,
            brand: "Toshiba",
            rating: 5,
            numReviews: 123,
            description: "High quality"
        },
        {
            
            name: "Huawei 35k",
            image: "../images/p10.jpg",
            category: "electronic",
            subCategory: "phone",
            price: 1045,
            numInStock: 18,
            brand: "Huawei",
            rating: 4.9,
            numReviews: 113,
            description: "High quality"
        },
        {
            
            name: "Iphone 5",
            image: "../images/p11.jpg",
            category: "electronic",
            subCategory: "phone",
            price: 1205,
            numInStock: 46,
            brand: "Huawei",
            rating: 4.7,
            numReviews: 85,
            description: "High quality"
        },
        {
            
            name: "Redmi n9",
            image: "../images/p12.jpg",
            category: "electronic",
            subCategory: "phone",
            price: 1254,
            numInStock: 2,
            brand: "Redmi",
            rating: 4.6,
            numReviews: 175,
            description: "High quality"
        },
        {
            
            name: "Samsung galaxy z",
            image: "../images/p13.jpg",
            category: "electronic",
            subCategory: "phone",
            price: 1045,
            numInStock: 19,
            brand: "Samsung",
            rating: 4.5,
            numReviews: 175,
            description: "High quality"
        },
        {
            
            name: "Samsung s4",
            image: "../images/p14.jpg",
            category: "electronic",
            subCategory: "phone",
            price: 1645,
            numInStock: 11,
            brand: "Samsung",
            rating: 4.9,
            numReviews: 1020,
            description: "High quality"
        },
        {
            
            name: "Samsung s5",
            image: "../images/p15.jpg",
            category: "electronic",
            subCategory: "phone",
            price: 1805,
            numInStock: 8,
            brand: "Samsung",
            rating: 4.8,
            numReviews: 115,
            description: "High quality"
        }

    ],
    

    allCategories: {categories:["mecanic", "electronic"],
    
}

};
export default data;