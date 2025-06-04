import { createContext, useState } from "react";

export let ProductContext=createContext()
export let ProductProvider=(props)=>{

    const [banner, setBanner] = useState({
        image: "ban2.jpg",
        title: "CULTURE OF GROWTH @ WYTE",
        para: " Cultivate PASSION within and in your ecosystem. Live on that passion. Let you and team are full of that operating passion, head to toeTEAM & TIME-- - maneuvers us towards attaining long term objectives.Generate these two to draw the larger canvas.",
        name: "PUNEET TANEJA WYTE TEAM",
        gradient: "linear-gradient(to right, #d63384, #6f42c1, #0dcaf0)",
        textColor: "#34AADC"
    });

    let banners = [
            {
                image: "ban2.jpg",
                title: "CULTURE OF GROWTH @ WYTE",
                para: " Cultivate PASSION within and in your ecosystem. Live on that passion. Let you and team are full of that operating passion, head to toeTEAM & TIME-- - maneuvers us towards attaining long term objectives.Generate these two to draw the larger canvas.",
                name: "PUNEET TANEJA WYTE TEAM",
                gradient: "linear-gradient(to right, #d63384, #6f42c1, #0dcaf0)",
                textColor: "#34AADC"
            },
            {
                image: "ban3.jpg",
                title: "CULTURE OF GROWTH @ WYTE",
                para: " Coming together is a beginning, keeping together is progress. together is success. One can either have results or excuses, cannot both.",
                name: "WYTE TEAM @ PAN INDIA",
                gradient: "linear-gradient(to right, #00b4db, #56ab2f, #f7e13d)",
                textColor: "#33AF3D"
            },
            {
                image: "ban1.jpg",
                title: "CULTURE OF GROWTH @ WYTE",
                para: " Strive to create some extra-ordinary product, service and culture. If these things are taken care of, the customer will trust and connect forever. Technology @development and its execution is what trigger the epochal.",
                name: "WYTE TEAM @ PAN INDIA",
                gradient: "linear-gradient(90deg, #fdb846, #c43f6e)",
                textColor: "#FF6156"
            }
        ];

        let products = [
        {
            id: 1,
            name: "Printable Wallpapers",
            image: "product1.jpg",
            Sizes  : "50",
            "Base Substrate" : "PVC",
            Surface :"Textured Satin",
            Thickness : "180 micron",
            Application : "Wall Graphics",
            Length : "30 mtrs.",
            Glue : "Water Base – Permanent",
            "Compatible with":"Eco Sol / Latex / U.V. Printers",
            Description:"WP180GT is a PVC based and medium textured self-adhesive wallpaper is mostly resistant to grease and moisture than plain paper, and are good for most commercial & residential applications.Specially layered with heavy DURA Ink Receptive Layer (DIRL) for high ink absorption which gives better adhesion for darker images.It has a nice white satin surface that gives rich and enhanced color reproduction.",
            Category:"WYTE INKJET PRINTABLE MEDIAS"


        },
        {
            id: 2,
            name: "Fabrics",
            image: "product2.jpg",
            Sizes  : "54",
            "Base Substrate" : "Paper",
            Surface :"Textured Matte",
            Thickness : "200 gsm",
            Application : "Wall Graphics",
            Length : "50 mtrs.",
            Glue : "Water Base – Permanent",
            "Compatible with":"Eco Sol / Latex / U.V. Printers",
            Description:"WP200HR is a paper based, medium textured non-adhesive wallpaper with matte finish.It has a unique anti-scratch coating for longer life and it is layered with heavy DURA Ink Receptive Layer (DIRL) for high ink absorption spray.It has a slight off-white textured matte surface that looks beautiful on any wall under general lights.",
            Category:"WYTE CARELIT ENVOIRNMENT FRIENDLY PRINTABLE MEDIAS"
        },
        {
            id: 3,
            name: "Canvas",
            image: "product3.jpg",
            Sizes  : "42",
            "Base Substrate" : "Paper",
            Surface :"Textured Satin",
            Thickness : "200 gsm",
            Application : "Wall Graphics",
            Length : "30 mtrs.",
            Glue : "Water Base – Permanent",
            "Compatible with":"Eco Sol / Latex / U.V. Printers",
            Description:"WP200AC is a paper based, medium textured non-adhesive wallpaper with heavy canvas like feel. It is best suitable for abstract art designs as wall murals.Specially layered with heavy DURA Ink Receptive Layer (DIRL) for high ink absorption which gives better adhesion for darker images.It has a slight off-white textured satin surface.",
            Category:"WYTE COMMERCIAL PRINTABLE MEDIAS"
        },
        {
            id: 4,
            name: "Vinyl",
            image: "product4.jpg",
            Sizes  : "42",
            "Base Substrate" : "Paper",
            Surface :"Textured Satin",
            Thickness : "200 gsm",
            Application : "Wall Graphics",
            Length : "30 mtrs.",
            Glue : "Water Base – Permanent",
            "Compatible with":"Eco Sol / Latex / U.V. Printers",
            Description:"WP2003D is a paper based, light textured non-adhesive wallpaper with virtual 3D brushed pattern.Specially layered with heavy DURA Ink Receptive Layer (DIRL) for high ink absorption which gives better adhesion for darker images.It has a slight off-white 3D satin surface which bounces off lights to give 3D appearance.",
            Category:"WYTE DECOR SERIES"
        },
        {
            id: 5,
            name: "Glass Films",
            image: "product5.jpg",
            Sizes  : "42,50,54",
            "Base Substrate" : "Non-Woven Paper",
            Surface :" Smooth Matte",
            Thickness : " 180 gsm",
            Application : "Wall Graphics",
            Length : "30 mtrs.",
            Glue : "Water Base – Permanent",
            "Compatible with":"Eco Sol / Latex / U.V. Printers",
            Description:"WPNOWO180 is a non-woven paper based, non-adhesive wallpaper with smooth matte finish. It is the mostfavorite & widely used by architects and interior designers in both residential & commercial projects.Specially layered with heavy DURA Ink Receptive Layer (DIRL) for high ink absorption which gives better adhesion for darker images.It has a slight off-white plain matte surface.",
            Category:"WYTE INKJET PRINTABLE MEDIAS"
        },
        {
            id: 6,
            name: "Photopapers",
            image: "product6.jpg",
            Sizes  : "42",
            "Base Substrate" : "Paper",
            Surface :"Textured Satin",
            Thickness : "200 gsm",
            Application : "Wall Graphics",
            Length : "30 mtrs.",
            Glue : "Water Base – Permanent",
            "Compatible with":"Eco Sol / Latex / U.V. Printers",
            Description:"WP2003D is a paper based, light textured non-adhesive wallpaper with virtual 3D brushed pattern.Specially layered with heavy DURA Ink Receptive Layer (DIRL) for high ink absorption which gives better adhesion for darker images.It has a slight off-white 3D satin surface which bounces off lights to give 3D appearance.",
            Category:"WYTE CARELIT ENVOIRNMENT FRIENDLY PRINTABLE MEDIAS"
        },
        {
            id: 7,
            name: "Translites",
            image: "product7.jpg",
            Sizes  : "54",
            "Base Substrate" : "Paper",
            Surface :"Textured Matte",
            Thickness : "200 gsm",
            Application : "Wall Graphics",
            Length : "50 mtrs.",
            Glue : "Water Base – Permanent",
            "Compatible with":"Eco Sol / Latex / U.V. Printers",
            Description:"WP200HR is a paper based, medium textured non-adhesive wallpaper with matte finish.It has a unique anti-scratch coating for longer life and it is layered with heavy DURA Ink Receptive Layer (DIRL) for high ink absorption spray.It has a slight off-white textured matte surface that looks beautiful on any wall under general lights.",
            Category:"WYTE COMMERCIAL PRINTABLE MEDIAS"
        },
        {
            id: 8,
            name: "Reflective Vinyls",
            image: "product8.jpg",
            Sizes  : "50",
            "Base Substrate" : "PVC",
            Surface :"Textured Satin",
            Thickness : "180 micron",
            Application : "Wall Graphics",
            Length : "30 mtrs.",
            Glue : "Water Base – Permanent",
            "Compatible with":"Eco Sol / Latex / U.V. Printers",
            Description:"WP180GT is a PVC based and medium textured self-adhesive wallpaper is mostly resistant to grease and moisture than plain paper, and are good for most commercial & residential applications.Specially layered with heavy DURA Ink Receptive Layer (DIRL) for high ink absorption which gives better adhesion for darker images.It has a nice white satin surface that gives rich and enhanced color reproduction.",
            Category:"WYTE DECOR SERIES"
        }
    ]

    const [product, setProduct] = useState(products)

    // Categories
    let ProductCategory=[
        {
            id:1,
            name:"WYTE INKJET PRINTABLE MEDIAS",
            image:"product1.jpg"
        },
        {
            id:2,
            name:"WYTE CARELIT ENVOIRNMENT FRIENDLY PRINTABLE MEDIAS",
            image:"product2.jpg"
        },
        {
            id:3,
            name:"WYTE COMMERCIAL PRINTABLE MEDIAS",
            image:"product3.jpg"
        },
        {
            id:4,
            name:"WYTE DECOR SERIES",
            image:"product4.jpg"
        },
        
    ]

    

    return(
        <ProductContext.Provider value={{banners, banner,setBanner,products,product,setProduct,ProductCategory}}>
            {props.children}
        </ProductContext.Provider>
    )
}