// catagpry images

import Catagory1 from '../Images/product-9.png'
import Catagory2 from '../Images/category-2.png'
import Catagory3 from '../Images/deal-img2.png'
import Catagory4 from '../Images/Drinks/drink2.png'


export const Catagories =[
    {
        id:"01",
        name:"Vegetables",
        image:Catagory1,
        catagory:"Vegetables"
    },  
    {
        id:"02",
        name:"Fruits",
        image:Catagory2,
        catagory:"Fruits"
    }, 
    {
        id:"03",
        name:"Fish",
        image:Catagory3,
        catagory:"Fish"
    }, {
        id:"04",
        name:"Soft Drinks",
        image:Catagory4,
        catagory:"Drinks"
    }
]



import fish1 from '../Images/Fishes/Fish1.jpg';
import fish2 from '../Images/Fishes/Fish2.jpg';
import fish3 from '../Images/Fishes/Fish3.jpg';
import fish4 from '../Images/Fishes/Fish4.jpg';
import fish5 from '../Images/Fishes/Fish5.jpg';

// fruites images

import fruite1 from '../Images/Fruites/product-1.png';
import fruite2 from '../Images/Fruites/product-2.png';
import fruite3 from '../Images/Fruites/product-3.png';
import fruite4 from '../Images/Fruites/product-4.png';
import fruite5 from '../Images/Fruites/product-5.png';


// soft drinks images
import drink1 from '../Images/Drinks/Drink1.jpg'
import drink2 from '../Images/Drinks/drink2.png'
import drink3 from '../Images/Drinks/drink3.jpg'
import drink4 from '../Images/Drinks/drink4.jpg'
import drink5 from '../Images/Drinks/drink5.jpg'
// sub images


// vegetables
import vg1 from '../Images/Vagitables/vg1.jpg';
import vg2 from '../Images/Vagitables/vg2.jpg';
import vg3 from '../Images/Vagitables/vg3.jpg';
import vg4 from '../Images/Vagitables/vg4.jpg';
import vg5 from '../Images/Vagitables/vg5.jpg';
import vg6 from '../Images/Vagitables/vg7.jpg';
// sub images
import Tomato6 from '../Images/Vagitables/tomato (1).jpg';
import Tomato2 from '../Images/Vagitables/tomato (2).jpg';
import Tomato3 from '../Images/Vagitables/tomato (3).jpg';


export const AllProducts=[
    {
        id:"01",
        name:"Tomato",
        description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga doloremque consectetur fugiat rerum cumque sed soluta corporis, accusantium adipisci nobis nisi facilis, id in voluptas exercitationem hic sint reprehenderit unde consequuntur culpa nostrum veniam autem magnam? Debitis, mollitia porro? Quas totam quaerat amet eum assumenda eos! Quasi quos eveniet animi aspernatur adipisci error quia ex autem perferendis vero consequuntur culpa ut sequi, quam repudiandae nihil, hic fugiat sit fuga accusamus perspiciatis reiciendis distinctio corporis? Fugiat ut sunt perspiciatis ratione sit laboriosam quod labore debitis dignissimos aliquid, iure cupiditate, a delectus consequuntur voluptatum distinctio dolor molestiae? Veniam similique dolores eum quod?",
        catagory:"Vegetables",
        price:"250",
        off:"05%",
        lavel:"Popular",
        sold:"620",
        rating:"5",
        stock:"220",
        image:vg6,
        subImg:[
              { img1:vg6}, 
              { img2:Tomato6},
              { img3:Tomato2},
              { img4:Tomato3},
        ]
    }, 
    {
        id:"02",
        name:"Pototo",
        description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga doloremque consectetur fugiat rerum cumque sed soluta corporis, accusantium adipisci nobis nisi facilis, id in voluptas exercitationem hic sint reprehenderit unde consequuntur culpa nostrum veniam autem magnam? Debitis, mollitia porro? Quas totam quaerat amet eum assumenda eos! Quasi quos eveniet animi aspernatur adipisci error quia ex autem perferendis vero consequuntur culpa ut sequi, quam repudiandae nihil, hic fugiat sit fuga accusamus perspiciatis reiciendis distinctio corporis? Fugiat ut sunt perspiciatis ratione sit laboriosam quod labore debitis dignissimos aliquid, iure cupiditate, a delectus consequuntur voluptatum distinctio dolor molestiae? Veniam similique dolores eum quod?",
        catagory:"Vagitables",
        price:"250",
        off:"10%",
        lavel:"Popular",
        sold:"620",
        rating:"5",
        stock:"220",
        image:vg2,
        subImg:[
              { img1:vg2}, 
              { img2:Tomato2},
              { img4:Tomato6},
        ]

    },


    {
        id:"03",
        name:"Sea Fish1",
        description:"",
        catagory:"Fishes",
        price:"250",
        off:"",
        lavel:"new arrival",
        sold:"620",
        rating:"5",
        stock:"42",
        image:fish1,
        subImg:[
              { img1:fish1}, 
              { img2:fish2},
              { img3:fish3},
        ]
        
       

    },  
    {
        id:"04",
        name:"Sea Fish2",
        description:"",
        catagory:"Fishes",
        price:"250",
        off:"30%",
        lavel:"Featured",
        sold:"620",
        rating:"5",
        stock:"42",
        image:fish2,
        subImg:[
              { img1:fish2}, 
              { img2:fish1},
              { img3:fish3},
        ]
       

    }, 
    {
        id:"05",
        name:"Almond",
        description:"",
        catagory:"Fruites",
        price:"1080",
        off:"",
        lavel:"New",
        sold:"302",
        rating:"5",
        stock:"42",
        image:fruite2,
        subImg:[
            { img1:fruite2}, 
            { img2:fruite1},
            { img3:fruite3},
            { img4:fruite4},
      
        ]
    },
    {
        id:"06",
        name:"Malta",
        description:"",
        catagory:"Fruites",
        price:"130",
        off:"15%",
        lavel:"New",
        sold:"302",
        rating:"5",
        stock:"0",
        image:fruite3,
        subImg:[
            { img1:fruite3}, 
            { img2:fruite1},
            { img3:fruite2},
            { img4:fruite4},
        ]
       

    },
    {
        id:"07",
        name:"Apple",
        description:"",
        catagory:"Fruites",
        price:"180",
        off:"",
        lavel:"Popular",
        sold:"302",
        rating:"5",
        stock:"42",
        image:fruite4,
        subImg:[
            { img1:fruite4}, 
            { img2:fruite1},
            { img3:fruite2},
        ]
    },
    {
        id:"08",
        name:"Anar flavour",
        description:"",
        catagory:"SoftDrinks",
        price:"130",
        off:"",
        lavel:"New",
        sold:"3213",
        rating:"5",
        stock:"429",
        image:drink4,
        subImg:[
            { img1:drink4}, 
            { img3:drink2},
            { img4:drink3},
        ]
       

    },  {
        id:"09",
        name:"Letus pata",
        description:"",
        catagory:"Vegetables",
        price:"130",
        off:"",
        lavel:"Featured",
        sold:"3213",
        rating:"5",
        stock:"429",
        image:vg3,
        subImg:[
            { img1:vg3}, 
            { img2:vg1},
            { img3:vg2},
        ]
       
    }, 
    {
        id:"10",
        name:"Grape",
        description:"",
        catagory:"Fruites",
        price:"180",
        off:"",
        lavel:"New",
        sold:"302",
        rating:"5",
        stock:"42",
        image:fruite5,
        subImg:[
            { img1:fruite5}, 
            { img2:fruite1},
            { img3:fruite2},
            { img4:fruite4},
        ]

    },{
        id:"11",
        name:"Apple flavor",
        description:"",
        catagory:"SoftDrinks",
        price:"100",
        off:"03%",
        lavel:"Popular",
        sold:"653",
        rating:"5",
        stock:0,
        image:drink1,
        subImg:[
            { img1:drink1}, 
            { img3:drink3},
            { img4:drink4},
        ]

    },
    {
        id:"12",
        name:"Banana",
        description:"",
        catagory:"Fruites",
        price:"180",
        off:"32%",
        lavel:"New",
        sold:"302",
        rating:"5",
        stock:"42",
        image:fruite1,
        subImg:[
            { img1:fruite1}, 
            { img2:fruite2},
            { img3:fruite3},
            { img4:fruite4},
        ]

    },  {
        id:"13",
        name:"Chills",
        description:"",
        catagory:"Vegetables",
        price:"180",
        off:"",
        lavel:"New",
        sold:"302",
        rating:"5",
        stock:"42",
        image:vg5,
        subImg:[
            { img1:vg5}, 
            { img2:vg1},
            { img3:vg2},
           
        ]

    },  
    {
        id:"14",
        name:"Sea Fish3",
        description:"",
        catagory:"Fishes",
        price:"250",
        off:"",
        lavel:"Popular",
        sold:"620",
        rating:"5",
        stock:0,
        image:fish3,
        subImg:[
            { img1:fish3}, 
            { img2:fish1},
            { img3:fish2},
        ]
    }, 
    {
        id:"15",
        name:"Milk flavour",
        description:"",
        catagory:"SoftDrinks",
        price:"100",
        off:"08%",
        lavel:"Popular",
        sold:"653",
        rating:"5",
        stock:"320",
        image:drink2,
        subImg:[
            { img1:drink2}, 
            { img3:drink3},
            { img4:drink4},
        ]
    }, 
    {
        id:"16",
        name:"River Fish4",
        description:"",
        catagory:"Fishes",
        price:"470",
        off:"",
        lavel:"Popular",
        sold:"620",
        rating:"5",
        stock:"0",
        image:fish4,

       
    }, 
    {
        id:"16",
        name:"Coccumber",
        description:"",
        catagory:"Vegetables",
        price:"40",
        off:"05%",
        lavel:"New",
        sold:"620",
        rating:"5",
        stock:"42",
        image:vg4,
        subImg:[
            { img1:vg4}, 
            { img2:vg1},
        ]
       
    }, 
    {
        id:"17",
        name:"Sea Fish5",
        description:"",
        catagory:"Fishes",
        price:"320",
        off:"10%",
        lavel:"Popular",
        sold:"620",
        rating:"5",
        stock:"42",
        image:fish5,
        subImg:[
            { img1:fish5}, 
            { img3:fish2},
            { img4:fish3},
        ]
    }, 
    {
        id:"18",
        name:"Kashmiri Apple",
        description:"",
        catagory:"SoftDrinks",
        price:"100",
        off:"",
        lavel:"Popular",
        sold:"653",
        rating:"5",
        stock:"320",
        image:drink3,
        subImg:[
            { img1:drink3}, 
            { img2:drink1},
            { img3:drink2},
            { img4:drink4},
        ]
       
    }, 
    {
        id:"19",
        name:"Ledies Fingers",
        description:"",
        catagory:"Vegetables",
        price:"60",
        off:"08%",
        lavel:"Popular",
        sold:"620",
        rating:"5",
        stock:"42",
        image:vg1,
        subImg:[
            { img1:vg1}, 
            { img4:vg4},
        ]
      
    }, 
]



