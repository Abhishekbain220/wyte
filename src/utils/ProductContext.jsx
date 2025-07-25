import { createContext, useState } from "react";

export let ProductContext = createContext()
export let ProductProvider = (props) => {

    const [banner, setBanner] = useState({
        image: "RESIN COATED PHOTOPAPER – 260 CANVAS TEXTURE (WR).webp",
        title: "IGNITE THE FIRE WITHIN @ DigiTech India",
        para: "Passion fuels progress. When every team member breathes purpose, magic happens. With shared energy and synchronized timing, we create masterpieces—not just meet goals.",
        name: "TEAM @ STRATEGY",
        gradient: "linear-gradient(135deg, #FFDEE9, #B5FFFC)", // light pink to sky blue
        textColor: "#0F172A" // dark slate blue (high contrast)
    });

    let banners = [
        {
            image: "RESIN COATED PHOTOPAPER – 260 CANVAS TEXTURE (WR).webp",
            title: "IGNITE THE FIRE WITHIN @ DigiTech India",
            para: "Passion fuels progress. When every team member breathes purpose, magic happens. With shared energy and synchronized timing, we create masterpieces—not just meet goals.",
            name: "TEAM @ STRATEGY",
            gradient: "linear-gradient(135deg, #FFDEE9, #B5FFFC)", // light pink to sky blue
            textColor: "#0F172A" // dark slate blue (high contrast)
        },
        {
            image: "ROSE GOLD - 100 (Matte).webp",
            title: "UNITY IS MOMENTUM @ DigiTech India",
            para: "Success begins with coming together, grows by staying together, and thrives through unwavering commitment. We don’t trade results for excuses—we build futures.",
            name: "TEAM @ GROWTH",
            gradient: "linear-gradient(135deg, #FDCB82, #FFA69E)", // orange-peach
            textColor: "#2E2E2E" // dark gray (strong contrast)
        },
        {
            image: "PP SA - 150 MATTE (WR).webp",
            title: "CRAFTING LEGACY THROUGH INNOVATION @ DigiTech India",
            para: "Extraordinary doesn’t happen by chance. It’s built through innovation, trust, and culture. When tech meets execution with heart, brands evolve beyond expectations.",
            name: "TEAM @ INNOVATION",
            gradient: "linear-gradient(135deg, #A1FFCE, #FAFFD1)", // mint to pale yellow
            textColor: "#1C1C1C" // charcoal gray (clear visibility)
        },
        {
            image: "MP FILM - 180 (Matte).webp",
            title: "BE LIMITLESS @ DigiTech India",
            para: "We don't just meet expectations—we redefine them. Our innovation isn't bound by trends but guided by purpose, performance, and future-ready thinking.",
            name: "TEAM @ R&D",
            gradient: "linear-gradient(135deg, #FDCB82, #FFE6FA)", // peach to light pink
            textColor: "#1F2937" // slate gray (legible and neutral)
        },
        {
            image: "PP NA – 200 MATTE.webp",
            title: "DESIGN WITH PURPOSE @ DigiTech India",
            para: "When design meets intent, the result is timeless. We turn creative ideas into powerful products that leave lasting impressions across every surface.",
            name: "TEAM @ CREATIVE",
            gradient: "linear-gradient(135deg, #D4FC79, #96E6A1)", // yellow-green to mint
            textColor: "#102A43" // deep navy (excellent contrast)
        },
        {
            image: "PP SA - 150 GLOSS.webp",
            title: "EVER FORWARD, EVER BRIGHT @ DigiTech India",
            para: "Driven by clarity and courage, we move ahead—bringing brightness to every brand, every banner, every breakthrough. The future is not predicted, it’s printed.",
            name: "TEAM @ OPERATIONS",
            gradient: "linear-gradient(135deg, #E3FDF5, #FFE6FA)", // teal-white to light pink
            textColor: "#111827" // nearly black (clean contrast)
        }
    ];






    let products = [
        {
            id: 1,
            name: "Printable Wallpapers",
            image: "SELF ADHESIVE - WALL GRAIN TEXTURE.webp",
            array: "PrintableWallpapers",
            category: "DECOR SERIES",
            items: [
                {
                    id: 1, // Added ID
                    Heading: "SELF ADHESIVE - WALL GRAIN TEXTURE",
                    "Sizes (In Inches)": "50",
                    "Base Substrate": "PVC",
                    Surface: "Textured Satin",
                    Thickness: "180 micron",
                    Application: "Wall Graphics",
                    Length: "30 mtrs.",
                    Glue: "Water Base - Permanent",
                    "Compatible with": "Eco SOI / Latex / U.V. Printers",
                    "Product Code": "WP180GT",
                    Category: " DECOR SERIES",
                    Description: "WP180GT is a PVC based and medium textured self-adhesive wallpaper is mostly resistant to grease and moisture than plain paper, and are good for most commercial & residential applications.Specially layered with heavy DURA Ink Receptive Layer(DIRL) for high ink absorption which gives better adhesion for darker images. It has a nice white satin surface that gives rich and enhanced color reproduction.",
                    image: "SELF ADHESIVE - WALL GRAIN TEXTURE.webp"
                },
                {
                    id: 2, // Added ID
                    Heading: "SELF ADHESIVE - FABRIC WALL SOFT",
                    "Sizes (In Inches)": "50",
                    "Base Substrate": "Polyester",
                    Surface: "Textured Matte",
                    Thickness: "200 micron",
                    Application: "Wall Graphics",
                    Length: "30 mtrs.",
                    Glue: "Water Base - Permanent",
                    "Compatible with": "Eco SOI / Latex / U.V. Printers",
                    "Product Code": "WP200FSA",
                    Category: " DECOR SERIES",
                    Description: "WP200FSA is a 100% polyester based, medium fabric textured self-adhesive wallpaper is widely used in premium residential & commercial projects. Specially layered with heavy DURA Ink Receptive Layer (DIRL) for high ink absorption which gives better adhesion for darker images. It has a white fabric matte surface thatlooks premium which gives rich and enhanced colors.",
                    image: "SELF ADHESIVE - FABRIC WALL SOFT.webp"
                },
                {
                    id: 3, // Added ID
                    Heading: "NON ADHESIVE - RODIES GLITTER",
                    "Sizes (In Inches)": "54",
                    "Base Substrate": "Paper",
                    Surface: "Matte Glitter",
                    Thickness: "240 gsm",
                    Application: "Wall Graphics",
                    Length: "45 mtrs.",
                    Glue: "",
                    "Compatible with": "Eco SOI / Latex / U.V. Printers",
                    "Product Code": "WP240RG",
                    Category: " DECOR SERIES",
                    Description: "WP240RG is a paper based, medium textured non-adhesive wallpaper with glitters. It is widely used in residential & commercial projects. Mostly used in kid's Specially layered with heavy DURA Ink Receptive Layer (DIRL) for high ink absorption which gives better adhesion for darker images. It has a slight off-white glittery matte Surface that looks beautiful on any wall under general lights.",
                    image: "NON ADHESIVE - RODIES GLITTER.webp"
                },
                {
                    id: 4, // Added ID
                    Heading: "NON ADHESIVE - HORIZONTAL RAYS",
                    "Sizes (In Inches)": "54",
                    "Base Substrate": "Paper",
                    Surface: "Textured Matte",
                    Thickness: "200 gsm",
                    Application: "Wall Graphics",
                    Length: "50 mtrs.",
                    Glue: "",
                    "Compatible with": "Eco SOI / Latex / U.V. Printers",
                    "Product Code": "WP200HR",
                    Category: " DECOR SERIES",
                    Description: "WP200HR is a paper based, medium textured nori—adhesive wallpaper with matte finish. It has a unique anti—scratch coating for longer life and it is layered with heavy DURA Ink Receptive Layer (DIRL) for high ink absorption spray. It has a slight off-white textured matte surface that looks beautiful on any wall under general lights.",
                    image: "NON ADHESIVE - HORIZONTAL RAYS.webp"
                },
                {
                    id: 5, // Added ID
                    Heading: "CART CANVAS",
                    "Sizes (In Inches)": "42",
                    "Base Substrate": "Pulp Paper",
                    Surface: "Textured",
                    Thickness: "240 gsm",
                    Application: "Wall Graphics",
                    Length: "50 mtrs.",
                    Glue: "",
                    "Compatible with": "Eco SOI / Latex / U.V. Printers",
                    "Product Code": "CC240",
                    Category: " DECOR SERIES",
                    Description: "CART CANVAS is a Pulp paper based,medium textured printable wall covering substrate with micro glitter particles, is an excellent choice for commercial & residential applications. Specially layered With heavy DURA Ink Receptive Layer (DIRL) for high ink absorption Which gives better adhesion to inks for longer durability. It has a nice white shimmer effect which gives rich and shining color reproduction.",
                    image: "CART CANVAS.webp"
                },
                {
                    id: 6, // Added ID
                    Heading: "NON ADHESIVE - AESTHETIC CANVAS",
                    "Sizes (In Inches)": "42",
                    "Base Substrate": "Paper",
                    Surface: "Textured Satin",
                    Thickness: "200 gsm",
                    Application: "Wall Graphics",
                    Length: "30 mtrs.",
                    Glue: "",
                    "Compatible with": "Eco SOI / Latex / U.V. Printers",
                    "Product Code": "WP200AC",
                    Category: " DECOR SERIES",
                    Description: "WP200AC is a paper based, medium textured non—adhesive wallpaper With heavy Canvas like feet. It is best Suitable for abstract art designs as wall murals. Specially layered with heavy DURA Ink Receptive Layer (DIRL) for high ink absorption which gives better adhesion for darker images. It has a slight off-white textured satin surface.",
                    image: "NON ADHESIVE - AESTHETIC CANVAS.webp"
                },
                {
                    id: 7, // Added ID
                    Heading: "NON ADHESIVE - HELIOS 3D",
                    "Sizes (In Inches)": "42",
                    "Base Substrate": "Paper",
                    Surface: "Textured Satin",
                    Thickness: "200 gsm",
                    Application: "Wall Graphics",
                    Length: "30 mtrs.",
                    Glue: "",
                    "Compatible with": "Eco SOI / Latex / U.V. Printers",
                    "Product Code": "WP2003D",
                    Category: " DECOR SERIES",
                    Description: "WP2003D is a paper based, tight textured non—adhesive wallpaper with virtual 3D brushed pattern. Specially layered with heavy DURA Ink Receptive Layer (DIRL) for high ink absorption which gives better adhesion for darker images. It has a slight off-white 3D satin surface which bounces off lights to give 3D appearance.",
                    image: "NON ADHESIVE - HELIOS 3D.webp"
                },
                {
                    id: 8, // Added ID
                    Heading: "Non Adhesive - Non Woven – Nowo",
                    "Sizes (In Inches)": "42,50,54,60,124",
                    "Base Substrate": "Non Woven Paper",
                    Surface: "Smooth Matte",
                    Thickness: "180 gsm",
                    Application: "Wall Graphics",
                    Length: "50 mtrs.",
                    Glue: "",
                    "Compatible with": "Eco SOI / Latex / U.V. Printers",
                    "Product Code": "WPNOW0180",
                    Category: " DECOR SERIES",
                    Description: "WPNOW0180 is a non-woven paper based, non—adhe5ive wallpaper with smooth matte finish, It is the most favorite & widely used by architects and interior designers in both residential & commercial projects. Scuff resistant & specialty layered with heavy DURA Ink Receptive Layer (DIRL) for high ink absorption which gives better adhesion for darker images. It has a slight off-white plain matte",
                    image: "Non Woven – Nowo.webp"
                },
                {
                    id: 9, // Added ID
                    Heading: "WISTERIA",
                    "Sizes (In Inches)": "42,49",
                    "Base Substrate": "Non-Woven Fabric",
                    Surface: "Textured",
                    Thickness: "260 gsm",
                    Application: "Wall Graphics",
                    Length: "50 mtrs.",
                    Glue: "",
                    "Compatible with": "Eco SOI / Latex / U.V. Printers",
                    "Product Code": "WT260",
                    Category: " DECOR SERIES",
                    Description: "WISTERIA is a Non-Woven Fabric based, heavy textured printable wall covering substrate for commercial & residential applications. Specially layered With heavy DURA Receptive Layer (DIRL) for high ink absorption which gives better adhesion to inks for longer durability.",
                    image: "WISTERIA.webp"
                },
                {
                    id: 10, // Added ID
                    Heading: "CEDAR LEATHERETTE",
                    "Sizes (In Inches)": "42",
                    "Base Substrate": "Pulp Paper",
                    Surface: "Textured",
                    Weight: "240 gsm",
                    Application: "Wall Graphics",
                    Length: "50 mtrs.",
                    Glue: "",
                    "Compatible with": "Eco Sol / Latex / U.V. Printers",
                    "Product Code": "CL240",
                    Category: " DECOR SERIES",
                    Description: "CEDAR LEATHERETTE is a Pulp Paper based, medium leather finish printable wall covering substrate for commercial & residential applications. Specially layered with heavy DURA Ink Receptive Layer (DIRL) for high ink absorption which gives better adhesion to inks for longer durability. It has a nice leather effect which gives rich and natural color reproduction.",
                    image: "CEDAR LEATHERETTE.webp"
                },
                {
                    id: 11, // Added ID
                    Heading: "METALLIC TEXTURED GOLD",
                    "Sizes (In Inches)": "42",
                    "Base Substrate": "Pulp Paper",
                    Surface: "Textured",
                    Weight: "240 gsm",
                    Application: "Wall Graphics",
                    Length: "50 mtrs.",
                    Glue: "",
                    "Compatible with": "Eco Sol / Latex / U.V. Printers",
                    "Product Code": "GMT240",
                    Category: " DECOR SERIES",
                    Description: "METALLIC TEXTURED GOLD is a Pulp Paper based, medium textured printable wall covering substrate in matte finish for commercial & residential applications. Specially layered with heavy DURA Ink Receptive Layer (DIRL) for high ink absorption which gives better adhesion to inks for longer durability. It has a natural grain texture which gives vintage color reproduction.",
                    image: "METALLIC TEXTURED GOLD.webp"
                },
                {
                    id: 12, // Added ID
                    Heading: "NON ADHESIVE – STROKES",
                    "Sizes (In Inches)": "54",
                    "Base Substrate": "PVC",
                    Surface: "Textured Matte",
                    Weight: "240 gsm",
                    Application: "Wall Graphics",
                    Length: "30 mtrs.",
                    Glue: "",
                    "Compatible with": "Eco Sol / Latex / U.V. Printers",
                    "Product Code": "WP240ST",
                    Category: " DECOR SERIES",
                    Description: "WP240ST is a PVC based, non-adhesive wallpaper with beautiful brush strokes texture. It has a textile back which gives superior adhesion when installed on the wall. Specially layered with heavy DURA Ink Receptive Layer (DIRL) for high ink absorption which gives better adhesion for darker images. It has a white matte surface that looks very natural & beautiful on any wall under general lights.",
                    image: "NON ADHESIVE – STROKES.webp"
                },
                {
                    id: 13, // Added ID
                    Heading: "NON ADHESIVE – PVC",
                    "Sizes (In Inches)": "36, 50, 60",
                    "Base Substrate": "Poly Propylene",
                    Surface: "Smooth Matte",
                    Weight: "180 gsm",
                    Application: "Wall Graphics",
                    Length: "50 mtrs.",
                    Glue: "",
                    "Compatible with": "Eco Sol / Latex / U.V. Printers",
                    "Product Code": "WP180PVC",
                    Category: " DECOR SERIES",
                    Description: "WP180PVC is a Poly Propylene based, non-adhesive substrate used as wall coverings and easy on pocket. It is coated with a premium and smooth ink absorption layer for handling medium ink volume graphics. It has a white matte smooth surface.",
                    image: "NON ADHESIVE – PVC.webp"
                },
                {
                    id: 14, // Added ID
                    Heading: "NON ADHESIVE – HD",
                    "Sizes (In Inches)": "36, 50, 60",
                    "Base Substrate": "Composite PP+PVC",
                    Surface: "Textured Satin",
                    Weight: "300 gsm",
                    Application: "Wall Graphics",
                    Length: "50 mtrs.",
                    Glue: "",
                    "Compatible with": "Eco Sol / Latex / U.V. Printers",
                    "Product Code": "WP300HD",
                    Category: " DECOR SERIES",
                    Description: "WP300HD is a composition of Poly Propylene and PVC, non-adhesive textured substrate used as wall coverings and easy on pocket. It is heavy duty substrate & coated with a premium and smooth ink absorption layer for handling medium ink volume graphics. It has a white textured smooth surface.",
                    image: "NON ADHESIVE – HD.webp"
                },
                {
                    id: 15, // Added ID
                    Heading: "FABRIC – SPARKLE WALL FABRIC",
                    "Sizes (In Inches)": "50",
                    "Base Substrate": "Polyester",
                    Surface: "Satin Sparkle",
                    Weight: "300 gsm",
                    Application: "Wall Graphics",
                    Length: "50 mtrs.",
                    Glue: "",
                    "Compatible with": "Eco Sol / Latex / U.V. Printers",
                    "Product Code": "WP300SF",
                    Category: " DECOR SERIES",
                    Description: "WP300SF is a polyester based, medium canvas textured, non-adhesive wallpaper with sparkles. Specially layered with heavy DURA Ink Receptive Layer (DIRL) for high ink absorption which gives better adhesion for darker images. It has a slight off-white textured satin surface with sparkles.",
                    image: "FABRIC – SPARKLE WALL FABRIC.webp"
                },
                {
                    id: 16, // Added ID
                    Heading: "FABRIC – WALL FABRIC",
                    "Sizes (In Inches)": "52, 126",
                    "Base Substrate": "Polyester",
                    Surface: "Matte",
                    Weight: "220 gsm",
                    Application: "Wall Graphics",
                    Length: "50 mtrs.",
                    Glue: "",
                    "Compatible with": "Eco Sol / Latex / U.V. Printers",
                    "Product Code": "WP220F",
                    Category: " DECOR SERIES",
                    Description: "WP220F is a polyester based, light textured non-adhesive wall fabric with canvas feel. Specially layered with heavy DURA Ink Receptive Layer (DIRL) for high ink absorption which gives better adhesion for darker images. It has a white textured matte surface.",
                    image: "FABRIC – WALL FABRIC.webp"
                }
            ]




        },
        {
            id: 2,
            name: "Leatherette",
            image: "TEXTURED LEATHERETTE.webp",
            array: "Leatherette",
            category: "DECOR SERIES",
            items: [
                {
                    id: 1,
                    "Heading": "TEXTURED LEATHERETTE",
                    "Sizes": "54",
                    "Base Substrate": "PVC",
                    "Surface": "Grained Texture Matte",
                    "Thickness": "0.6mm",
                    "Application": "Wall Graphics / Furnishings",
                    "Length": "30 mtrs.",
                    "Glue": "",
                    "Compatible with": "Eco Sol / Latex / U.V. Printers",
                    "Product Code": "F600TL",
                    "Category": "DECOR SERIES",
                    "Description": "Made with a soft polyester back and a PVC face, this leatherette is a stunning addition to our customised fabric range for Furniture Upholstery, Cushion Covers, Table Top Mats etc. This digital printed leatherette fabric has a unique, beautifully grained textured leather effect, which adds depth and character. It feels modern, and is useful for people sympathetic for animal welfare such as vegans or vegetarians.",
                    "image": "TEXTURED LEATHERETTE.webp"
                },
                {
                    id: 2,
                    "Heading": "SMOOTH LEATHERETTE",
                    "Sizes": "54",
                    "Base Substrate": "PVC",
                    "Surface": "Smooth Matte",
                    "Thickness": "0.6mm",
                    "Application": "Wall Graphics / Furnishings",
                    "Length": "30 mtrs.",
                    "Glue": "",
                    "Compatible with": "Eco Sol / Latex / U.V. Printers",
                    "Product Code": "F600SL",
                    "Category": "DECOR SERIES",
                    "Description": "Made with a soft polyester back and a PVC face, this leatherette is a stunning addition to our customised fabric range for Furniture Upholstery, Cushion Covers, Table Top Mats etc. This digital printed leatherette fabric has a unique, beautifully smooth textured leather effect, which adds depth and character. It feels modern, and is useful for people sympathetic for animal welfare such as vegans or vegetarians.",
                    "image": "SMOOTH LEATHERETTE.webp"
                }
            ]

        },
        {
            id: 3,
            name: "Fabrics",
            image: "FABRIC.webp",
            array: "Fabrics",
            category: "DECOR SERIES",

            items: [
                {
                    "id": 1,
                    "Heading": "WINDOW BLIND - FABRIC",
                    "Sizes": "52, 126",
                    "Base Substrate": "Polyester Opaque",
                    "Surface": "Matte",
                    "Weight": "300 gsm",
                    "Thickness": "",
                    "Application": "Window Blinds",
                    "Length": "50 mtrs.",
                    "Glue": "",
                    "Compatible with": "Eco Sol / Latex / U.V. Printers",
                    "Product Code": "WB300BL",
                    "Category": "DECOR SERIES",
                    "Description": "WB300BL is a polyester based, light textured non-adhesive fabric designed for window blinds. It is both side printable substrate. Specially layered with heavy DURA Ink Receptive Layer (DIRL) for high ink absorption which gives better adhesion for darker images. It has a white textured matte surface.",
                    "image": "FABRIC.webp"
                },
                {
                    "id": 2,
                    "Heading": "FABRIC - CEILING",
                    "Sizes": "126",
                    "Base Substrate": "PVC",
                    "Surface": "Gloss",
                    "Weight": "200 gsm",
                    "Thickness": "",
                    "Application": "Backlit Ceilings",
                    "Length": "100 mtrs.",
                    "Glue": "",
                    "Compatible with": "Eco Sol / Latex / U.V. Printers",
                    "Product Code": "C200F",
                    "Category": "DECOR SERIES",
                    "Description": "C200F is a PVC based, light weight & stretchable fabric specially designed for backlit ceiling applications. Specially layered with heavy DURA Ink Receptive Layer (DIRL) for high ink absorption which gives better adhesion for darker images and makes fabric scratch resistant. It has a white smooth gloss surface.",
                    "image": "CEILING.webp"
                },
                {
                    "id": 3,
                    "Heading": "POLYESTER FABRIC - FRONTLIT - 130 (Gloss)",
                    "Sizes": "40, 52, 63, 80, 100, 126",
                    "Base Substrate": "Polyester Fabric",
                    "Surface": "Gloss",
                    "Weight": "130 gsm",
                    "Thickness": "",
                    "Application": "Frontlit",
                    "Length": "",
                    "Glue": "",
                    "Compatible with": "Eco Sol / Latex / U.V. Printers",
                    "Product Code": "FF130G",
                    "Category": "CARELIT Re",
                    "Description": "PVC FREE & 100% Recyclable\n\nFF130G-Re is a Woven POLYESTER Frontlit Fabric in matte finish. Specially developed for Outdoor & Indoor advertising, Events, signage & Hoardings etc.\n\nWaterproof & High-quality print texture with high tensile strength for Outdoor displays.",
                    "image": "FRONTLIT - 130 (Gloss).webp"
                },
                {
                    "id": 4,
                    "Heading": "FRONTLIT - 200 (Matte)",
                    "Sizes": "40, 52, 63, 80, 100, 126",
                    "Base Substrate": "Polyester Fabric",
                    "Surface": "Matte",
                    "Weight": "200 gsm",
                    "Thickness": "",
                    "Application": "Frontlit",
                    "Length": "",
                    "Glue": "",
                    "Compatible with": "Eco Sol / Latex / U.V. Printers",
                    "Product Code": "FF200M",
                    "Category": "CARELIT Re",
                    "Description": "PVC FREE & 100% Recyclable\n\nFF200M-Re is a Woven POLYESTER Frontlit Fabric in matte finish. Specially developed for Outdoor & Indoor advertising, Events, signage & Hoardings etc.\n\nWaterproof & High-quality print texture with high tensile strength for Outdoor displays.",
                    "image": "FRONTLIT - 200 (Matte).webp"
                },
                {
                    "id": 5,
                    "Heading": "BLACK BACK FRONTLIT - 220 (Gloss)",
                    "Sizes": "40, 52, 63, 80, 100, 126",
                    "Base Substrate": "Polyester Fabric",
                    "Surface": "Gloss",
                    "Weight": "220 gsm",
                    "Thickness": "",
                    "Application": "Frontlit",
                    "Length": "",
                    "Glue": "",
                    "Compatible with": "Eco Sol / Latex / U.V. Printers",
                    "Product Code": "BBF220G",
                    "Category": "CARELIT Re",
                    "Description": "PVC FREE & 100% Recyclable\n\nBBF220G-Re is a Woven POLYESTER Frontlit Fabric that comes with a unique opaque black coating on the back to prevent light penetration through the media.\n\nSpecially developed for Outdoor & Indoor advertising, Events, signage & Hoardings etc. Waterproof & High-quality print texture with high tensile strength for Outdoor displays.",
                    "image": "BLACK BACK FRONTLIT - 220 (Gloss).webp"
                },
                {
                    "id": 6,
                    "Heading": "BLACK BACK FRONTLIT - 220 (Matte)",
                    "Sizes": "40, 52, 63, 80, 100, 126",
                    "Base Substrate": "Polyester Fabric",
                    "Surface": "Matte",
                    "Weight": "220 gsm",
                    "Thickness": "",
                    "Application": "Frontlit",
                    "Length": "",
                    "Glue": "",
                    "Compatible with": "Eco Sol / Latex / U.V. Printers",
                    "Product Code": "BBF220M",
                    "Category": "CARELIT Re",
                    "Description": "PVC FREE & 100% Recyclable\n\nBBF220M-Re is a Woven POLYESTER Frontlit Fabric that comes with a unique opaque black coating on the back to prevent light penetration through the media.\n\nSpecially developed for Outdoor & Indoor advertising, Events, signage & Hoardings etc. Waterproof & High-quality print texture with high tensile strength for Outdoor displays.",
                    "image": "BLACK BACK FRONTLIT - 220 (Matte).webp"
                },
                {
                    "id": 7,
                    "Heading": "BOTH SIDE PRINTING - 360 (Matte)",
                    "Sizes": "51, 63, 102, 126",
                    "Base Substrate": "Polyester Fabric",
                    "Surface": "Matte (Opaque)",
                    "Weight": "360 gsm",
                    "Thickness": "",
                    "Application": "Both Side Printable",
                    "Length": "",
                    "Glue": "",
                    "Compatible with": "Eco Sol / Latex / U.V. Printers",
                    "Product Code": "BSP360M",
                    "Category": "CARELIT Re",
                    "Description": "PVC FREE & 100% Recyclable\n\nBSP360M-Re is a Woven POLYESTER Frontlit Fabric in Matte finish. It is a Both Side printable block-out substrate with a unique coating to prevent scratching against platen surface when printing on other side.\n\nSpecially developed for Outdoor & Indoor advertising, Events, signage & Hoardings etc. Waterproof & High-quality print texture with high tensile strength for Outdoor displays.",
                    "image": "BOTH SIDE PRINTING - 360 (Matte).webp"
                },
                {
                    "id": 8,
                    "Heading": "PERFORATED FABRIC - 100",
                    "Sizes": "60",
                    "Base Substrate": "Polyester Fabric",
                    "Surface": "Matte",
                    "Weight": "100 gsm",
                    "Thickness": "",
                    "Application": "Both Side Visible",
                    "Length": "",
                    "Glue": "",
                    "Compatible with": "U.V. Printers",
                    "Product Code": "PF100M",
                    "Category": "CARELIT Re",
                    "Description": "PVC FREE & 100% Recyclable\n\nPF100M-Re is a Woven POLYESTER Perforated Fabric in Matte finish. It is a Both Side visible & breathable substrate.\n\nSpecially developed for Outdoor & Indoor advertising, Events, signage & Hoardings etc. Waterproof & High-quality print texture with high tensile strength for Outdoor displays.",
                    "image": "PERFORATED FABRIC - 100.webp"
                },
                {
                    "id": 9,
                    "Heading": "OUTDOOR BACKLIT FABRIC - 180",
                    "Sizes": "40, 52, 63, 80, 100, 126",
                    "Base Substrate": "Polyester Fabric",
                    "Surface": "Smooth",
                    "Weight": "180 gsm",
                    "Thickness": "",
                    "Application": "Outdoor Backlit",
                    "Length": "",
                    "Glue": "",
                    "Compatible with": "Eco Sol / Latex / U.V. Printers",
                    "Product Code": "OBF180",
                    "Category": "CARELIT Re",
                    "Description": "PVC FREE & 100% Recyclable\n\nOBF180 is a Woven POLYESTER Outdoor Backlit Fabric in smooth finish.\n\nWidely used for Backlit Lighting Box advertising, Show Window, Metro Station, Shopping Mall etc.\n\nAccurate coating formula to ensure uniform light when used for backlit applications.\n\nWarranty: 1 year outdoor",
                    "image": "OUTDOOR BACKLIT FABRIC - 180.webp"
                },
                {
                    "id": 10,
                    "Heading": "COARSE BACKLIT FABRIC - 150 (Gloss)",
                    "Sizes": "40, 52, 63, 80, 100, 126",
                    "Base Substrate": "Polyester Fabric",
                    "Surface": "Gloss",
                    "Weight": "150 gsm",
                    "Thickness": "",
                    "Application": "Backlit",
                    "Length": "",
                    "Glue": "",
                    "Compatible with": "Eco Sol / Latex / U.V. Printers",
                    "Product Code": "CBF150G",
                    "Category": "CARELIT Re",
                    "Description": "PVC FREE & 100% Recyclable\n\nCBF150G-Re is a Woven POLYESTER Backlit Fabric in gloss finish.\n\nWidely used for Backlit Lighting Box advertising, Show Window, Metro Station, Shopping Mall etc.\n\nAccurate coating formula to ensure uniform light when used for backlit applications.",
                    "image": "COARSE BACKLIT FABRIC - 150 (Gloss).webp"
                },
                {
                    "id": 11,
                    "Heading": "AQUALIT BACKLIT FABRIC - 130 (Soft)",
                    "Sizes": "40, 52, 63, 80, 100, 126",
                    "Base Substrate": "Polyester Fabric",
                    "Surface": "Smooth",
                    "Weight": "130 gsm",
                    "Thickness": "",
                    "Application": "Backlit",
                    "Length": "",
                    "Glue": "",
                    "Compatible with": "Eco Sol / Latex / U.V. Printers",
                    "Product Code": "BF130S",
                    "Category": "CARELIT",
                    "Description": "PVC FREE & 100% Recyclable\n\nBF130S is a Woven POLYESTER Backlit Fabric.\n\nWidely used for Backlit Lighting Box advertising, Show Window, Metro Station, Shopping Mall etc.\n\nFlame Retardant, Shrink-Resistant, Tear-Resistant, Waterproof Smooth texture with soft substrate to ensure certain resistance for wrinkle marks.",
                    "image": "AQUALIT BACKLIT FABRIC - 130 (Soft).webp"
                },
                {
                    "id": 12,
                    "Heading": "AQUALIT BACKLIT - 130 (Soft)",
                    "Sizes": "40, 52, 63, 80, 100, 126",
                    "Base Substrate": "Polyester Fabric",
                    "Surface": "Smooth",
                    "Weight": "130 gsm",
                    "Thickness": "",
                    "Application": "Backlit",
                    "FR Certification": "YES",
                    "Length": "",
                    "Glue": "",
                    "Compatible with": "Eco Sol / Latex / U.V. Printers",
                    "Product Code": "BF130S-FR",
                    "Category": "CARELIT-FR",
                    "Description": "PVC FREE & 100% Recyclable\n\nBF130S-FR is a Woven POLYESTER Backlit Fabric.\n\nWidely used for Backlit Lighting Box advertising, Show Window, Metro Station, Shopping Mall etc.\n\nFlame Retardant, Shrink-Resistant, Tear-Resistant, Waterproof Smooth texture with soft substrate to ensure certain resistance for wrinkle marks.",
                    "image": "AQUALIT BACKLIT - 130 (Soft).webp"
                },
                {
                    "id": 13,
                    "Heading": "CLOTH BANNER – 120 MATTE (WR)",
                    "Sizes": "24, 36, 42, 50, 60",
                    "Base Substrate": "Polyester",
                    "Surface": "Matte",
                    "Thickness": "",
                    "Application": "Backlit / Nonlit",
                    "Adhesion": "",
                    "Coating": "Water Resistant (WR)",
                    "Weight": "120 gsm",
                    "Length": "",
                    "Glue": "",
                    "Compatible with": "Pigment & Dye Inkjet Printers",
                    "Product Code": "CB120M",
                    "Category": "FABRIC",
                    "Description": "CB120M is a water resistant, Optical Brightening additive (OB) free, polyester white fabric, layered with a high absorption ink-receptive coating for optimal & evenly spread backlit application. It is suitable for full-colour graphics for indoor applications such as Retail Branding, Backlit Boxes & Exhibition Graphics etc.",
                    "image": "CLOTH BANNER – 120 MATTE (WR).webp"
                },
                {
                    "id": 14,
                    "Heading": "FRONTLIT - 200",
                    "Sizes": "40, 50, 63, 76, 100, 126",
                    "Base Substrate": "Polyester",
                    "Surface": "Matte",
                    "Thickness": "",
                    "Application": "Frontlit",
                    "Adhesion": "Non-Adhesive",
                    "Coating": "High absorption ink-receptive layer (DIRL)",
                    "Weight": "200 gsm",
                    "Length": "",
                    "Glue": "",
                    "Compatible with": "",
                    "Product Code": "FF200M-Re",
                    "Category": "FABRIC",
                    "Description": "FRONTLIT FABRIC is a water resistant, Recycled polyester white fabric, top-coated with our proprietary high absorption ink-receptive layer called (DIRL). It is suitable for short to medium term full-colour graphics for indoor & outdoor applications such as fine Advertising Branding, Banners and exhibitions etc.",
                    "image": "FRONTLIT - 200.webp"
                },
                {
                    "id": 15,
                    "Heading": "BACKLIT - 130 FR",
                    "Sizes": "40, 50, 63, 76, 100, 126",
                    "Base Substrate": "Polyester",
                    "Surface": "Satin Smooth",
                    "Thickness": "",
                    "Application": "Backlit",
                    "Adhesion": "Non-Adhesive",
                    "Coating": "High absorption ink-receptive coating",
                    "Weight": "130 gsm",
                    "Length": "",
                    "Glue": "",
                    "Compatible with": "",
                    "Product Code": "BF130S-FR",
                    "Category": "FABRIC",
                    "Description": "BF130S-FR is an FR (Flame Resistant) Grade Backlit Fabric. It is a water resistant, Optical Brightening additive (OB) free, polyester white fabric, layered with a high absorption ink-receptive coating for optimal & evenly spread backlit application. It is suitable for full-colour graphics for indoor & outdoor applications such as Retail Backlit Boxes & Exhibition Graphics etc.",
                    "image": "BACKLIT - 130 FR.webp"
                }
            ]

        },
        {
            id: 4,
            name: "Canvas",
            image: "ARTISTIC CANVAS MATTE.webp",
            array: "Canvas",
            category: "COMMERCIAL PRINTABLE MEDIAS",
            items: [
                {
                    "id": 1,
                    "Heading": "ARTISTIC CANVAS MATTE",
                    "Sizes": "40, 50, 60, 80, 124",
                    "Base Substrate": "Poly-Cotton",
                    "Surface": "Matte",
                    "Weight": "400 gsm",
                    "Thickness": "",
                    "Application": "Art Decor",
                    "Length": "30 mtrs.",
                    "Glue": "",
                    "Compatible with": "Eco Sol / Latex / U.V. Printers",
                    "Product Code": "CAN400M",
                    "Category": "COMMERCIAL PRINTABLE MEDIA For Ecosolvent, Latex and U.V",
                    "Description": "ARTISTIC CANVAS MATTE CAN400M is a water resistant, Optical Brightening additive (OB) free, cotton white matte canvas, top-coated with an ink-receptive layer (DIRL). It is suitable for full-colour graphics for indoor & outdoor applications such as fine art and photographic reproductions, theatre and trade show backdrops and other creative applications.",
                    "image": "ARTISTIC CANVAS MATTE.webp"
                },
                {
                    "id": 2,
                    "Heading": "ARTISTIC CANVAS GLOSS",
                    "Sizes": "36, 50, 60",
                    "Base Substrate": "Poly-Cotton",
                    "Surface": "Gloss",
                    "Weight": "400 gsm",
                    "Thickness": "",
                    "Application": "Art Decor",
                    "Length": "30 mtrs.",
                    "Glue": "",
                    "Compatible with": "Eco Sol / Latex / U.V. Printers",
                    "Product Code": "CAN400G",
                    "Category": "COMMERCIAL PRINTABLE MEDIA For Ecosolvent, Latex and U.V",
                    "Description": "ARTISTIC CANVAS MATTE CAN400M is a water resistant, Optical Brightening additive (OB) free, cotton white gloss canvas, top-coated with an ink-receptive layer (DIRL). It is suitable for full-colour graphics for indoor & outdoor applications such as fine art and photographic reproductions, theatre and trade show backdrops and other creative applications.",
                    "image": "ARTISTIC CANVAS GLOSS.webp"
                },
                {
                    "id": 3,
                    "Heading": "ARTISTIC CANVAS – 380 MATTE (WR)",
                    "Sizes": "24, 36, 42, 50, 60",
                    "Base Substrate": "Poly Cotton",
                    "Surface": "Matte",
                    "Thickness": "",
                    "Application": "Art Prints",
                    "Adhesion": "",
                    "Coating": "Water Resistant (WR)",
                    "Weight": "380 gsm",
                    "Length": "",
                    "Glue": "",
                    "Compatible with": "Pigment & Dye Inkjet Printers",
                    "Product Code": "AC380M",
                    "Category": "CANVAS",
                    "Description": "ARTISTIC CANVAS 380 MATTE is a water resistant, Optical Brightening additive (OB) free, poly-cotton white matte canvas, top-coated with a high absorption ink-receptive layer. It is suitable for full-colour graphics for indoor & outdoor applications such as fine art and photographic reproductions, theatre and exhibition galleries.",
                    "image": "ARTISTIC CANVAS – 380 MATTE (WR).webp"
                },
                {
                    "id": 4,
                    "Heading": "ARTISTIC CANVAS - 380 (Matte)",
                    "Sizes": "40, 50, 60, 80, 102, 126",
                    "Base Substrate": "Poly Cotton",
                    "Surface": "Matte",
                    "Thickness": "",
                    "Application": "Art Prints",
                    "Adhesion": "Non-Adhesive",
                    "Coating": "High absorption ink-receptive layer",
                    "Weight": "380 gsm",
                    "Length": "",
                    "Glue": "",
                    "Compatible with": "",
                    "Product Code": "CAN400M",
                    "Category": "CANVAS",
                    "Description": "ARTISTIC CANVAS MATTE W380 is a water resistant, Optical Brightening additive (OB) free, poly-cotton white matte canvas, top-coated with a high absorption ink-receptive layer.\n\nIt is suitable for full-colour graphics for indoor & outdoor applications such as fine art and photographic reproductions, theatre and exhibition galleries.",
                    "image": "ARTISTIC CANVAS - 380 (Matte).webp"
                },
                {
                    "id": 5,
                    "Heading": "ARTISTIC CANVAS - 380 (Gloss)",
                    "Sizes": "36, 50, 60",
                    "Base Substrate": "Poly Cotton",
                    "Surface": "Gloss",
                    "Thickness": "",
                    "Application": "Art Prints",
                    "Adhesion": "Non-Adhesive",
                    "Coating": "High absorption ink-receptive layer",
                    "Weight": "380 gsm",
                    "Length": "",
                    "Glue": "",
                    "Compatible with": "",
                    "Product Code": "CAN400G",
                    "Category": "CANVAS",
                    "Description": "ARTISTIC CANVAS GLOSS W380 is a water resistant, Optical Brightening additive (OB) free, poly-cotton white gloss canvas, top-coated with a high absorption ink-receptive layer.\n\nIt is suitable for full-colour graphics for indoor & outdoor applications such as fine art and photographic reproductions, theatre and exhibition galleries.",
                    "image": "ARTISTIC CANVAS - 380 (Gloss).webp"
                },
                {
                    "id": 6,
                    "Heading": "POLYESTER CANVAS - 280 (Matte)",
                    "Sizes": "50",
                    "Base Substrate": "Polyester",
                    "Surface": "Matte",
                    "Thickness": "",
                    "Application": "Fashion Accessories & Arts",
                    "Adhesion": "Non-Adhesive",
                    "Coating": "High absorption ink-receptive layer",
                    "Weight": "280 gsm",
                    "Length": "",
                    "Glue": "",
                    "Compatible with": "",
                    "Product Code": "PAN280M",
                    "Category": "CANVAS",
                    "Description": "POLYESTER CANVAS 280 (Matte) is an affordable water resistant, Optical Brightening additive (OB) free, polyester white gloss canvas, top-coated with a high absorption ink-receptive layer.\n\nIt is suitable for full-colour graphics for indoor & outdoor applications such as fine art and photographic reproductions, theatre and exhibition galleries.",
                    "image": "POLYESTER CANVAS - 280 (Matte).webp"
                },
                {
                    "id": 7,
                    "Heading": "POLYESTER CANVAS - 280 (Gloss)",
                    "Sizes": "50",
                    "Base Substrate": "Polyester",
                    "Surface": "Gloss",
                    "Thickness": "",
                    "Application": "Fashion Accessories & Arts",
                    "Adhesion": "Non-Adhesive",
                    "Coating": "High absorption ink-receptive layer",
                    "Weight": "280 gsm",
                    "Length": "",
                    "Glue": "",
                    "Compatible with": "",
                    "Product Code": "PAN280G",
                    "Category": "CANVAS",
                    "Description": "POLYESTER CANVAS 280 (Gloss) is an affordable water resistant, Optical Brightening additive (OB) free, polyester white gloss canvas, top-coated with a high absorption ink-receptive layer.\n\nIt is suitable for full-colour graphics for indoor & outdoor applications such as fine art and photographic reproductions, theatre and exhibition galleries.",
                    "image": "POLYESTER CANVAS - 280 (Gloss).webp"
                }
            ]

        },
        {
            id: 5,
            name: "Vinyl",
            image: "PVC-FREE VINYL - 150 (Matte).webp",
            array: "VINYL",
            category: "CARELIT ENVOIRNMENT FRIENDLY PRINTABLE MEDIAS",

            items: [
                {
                    "id": 1,
                    "Heading": "PVC-FREE VINYL - 150 (Matte)",
                    "Sizes": "42, 50, 60",
                    "Base Substrate": "Polypropylene",
                    "Surface": "Matte",
                    "Weight": "",
                    "Thickness": "150 micron",
                    "Application": "Frontlit",
                    "Length": "",
                    "Glue": "Removable Grey Back",
                    "Compatible with": "Eco Sol / Latex / U.V. Printers",
                    "Product Code": "W09CARE",
                    "Category": "CARELIT Re",
                    "Description": "Environment friendly:\n• PVC Free - NO solvent release\n• Water-based Grey glue\n\nBetter Performance:\n• PP has better flatness than PVC\n• Removable adhesive\n• Fewer dust from raw material\n\nWarranty: 2 years outdoor",
                    "image": "PVC-FREE VINYL - 150 (Matte).webp"
                },
                {
                    "id": 2,
                    "Heading": "MP FILM - 180 (Matte)",
                    "Sizes": "50, 60, 63, 102",
                    "Base Substrate": "Polypropylene",
                    "Surface": "Matte",
                    "Weight": "180 gsm",
                    "Thickness": "",
                    "Application": "Backlit / Frontlit",
                    "Length": "",
                    "Glue": "",
                    "Compatible with": "U.V. Printers",
                    "Product Code": "MP180M",
                    "Category": "CARELIT Re",
                    "Description": "CHARACTERISTICS:\n• Tear and waterproof\n• Maximum colour brilliance\n• Outstanding printing characteristics\n• Durability\n• 100% recyclable\n\nUSES:\n• Roll-up banners\n• Banners\n• Backlit posters\n• Outdoor advertising",
                    "image": "MP FILM - 180 (Matte).webp"
                },
                {
                    "id": 3,
                    "Heading": "PVC SA - MATTE (WR)",
                    "Sizes": "50",
                    "Base Substrate": "PVC",
                    "Surface": "Matte",
                    "Weight": "",
                    "Thickness": "100 micron",
                    "Application": "Indoor branding",
                    "Adhesion": "Removable Adhesive",
                    "Coating": "Water Resistant (WR)",
                    "Length": "",
                    "Glue": "",
                    "Compatible with": "Pigment & Dye Inkjet Printers",
                    "Product Code": "SKIN100",
                    "Category": "VINYL",
                    "Description": "PVC based premium printable vinyl with a water resistant coating and removable adhesive is an ideal product for general Indoor branding applications.\n\nRemovable adhesive makes this vinyl a preferred substrate where faster removal of existing prints are required.\n\nIt is also suitable for laptop and mobile skins.",
                    "image": "PVC SA - MATTE (WR).webp"
                },
                {
                    "id": 4,
                    "Heading": "PP SA - 150 MATTE (WR)",
                    "Sizes": "24, 36, 42, 50, 60",
                    "Base Substrate": "PP",
                    "Surface": "Matte",
                    "Weight": "",
                    "Thickness": "150 micron",
                    "Application": "Indoor branding",
                    "Adhesion": "Permanent",
                    "Coating": "Water Resistant (WR)",
                    "Length": "",
                    "Glue": "",
                    "Compatible with": "Pigment & Dye Inkjet Printers",
                    "Product Code": "WR150PPSA",
                    "Category": "VINYL",
                    "Description": "Polypropylene based premium printable vinyl with a water resistant coating and permanent adhesive is an ideal product for general Indoor branding applications.\n\nSpecially formulated with heavy DURA Ink Receptive Layer (DIRL) for high ink absorption.",
                    "image": "PP SA - 150 MATTE (WR).webp"
                },
                {
                    "id": 5,
                    "Heading": "PP SA - 150 MATTE",
                    "Sizes": "24, 36, 42, 50, 60",
                    "Base Substrate": "PP",
                    "Surface": "Matte",
                    "Weight": "",
                    "Thickness": "150 micron",
                    "Application": "Frontlit",
                    "Adhesion": "Permanent Adhesive",
                    "Coating": "",
                    "Length": "",
                    "Glue": "",
                    "Compatible with": "Dye Inkjet Printers",
                    "Product Code": "PPSA150M",
                    "Category": "VINYL",
                    "Description": "Polypropylene based printable vinyl with strong adhesive is an ideal product for general Indoor branding applications, events and exhibitions.\n\nSpecially formulated with heavy DURA Ink Receptive Layer (DIRL) for high ink absorption.",
                    "image": "PP SA - 150 MATTE.webp"
                },
                {
                    "id": 6,
                    "Heading": "PP SA - 150 GLOSS",
                    "Sizes": "36, 42, 50, 60",
                    "Base Substrate": "PP",
                    "Surface": "Gloss",
                    "Weight": "",
                    "Thickness": "150 micron",
                    "Application": "Frontlit",
                    "Adhesion": "Permanent Adhesive",
                    "Coating": "",
                    "Length": "",
                    "Glue": "",
                    "Compatible with": "Dye Inkjet Printers",
                    "Product Code": "PPSA150G",
                    "Category": "VINYL",
                    "Description": "Polypropylene based printable vinyl with strong adhesive is an ideal product for general Indoor branding applications, events and exhibitions.\n\nSpecially formulated with heavy DURA Ink Receptive Layer (DIRL) for high ink absorption.",
                    "image": "PP SA - 150 GLOSS.webp"
                },
                {
                    "id": 7,
                    "Heading": "SILVER CHROME VINYL SA GLOSS",
                    "Sizes": "36, 50",
                    "Base Substrate": "PET",
                    "Surface": "Gloss",
                    "Thickness": "100 micron",
                    "Application": "Frontlit",
                    "Adhesion": "Permanent Adhesive",
                    "Coating": "",
                    "Weight": "",
                    "Length": "",
                    "Glue": "",
                    "Compatible with": "Dye Inkjet Printers",
                    "Product Code": "SILVSA",
                    "Category": "VINYL",
                    "Description": "Silver Chrome is a glossy mirror vinyl which comes with premium quality clear permanent adhesive.\n\nIdeal solution for short term promotional branding applications for retail & offices, promotional stickers for packaging etc.\n\nFormulated with Wyte proprietary, Dura Ink Receptive Layer (DIRL) for high ink absorption and adhesion.",
                    "image": "SILVER CHROME VINYL SA GLOSS.webp"
                },
                {
                    "id": 8,
                    "Heading": "FRONT ADHESIVE GLASS FILM",
                    "Sizes": "36, 50",
                    "Base Substrate": "PET",
                    "Surface": "Gloss",
                    "Thickness": "60 micron",
                    "Application": "Glass Decor / Glass Top (Indoor Only)",
                    "Adhesion": "Permanent Adhesive",
                    "Coating": "",
                    "Weight": "",
                    "Length": "",
                    "Glue": "",
                    "Compatible with": "Dye Inkjet Printers",
                    "Product Code": "FA60GF",
                    "Category": "VINYL",
                    "Description": "A premium PET based front adhesive glass film printable on the back side (mirror image). Specially coated with low drying time layer for faster productions.\n\nThis PET film is of a premium grade and a perfect substrate for glass tops & shop front glass (in malls only). NOT suitable for outdoor glass applications.\n\nFormulated with Dura Ink Receptive Layer (DIRL) for high ink absorption and scratch resistance. Over laminate is required for printed side.",
                    "image": "FRONT ADHESIVE GLASS FILM.webp"
                },
                {
                    "id": 9,
                    "Heading": "STRETCHCAL32 - Vehicle Wrap",
                    "Sizes": "50",
                    "Base Substrate": "PVC Polymeric",
                    "Surface": "Gloss",
                    "Thickness": "60 micron",
                    "Application": "Vehicle Graphics",
                    "Adhesion": "Air Channel - Grey",
                    "Coating": "",
                    "Weight": "",
                    "Length": "",
                    "Glue": "Air Channeled Grey Glue",
                    "Compatible with": "",
                    "Product Code": "SC3200",
                    "Category": "VINYL",
                    "Description": "Stretchable with Air Channeled Grey Glue for bubble free application on vehicle metal surfaces makes STRETCHCAL32 the most versatile and affordable substrate among competition. Specially formulated with flexible DURA Ink Receptive Layer (DIRL) for high ink absorption and better adhesion with compatible overlaminates.",
                    "image": "STRETCHCAL32 - Vehicle Wrap.webp"
                },
                {
                    "id": 10,
                    "Heading": "STRETCHCAL21 - METAL & EXTERIOR SIGNS",
                    "Sizes": "50",
                    "Base Substrate": "PVC Polymeric",
                    "Surface": "Gloss",
                    "Thickness": "100 micron",
                    "Application": "High Temp. Surfaces (Upto 80 degrees), Rough Surfaces, Outdoor Displays",
                    "Adhesion": "Permanent",
                    "Coating": "",
                    "Weight": "",
                    "Length": "",
                    "Glue": "",
                    "Compatible with": "",
                    "Product Code": "SC2100",
                    "Category": "VINYL",
                    "Description": "Suitable for High Temperature metal surfaces (upto 80 degrees) & exterior branding. STRETCHCAL21 provides all weather durability without losing adhesion from exterior surfaces. This flexible substrate can easily be pasted on rough surfaces by using a heat gun. Specially formulated with flexible DURA Ink Receptive Layer (DIRL) for high ink absorption and provide better adhesion with compatible overlaminates.",
                    "image": "STRETCHCAL21 - METAL & EXTERIOR SIGNS.webp"
                },
                {
                    "id": 11,
                    "Heading": "PREMIUM GOLD - 120 (Gloss)",
                    "Sizes": "36, 40, 42, 50, 60",
                    "Base Substrate": "PVC",
                    "Surface": "Gloss",
                    "Thickness": "120 micron",
                    "Application": "Frontlit",
                    "Adhesion": "Permanent",
                    "Coating": "",
                    "Weight": "",
                    "Length": "",
                    "Glue": "",
                    "Compatible with": "",
                    "Product Code": "DURA1203",
                    "Category": "VINYL",
                    "Description": "Premium Gold is a premium vinyl for general day-to-day branding applications. 140 gsm liner makes this substrate very easy to handle on machines. Longer PVC aging for better durability & makes it a perfect substrate for small to medium duration branding applications. Formulated with Wyte proprietary, Dura Ink Receptive Layer (DIRL) for high ink absorption and adhesion.",
                    "image": "PREMIUM GOLD - 120 (Gloss).webp"
                },
                {
                    "id": 12,
                    "Heading": "PREMIUM GOLD - 120 (Matte)",
                    "Sizes": "36, 40, 42, 50, 60",
                    "Base Substrate": "PVC",
                    "Surface": "Matte",
                    "Thickness": "120 micron",
                    "Application": "Frontlit",
                    "Adhesion": "Permanent",
                    "Coating": "",
                    "Weight": "",
                    "Length": "",
                    "Glue": "",
                    "Compatible with": "",
                    "Product Code": "DURA1204",
                    "Category": "VINYL",
                    "Description": "Premium Gold is a premium vinyl for general day-to-day branding applications. 140 gsm liner makes this substrate very easy to handle on machines. Longer PVC aging for better durability & makes it a perfect substrate for small to medium duration branding applications. Formulated with Wyte proprietary, Dura Ink Receptive Layer (DIRL) for high ink absorption and adhesion.",
                    "image": "PREMIUM GOLD - 120 (Matte).webp"
                },
                {
                    "id": 13,
                    "Heading": "ROSE GOLD - 100 (Gloss)",
                    "Sizes": "36, 40, 42, 50, 60",
                    "Base Substrate": "PVC",
                    "Surface": "Gloss",
                    "Thickness": "100 micron",
                    "Application": "Frontlit",
                    "Adhesion": "Permanent",
                    "Coating": "",
                    "Weight": "",
                    "Length": "",
                    "Glue": "",
                    "Compatible with": "",
                    "Product Code": "RG1005",
                    "Category": "VINYL",
                    "Description": "Rose Gold is an economy vinyl for general day-to-day branding applications. 120 gsm liner makes this substrate very easy to handle on machines. Longer PVC aging for better durability & makes it a perfect substrate for small to medium duration branding applications. Formulated with Wyte proprietary, Dura Ink Receptive Layer (DIRL) for high ink absorption and adhesion.",
                    "image": "ROSE GOLD - 100 (Gloss).webp"
                },
                {
                    "id": 14,
                    "Heading": "ROSE GOLD - 100 (Matte)",
                    "Sizes": "36, 40, 42, 50, 60",
                    "Base Substrate": "PVC",
                    "Surface": "Matte",
                    "Thickness": "100 micron",
                    "Application": "Frontlit",
                    "Adhesion": "Permanent",
                    "Coating": "",
                    "Weight": "120 gsm",
                    "Length": "",
                    "Glue": "",
                    "Compatible with": "Dye Inkjet Printers",
                    "Product Code": "RG1006",
                    "Category": "VINYL",
                    "Description": "Rose Gold is an economy vinyl for general day-to-day branding applications. 120 gsm liner makes this substrate very easy to handle on machines.\n\nLonger PVC aging for better durability & makes it a perfect substrate for small to medium duration branding applications.\n\nFormulated with Wyte proprietary, Dura Ink Receptive Layer (DIRL) for high ink absorption and adhesion.",
                    "image": "ROSE GOLD - 100 (Matte).webp"
                },
                {
                    "id": 15,
                    "Heading": "GREY BACK - 120 (Gloss)",
                    "Sizes": "40, 50, 60",
                    "Base Substrate": "PVC",
                    "Surface": "Gloss",
                    "Thickness": "120 micron",
                    "Application": "Frontlit",
                    "Adhesion": "Permanent Grey",
                    "Coating": "",
                    "Weight": "140 gsm",
                    "Length": "",
                    "Glue": "Acrylic-based Grey Adhesive",
                    "Compatible with": "Dye Inkjet Printers",
                    "Product Code": "GREY1207",
                    "Category": "VINYL",
                    "Description": "Grey Back is a premium vinyl for quality day-to-day branding applications with acrylic based grey adhesive for superior adhesion. Grey adhesive is ideal for pasting applications on the colored surfaces thus prevents background to get impose on the front side.\n\nLonger PVC aging for better durability. Formulated with Wyte proprietary, Dura Ink Receptive Layer (DIRL) for high ink absorption and adhesion.",
                    "image": "GREY BACK - 120 (Gloss).webp"
                },
                {
                    "id": 16,
                    "Heading": "GREY BACK - 120 (Matte)",
                    "Sizes": "40, 50, 60",
                    "Base Substrate": "PVC",
                    "Surface": "Matte",
                    "Thickness": "120 micron",
                    "Application": "Frontlit",
                    "Adhesion": "Permanent Grey",
                    "Coating": "",
                    "Weight": "140 gsm",
                    "Length": "",
                    "Glue": "Acrylic-based Grey Adhesive",
                    "Compatible with": "Dye Inkjet Printers",
                    "Product Code": "GREY1208",
                    "Category": "VINYL",
                    "Description": "Grey Back is a premium vinyl for quality day-to-day branding applications with acrylic based grey adhesive for superior adhesion. Grey adhesive is ideal for pasting applications on the colored surfaces thus prevents background to get impose on the front side.\n\nLonger PVC aging for better durability. Formulated with Wyte proprietary, Dura Ink Receptive Layer (DIRL) for high ink absorption and adhesion.",
                    "image": "GREY BACK - 120 (Matte).webp"
                },
                {
                    "id": 17,
                    "Heading": "PERFECTO BACKLIT - 120 (Gloss)",
                    "Sizes": "42, 50, 60",
                    "Base Substrate": "PVC",
                    "Surface": "Gloss",
                    "Thickness": "120 micron",
                    "Application": "Backlit",
                    "Adhesion": "Permanent",
                    "Coating": "",
                    "Weight": "140 gsm",
                    "Length": "",
                    "Glue": "",
                    "Compatible with": "Dye Inkjet Printers",
                    "Product Code": "LUMI1209",
                    "Category": "VINYL",
                    "Description": "A premium backlit vinyl for perfect backlit output without any color bleed and patch especially in darker prints.\n\nBrilliant color output with proper backlit luminance.\n\nLonger PVC aging for better durability.\n\nFormulated with Wyte proprietary, Dura Ink Receptive Layer (DIRL) for high ink absorption and adhesion.",
                    "image": "PERFECTO BACKLIT - 120 (Gloss).webp"
                },
                {
                    "id": 18,
                    "Heading": "SILVER CHROME",
                    "Sizes": "36, 50",
                    "Base Substrate": "PET",
                    "Surface": "Gloss",
                    "Thickness": "100 micron",
                    "Application": "Frontlit",
                    "Adhesion": "Permanent",
                    "Coating": "",
                    "Weight": "120 gsm",
                    "Length": "",
                    "Glue": "Clear Permanent Adhesive",
                    "Compatible with": "Dye Inkjet Printers",
                    "Product Code": "ROMA1010",
                    "Category": "VINYL",
                    "Description": "Silver Chrome is a glossy mirror vinyl which comes with premium quality clear permanent adhesive.\n\nIdeal solution for short term promotional branding applications for retail & offices, promotional stickers for packaging etc.\n\nFormulated with Wyte proprietary, Dura Ink Receptive Layer (DIRL) for high ink absorption and adhesion.",
                    "image": "SILVER CHROME.webp"
                },
                {
                    "id": 19,
                    "Heading": "ONE WAY VISION - 140",
                    "Sizes": "39, 42, 50, 60",
                    "Base Substrate": "PVC",
                    "Surface": "Gloss",
                    "Thickness": "140 micron",
                    "Application": "Glass",
                    "Adhesion": "Permanent",
                    "Coating": "",
                    "Weight": "140 gsm",
                    "Length": "",
                    "Glue": "",
                    "Compatible with": "",
                    "Product Code": "ONE1404",
                    "Category": "VINYL",
                    "Description": "With one side visual communication, the other black side provides sun-shade and enhances privacy and security. One way vision create new business and advertising opportunities without obstructing the view.\n\nIdeal choice for Window graphics, Vehicle graphics & Glass panels on building.\n\nFormulated with Wyte proprietary, Dura Ink Receptive Layer (DIRL) for high ink absorption and adhesion.",
                    "image": "ONE WAY VISION - 140.webp"
                },
                {
                    "id": 20,
                    "Heading": "CLEAR - 120 (Gloss)",
                    "Sizes": "42, 50, 60",
                    "Base Substrate": "PVC",
                    "Surface": "Gloss",
                    "Thickness": "100 micron",
                    "Application": "Glass Film/Stickers",
                    "Adhesion": "Permanent",
                    "Coating": "",
                    "Weight": "120 gsm",
                    "Length": "",
                    "Glue": "",
                    "Compatible with": "",
                    "Product Code": "KLAR1212",
                    "Category": "VINYL",
                    "Description": "Clear Vinyl 120 is an affordable clear vinyl for day-to-day branding applications on glass partitions, window display, stickers etc with 88% transparency when view from distance.\n\nIdeal substrate for short to medium glass applications and stickers.\n\nFormulated with Wyte proprietary, Dura Ink Receptive Layer (DIRL) for high ink absorption and adhesion.",
                    "image": "CLEAR - 120 (Gloss).webp"
                },
                {
                    "id": 21,
                    "Heading": "CLEAR - 100 (Matte)",
                    "Sizes": "50",
                    "Base Substrate": "PVC",
                    "Surface": "Matte",
                    "Thickness": "100 micron",
                    "Application": "Glass Film/Stickers/Decals",
                    "Adhesion": "Permanent",
                    "Coating": "",
                    "Weight": "120 gsm",
                    "Length": "",
                    "Glue": "",
                    "Compatible with": "",
                    "Product Code": "KLAR1013",
                    "Category": "VINYL",
                    "Description": "Clear Vinyl 100 is an affordable clear vinyl for day-to-day branding applications on glass partitions, window display, stickers etc with 80% transparency when viewed from distance.\n\nIdeal substrate for short to medium glass applications, stickers & decals.\n\nFormulated with Wyte proprietary, Dura Ink Receptive Layer (DIRL) for high ink absorption and adhesion.",
                    "image": "CLEAR - 100 (Matte).webp"
                },
                {
                    "id": 22,
                    "Heading": "OPTICAL CLEAR - 120",
                    "Sizes": "50",
                    "Base Substrate": "PVC",
                    "Surface": "Gloss",
                    "Thickness": "120 micron",
                    "Application": "Glass Film/Stickers",
                    "Adhesion": "Removable",
                    "Coating": "",
                    "Weight": "",
                    "Length": "",
                    "Glue": "",
                    "Compatible with": "",
                    "Product Code": "OCP1214",
                    "Category": "VINYL",
                    "Description": "Optical Clear Vinyl 120 is a premium quality clear vinyl for glass partitions, window display, stickers etc with 100% transparency when view from distance.\n\nIdeal substrate for medium term glass applications for offices and home decor.\n\nComes with acrylic based removable adhesive. It doesn’t leave any residue while peeling off. Specially Formulated glue which doesn’t change color due to effects of UV lights on the glue’s ingredients.",
                    "image": "OPTICAL CLEAR - 120.webp"
                },
                {
                    "id": 23,
                    "Heading": "REFLECTIVE - SMOOTH",
                    "Sizes": "50",
                    "Base Substrate": "PVC Light Grey with glass particles",
                    "Surface": "Gloss",
                    "Thickness": "155 micron",
                    "Application": "Reflective Stickers",
                    "Adhesion": "Permanent",
                    "Coating": "",
                    "Weight": "140 gsm",
                    "Length": "",
                    "Glue": "",
                    "Compatible with": "",
                    "Product Code": "REF1015",
                    "Category": "VINYL",
                    "Description": "Reflective sign vinyl for high visibility signs that need to be seen, especially in the dark.\n\nReflective sign vinyl have excellent weather resistance and are suitable for indoor and outdoor reflective signs.\n\n140 gsm liner is for better media handling while printing. Superior adhesive for medium term outdoor application.",
                    "image": "REFLECTIVE - SMOOTH.webp"
                },
                {
                    "id": 24,
                    "Heading": "RETRO REFLECTIVE - SEAMLESS",
                    "Sizes": "50",
                    "Base Substrate": "PVC",
                    "Surface": "Gloss",
                    "Thickness": "170 micron",
                    "Application": "Street Graphics",
                    "Adhesion": "Permanent",
                    "Coating": "",
                    "Weight": "120 gsm",
                    "Length": "",
                    "Glue": "",
                    "Compatible with": "",
                    "Product Code": "RETRO1216",
                    "Category": "VINYL",
                    "Description": "Retro Reflective seamless vinyl for high visibility signs that need to be seen, especially in the dark due to Class B Honeycomb structure for better light reflection.\n\nReflective sign vinyl have excellent weather resistance and are suitable for indoor and outdoor reflective signs.\n\nUltra strong adherence and resistance on any type of surfaces.",
                    "image": "RETRO REFLECTIVE - SEAMLESS.webp"
                },
                {
                    "id": 25,
                    "Heading": "RETRO REFLECTIVE",
                    "Sizes": "54, 124",
                    "Base Substrate": "PVC",
                    "Surface": "Gloss",
                    "Thickness": "",
                    "Application": "Street Graphics",
                    "Adhesion": "Non-Adhesive",
                    "Coating": "",
                    "Weight": "310 gsm",
                    "Length": "",
                    "Glue": "",
                    "Compatible with": "",
                    "Product Code": "RETRO310F",
                    "Category": "FLEX",
                    "Description": "Retro Reflective seamless flex for high visibility hoarding that need to be seen, especially in the dark due to Class B Honeycomb structure for better light reflection.\n\nIt has excellent weather resistance and is suitable for indoor and outdoor reflective signs.",
                    "image": "RETRO REFLECTIVE.webp"
                }
            ]

        },
        {
            id: 6,
            name: "Translites",
            image: "FRONT PRINT TRANSLITE SA MATTE (WR).webp",
            array: "Translites",
            category: "COMMERCIAL PRINTABLE MEDIAS",

            items: [
                {
                    "id": 1,
                    "Heading": "FRONT PRINT TRANSLITE SA MATTE (WR)",
                    "Sizes": "50",
                    "Base Substrate": "PET",
                    "Surface": "Matte",
                    "Thickness": "100 micron",
                    "Application": "Backlit Self-Adhesive",
                    "Adhesion": "Permanent Adhesive",
                    "Coating": "Water Resistant (WR)",
                    "Weight": "",
                    "Length": "",
                    "Glue": "",
                    "Compatible with": "Pigment & Dye Inkjet Printers",
                    "Product Code": "TLSA100M",
                    "Category": "TRANSLITE",
                    "Description": "It is an affordable PET based translite matte film printable on front side. Specially coated with water resistant & low drying time layer for faster productions.\n\nThis PET film is of a premium grade and a perfect substrate for moving and static backlit boxes.\n\nFormulated with Dura Ink Receptive Layer (DIRL) for high ink absorption and scratch resistance. Over laminate is required for printed side.",
                    "image": "FRONT PRINT TRANSLITE SA MATTE (WR).webp"
                },
                {
                    "id": 2,
                    "Heading": "FRONT PRINT TRANSLITE -125 MATTE (WR)",
                    "Sizes": "24, 36, 42, 50, 60",
                    "Base Substrate": "PET",
                    "Surface": "Matte",
                    "Thickness": "125 micron",
                    "Application": "Backlit Non-Adhesive",
                    "Adhesion": "",
                    "Coating": "Water Resistant (WR)",
                    "Weight": "",
                    "Length": "",
                    "Glue": "",
                    "Compatible with": "Pigment & Dye Inkjet Printers",
                    "Product Code": "TL120M",
                    "Category": "TRANSLITE",
                    "Description": "It is an affordable PET based translite matte film printable on front side. Specially coated with low drying time layer for faster productions.\n\nThis PET film is of a premium grade and a perfect substrate for moving and static backlit boxes.\n\nFormulated with Dura Ink Receptive Layer (DIRL) for high ink absorption and scratch resistance. Over laminate is required for printed side.",
                    "image": "FRONT PRINT TRANSLITE -125 MATTE (WR).webp"
                },
                {
                    "id": 3,
                    "Heading": "THICKER REVERSE TRANSLITE",
                    "Sizes": "24, 36, 42, 50, 60",
                    "Base Substrate": "PET",
                    "Surface": "Gloss",
                    "Thickness": "140 micron",
                    "Application": "Backlit",
                    "Adhesion": "",
                    "Coating": "",
                    "Printing": "Mirror Image",
                    "Weight": "",
                    "Length": "",
                    "Glue": "",
                    "Compatible with": "Dye Inkjet Printers",
                    "Product Code": "TLRP140",
                    "Category": "TRANSLITE",
                    "Description": "It is a premium PET based reverse translite matte film printable on back side (mirror image). Specially coated with low drying time layer for faster productions.\n\nThis PET film is of a premium grade and a perfect substrate for static backlit boxes.\n\nFormulated with Dura Ink Receptive Layer (DIRL) for high ink absorption and scratch resistance. Over laminate is required for printed side.",
                    "image": "THICKER REVERSE TRANSLITE.webp"
                },
                {
                    "id": 4,
                    "Heading": "FRONT PRINTING TRANSLITE FILM - 170",
                    "Sizes": "36, 42, 50, 60",
                    "Base Substrate": "PET",
                    "Surface": "Matte",
                    "Thickness": "170 micron",
                    "Application": "Backlit",
                    "Adhesion": "Non-Adhesive",
                    "Coating": "",
                    "Weight": "",
                    "Length": "",
                    "Glue": "",
                    "Compatible with": "",
                    "Product Code": "TRANSGLO170",
                    "Category": "TRANSLITE",
                    "Description": "TRANSGLO170 is an affordable PET based translite matte film printable on front side. Specially coated with low drying time layer for faster productions.\n\nThis PET film is of a premium grade and a perfect substrate for moving and static backlit boxes.\n\nFormulated with Dura Ink Receptive Layer (DIRL) for high ink absorption and scratch resistance. Over laminate is recommended for moving backlit boxes.",
                    "image": "FRONT PRINTING TRANSLITE FILM - 170.webp"
                },
                {
                    "id": 5,
                    "Heading": "FRONT PRINTING TRANSLITE FILM - 210",
                    "Sizes": "36, 42, 50, 60",
                    "Base Substrate": "PET",
                    "Surface": "Matte",
                    "Thickness": "210 micron",
                    "Application": "Backlit",
                    "Adhesion": "Non-Adhesive",
                    "Coating": "",
                    "Weight": "",
                    "Length": "",
                    "Glue": "",
                    "Compatible with": "",
                    "Product Code": "TRANSGLO210",
                    "Category": "TRANSLITE",
                    "Description": "TRANSGLO210 is a premium PET based translite matte film printable on front side. Specially coated with low drying time layer for faster productions.\n\nThis PET film is of a premium grade and a perfect substrate for moving and static backlit boxes.\n\nFormulated with Dura Ink Receptive Layer (DIRL) for high ink absorption and scratch resistance. Over laminate is recommended for moving backlit boxes.",
                    "image": "FRONT PRINTING TRANSLITE FILM - 210.webp"
                }
            ]

        },
        {
            id: 7,
            name: "Banner Media",
            image: "PP NA – 200 MATTE (WR).webp",
            array: "BannerMedia",
            category: "COMMERCIAL PRINTABLE MEDIAS",
            items: [
                {
                    "id": 1,
                    "Heading": "PP NA – 200 MATTE (WR)",
                    "Sizes": "36, 50, 60",
                    "Base Substrate": "PP",
                    "Surface": "Matte",
                    "Thickness": "200 micron",
                    "Application": "Frontlit / Standy",
                    "Adhesion": "",
                    "Coating": "Water Resistant (WR)",
                    "Weight": "",
                    "Length": "",
                    "Glue": "",
                    "Compatible with": "Pigment & Dye Inkjet Printers",
                    "Product Code": "WRPP200M",
                    "Category": "BANNER",
                    "Description": "Polypropylene based premium printable banner substrate with a water resistant coating is an ideal product for general indoor branding applications i.e. roll-up standees, shop front banners etc. Specially formulated with heavy DURA Ink Receptive Layer (DIRL) for high ink absorption.",
                    "image": "PP NA – 200 MATTE (WR).webp"
                },
                {
                    "id": 2,
                    "Heading": "PP NA – 200 MATTE",
                    "Sizes": "36, 42, 50, 60",
                    "Base Substrate": "PP",
                    "Surface": "Matte",
                    "Thickness": "200 micron",
                    "Application": "Frontlit / Standy",
                    "Adhesion": "",
                    "Coating": "",
                    "Weight": "",
                    "Length": "",
                    "Glue": "",
                    "Compatible with": "Dye Inkjet Printers",
                    "Product Code": "PP200M",
                    "Category": "BANNER",
                    "Description": "Polypropylene based premium printable banner substrate is an ideal product for general indoor branding applications i.e. roll-up standees, shop front banners etc. Specially formulated with heavy DURA Ink Receptive Layer (DIRL) for high ink absorption.",
                    "image": "PP NA – 200 MATTE.webp"
                },
                {
                    "id": 3,
                    "Heading": "CLEAR FILM NA – 100 (WR)",
                    "Sizes": "36",
                    "Base Substrate": "PET",
                    "Surface": "Gloss",
                    "Thickness": "100 micron",
                    "Application": "Glass Decoration / Proofing",
                    "Adhesion": "",
                    "Coating": "Water Resistant (WR)",
                    "Weight": "",
                    "Length": "",
                    "Glue": "",
                    "Compatible with": "Pigment & Dye Inkjet Printers",
                    "Product Code": "CL100",
                    "Category": "BANNER",
                    "Description": "It is an affordable clear film with 100% transparency. Specially designed for short term glass decorations and Over Head Projectors (OHP). Formulated with Wyte proprietary, Dura Ink Receptive Layer (DIRL) for high ink absorption.",
                    "image": "CLEAR FILM NA – 100 (WR).webp"
                },
                {
                    "id": 4,
                    "Heading": "TEXTURED - 290",
                    "Sizes": "36, 50, 60",
                    "Base Substrate": "PVC+PP Composite",
                    "Surface": "Matte",
                    "Thickness": "290 micron",
                    "Application": "Banners & Posters",
                    "Adhesion": "Non-Adhesive",
                    "Coating": "",
                    "Weight": "",
                    "Length": "",
                    "Glue": "",
                    "Compatible with": "",
                    "Product Code": "TEX290",
                    "Category": "BANNER",
                    "Description": "TEX290 is a heavy duty textured non-adhesive banner media for general day-to-day branding applications i.e. rollup banners etc.\n\nLonger PVC aging for better durability & makes it a perfect substrate for small to medium duration branding applications.\n\nFormulated with Wyte proprietary, Dura Ink Receptive Layer (DIRL) for high ink absorption and adhesion.",
                    "image": "TEXTURED - 290.webp"
                },
                {
                    "id": 5,
                    "Heading": "GREY BACK - 260",
                    "Sizes": "36, 50, 60",
                    "Base Substrate": "PVC+PP Composite",
                    "Surface": "Matte",
                    "Thickness": "",
                    "Application": "Banners & Posters",
                    "Adhesion": "Non-Adhesive",
                    "Coating": "",
                    "Weight": "260 gsm",
                    "Length": "",
                    "Glue": "",
                    "Compatible with": "",
                    "Product Code": "GREY260",
                    "Category": "BANNER",
                    "Description": "A heavy duty, smooth surface & non-adhesive banner media for general day-to-day branding applications i.e. rollup banners etc.\n\nLonger PVC aging for better durability & makes it a perfect substrate for small to medium duration branding applications.\n\nFormulated with Wyte proprietary, Dura Ink Receptive Layer (DIRL) for high ink absorption and adhesion.",
                    "image": "GREY BACK - 260.webp"
                },
                {
                    "id": 6,
                    "Heading": "BOTH SIDE PRINTABLE - 260",
                    "Sizes": "36, 50",
                    "Base Substrate": "Both side PVC with PET Grey as middle layer",
                    "Surface": "Matte",
                    "Thickness": "",
                    "Application": "Posters & Banners",
                    "Adhesion": "Non-Adhesive",
                    "Coating": "",
                    "Weight": "260 gsm",
                    "Length": "",
                    "Glue": "",
                    "Compatible with": "",
                    "Product Code": "DUAL2620",
                    "Category": "BANNER",
                    "Description": "A heavy duty, both side printable with smooth surface & non-adhesive banner media for double side branding i.e. retail promotional hanging advertising etc.\n\nA unique layered structure with both side PVC and PET Grey as middle layer to make the substrate opaque.\n\nFormulated with Wyte proprietary, Dura Ink Receptive Layer (DIRL) for high ink absorption and adhesion.",
                    "image": "BOTH SIDE PRINTABLE - 260.webp"
                },
                {
                    "id": 7,
                    "Heading": "PP - 190",
                    "Sizes": "36, 50, 60",
                    "Base Substrate": "PP",
                    "Surface": "Matte",
                    "Thickness": "190 micron",
                    "Application": "Banners & Posters",
                    "Adhesion": "Non-Adhesive",
                    "Coating": "",
                    "Weight": "",
                    "Length": "",
                    "Glue": "",
                    "Compatible with": "",
                    "Product Code": "PPB1921",
                    "Category": "BANNER",
                    "Description": "PPB1921 is a polypropylene based smooth non-adhesive banner media for general day-to-day branding applications i.e. rollup banners etc.\n\nPolypropylene is known for its anti-curl properties and is best suitable for rollup banners & hanging wall applications etc.\n\nFormulated with Wyte proprietary, Dura Ink Receptive Layer (DIRL) for high ink absorption and adhesion.",
                    "image": "PP - 190.webp"
                }
            ]

        },
        {
            id: 8,
            name: "Photopapers",
            image: "RESIN COATED PHOTOPAPER – 260 GLOSS (WR).webp",
            array: "PHOTOPAPER",
            category: "INKJET PRINTABLE MEDIAS",
            items: [
                {
                    "id": "1",
                    "Heading": "RESIN COATED PHOTOPAPER – 260 GLOSS (WR)",
                    "Sizes": "5, 6, 8, 12, 16, 24, 30, 36, 42, 50, 60",
                    "Base Substrate": "Paper",
                    "Surface": "Gloss",
                    "Thickness": "",
                    "Application": "Photo Posters",
                    "Adhesion": "",
                    "Coating": "Resin Coated, Water Resistant (WR)",
                    "Weight": "260 gsm",
                    "Length": "",
                    "Glue": "",
                    "Compatible with": "Pigment, Dye Inkjet Printers & MiniLab",
                    "Product Code": "RC260G",
                    "Category": "PHOTOPAPER",
                    "Description": "RC260G is a glossy premium Photo Paper designed for high demanding photography professionals. Brilliant color reproduction and water resistant. Resin Coated photo paper with Photochromic layer for vibrant colors and longevity.",
                    "image": "RESIN COATED PHOTOPAPER – 260 GLOSS (WR).webp"
                },
                {
                    "id": "2",
                    "Heading": "RESIN COATED PHOTOPAPER – 260 SATIN (WR)",
                    "Sizes": "5, 6, 8, 12, 16, 24, 30, 36, 42, 50, 60",
                    "Base Substrate": "Paper",
                    "Surface": "Satin",
                    "Thickness": "",
                    "Application": "Photo Posters",
                    "Adhesion": "",
                    "Coating": "Resin Coated, Water Resistant (WR)",
                    "Weight": "260 gsm",
                    "Length": "",
                    "Glue": "",
                    "Compatible with": "Pigment, Dye Inkjet Printers & MiniLab",
                    "Product Code": "RC260S",
                    "Category": "PHOTOPAPER",
                    "Description": "RC260S is a satin finish premium Photo Paper designed for high demanding photography professionals. Brilliant color reproduction and water resistant. Resin Coated photo paper with Photochromic layer for vibrant colors and longevity.",
                    "image": "RESIN COATED PHOTOPAPER – 260 SATIN (WR).webp"
                },
                {
                    "id": "3",
                    "Heading": "RESIN COATED PHOTOPAPER – 260 LUSTRE (WR)",
                    "Sizes": "24, 36, 42",
                    "Base Substrate": "Paper",
                    "Surface": "Luster",
                    "Thickness": "",
                    "Application": "Photo Posters",
                    "Adhesion": "",
                    "Coating": "Resin Coated, Water Resistant (WR)",
                    "Weight": "260 gsm",
                    "Length": "",
                    "Glue": "",
                    "Compatible with": "Pigment & Dye Inkjet Printers",
                    "Product Code": "RC260L",
                    "Category": "PHOTOPAPER",
                    "Description": "RC260L is a lustre finish premium Photo Paper designed for high demanding photography professionals. Brilliant color reproduction and water resistant. Resin Coated photo paper with Photochromic layer for vibrant colors and longevity.",
                    "image": "RESIN COATED PHOTOPAPER – 260 LUSTRE (WR).webp"
                },
                {
                    "id": "4",
                    "Heading": "RESIN COATED PHOTOPAPER – 260 CANVAS TEXTURE (WR)",
                    "Sizes": "24",
                    "Base Substrate": "Paper",
                    "Surface": "Canvas Texture",
                    "Thickness": "",
                    "Application": "Photo Posters",
                    "Adhesion": "",
                    "Coating": "Resin Coated, Water Resistant (WR)",
                    "Weight": "260 gsm",
                    "Length": "",
                    "Glue": "",
                    "Compatible with": "Pigment & Dye Inkjet Printers",
                    "Product Code": "RC260CAN",
                    "Category": "PHOTOPAPER",
                    "Description": "RC260CAN is a canvas texture finish premium Photo Paper designed for high demanding photography professionals. Brilliant color reproduction and water resistant. Resin Coated photo paper with Photochromic layer for vibrant colors and longevity.",
                    "image": "RESIN COATED PHOTOPAPER – 260 CANVAS TEXTURE (WR).webp"
                },
                {
                    "id": "5",
                    "Heading": "RESIN COATED PHOTOPAPER – 200 GLOSS (WR)",
                    "Sizes": "24, 36",
                    "Base Substrate": "Paper",
                    "Surface": "Gloss",
                    "Thickness": "",
                    "Application": "Photo Posters",
                    "Adhesion": "",
                    "Coating": "Resin Coated, Water Resistant (WR)",
                    "Weight": "200 gsm",
                    "Length": "",
                    "Glue": "",
                    "Compatible with": "Pigment & Dye Inkjet Printers",
                    "Product Code": "RC200G",
                    "Category": "PHOTOPAPER",
                    "Description": "RC200G is a glossy finish premium Photo Paper designed for high demanding photography professionals. Brilliant color reproduction and water resistant. Resin Coated photo paper with Photochromic layer for vibrant colors and longevity.",
                    "image": "RESIN COATED PHOTOPAPER – 200 GLOSS (WR).webp"
                },
                {
                    "id": "6",
                    "Heading": "PHOTOPAPER – 170 MATTE (WR)",
                    "Sizes": "24, 36, 42",
                    "Base Substrate": "Paper",
                    "Surface": "Matte",
                    "Thickness": "",
                    "Application": "Photo Posters",
                    "Adhesion": "",
                    "Coating": "Water Resistant (WR)",
                    "Weight": "170 gsm",
                    "Length": "",
                    "Glue": "",
                    "Compatible with": "Pigment & Dye Inkjet Printers",
                    "Product Code": "CP170M",
                    "Category": "PHOTOPAPER",
                    "Description": "CP170M is a matte finish Photo Paper designed for high demanding photography professionals. Brilliant color reproduction and water resistant. Coated photo paper with DIRL layer for vibrant colors and longevity.",
                    "image": "PHOTOPAPER – 170 MATTE (WR).webp"
                },
                {
                    "id": "7",
                    "Heading": "PHOTOPAPER – 120 MATTE (WR)",
                    "Sizes": "24, 36, 42",
                    "Base Substrate": "Paper",
                    "Surface": "Matte",
                    "Thickness": "",
                    "Application": "Photo Posters",
                    "Adhesion": "",
                    "Coating": "Water Resistant (WR)",
                    "Weight": "120 gsm",
                    "Length": "",
                    "Glue": "",
                    "Compatible with": "Pigment & Dye Inkjet Printers",
                    "Product Code": "CP120M",
                    "Category": "PHOTOPAPER",
                    "Description": "CP120M is a matte finish Photo Paper designed for high demanding photography professionals. Brilliant color reproduction and water resistant. Coated photo paper with DIRL layer for vibrant colors and longevity.",
                    "image": "PHOTOPAPER – 120 MATTE (WR).webp"
                },
                {
                    "id": "8",
                    "Heading": "PLOTTER PAPER – 80/90/100 (WR)",
                    "Sizes": "12, 18, 24, 36, 42, 60",
                    "Base Substrate": "Paper",
                    "Surface": "Matte",
                    "Thickness": "",
                    "Application": "Line Drawing / Mapping",
                    "Adhesion": "",
                    "Coating": "Water Resistant (WR)",
                    "Weight": "80/90/100 gsm",
                    "Length": "",
                    "Glue": "",
                    "Compatible with": "Pigment & Dye Inkjet Printers",
                    "Product Code": "PLOT80/90/100",
                    "Category": "PLOTTER PAPER",
                    "Description": "Wyte Plotter Papers are ideal for drawings and high-quality draft projects. They offer good line quality and can take some solid fill colour as well. The uncoated plotter paper produces superb output results for a wide range of applications.",
                    "image": "PLOTTER PAPER – 8090100 (WR).webp"
                },
                {
                    "id": "9",
                    "Heading": "TRACING PAPER – 90 (WR)",
                    "Sizes": "24, 36",
                    "Base Substrate": "Paper",
                    "Surface": "Matte",
                    "Thickness": "",
                    "Application": "Line Drawing / Mapping",
                    "Adhesion": "",
                    "Coating": "Water Resistant (WR)",
                    "Weight": "90 gsm",
                    "Length": "",
                    "Glue": "",
                    "Compatible with": "Pigment & Dye Inkjet Printers",
                    "Product Code": "TRP90",
                    "Category": "TRACING PAPER",
                    "Description": "Tracing Papers are ideal for drawings and high-quality draft projects. They offer good line quality and can take some solid fill colour as well. The uncoated tracing paper produces superb output results for a wide range of applications.",
                    "image": "TRACING PAPER – 90 (WR).webp"
                },
                {
                    "id": "10",
                    "Heading": "ULTRA GLOSSY - 220",
                    "Sizes": "36, 50",
                    "Base Substrate": "Paper",
                    "Surface": "Gloss",
                    "Thickness": "",
                    "Application": "Photo & Art Prints",
                    "Adhesion": "Non-Adhesive",
                    "Coating": "Instant dry Photochromic layer",
                    "Weight": "220 gsm",
                    "Length": "",
                    "Glue": "",
                    "Compatible with": "",
                    "Product Code": "ULTRA220",
                    "Category": "PHOTO PAPER",
                    "Description": "ULTRA220 is an ultra glossy premium Photo Paper designed for high demanding photography professionals.\n\nBrilliant color reproduction and water resistant.\n\nCoated with Instant dry Photochromic layer.",
                    "image": "ULTRA GLOSSY - 220.webp"
                },
                {
                    "id": "11",
                    "Heading": "MATTE - 180",
                    "Sizes": "50",
                    "Base Substrate": "Paper",
                    "Surface": "Matte",
                    "Thickness": "",
                    "Application": "Photo & Art Prints",
                    "Adhesion": "Non-Adhesive",
                    "Coating": "Instant dry Photochromic layer",
                    "Weight": "180 gsm",
                    "Length": "",
                    "Glue": "",
                    "Compatible with": "",
                    "Product Code": "PHOTO180",
                    "Category": "PHOTO PAPER",
                    "Description": "PHOTO180 is a matte finish premium Photo Paper designed for high demanding photography professionals.\n\nBrilliant color reproduction and water resistant.\n\nCoated with Instant dry Photochromic layer.",
                    "image": "MATTE - 180.webp"
                },
                {
                    "id": "12",
                    "Heading": "LUSTRE - 220",
                    "Sizes": "50",
                    "Base Substrate": "Paper",
                    "Surface": "Lustre",
                    "Thickness": "",
                    "Application": "Photo & Art Prints",
                    "Adhesion": "Non-Adhesive",
                    "Coating": "Instant dry Photochromic layer",
                    "Weight": "220 gsm",
                    "Length": "",
                    "Glue": "",
                    "Compatible with": "",
                    "Product Code": "BLINK220",
                    "Category": "PHOTO PAPER",
                    "Description": "BLINK220 is a photography paper with a finish between glossy and matte.\n\nLustre photo prints have rich colour saturation that gives a vibrant colour finish and, like matte photo prints, they are not vulnerable to fingerprints, whereas glossy photo prints are prone to fingerprints.\n\nCoated with Instant dry Photochromic layer.",
                    "image": "LUSTRE - 220.webp"
                }
            ]

        },
        {
            id: 9,
            name: "Glass Films",
            image: "SPARKLED - 100.webp",
            array: "GLASSFILM",
            category: "DECOR SERIES",
            items: [
                {
                    id: 1,
                    "Heading": "SPARKLED - 100",
                    "Sizes": "50",
                    "Base Substrate": "PVC",
                    "Surface": "Sparkled",
                    "Thickness": "100 micron",
                    "Application": "Glass Prints",
                    "Adhesion": "Permanent",
                    "Coating": "",
                    "Weight": "",
                    "Length": "",
                    "Glue": "",
                    "Compatible with": "",
                    "Product Code": "SPARK100",
                    "Category": "GLASS FILM",
                    "Description": "WYTE SPARKLED printable glass film is a PVC based, water resistant film that comes with glass particles or sparkles. It has outstanding durability and outdoor print life. It has high visible light transmission allowing natural daylight flow. The perfect window film which adds to a certain level of privacy. Printed Sparkled Film also enhances the aesthetics of any commercial or residential space.",
                    "image": "SPARKLED - 100.webp"
                }

            ]

        },
        {
            id: 10,
            name: "Magnetic",
            image: "PRINTABLE FERROUS.webp",
            array: "MAGNETIC",
            category: "COMMERCIAL PRINTABLE MEDIAS",
            items: [
                {
                    id: 1,
                    "Heading": "PRINTABLE FERROUS",
                    "Sizes": "50",
                    "Base Substrate": "Composite Printable PP & rubber sheet",
                    "Surface": "Matte",
                    "Thickness": "0.28 mm",
                    "Application": "Frontlit",
                    "Adhesion": "Non-Adhesive",
                    "Coating": "Dura Ink Receptive Layer (DIRL)",
                    "Weight": "",
                    "Length": "",
                    "Glue": "",
                    "Compatible with": "",
                    "Product Code": "FERRO28",
                    "Category": "MAGNETIC",
                    "Description": "FERROUS is a charged printable substrate for easy installation of graphic on magnetic base material (MAG-BASE). Printable Layer is a Polypropylene which is known for its smooth surface and brilliant color output. Treated with Dura Ink Receptive Layer (DIRL) for high ink absorption and scratch resistance. It is suitable for full-colour graphics for indoor & outdoor applications such as fast graphic replacement for retail and office etc.",
                    "image": "PRINTABLE FERROUS.webp"
                }

            ]

        },
    ]

    const [product, setProduct] = useState(products)

    // Categories
    let ProductCategory = [
        {
            id: 1,
            name: "Inkjet Water-base Printable Substrates",
            image: "RESIN COATED PHOTOPAPER – 260 LUSTRE (WR).webp",
            items: [

                {

                    "id": 1,

                    "Heading": "VINYL - PVC SA - MATTE (WR)",

                    "Sizes": "50",

                    "Base Substrate": "PVC",

                    "Surface": "Matte",

                    "Weight": "",

                    "Thickness": "100 micron",

                    "Application": "Indoor branding",

                    "Adhesion": "Removable Adhesive",

                    "Coating": "Water Resistant (WR)",

                    "Length": "",

                    "Glue": "",

                    "Compatible with": "Pigment & Dye Inkjet Printers",

                    "Product Code": "SKIN100",

                    "Category": "Inkjet Water-base Printable Substrates",

                    "Description": "PVC based premium printable vinyl with a water resistant coating and removable adhesive is an ideal product for general Indoor branding applications.\n\nRemovable adhesive makes this vinyl a preferred substrate where faster removal of existing prints are required.\n\nIt is also suitable for laptop and mobile skins.",

                    "image": "PVC SA - MATTE (WR).webp"

                },

                {

                    "id": 2,

                    "Heading": "VINYL - PP SA - 150 MATTE (WR)",

                    "Sizes": "24, 36, 42, 50, 60",

                    "Base Substrate": "PP",

                    "Surface": "Matte",

                    "Weight": "",

                    "Thickness": "150 micron",

                    "Application": "Indoor branding",

                    "Adhesion": "Permanent",

                    "Coating": "Water Resistant (WR)",

                    "Length": "",

                    "Glue": "",

                    "Compatible with": "Pigment & Dye Inkjet Printers",

                    "Product Code": "WR150PPSA",

                    "Category": "VINYL",

                    "Description": "Polypropylene based premium printable vinyl with a water resistant coating and permanent adhesive is an ideal product for general Indoor branding applications.\n\nSpecially formulated with heavy DURA Ink Receptive Layer (DIRL) for high ink absorption.",

                    "image": "PP SA - 150 MATTE (WR).webp"

                },

                {

                    "id": 3,

                    "Heading": "VINYL - PP SA - 150 MATTE",

                    "Sizes": "24, 36, 42, 50, 60",

                    "Base Substrate": "PP",

                    "Surface": "Matte",

                    "Weight": "",

                    "Thickness": "150 micron",

                    "Application": "Frontlit",

                    "Adhesion": "Permanent Adhesive",

                    "Coating": "",

                    "Length": "",

                    "Glue": "",

                    "Compatible with": "Dye Inkjet Printers",

                    "Product Code": "PPSA150M",

                    "Category": "VINYL",

                    "Description": "Polypropylene based printable vinyl with strong adhesive is an ideal product for general Indoor branding applications, events and exhibitions.\n\nSpecially formulated with heavy DURA Ink Receptive Layer (DIRL) for high ink absorption.",

                    "image": "PP SA - 150 MATTE.webp"

                },

                {

                    "id": 4,

                    "Heading": "VINYL - PP SA - 150 GLOSS",

                    "Sizes": "36, 42, 50, 60",

                    "Base Substrate": "PP",

                    "Surface": "Gloss",

                    "Weight": "",

                    "Thickness": "150 micron",

                    "Application": "Frontlit",

                    "Adhesion": "Permanent Adhesive",

                    "Coating": "",

                    "Length": "",

                    "Glue": "",

                    "Compatible with": "Dye Inkjet Printers",

                    "Product Code": "PPSA150G",

                    "Category": "VINYL",

                    "Description": "Polypropylene based printable vinyl with strong adhesive is an ideal product for general Indoor branding applications, events and exhibitions.\n\nSpecially formulated with heavy DURA Ink Receptive Layer (DIRL) for high ink absorption.",

                    "image": "PP SA - 150 GLOSS.webp"

                },

                {

                    "id": 5,

                    "Heading": "VINYL - SILVER CHROME VINYL SA GLOSS",

                    "Sizes": "36, 50",

                    "Base Substrate": "PET",

                    "Surface": "Gloss",

                    "Thickness": "100 micron",

                    "Application": "Frontlit",

                    "Adhesion": "Permanent Adhesive",

                    "Coating": "",

                    "Weight": "",

                    "Length": "",

                    "Glue": "",

                    "Compatible with": "Dye Inkjet Printers",

                    "Product Code": "SILVSA",

                    "Category": "VINYL",

                    "Description": "Silver Chrome is a glossy mirror vinyl which comes with premium quality clear permanent adhesive.\n\nIdeal solution for short term promotional branding applications for retail & offices, promotional stickers for packaging etc.\n\nFormulated with Wyte proprietary, Dura Ink Receptive Layer (DIRL) for high ink absorption and adhesion.",

                    "image": "SILVER CHROME VINYL SA GLOSS.webp"

                },

                {

                    "id": 6,

                    "Heading": "VINYL - FRONT ADHESIVE GLASS FILM",

                    "Sizes": "36, 50",

                    "Base Substrate": "PET",

                    "Surface": "Gloss",

                    "Thickness": "60 micron",

                    "Application": "Glass Decor / Glass Top (Indoor Only)",

                    "Adhesion": "Permanent Adhesive",

                    "Coating": "",

                    "Weight": "",

                    "Length": "",

                    "Glue": "",

                    "Compatible with": "Dye Inkjet Printers",

                    "Product Code": "FA60GF",

                    "Category": "VINYL",

                    "Description": "A premium PET based front adhesive glass film printable on the back side (mirror image). Specially coated with low drying time layer for faster productions.\n\nThis PET film is of a premium grade and a perfect substrate for glass tops & shop front glass (in malls only). NOT suitable for outdoor glass applications.\n\nFormulated with Dura Ink Receptive Layer (DIRL) for high ink absorption and scratch resistance. Over laminate is required for printed side.",

                    "image": "FRONT ADHESIVE GLASS FILM.webp"

                },

                {

                    "id": 7,

                    "Heading": "TRANSLITE - FRONT PRINT TRANSLITE SA MATTE (WR)",

                    "Sizes": "50",

                    "Base Substrate": "PET",

                    "Surface": "Matte",

                    "Thickness": "100 micron",

                    "Application": "Backlit Self-Adhesive",

                    "Adhesion": "Permanent Adhesive",

                    "Coating": "Water Resistant (WR)",

                    "Weight": "",

                    "Length": "",

                    "Glue": "",

                    "Compatible with": "Pigment & Dye Inkjet Printers",

                    "Product Code": "TLSA100M",

                    "Category": "TRANSLITE",

                    "Description": "It is an affordable PET based translite matte film printable on front side. Specially coated with water resistant & low drying time layer for faster productions.\n\nThis PET film is of a premium grade and a perfect substrate for moving and static backlit boxes.\n\nFormulated with Dura Ink Receptive Layer (DIRL) for high ink absorption and scratch resistance. Over laminate is required for printed side.",

                    "image": "FRONT PRINT TRANSLITE SA MATTE (WR).webp"

                },

                {

                    "id": 8,

                    "Heading": "TRANSLITE - FRONT PRINT TRANSLITE -125 MATTE (WR)",

                    "Sizes": "24, 36, 42, 50, 60",

                    "Base Substrate": "PET",

                    "Surface": "Matte",

                    "Thickness": "125 micron",

                    "Application": "Backlit Non-Adhesive",

                    "Adhesion": "",

                    "Coating": "Water Resistant (WR)",

                    "Weight": "",

                    "Length": "",

                    "Glue": "",

                    "Compatible with": "Pigment & Dye Inkjet Printers",

                    "Product Code": "TL120M",

                    "Category": "TRANSLITE",

                    "Description": "It is an affordable PET based translite matte film printable on front side. Specially coated with low drying time layer for faster productions.\n\nThis PET film is of a premium grade and a perfect substrate for moving and static backlit boxes.\n\nFormulated with Dura Ink Receptive Layer (DIRL) for high ink absorption and scratch resistance. Over laminate is required for printed side.",

                    "image": "FRONT PRINT TRANSLITE -125 MATTE (WR).webp"

                },

                {

                    "id": 9,

                    "Heading": "TRANSLITE - THICKER REVERSE TRANSLITE",

                    "Sizes": "24, 36, 42, 50, 60",

                    "Base Substrate": "PET",

                    "Surface": "Gloss",

                    "Thickness": "140 micron",

                    "Application": "Backlit",

                    "Adhesion": "",

                    "Coating": "",

                    "Printing": "Mirror Image",

                    "Weight": "",

                    "Length": "",

                    "Glue": "",

                    "Compatible with": "Dye Inkjet Printers",

                    "Product Code": "TLRP140",

                    "Category": "TRANSLITE",

                    "Description": "It is a premium PET based reverse translite matte film printable on back side (mirror image). Specially coated with low drying time layer for faster productions.\n\nThis PET film is of a premium grade and a perfect substrate for static backlit boxes.\n\nFormulated with Dura Ink Receptive Layer (DIRL) for high ink absorption and scratch resistance. Over laminate is required for printed side.",

                    "image": "THICKER REVERSE TRANSLITE.webp"

                },

                {

                    "id": 10,

                    "Heading": "BANNER - PP NA – 200 MATTE (WR)",

                    "Sizes": "36, 50, 60",

                    "Base Substrate": "PP",

                    "Surface": "Matte",

                    "Thickness": "200 micron",

                    "Application": "Frontlit / Standy",

                    "Adhesion": "",

                    "Coating": "Water Resistant (WR)",

                    "Weight": "",

                    "Length": "",

                    "Glue": "",

                    "Compatible with": "Pigment & Dye Inkjet Printers",

                    "Product Code": "WRPP200M",

                    "Category": "BANNER",

                    "Description": "Polypropylene based premium printable banner substrate with a water resistant coating is an ideal product for general indoor branding applications i.e. roll-up standees, shop front banners etc. Specially formulated with heavy DURA Ink Receptive Layer (DIRL) for high ink absorption.",

                    "image": "PP NA – 200 MATTE (WR).webp"

                },

                {

                    "id": 11,

                    "Heading": "BANNER - PP NA – 200 MATTE",

                    "Sizes": "36, 42, 50, 60",

                    "Base Substrate": "PP",

                    "Surface": "Matte",

                    "Thickness": "200 micron",

                    "Application": "Frontlit / Standy",

                    "Adhesion": "",

                    "Coating": "",

                    "Weight": "",

                    "Length": "",

                    "Glue": "",

                    "Compatible with": "Dye Inkjet Printers",

                    "Product Code": "PP200M",

                    "Category": "BANNER",

                    "Description": "Polypropylene based premium printable banner substrate is an ideal product for general indoor branding applications i.e. roll-up standees, shop front banners etc. Specially formulated with heavy DURA Ink Receptive Layer (DIRL) for high ink absorption.",

                    "image": "PP NA – 200 MATTE.webp"

                },

                {

                    "id": 12,

                    "Heading": "BANNER - CLEAR FILM NA – 100 (WR)",

                    "Sizes": "36",

                    "Base Substrate": "PET",

                    "Surface": "Gloss",

                    "Thickness": "100 micron",

                    "Application": "Glass Decoration / Proofing",

                    "Adhesion": "",

                    "Coating": "Water Resistant (WR)",

                    "Weight": "",

                    "Length": "",

                    "Glue": "",

                    "Compatible with": "Pigment & Dye Inkjet Printers",

                    "Product Code": "CL100",

                    "Category": "BANNER",

                    "Description": "It is an affordable clear film with 100% transparency. Specially designed for short term glass decorations and Over Head Projectors (OHP). Formulated with Wyte proprietary, Dura Ink Receptive Layer (DIRL) for high ink absorption.",

                    "image": "CLEAR FILM NA – 100 (WR).webp"

                },

                {

                    "id": 13,

                    "Heading": "PHOTOPAPER - RESIN COATED PHOTOPAPER – 260 GLOSS (WR)",

                    "Sizes": "5, 6, 8, 12, 16, 24, 30, 36, 42, 50, 60",

                    "Base Substrate": "Paper",

                    "Surface": "Gloss",

                    "Thickness": "",

                    "Application": "Photo Posters",

                    "Adhesion": "",

                    "Coating": "Resin Coated, Water Resistant (WR)",

                    "Weight": "260 gsm",

                    "Length": "",

                    "Glue": "",

                    "Compatible with": "Pigment, Dye Inkjet Printers & MiniLab",

                    "Product Code": "RC260G",

                    "Category": "PHOTOPAPER",

                    "Description": "RC260G is a glossy premium Photo Paper designed for high demanding photography professionals. Brilliant color reproduction and water resistant. Resin Coated photo paper with Photochromic layer for vibrant colors and longevity.",

                    "image": "RESIN COATED PHOTOPAPER – 260 GLOSS (WR).webp"

                },

                {

                    "id": 14,

                    "Heading": "PHOTOPAPER - RESIN COATED PHOTOPAPER – 260 SATIN (WR)",

                    "Sizes": "5, 6, 8, 12, 16, 24, 30, 36, 42, 50, 60",

                    "Base Substrate": "Paper",

                    "Surface": "Satin",

                    "Thickness": "",

                    "Application": "Photo Posters",

                    "Adhesion": "",

                    "Coating": "Resin Coated, Water Resistant (WR)",

                    "Weight": "260 gsm",

                    "Length": "",

                    "Glue": "",

                    "Compatible with": "Pigment, Dye Inkjet Printers & MiniLab",

                    "Product Code": "RC260S",

                    "Category": "PHOTOPAPER",

                    "Description": "RC260S is a satin finish premium Photo Paper designed for high demanding photography professionals. Brilliant color reproduction and water resistant. Resin Coated photo paper with Photochromic layer for vibrant colors and longevity.",

                    "image": "RESIN COATED PHOTOPAPER – 260 SATIN (WR).webp"

                },

                {

                    "id": 15,

                    "Heading": "PHOTOPAPER - RESIN COATED PHOTOPAPER – 260 LUSTRE (WR)",

                    "Sizes": "24, 36, 42",

                    "Base Substrate": "Paper",

                    "Surface": "Luster",

                    "Thickness": "",

                    "Application": "Photo Posters",

                    "Adhesion": "",

                    "Coating": "Resin Coated, Water Resistant (WR)",

                    "Weight": "260 gsm",

                    "Length": "",

                    "Glue": "",

                    "Compatible with": "Pigment & Dye Inkjet Printers",

                    "Product Code": "RC260L",

                    "Category": "PHOTOPAPER",

                    "Description": "RC260L is a lustre finish premium Photo Paper designed for high demanding photography professionals. Brilliant color reproduction and water resistant. Resin Coated photo paper with Photochromic layer for vibrant colors and longevity.",

                    "image": "RESIN COATED PHOTOPAPER – 260 LUSTRE (WR).webp"

                },

                {

                    "id": 16,

                    "Heading": "PHOTOPAPER - RESIN COATED PHOTOPAPER – 260 CANVAS TEXTURE (WR)",

                    "Sizes": "24",

                    "Base Substrate": "Paper",

                    "Surface": "Canvas Texture",

                    "Thickness": "",

                    "Application": "Photo Posters",

                    "Adhesion": "",

                    "Coating": "Resin Coated, Water Resistant (WR)",

                    "Weight": "260 gsm",

                    "Length": "",

                    "Glue": "",

                    "Compatible with": "Pigment & Dye Inkjet Printers",

                    "Product Code": "RC260CAN",

                    "Category": "PHOTOPAPER",

                    "Description": "RC260CAN is a canvas texture finish premium Photo Paper designed for high demanding photography professionals. Brilliant color reproduction and water resistant. Resin Coated photo paper with Photochromic layer for vibrant colors and longevity.",

                    "image": "RESIN COATED PHOTOPAPER – 260 CANVAS TEXTURE (WR).webp"

                },

                {

                    "id": 17,

                    "Heading": "PHOTOPAPER - RESIN COATED PHOTOPAPER – 200 GLOSS (WR)",

                    "Sizes": "24, 36",

                    "Base Substrate": "Paper",

                    "Surface": "Gloss",

                    "Thickness": "",

                    "Application": "Photo Posters",

                    "Adhesion": "",

                    "Coating": "Resin Coated, Water Resistant (WR)",

                    "Weight": "200 gsm",

                    "Length": "",

                    "Glue": "",

                    "Compatible with": "Pigment & Dye Inkjet Printers",

                    "Product Code": "RC200G",

                    "Category": "PHOTOPAPER",

                    "Description": "RC200G is a glossy finish premium Photo Paper designed for high demanding photography professionals. Brilliant color reproduction and water resistant. Resin Coated photo paper with Photochromic layer for vibrant colors and longevity.",

                    "image": "RESIN COATED PHOTOPAPER – 200 GLOSS (WR).webp"

                },

                {

                    "id": 18,

                    "Heading": "PHOTOPAPER - PHOTOPAPER – 170 MATTE (WR)",

                    "Sizes": "24, 36, 42",

                    "Base Substrate": "Paper",

                    "Surface": "Matte",

                    "Thickness": "",

                    "Application": "Photo Posters",

                    "Adhesion": "",

                    "Coating": "Water Resistant (WR)",

                    "Weight": "170 gsm",

                    "Length": "",

                    "Glue": "",

                    "Compatible with": "Pigment & Dye Inkjet Printers",

                    "Product Code": "CP170M",

                    "Category": "PHOTOPAPER",

                    "Description": "CP170M is a matte finish Photo Paper designed for high demanding photography professionals. Brilliant color reproduction and water resistant. Coated photo paper with DIRL layer for vibrant colors and longevity.",

                    "image": "PHOTOPAPER – 170 MATTE (WR).webp"

                },

                {

                    "id": 19,

                    "Heading": "PHOTOPAPER - PHOTOPAPER – 120 MATTE (WR)",

                    "Sizes": "24, 36, 42",

                    "Base Substrate": "Paper",

                    "Surface": "Matte",

                    "Thickness": "",

                    "Application": "Photo Posters",

                    "Adhesion": "",

                    "Coating": "Water Resistant (WR)",

                    "Weight": "120 gsm",

                    "Length": "",

                    "Glue": "",

                    "Compatible with": "Pigment & Dye Inkjet Printers",

                    "Product Code": "CP120M",

                    "Category": "PHOTOPAPER",

                    "Description": "CP120M is a matte finish Photo Paper designed for high demanding photography professionals. Brilliant color reproduction and water resistant. Coated photo paper with DIRL layer for vibrant colors and longevity.",

                    "image": "PHOTOPAPER – 120 MATTE (WR).webp"

                },

                {

                    "id": 20,

                    "Heading": "PLOTTER PAPER – 80/90/100 (WR)",

                    "Sizes": "12, 18, 24, 36, 42, 60",

                    "Base Substrate": "Paper",

                    "Surface": "Matte",

                    "Thickness": "",

                    "Application": "Line Drawing / Mapping",

                    "Adhesion": "",

                    "Coating": "Water Resistant (WR)",

                    "Weight": "80/90/100 gsm",

                    "Length": "",

                    "Glue": "",

                    "Compatible with": "Pigment & Dye Inkjet Printers",

                    "Product Code": "PLOT80/90/100",

                    "Category": "PLOTTER PAPER",

                    "Description": "Wyte Plotter Papers are ideal for drawings and high-quality draft projects. They offer good line quality and can take some solid fill colour as well. The uncoated plotter paper produces superb output results for a wide range of applications.",

                    "image": "PLOTTER PAPER – 8090100 (WR).webp"

                },

                {

                    "id": 21,

                    "Heading": "TRACING PAPER – 90 (WR)",

                    "Sizes": "24, 36",

                    "Base Substrate": "Paper",

                    "Surface": "Matte",

                    "Thickness": "",

                    "Application": "Line Drawing / Mapping",

                    "Adhesion": "",

                    "Coating": "Water Resistant (WR)",

                    "Weight": "90 gsm",

                    "Length": "",

                    "Glue": "",

                    "Compatible with": "Pigment & Dye Inkjet Printers",

                    "Product Code": "TRP90",

                    "Category": "TRACING PAPER",

                    "Description": "Tracing Papers are ideal for drawings and high-quality draft projects. They offer good line quality and can take some solid fill colour as well. The uncoated tracing paper produces superb output results for a wide range of applications.",

                    "image": "TRACING PAPER – 90 (WR).webp"

                },

                {

                    "id": 22,

                    "Heading": "CANVAS - ARTISTIC CANVAS – 380 MATTE (WR)",

                    "Sizes": "24, 36, 42, 50, 60",

                    "Base Substrate": "Poly Cotton",

                    "Surface": "Matte",

                    "Thickness": "",

                    "Application": "Art Prints",

                    "Adhesion": "",

                    "Coating": "Water Resistant (WR)",

                    "Weight": "380 gsm",

                    "Length": "",

                    "Glue": "",

                    "Compatible with": "Pigment & Dye Inkjet Printers",

                    "Product Code": "AC380M",

                    "Category": "CANVAS",

                    "Description": "ARTISTIC CANVAS 380 MATTE is a water resistant, Optical Brightening additive (OB) free, poly-cotton white matte canvas, top-coated with a high absorption ink-receptive layer. It is suitable for full-colour graphics for indoor & outdoor applications such as fine art and photographic reproductions, theatre and exhibition galleries.",

                    "image": "ARTISTIC CANVAS – 380 MATTE (WR).webp"

                },

                {

                    "id": 23,

                    "Heading": "FABRIC - CLOTH BANNER – 120 MATTE (WR)",

                    "Sizes": "24, 36, 42, 50, 60",

                    "Base Substrate": "Polyester",

                    "Surface": "Matte",

                    "Thickness": "",

                    "Application": "Backlit / Nonlit",

                    "Adhesion": "",

                    "Coating": "Water Resistant (WR)",

                    "Weight": "120 gsm",

                    "Length": "",

                    "Glue": "",

                    "Compatible with": "Pigment & Dye Inkjet Printers",

                    "Product Code": "CB120M",

                    "Category": "FABRIC",

                    "Description": "CB120M is a water resistant, Optical Brightening additive (OB) free, polyester white fabric, layered with a high absorption ink-receptive coating for optimal & evenly spread backlit application. It is suitable for full-colour graphics for indoor applications such as Retail Branding, Backlit Boxes & Exhibition Graphics etc.",

                    "image": "CLOTH BANNER – 120 MATTE (WR).webp"

                },
                {
                    "id": 24,
                    "Heading": "LAMINATION FILMS - SPARKLE",
                    "Sizes": "42, 50",
                    "Base Substrate": "PVC",
                    "Surface": "Sparkle Matte",
                    "Thickness": "100 micron",
                    "Application": "Glass Decoration / Over Laminate",
                    "Adhesion": "Permanent Adhesive",
                    "Coating": "",
                    "Weight": "",
                    "Length": "",
                    "Glue": "",
                    "Compatible with": "",
                    "Product Code": "SPARK100",
                    "Category": "LAMINATION FILMS",
                    "Description": "SPARKLE LAMINATION is a matte finish over laminate with sparkles. It has 100% clear adhesive. Provides additional protection which makes prints to stay fade resistance for a longer period.",
                    "image": "MOUNTING - CLEAR DOUBLE SIDE 60.webp"
                },
                {
                    "id": 25,
                    "Heading": "LAMINATION FILMS - 3-D",
                    "Sizes": "50",
                    "Base Substrate": "PVC",
                    "Surface": "3-D Cat Eye",
                    "Thickness": "100 micron",
                    "Application": "Glass Decoration / Over Laminate",
                    "Adhesion": "Permanent Adhesive",
                    "Coating": "",
                    "Weight": "",
                    "Length": "",
                    "Glue": "",
                    "Compatible with": "",
                    "Product Code": "3DLAM100",
                    "Category": "LAMINATION FILMS",
                    "Description": "3-D LAMINATION is a 3D smooth over laminate with 100% clear adhesive in gloss finish. Provides additional protection which makes prints to stay fade resistance for a longer period.",
                    "image": "LAMINATION - 3D 100.webp"
                },
                {
                    "id": 26,
                    "Heading": "LAMINATION FILMS - MATTE",
                    "Sizes": "36, 40, 42, 50, 60",
                    "Base Substrate": "PVC",
                    "Surface": "Matte",
                    "Thickness": "80 micron",
                    "Application": "Over Laminate",
                    "Adhesion": "Permanent",
                    "Coating": "",
                    "Weight": "",
                    "Length": "",
                    "Glue": "",
                    "Compatible with": "",
                    "Product Code": "WLAM80M",
                    "Category": "LAMINATION FILMS",
                    "Description": "MATTE LAMINATION is satin matte finished over laminate with 100% clear adhesive. Provides additional protection which makes prints to stay fade resistance for a longer period.",
                    "image": "LAMINATION - MATTE 80.webp"
                },
                {
                    "id": 27,
                    "Heading": "LAMINATION FILMS - GLOSS",
                    "Sizes": "36, 40, 42, 50, 60",
                    "Base Substrate": "PVC",
                    "Surface": "Gloss",
                    "Thickness": "80 micron",
                    "Application": "Over Laminate",
                    "Adhesion": "Permanent",
                    "Coating": "",
                    "Weight": "",
                    "Length": "",
                    "Glue": "",
                    "Compatible with": "",
                    "Product Code": "WLAM80G",
                    "Category": "LAMINATION FILMS",
                    "Description": "GLOSS LAMINATION is gloss finished over laminate with 100% clear adhesive. Provides additional protection which makes prints to stay fade resistance for a longer period.",
                    "image": "LAMINATION - GLOSS 80.webp"
                },
                {
                    "id": 28,
                    "Heading": "LAMINATION FILMS - MOUNTING FILM CLEAR",
                    "Sizes": "50",
                    "Base Substrate": "PVC",
                    "Surface": "Clear",
                    "Thickness": "60 micron",
                    "Application": "Mounting Film",
                    "Adhesion": "Both Side Adhesive",
                    "Coating": "",
                    "Weight": "",
                    "Length": "",
                    "Glue": "",
                    "Compatible with": "",
                    "Product Code": "MOUNT60",
                    "Category": "LAMINATION FILMS",
                    "Description": "MOUNTING FILM is an acrylic adhesive based, double side mounting film. Works as an adhesive layer where Self-adhesive material is not available. Acrylic based adhesive is all weather resistant and does not loose adhesion in all weather conditions.",
                    "image": "MOUNTING - CLEAR DOUBLE SIDE 60.webp"
                }






            ]
        },
        {
            id: 2,
            name: " CARELIT ENVIRONMENT FRIENDLY PRINTABLE FABRICS",
            image: "MP FILM - 180 (Matte).webp",
            items: [
                {
                    "id": 1,
                    "Heading": "POLYESTER FABRIC - FRONTLIT - 130 (Gloss)",
                    "Sizes": "40, 52, 63, 80, 100, 126",
                    "Base Substrate": "Polyester Fabric",
                    "Surface": "Gloss",
                    "Weight": "130 gsm",
                    "Thickness": "",
                    "Application": "Frontlit",
                    "Length": "",
                    "Glue": "",
                    "Compatible with": "Eco Sol / Latex / U.V. Printers",
                    "Product Code": "FF130G",
                    "Category": "CARELIT Re",
                    "Description": "PVC FREE & 100% Recyclable\n\nFF130G-Re is a Woven POLYESTER Frontlit Fabric in matte finish. Specially developed for Outdoor & Indoor advertising, Events, signage & Hoardings etc.\n\nWaterproof & High-quality print texture with high tensile strength for Outdoor displays.",
                    "image": "FRONTLIT - 130 (Gloss).webp"
                },
                {
                    "id": 2,
                    "Heading": "POLYESTER FABRIC - FRONTLIT - 200 (Matte)",
                    "Sizes": "40, 52, 63, 80, 100, 126",
                    "Base Substrate": "Polyester Fabric",
                    "Surface": "Matte",
                    "Weight": "200 gsm",
                    "Thickness": "",
                    "Application": "Frontlit",
                    "Length": "",
                    "Glue": "",
                    "Compatible with": "Eco Sol / Latex / U.V. Printers",
                    "Product Code": "FF200M",
                    "Category": "CARELIT Re",
                    "Description": "PVC FREE & 100% Recyclable\n\nFF200M-Re is a Woven POLYESTER Frontlit Fabric in matte finish. Specially developed for Outdoor & Indoor advertising, Events, signage & Hoardings etc.\n\nWaterproof & High-quality print texture with high tensile strength for Outdoor displays.",
                    "image": "FRONTLIT - 200 (Matte).webp"
                },
                {
                    "id": 3,
                    "Heading": "POLYESTER FABRIC - BLACK BACK FRONTLIT - 220 (Gloss)",
                    "Sizes": "40, 52, 63, 80, 100, 126",
                    "Base Substrate": "Polyester Fabric",
                    "Surface": "Gloss",
                    "Weight": "220 gsm",
                    "Thickness": "",
                    "Application": "Frontlit",
                    "Length": "",
                    "Glue": "",
                    "Compatible with": "Eco Sol / Latex / U.V. Printers",
                    "Product Code": "BBF220G",
                    "Category": "CARELIT Re",
                    "Description": "PVC FREE & 100% Recyclable\n\nBBF220G-Re is a Woven POLYESTER Frontlit Fabric that comes with a unique opaque black coating on the back to prevent light penetration through the media.\n\nSpecially developed for Outdoor & Indoor advertising, Events, signage & Hoardings etc. Waterproof & High-quality print texture with high tensile strength for Outdoor displays.",
                    "image": "BLACK BACK FRONTLIT - 220 (Gloss).webp"
                },
                {
                    "id": 4,
                    "Heading": "POLYESTER FABRIC - BLACK BACK FRONTLIT - 220 (Matte)",
                    "Sizes": "40, 52, 63, 80, 100, 126",
                    "Base Substrate": "Polyester Fabric",
                    "Surface": "Matte",
                    "Weight": "220 gsm",
                    "Thickness": "",
                    "Application": "Frontlit",
                    "Length": "",
                    "Glue": "",
                    "Compatible with": "Eco Sol / Latex / U.V. Printers",
                    "Product Code": "BBF220M",
                    "Category": "CARELIT Re",
                    "Description": "PVC FREE & 100% Recyclable\n\nBBF220M-Re is a Woven POLYESTER Frontlit Fabric that comes with a unique opaque black coating on the back to prevent light penetration through the media.\n\nSpecially developed for Outdoor & Indoor advertising, Events, signage & Hoardings etc. Waterproof & High-quality print texture with high tensile strength for Outdoor displays.",
                    "image": "BLACK BACK FRONTLIT - 220 (Matte).webp"
                },
                {
                    "id": 5,
                    "Heading": "POLYESTER FABRIC - BOTH SIDE PRINTING - 360 (Matte)",
                    "Sizes": "51, 63, 102, 126",
                    "Base Substrate": "Polyester Fabric",
                    "Surface": "Matte (Opaque)",
                    "Weight": "360 gsm",
                    "Thickness": "",
                    "Application": "Both Side Printable",
                    "Length": "",
                    "Glue": "",
                    "Compatible with": "Eco Sol / Latex / U.V. Printers",
                    "Product Code": "BSP360M",
                    "Category": "CARELIT Re",
                    "Description": "PVC FREE & 100% Recyclable\n\nBSP360M-Re is a Woven POLYESTER Frontlit Fabric in Matte finish. It is a Both Side printable block-out substrate with a unique coating to prevent scratching against platen surface when printing on other side.\n\nSpecially developed for Outdoor & Indoor advertising, Events, signage & Hoardings etc. Waterproof & High-quality print texture with high tensile strength for Outdoor displays.",
                    "image": "BOTH SIDE PRINTING - 360 (Matte).webp"
                },
                {
                    "id": 6,
                    "Heading": "POLYESTER FABRIC - PERFORATED FABRIC - 100",
                    "Sizes": "60",
                    "Base Substrate": "Polyester Fabric",
                    "Surface": "Matte",
                    "Weight": "100 gsm",
                    "Thickness": "",
                    "Application": "Both Side Visible",
                    "Length": "",
                    "Glue": "",
                    "Compatible with": "U.V. Printers",
                    "Product Code": "PF100M",
                    "Category": "CARELIT Re",
                    "Description": "PVC FREE & 100% Recyclable\n\nPF100M-Re is a Woven POLYESTER Perforated Fabric in Matte finish. It is a Both Side visible & breathable substrate.\n\nSpecially developed for Outdoor & Indoor advertising, Events, signage & Hoardings etc. Waterproof & High-quality print texture with high tensile strength for Outdoor displays.",
                    "image": "PERFORATED FABRIC - 100.webp"
                },
                {
                    "id": 7,
                    "Heading": "PVC-FREE VINYL - 150 (Matte)",
                    "Sizes": "42, 50, 60",
                    "Base Substrate": "Polypropylene",
                    "Surface": "Matte",
                    "Weight": "",
                    "Thickness": "150 micron",
                    "Application": "Frontlit",
                    "Length": "",
                    "Glue": "Removable Grey Back",
                    "Compatible with": "Eco Sol / Latex / U.V. Printers",
                    "Product Code": "W09CARE",
                    "Category": "CARELIT Re",
                    "Description": "Environment friendly:\n• PVC Free - NO solvent release\n• Water-based Grey glue\n\nBetter Performance:\n• PP has better flatness than PVC\n• Removable adhesive\n• Fewer dust from raw material\n\nWarranty: 2 years outdoor",
                    "image": "PVC-FREE VINYL - 150 (Matte).webp"
                },
                {
                    "id": 8,
                    "Heading": "CARELIT Re - PVC-FREE LAM - 55 (Matte)",
                    "Sizes": "36, 40, 42, 50, 60",
                    "Base Substrate": "Polypropylene",
                    "Surface": "Matte",
                    "Thickness": "55 micron",
                    "Application": "Frontlit",
                    "Adhesion": "",
                    "Coating": "",
                    "Weight": "",
                    "Length": "",
                    "Glue": "",
                    "Compatible with": "",
                    "Product Code": "CPP4243M",
                    "Category": "LAMINATION FILMS",
                    "Description": "",
                    "image": "LAMINATION - MATTE 80.webp"
                },
                {
                    "id": 9,
                    "Heading": "SAMPLE - PVC-FREE VINYL - 150 (Matte) with PVC-FREE Matte Lamination",
                    "Sizes": "",
                    "Base Substrate": "",
                    "Surface": "Matte",
                    "Thickness": "",
                    "Application": "",
                    "Adhesion": "",
                    "Coating": "",
                    "Weight": "",
                    "Length": "",
                    "Glue": "Water-based glue",
                    "Compatible with": "",
                    "Product Code": "",
                    "Category": "LAMINATION FILMS",
                    "Description": "PVC Free - NO solvent release. CPP has better flatness than PVC. PET liner has better flatness than paper liner. Fewer dust from raw material. Easier releasing from PET liner than paper. Excellent laminating transparency than PVC.",
                    "image": "PVC-FREE VINYL - 150 (Matte).webp"
                },
                {
                    "id": 10,
                    "Heading": "CARELIT Re - PVC-FREE LAM - 55 (Gloss)",
                    "Sizes": "36, 40, 42, 50, 60",
                    "Base Substrate": "Polypropylene",
                    "Surface": "Gloss",
                    "Thickness": "55 micron",
                    "Application": "Frontlit",
                    "Adhesion": "",
                    "Coating": "",
                    "Weight": "",
                    "Length": "",
                    "Glue": "",
                    "Compatible with": "",
                    "Product Code": "CPP4243G",
                    "Category": "LAMINATION FILMS",
                    "Description": "",
                    "image": "LAMINATION - GLOSS 80.webp"
                },
                {
                    "id": 11,
                    "Heading": "SAMPLE - PVC-FREE VINYL - 150 (Matte) with PVC-FREE Gloss Lamination",
                    "Sizes": "",
                    "Base Substrate": "",
                    "Surface": "Matte with Gloss Lamination",
                    "Thickness": "",
                    "Application": "",
                    "Adhesion": "",
                    "Coating": "",
                    "Weight": "",
                    "Length": "",
                    "Glue": "Water-based glue",
                    "Compatible with": "",
                    "Product Code": "",
                    "Category": "LAMINATION FILMS",
                    "Description": "PVC Free - NO solvent release. CPP has better flatness than PVC. PET liner has better flatness than paper liner. Fewer dust from raw material. Easier releasing from PET liner than paper. Excellent laminating transparency than PVC.",
                    "image": "PVC-FREE VINYL - 150 (Matte).webp"
                },




                {
                    "id": 12,
                    "Heading": "MP FILM - 180 (Matte)",
                    "Sizes": "50, 60, 63, 102",
                    "Base Substrate": "Polypropylene",
                    "Surface": "Matte",
                    "Weight": "180 gsm",
                    "Thickness": "",
                    "Application": "Backlit / Frontlit",
                    "Length": "",
                    "Glue": "",
                    "Compatible with": "U.V. Printers",
                    "Product Code": "MP180M",
                    "Category": "CARELIT Re",
                    "Description": "CHARACTERISTICS:\n• Tear and waterproof\n• Maximum colour brilliance\n• Outstanding printing characteristics\n• Durability\n• 100% recyclable\n\nUSES:\n• Roll-up banners\n• Banners\n• Backlit posters\n• Outdoor advertising",
                    "image": "MP FILM - 180 (Matte).webp"
                },
                {
                    "id": 13,
                    "Heading": "POLYESTER FABRIC - OUTDOOR BACKLIT FABRIC - 180",
                    "Sizes": "40, 52, 63, 80, 100, 126",
                    "Base Substrate": "Polyester Fabric",
                    "Surface": "Smooth",
                    "Weight": "180 gsm",
                    "Thickness": "",
                    "Application": "Outdoor Backlit",
                    "Length": "",
                    "Glue": "",
                    "Compatible with": "Eco Sol / Latex / U.V. Printers",
                    "Product Code": "OBF180",
                    "Category": "CARELIT Re",
                    "Description": "PVC FREE & 100% Recyclable\n\nOBF180 is a Woven POLYESTER Outdoor Backlit Fabric in smooth finish.\n\nWidely used for Backlit Lighting Box advertising, Show Window, Metro Station, Shopping Mall etc.\n\nAccurate coating formula to ensure uniform light when used for backlit applications.\n\nWarranty: 1 year outdoor",
                    "image": "OUTDOOR BACKLIT FABRIC - 180.webp"
                },
                {
                    "id": 14,
                    "Heading": "POLYESTER FABRIC - COARSE BACKLIT FABRIC - 150 (Gloss)",
                    "Sizes": "40, 52, 63, 80, 100, 126",
                    "Base Substrate": "Polyester Fabric",
                    "Surface": "Gloss",
                    "Weight": "150 gsm",
                    "Thickness": "",
                    "Application": "Backlit",
                    "Length": "",
                    "Glue": "",
                    "Compatible with": "Eco Sol / Latex / U.V. Printers",
                    "Product Code": "CBF150G",
                    "Category": "CARELIT Re",
                    "Description": "PVC FREE & 100% Recyclable\n\nCBF150G-Re is a Woven POLYESTER Backlit Fabric in gloss finish.\n\nWidely used for Backlit Lighting Box advertising, Show Window, Metro Station, Shopping Mall etc.\n\nAccurate coating formula to ensure uniform light when used for backlit applications.",
                    "image": "COARSE BACKLIT FABRIC - 150 (Gloss).webp"
                },
                {
                    "id": 15,
                    "Heading": "POLYESTER FABRIC - AQUALIT BACKLIT FABRIC - 130 (Soft)",
                    "Sizes": "40, 52, 63, 80, 100, 126",
                    "Base Substrate": "Polyester Fabric",
                    "Surface": "Smooth",
                    "Weight": "130 gsm",
                    "Thickness": "",
                    "Application": "Backlit",
                    "Length": "",
                    "Glue": "",
                    "Compatible with": "Eco Sol / Latex / U.V. Printers",
                    "Product Code": "BF130S",
                    "Category": "CARELIT",
                    "Description": "PVC FREE & 100% Recyclable\n\nBF130S is a Woven POLYESTER Backlit Fabric.\n\nWidely used for Backlit Lighting Box advertising, Show Window, Metro Station, Shopping Mall etc.\n\nFlame Retardant, Shrink-Resistant, Tear-Resistant, Waterproof Smooth texture with soft substrate to ensure certain resistance for wrinkle marks.",
                    "image": "AQUALIT BACKLIT FABRIC - 130 (Soft).webp"
                },
                {
                    "id": 16,
                    "Heading": "POLYESTER FABRIC - AQUALIT BACKLIT - 130 (Soft)",
                    "Sizes": "40, 52, 63, 80, 100, 126",
                    "Base Substrate": "Polyester Fabric",
                    "Surface": "Smooth",
                    "Weight": "130 gsm",
                    "Thickness": "",
                    "Application": "Backlit",
                    "FR Certification": "YES",
                    "Length": "",
                    "Glue": "",
                    "Compatible with": "Eco Sol / Latex / U.V. Printers",
                    "Product Code": "BF130S-FR",
                    "Category": "CARELIT-FR",
                    "Description": "PVC FREE & 100% Recyclable\n\nBF130S-FR is a Woven POLYESTER Backlit Fabric.\n\nWidely used for Backlit Lighting Box advertising, Show Window, Metro Station, Shopping Mall etc.\n\nFlame Retardant, Shrink-Resistant, Tear-Resistant, Waterproof Smooth texture with soft substrate to ensure certain resistance for wrinkle marks.",
                    "image": "AQUALIT BACKLIT - 130 (Soft).webp"
                }
            ]
        },
        {
            id: 3,
            name: " COMMERCIAL SERIES",
            image: "FRONT PRINT TRANSLITE -125 MATTE (WR).webp",
            items: [

                {
                    "id": 1,
                    "Heading": "VINYL - STRETCHCAL32 - Vehicle Wrap",
                    "Sizes": "50",
                    "Base Substrate": "PVC Polymeric",
                    "Surface": "Gloss",
                    "Thickness": "60 micron",
                    "Application": "Vehicle Graphics",
                    "Adhesion": "Air Channel - Grey",
                    "Coating": "",
                    "Weight": "",
                    "Length": "",
                    "Glue": "Air Channeled Grey Glue",
                    "Compatible with": "",
                    "Product Code": "SC3200",
                    "Category": "VINYL",
                    "Description": "Stretchable with Air Channeled Grey Glue for bubble free application on vehicle metal surfaces makes STRETCHCAL32 the most versatile and affordable substrate among competition. Specially formulated with flexible DURA Ink Receptive Layer (DIRL) for high ink absorption and better adhesion with compatible overlaminates.",
                    "image": "STRETCHCAL32 - Vehicle Wrap.webp"
                },
                {
                    "id": 2,
                    "Heading": "VINYL - STRETCHCAL21 - METAL & EXTERIOR SIGNS",
                    "Sizes": "50",
                    "Base Substrate": "PVC Polymeric",
                    "Surface": "Gloss",
                    "Thickness": "100 micron",
                    "Application": "High Temp. Surfaces (Upto 80 degrees), Rough Surfaces, Outdoor Displays",
                    "Adhesion": "Permanent",
                    "Coating": "",
                    "Weight": "",
                    "Length": "",
                    "Glue": "",
                    "Compatible with": "",
                    "Product Code": "SC2100",
                    "Category": "VINYL",
                    "Description": "Suitable for High Temperature metal surfaces (upto 80 degrees) & exterior branding. STRETCHCAL21 provides all weather durability without losing adhesion from exterior surfaces. This flexible substrate can easily be pasted on rough surfaces by using a heat gun. Specially formulated with flexible DURA Ink Receptive Layer (DIRL) for high ink absorption and provide better adhesion with compatible overlaminates.",
                    "image": "STRETCHCAL21 - METAL & EXTERIOR SIGNS.webp"
                },
                {
                    "id": 3,
                    "Heading": "VINYL - PREMIUM GOLD - 120 (Gloss)",
                    "Sizes": "36, 40, 42, 50, 60",
                    "Base Substrate": "PVC",
                    "Surface": "Gloss",
                    "Thickness": "120 micron",
                    "Application": "Frontlit",
                    "Adhesion": "Permanent",
                    "Coating": "",
                    "Weight": "",
                    "Length": "",
                    "Glue": "",
                    "Compatible with": "",
                    "Product Code": "DURA1203",
                    "Category": "VINYL",
                    "Description": "Premium Gold is a premium vinyl for general day-to-day branding applications. 140 gsm liner makes this substrate very easy to handle on machines. Longer PVC aging for better durability & makes it a perfect substrate for small to medium duration branding applications. Formulated with Wyte proprietary, Dura Ink Receptive Layer (DIRL) for high ink absorption and adhesion.",
                    "image": "PREMIUM GOLD - 120 (Gloss).webp"
                },
                {
                    "id": 4,
                    "Heading": "VINYL - PREMIUM GOLD - 120 (Matte)",
                    "Sizes": "36, 40, 42, 50, 60",
                    "Base Substrate": "PVC",
                    "Surface": "Matte",
                    "Thickness": "120 micron",
                    "Application": "Frontlit",
                    "Adhesion": "Permanent",
                    "Coating": "",
                    "Weight": "",
                    "Length": "",
                    "Glue": "",
                    "Compatible with": "",
                    "Product Code": "DURA1204",
                    "Category": "VINYL",
                    "Description": "Premium Gold is a premium vinyl for general day-to-day branding applications. 140 gsm liner makes this substrate very easy to handle on machines. Longer PVC aging for better durability & makes it a perfect substrate for small to medium duration branding applications. Formulated with Wyte proprietary, Dura Ink Receptive Layer (DIRL) for high ink absorption and adhesion.",
                    "image": "PREMIUM GOLD - 120 (Matte).webp"
                },
                {
                    "id": 5,
                    "Heading": "VINYL - ROSE GOLD - 100 (Gloss)",
                    "Sizes": "36, 40, 42, 50, 60",
                    "Base Substrate": "PVC",
                    "Surface": "Gloss",
                    "Thickness": "100 micron",
                    "Application": "Frontlit",
                    "Adhesion": "Permanent",
                    "Coating": "",
                    "Weight": "",
                    "Length": "",
                    "Glue": "",
                    "Compatible with": "",
                    "Product Code": "RG1005",
                    "Category": "VINYL",
                    "Description": "Rose Gold is an economy vinyl for general day-to-day branding applications. 120 gsm liner makes this substrate very easy to handle on machines. Longer PVC aging for better durability & makes it a perfect substrate for small to medium duration branding applications. Formulated with Wyte proprietary, Dura Ink Receptive Layer (DIRL) for high ink absorption and adhesion.",
                    "image": "ROSE GOLD - 100 (Gloss).webp"
                },
                {
                    "id": 6,
                    "Heading": "VINYL - ROSE GOLD - 100 (Matte)",
                    "Sizes": "36, 40, 42, 50, 60",
                    "Base Substrate": "PVC",
                    "Surface": "Matte",
                    "Thickness": "100 micron",
                    "Application": "Frontlit",
                    "Adhesion": "Permanent",
                    "Coating": "",
                    "Weight": "120 gsm",
                    "Length": "",
                    "Glue": "",
                    "Compatible with": "Dye Inkjet Printers",
                    "Product Code": "RG1006",
                    "Category": "VINYL",
                    "Description": "Rose Gold is an economy vinyl for general day-to-day branding applications. 120 gsm liner makes this substrate very easy to handle on machines.\n\nLonger PVC aging forSays better durability & makes it a perfect substrate for small to medium duration branding applications.\n\nFormulated with Wyte proprietary, Dura Ink Receptive Layer (DIRL) for high ink absorption and adhesion.",
                    "image": "ROSE GOLD - 100 (Matte).webp"
                },
                {
                    "id": 7,
                    "Heading": "VINYL - GREY BACK - 120 (Gloss)",
                    "Sizes": "40, 50, 60",
                    "Base Substrate": "PVC",
                    "Surface": "Gloss",
                    "Thickness": "120 micron",
                    "Application": "Frontlit",
                    "Adhesion": "Permanent Grey",
                    "Coating": "",
                    "Weight": "140 gsm",
                    "Length": "",
                    "Glue": "Acrylic-based Grey Adhesive",
                    "Compatible with": "Dye Inkjet Printers",
                    "Product Code": "GREY1207",
                    "Category": "VINYL",
                    "Description": "Grey Back is a premium vinyl for quality day-to-day branding applications with acrylic based grey adhesive for superior adhesion. Grey adhesive is ideal for pasting applications on the colored surfaces thus prevents background to get impose on the front side.\n\nLonger PVC aging for better durability. Formulated with Wyte proprietary, Dura Ink Receptive Layer (DIRL) for high ink absorption and adhesion.",
                    "image": "GREY BACK - 120 (Gloss).webp"
                },
                {
                    "id": 8,
                    "Heading": "VINYL - GREY BACK - 120 (Matte)",
                    "Sizes": "40, 50, 60",
                    "Base Substrate": "PVC",
                    "Surface": "Matte",
                    "Thickness": "120 micron",
                    "Application": "Frontlit",
                    "Adhesion": "Permanent Grey",
                    "Coating": "",
                    "Weight": "140 gsm",
                    "Length": "",
                    "Glue": "Acrylic-based Grey Adhesive",
                    "Compatible with": "Dye Inkjet Printers",
                    "Product Code": "GREY1208",
                    "Category": "VINYL",
                    "Description": "Grey Back is a premium vinyl for quality day-to-day branding applications with acrylic based grey adhesive for superior adhesion. Grey adhesive is ideal for pasting applications on the colored surfaces thus prevents background to get impose on the front side.\n\nLonger PVC aging for better durability. Formulated with Wyte proprietary, Dura Ink Receptive Layer (DIRL) for high ink absorption and adhesion.",
                    "image": "GREY BACK - 120 (Matte).webp"
                },
                {
                    "id": 9,
                    "Heading": "VINYL - PERFECTO BACKLIT - 120 (Gloss)",
                    "Sizes": "42, 50, 60",
                    "Base Substrate": "PVC",
                    "Surface": "Gloss",
                    "Thickness": "120 micron",
                    "Application": "Backlit",
                    "Adhesion": "Permanent",
                    "Coating": "",
                    "Weight": "140 gsm",
                    "Length": "",
                    "Glue": "",
                    "Compatible with": "Dye Inkjet Printers",
                    "Product Code": "LUMI1209",
                    "Category": "VINYL",
                    "Description": "A premium backlit vinyl for perfect backlit output without any color bleed and patch especially in darker prints.\n\nBrilliant color output with proper backlit luminance.\n\nLonger PVC aging for better durability.\n\nFormulated with Wyte proprietary, Dura Ink Receptive Layer (DIRL) for high ink absorption and adhesion.",
                    "image": "PERFECTO BACKLIT - 120 (Gloss).webp"
                },
                {
                    "id": 10,
                    "Heading": "VINYL - SILVER CHROME",
                    "Sizes": "36, 50",
                    "Base Substrate": "PET",
                    "Surface": "Gloss",
                    "Thickness": "100 micron",
                    "Application": "Frontlit",
                    "Adhesion": "Permanent",
                    "Coating": "",
                    "Weight": "120 gsm",
                    "Length": "",
                    "Glue": "Clear Permanent Adhesive",
                    "Compatible with": "Dye Inkjet Printers",
                    "Product Code": "ROMA1010",
                    "Category": "VINYL",
                    "Description": "Silver Chrome is a glossy mirror vinyl which comes with premium quality clear permanent adhesive.\n\nIdeal solution for short term promotional branding applications for retail & offices, promotional stickers for packaging etc.\n\nFormulated with Wyte proprietary, Dura Ink Receptive Layer (DIRL) for high ink absorption and adhesion.",
                    "image": "SILVER CHROME.webp"
                },
                {
                    "id": 11,
                    "Heading": "VINYL - ONE WAY VISION - 140",
                    "Sizes": "39, 42, 50, 60",
                    "Base Substrate": "PVC",
                    "Surface": "Gloss",
                    "Thickness": "140 micron",
                    "Application": "Glass",
                    "Adhesion": "Permanent",
                    "Coating": "",
                    "Weight": "140 gsm",
                    "Length": "",
                    "Glue": "",
                    "Compatible with": "",
                    "Product Code": "ONE1404",
                    "Category": "VINYL",
                    "Description": "With one side visual communication, the other black side provides sun-shade and enhances privacy and security. One way vision create new business and advertising opportunities without obstructing the view.\n\nIdeal choice for Window graphics, Vehicle graphics & Glass panels on building.\n\nFormulated with Wyte proprietary, Dura Ink Receptive Layer (DIRL) for high ink absorption and adhesion.",
                    "image": "ONE WAY VISION - 140.webp"
                },
                {
                    "id": 12,
                    "Heading": "VINYL - CLEAR - 120 (Gloss)",
                    "Sizes": "42, 50, 60",
                    "Base Substrate": "PVC",
                    "Surface": "Gloss",
                    "Thickness": "100 micron",
                    "Application": "Glass Film/Stickers",
                    "Adhesion": "Permanent",
                    "Coating": "",
                    "Weight": "120 gsm",
                    "Length": "",
                    "Glue": "",
                    "Compatible with": "",
                    "Product Code": "KLAR1212",
                    "Category": "VINYL",
                    "Description": "Clear Vinyl 120 is an affordable clear vinyl for day-to-day branding applications on glass partitions, window display, stickers etc with 88% transparency when view from distance.\n\nIdeal substrate for short to medium glass applications and stickers.\n\nFormulated with Wyte proprietary, Dura Ink Receptive Layer (DIRL) for high ink absorption and adhesion.",
                    "image": "CLEAR - 120 (Gloss).webp"
                },
                {
                    "id": 13,
                    "Heading": "VINYL - CLEAR - 100 (Matte)",
                    "Sizes": "50",
                    "Base Substrate": "PVC",
                    "Surface": "Matte",
                    "Thickness": "100 micron",
                    "Application": "Glass Film/Stickers/Decals",
                    "Adhesion": "Permanent",
                    "Coating": "",
                    "Weight": "120 gsm",
                    "Length": "",
                    "Glue": "",
                    "Compatible with": "",
                    "Product Code": "KLAR1013",
                    "Category": "VINYL",
                    "Description": "Clear Vinyl 100 is an affordable clear vinyl for day-to-day branding applications on glass partitions, window display, stickers etc with 80% transparency when viewed from distance.\n\nIdeal substrate for short to medium glass applications, stickers & decals.\n\nFormulated with Wyte proprietary, Dura Ink Receptive Layer (DIRL) for high ink absorption and adhesion.",
                    "image": "CLEAR - 100 (Matte).webp"
                },
                {
                    "id": 14,
                    "Heading": "VINYL - OPTICAL CLEAR - 120",
                    "Sizes": "50",
                    "Base Substrate": "PVC",
                    "Surface": "Gloss",
                    "Thickness": "120 micron",
                    "Application": "Glass Film/Stickers",
                    "Adhesion": "Removable",
                    "Coating": "",
                    "Weight": "",
                    "Length": "",
                    "Glue": "",
                    "Compatible with": "",
                    "Product Code": "OCP1214",
                    "Category": "VINYL",
                    "Description": "Optical Clear Vinyl 120 is a premium quality clear vinyl for glass partitions, window display, stickers etc with 100% transparency when view from distance.\n\nIdeal substrate for medium term glass applications for offices and home decor.\n\nComes with acrylic based removable adhesive. It doesn’t leave any residue while peeling off. Specially Formulated glue which doesn’t change color due to effects of UV lights on the glue’s ingredients.",
                    "image": "OPTICAL CLEAR - 120.webp"
                },
                {
                    "id": 15,
                    "Heading": "VINYL - REFLECTIVE - SMOOTH",
                    "Sizes": "50",
                    "Base Substrate": "PVC Light Grey with glass particles",
                    "Surface": "Gloss",
                    "Thickness": "155 micron",
                    "Application": "Reflective Stickers",
                    "Adhesion": "Permanent",
                    "Coating": "",
                    "Weight": "140 gsm",
                    "Length": "",
                    "Glue": "",
                    "Compatible with": "",
                    "Product Code": "REF1015",
                    "Category": "VINYL",
                    "Description": "Reflective sign vinyl for high visibility signs that need to be seen, especially in the dark.\n\nReflective sign vinyl have excellent weather resistance and are suitable for indoor and outdoor reflective signs.\n\n140 gsm liner is for better media handling while printing. Superior adhesive for medium term outdoor application.",
                    "image": "REFLECTIVE - SMOOTH.webp"
                },
                {
                    "id": 16,
                    "Heading": "VINYL - RETRO REFLECTIVE - SEAMLESS",
                    "Sizes": "50",
                    "Base Substrate": "PVC",
                    "Surface": "Gloss",
                    "Thickness": "170 micron",
                    "Application": "Street Graphics",
                    "Adhesion": "Permanent",
                    "Coating": "",
                    "Weight": "120 gsm",
                    "Length": "",
                    "Glue": "",
                    "Compatible with": "",
                    "Product Code": "RETRO1216",
                    "Category": "VINYL",
                    "Description": "Retro Reflective seamless vinyl for high visibility signs that need to be seen, especially in the dark due to Class B Honeycomb structure for better light reflection.\n\nReflective sign vinyl have excellent weather resistance and are suitable for indoor and outdoor reflective signs.\n\nUltra strong adherence and resistance on any type of surfaces.",
                    "image": "RETRO REFLECTIVE - SEAMLESS.webp"
                },
                {
                    "id": 17,
                    "Heading": "FLEX - RETRO REFLECTIVE",
                    "Sizes": "54, 124",
                    "Base Substrate": "PVC",
                    "Surface": "Gloss",
                    "Thickness": "",
                    "Application": "Street Graphics",
                    "Adhesion": "Non-Adhesive",
                    "Coating": "",
                    "Weight": "310 gsm",
                    "Length": "",
                    "Glue": "",
                    "Compatible with": "",
                    "Product Code": "RETRO310F",
                    "Category": "FLEX",
                    "Description": "Retro Reflective seamless flex for high visibility hoarding that need to be seen, especially in the dark due to Class B Honeycomb structure for better light reflection.\n\nIt has excellent weather resistance and is suitable for indoor and outdoor reflective signs.",
                    "image": "RETRO REFLECTIVE.webp"
                },
                {
                    "id": 18,
                    "Heading": "BANNER - TEXTURED - 290",
                    "Sizes": "36, 50, 60",
                    "Base Substrate": "PVC+PP Composite",
                    "Surface": "Matte",
                    "Thickness": "290 micron",
                    "Application": "Banners & Posters",
                    "Adhesion": "Non-Adhesive",
                    "Coating": "",
                    "Weight": "",
                    "Length": "",
                    "Glue": "",
                    "Compatible with": "",
                    "Product Code": "TEX290",
                    "Category": "BANNER",
                    "Description": "TEX290 is a heavy duty textured non-adhesive banner media for general day-to-day branding applications i.e. rollup banners etc.\n\nLonger PVC aging for better durability & makes it a perfect substrate for small to medium duration branding applications.\n\nFormulated with Wyte proprietary, Dura Ink Receptive Layer (DIRL) for high ink absorption and adhesion.",
                    "image": "TEXTURED - 290.webp"
                },
                {
                    "id": 19,
                    "Heading": "BANNER - GREY BACK - 260",
                    "Sizes": "36, 50, 60",
                    "Base Substrate": "PVC+PP Composite",
                    "Surface": "Matte",
                    "Thickness": "",
                    "Application": "Banners & Posters",
                    "Adhesion": "Non-Adhesive",
                    "Coating": "",
                    "Weight": "260 gsm",
                    "Length": "",
                    "Glue": "",
                    "Compatible with": "",
                    "Product Code": "GREY260",
                    "Category": "BANNER",
                    "Description": "A heavy duty, smooth surface & non-adhesive banner media for general day-to-day branding applications i.e. rollup banners etc.\n\nLonger PVC aging for better durability & makes it a perfect substrate for small to medium duration branding applications.\n\nFormulated with Wyte proprietary, Dura Ink Receptive Layer (DIRL) for high ink absorption and adhesion.",
                    "image": "GREY BACK - 260.webp"
                },
                {
                    "id": 20,
                    "Heading": "BANNER - BOTH SIDE PRINTABLE - 260",
                    "Sizes": "36, 50",
                    "Base Substrate": "Both side PVC with PET Grey as middle layer",
                    "Surface": "Matte",
                    "Thickness": "",
                    "Application": "Posters & Banners",
                    "Adhesion": "Non-Adhesive",
                    "Coating": "",
                    "Weight": "260 gsm",
                    "Length": "",
                    "Glue": "",
                    "Compatible with": "",
                    "Product Code": "DUAL2620",
                    "Category": "BANNER",
                    "Description": "A heavy duty, both side printable with smooth surface & non-adhesive banner media for double side branding i.e. retail promotional hanging advertising etc.\n\nA unique layered structure with both side PVC and PET Grey as middle layer to make the substrate opaque.\n\nFormulated with Wyte proprietary, Dura Ink Receptive Layer (DIRL) for high ink absorption and adhesion.",
                    "image": "BOTH SIDE PRINTABLE - 260.webp"
                },
                {
                    "id": 21,
                    "Heading": "BANNER - PP - 190",
                    "Sizes": "36, 50, 60",
                    "Base Substrate": "PP",
                    "Surface": "Matte",
                    "Thickness": "190 micron",
                    "Application": "Banners & Posters",
                    "Adhesion": "Non-Adhesive",
                    "Coating": "",
                    "Weight": "",
                    "Length": "",
                    "Glue": "",
                    "Compatible with": "",
                    "Product Code": "PPB1921",
                    "Category": "BANNER",
                    "Description": "PPB1921 is a polypropylene based smooth non-adhesive banner media for general day-to-day branding applications i.e. rollup banners etc.\n\nPolypropylene is known for its anti-curl properties and is best suitable for rollup banners & hanging wall applications etc.\n\nFormulated with Wyte proprietary, Dura Ink Receptive Layer (DIRL) for high ink absorption and adhesion.",
                    "image": "PP - 190.webp"
                },
                {
                    "id": 22,
                    "Heading": "TRANSLITE - FRONT PRINTING TRANSLITE FILM - 170",
                    "Sizes": "36, 42, 50, 60",
                    "Base Substrate": "PET",
                    "Surface": "Matte",
                    "Thickness": "170 micron",
                    "Application": "Backlit",
                    "Adhesion": "Non-Adhesive",
                    "Coating": "",
                    "Weight": "",
                    "Length": "",
                    "Glue": "",
                    "Compatible with": "",
                    "Product Code": "TRANSGLO170",
                    "Category": "TRANSLITE",
                    "Description": "TRANSGLO170 is an affordable PET based translite matte film printable on front side. Specially coated with low drying time layer for faster productions.\n\nThis PET film is of a premium grade and a perfect substrate for moving and static backlit boxes.\n\nFormulated with Dura Ink Receptive Layer (DIRL) for high ink absorption and scratch resistance. Over laminate is recommended for moving backlit boxes.",
                    "image": "FRONT PRINTING TRANSLITE FILM - 170.webp"
                },
                {
                    "id": 23,
                    "Heading": "TRANSLITE - FRONT PRINTING TRANSLITE FILM - 210",
                    "Sizes": "36, 42, 50, 60",
                    "Base Substrate": "PET",
                    "Surface": "Matte",
                    "Thickness": "210 micron",
                    "Application": "Backlit",
                    "Adhesion": "Non-Adhesive",
                    "Coating": "",
                    "Weight": "",
                    "Length": "",
                    "Glue": "",
                    "Compatible with": "",
                    "Product Code": "TRANSGLO210",
                    "Category": "TRANSLITE",
                    "Description": "TRANSGLO210 is a premium PET based translite matte film printable on front side. Specially coated with low drying time layer for faster productions.\n\nThis PET film is of a premium grade and a perfect substrate for moving and static backlit boxes.\n\nFormulated with Dura Ink Receptive Layer (DIRL) for high ink absorption and scratch resistance. Over laminate is recommended for moving backlit boxes.",
                    "image": "FRONT PRINTING TRANSLITE FILM - 210.webp"
                },
                {
                    "id": 24,
                    "Heading": "PHOTOPAPER - ULTRA GLOSSY - 220",
                    "Sizes": "36, 50",
                    "Base Substrate": "Paper",
                    "Surface": "Gloss",
                    "Thickness": "",
                    "Application": "Photo & Art Prints",
                    "Adhesion": "Non-Adhesive",
                    "Coating": "Instant dry Photochromic layer",
                    "Weight": "220 gsm",
                    "Length": "",
                    "Glue": "",
                    "Compatible with": "",
                    "Product Code": "ULTRA220",
                    "Category": "PHOTO PAPER",
                    "Description": "ULTRA220 is an ultra glossy premium Photo Paper designed for high demanding photography professionals.\n\nBrilliant color reproduction and water resistant.\n\nCoated with Instant dry Photochromic layer.",
                    "image": "ULTRA GLOSSY - 220.webp"
                },
                {
                    "id": 25,
                    "Heading": "PHOTOPAPER - MATTE - 180",
                    "Sizes": "50",
                    "Base Substrate": "Paper",
                    "Surface": "Matte",
                    "Thickness": "",
                    "Application": "Photo & Art Prints",
                    "Adhesion": "Non-Adhesive",
                    "Coating": "Instant dry Photochromic layer",
                    "Weight": "180 gsm",
                    "Length": "",
                    "Glue": "",
                    "Compatible with": "",
                    "Product Code": "PHOTO180",
                    "Category": "PHOTO PAPER",
                    "Description": "PHOTO180 is a matte finish premium Photo Paper designed for high demanding photography professionals.\n\nBrilliant color reproduction and water resistant.\n\nCoated with Instant dry Photochromic layer.",
                    "image": "MATTE - 180.webp"
                },
                {
                    "id": 26,
                    "Heading": "PHOTOPAPER - LUSTRE - 220",
                    "Sizes": "50",
                    "Base Substrate": "Paper",
                    "Surface": "Lustre",
                    "Thickness": "",
                    "Application": "Photo & Art Prints",
                    "Adhesion": "Non-Adhesive",
                    "Coating": "Instant dry Photochromic layer",
                    "Weight": "220 gsm",
                    "Length": "",
                    "Glue": "",
                    "Compatible with": "",
                    "Product Code": "BLINK220",
                    "Category": "PHOTO PAPER",
                    "Description": "BLINK220 is a photography paper with a finish between glossy and matte.\n\nLustre photo prints have rich colour saturation that gives a vibrant colour finish and, like matte photo prints, they are not vulnerable to fingerprints, whereas glossy photo prints are prone to fingerprints.\n\nCoated with Instant dry Photochromic layer.",
                    "image": "LUSTRE - 220.webp"
                },
                {
                    "id": 27,
                    "Heading": "CANVAS - ARTISTIC CANVAS - 380 (Matte)",
                    "Sizes": "40, 50, 60, 80, 102, 126",
                    "Base Substrate": "Poly Cotton",
                    "Surface": "Matte",
                    "Thickness": "",
                    "Application": "Art Prints",
                    "Adhesion": "Non-Adhesive",
                    "Coating": "High absorption ink-receptive layer",
                    "Weight": "380 gsm",
                    "Length": "",
                    "Glue": "",
                    "Compatible with": "",
                    "Product Code": "CAN400M",
                    "Category": "CANVAS",
                    "Description": "ARTISTIC CANVAS MATTE W380 is a water resistant, Optical Brightening additive (OB) free, poly-cotton white matte canvas, top-coated with a high absorption ink-receptive layer.\n\nIt is suitable for full-colour graphics for indoor & outdoor applications such as fine art and photographic reproductions, theatre and exhibition galleries.",
                    "image": "ARTISTIC CANVAS - 380 (Matte).webp"
                },
                {
                    "id": 28,
                    "Heading": "CANVAS - ARTISTIC CANVAS - 380 (Gloss)",
                    "Sizes": "36, 50, 60",
                    "Base Substrate": "Poly Cotton",
                    "Surface": "Gloss",
                    "Thickness": "",
                    "Application": "Art Prints",
                    "Adhesion": "Non-Adhesive",
                    "Coating": "High absorption ink-receptive layer",
                    "Weight": "380 gsm",
                    "Length": "",
                    "Glue": "",
                    "Compatible with": "",
                    "Product Code": "CAN400G",
                    "Category": "CANVAS",
                    "Description": "ARTISTIC CANVAS GLOSS W380 is a water resistant, Optical Brightening additive (OB) free, poly-cotton white gloss canvas, top-coated with a high absorption ink-receptive layer.\n\nIt is suitable for full-colour graphics for indoor & outdoor applications such as fine art and photographic reproductions, theatre and exhibition galleries.",
                    "image": "ARTISTIC CANVAS - 380 (Gloss).webp"
                },
                {
                    "id": 29,
                    "Heading": "CANVAS - POLYESTER CANVAS - 280 (Matte)",
                    "Sizes": "50",
                    "Base Substrate": "Polyester",
                    "Surface": "Matte",
                    "Thickness": "",
                    "Application": "Fashion Accessories & Arts",
                    "Adhesion": "Non-Adhesive",
                    "Coating": "High absorption ink-receptive layer",
                    "Weight": "280 gsm",
                    "Length": "",
                    "Glue": "",
                    "Compatible with": "",
                    "Product Code": "PAN280M",
                    "Category": "CANVAS",
                    "Description": "POLYESTER CANVAS 280 (Matte) is an affordable water resistant, Optical Brightening additive (OB) free, polyester white gloss canvas, top-coated with a high absorption ink-receptive layer.\n\nIt is suitable for full-colour graphics for indoor & outdoor applications such as fine art and photographic reproductions, theatre and exhibition galleries.",
                    "image": "POLYESTER CANVAS - 280 (Matte).webp"
                },
                {
                    "id": 30,
                    "Heading": "CANVAS - POLYESTER CANVAS - 280 (Gloss)",
                    "Sizes": "50",
                    "Base Substrate": "Polyester",
                    "Surface": "Gloss",
                    "Thickness": "",
                    "Application": "Fashion Accessories & Arts",
                    "Adhesion": "Non-Adhesive",
                    "Coating": "High absorption ink-receptive layer",
                    "Weight": "280 gsm",
                    "Length": "",
                    "Glue": "",
                    "Compatible with": "",
                    "Product Code": "PAN280G",
                    "Category": "CANVAS",
                    "Description": "POLYESTER CANVAS 280 (Gloss) is an affordable water resistant, Optical Brightening additive (OB) free, polyester white gloss canvas, top-coated with a high absorption ink-receptive layer.\n\nIt is suitable for full-colour graphics for indoor & outdoor applications such as fine art and photographic reproductions, theatre and exhibition galleries.",
                    "image": "POLYESTER CANVAS - 280 (Gloss).webp"
                },
                {
                    "id": 31,
                    "Heading": "FABRIC - FRONTLIT - 200",
                    "Sizes": "40, 50, 63, 76, 100, 126",
                    "Base Substrate": "Polyester",
                    "Surface": "Matte",
                    "Thickness": "",
                    "Application": "Frontlit",
                    "Adhesion": "Non-Adhesive",
                    "Coating": "High absorption ink-receptive layer (DIRL)",
                    "Weight": "200 gsm",
                    "Length": "",
                    "Glue": "",
                    "Compatible with": "",
                    "Product Code": "FF200M-Re",
                    "Category": "FABRIC",
                    "Description": "FRONTLIT FABRIC is a water resistant, Recycled polyester white fabric, top-coated with our proprietary high absorption ink-receptive layer called (DIRL). It is suitable for short to medium term full-colour graphics for indoor & outdoor applications such as fine Advertising Branding, Banners and exhibitions etc.",
                    "image": "FRONTLIT - 200.webp"
                },
                {
                    "id": 32,
                    "Heading": "FABRIC - BACKLIT - 130 FR",
                    "Sizes": "40, 50, 63, 76, 100, 126",
                    "Base Substrate": "Polyester",
                    "Surface": "Satin Smooth",
                    "Thickness": "",
                    "Application": "Backlit",
                    "Adhesion": "Non-Adhesive",
                    "Coating": "High absorption ink-receptive coating",
                    "Weight": "130 gsm",
                    "Length": "",
                    "Glue": "",
                    "Compatible with": "",
                    "Product Code": "BF130S-FR",
                    "Category": "FABRIC",
                    "Description": "BF130S-FR is an FR (Flame Resistant) Grade Backlit Fabric. It is a water resistant, Optical Brightening additive (OB) free, polyester white fabric, layered with a high absorption ink-receptive coating for optimal & evenly spread backlit application. It is suitable for full-colour graphics for indoor & outdoor applications such as Retail Backlit Boxes & Exhibition Graphics etc.",
                    "image": "BACKLIT - 130 FR.webp"
                },
                {
                    "id": 33,
                    "Heading": "GLASS FILM - FROSTED 100",
                    "Sizes": "50",
                    "Base Substrate": "PVC",
                    "Surface": "Frosted",
                    "Thickness": "100 micron",
                    "Application": "Glass Prints",
                    "Adhesion": "Permanent",
                    "Coating": "",
                    "Weight": "",
                    "Length": "",
                    "Glue": "",
                    "Compatible with": "",
                    "Product Code": "GLASS100F",
                    "Category": "GLASS FILM",
                    "Description": "WYTE FROSTED printable glass film is a PVC based, water resistant film with excellent adhesion. It has outstanding durability and outdoor life. Easy plotter cutting and weeding. It has high visible light transmission allowing natural daylight flow. The perfect window film which adds to a certain level of privacy. Printed Frosted Film also enhances the aesthetics of any commercial or residential space.",
                    "image": "MOUNTING - CLEAR DOUBLE SIDE 60.webp"
                },

                {
                    "id": 34,
                    "Heading": "GLASS FILM - SPARKLED - 100",
                    "Sizes": "50",
                    "Base Substrate": "PVC",
                    "Surface": "Sparkled",
                    "Thickness": "100 micron",
                    "Application": "Glass Prints",
                    "Adhesion": "Permanent",
                    "Coating": "",
                    "Weight": "",
                    "Length": "",
                    "Glue": "",
                    "Compatible with": "",
                    "Product Code": "SPARK100",
                    "Category": "GLASS FILM",
                    "Description": "WYTE SPARKLED printable glass film is a PVC based, water resistant film that comes with glass particles or sparkles. It has outstanding durability and outdoor print life. It has high visible light transmission allowing natural daylight flow. The perfect window film which adds to a certain level of privacy. Printed Sparkled Film also enhances the aesthetics of any commercial or residential space.",
                    "image": "SPARKLED - 100.webp"
                },
                {
                    "id": 35,
                    "Heading": "LAMINATION - 3D 100",
                    "Sizes": "50",
                    "Base Substrate": "PVC",
                    "Surface": "3-D Cat Eye",
                    "Thickness": "100 micron",
                    "Application": "Glass Decoration / Over Laminate",
                    "Adhesion": "100% clear adhesive",
                    "Coating": "",
                    "Weight": "",
                    "Length": "",
                    "Glue": "",
                    "Compatible with": "",
                    "Product Code": "3DLAM100",
                    "Category": "LAMINATION",
                    "Description": "WYTE 3-D LAMINATION is a 3D smooth over laminate with 100% clear adhesive in gloss finish. Provides additional protection which makes prints stay fade resistant for a longer period.",
                    "image": "LAMINATION - 3D 100.webp"
                },
                {
                    "id": 36,
                    "Heading": "LAMINATION - FLOOR 200",
                    "Sizes": "50",
                    "Base Substrate": "PVC",
                    "Surface": "Matte",
                    "Thickness": "200 micron",
                    "Application": "Floor Graphics",
                    "Adhesion": "Permanent",
                    "Coating": "",
                    "Weight": "",
                    "Length": "",
                    "Glue": "",
                    "Compatible with": "",
                    "Product Code": "FLAM200",
                    "Category": "LAMINATION",
                    "Description": "ANTI SKID FLOOR LAMINATION FILM is equipped with permanent pressure-sensitive adhesive. Anti slip floor laminates are an excellent advertising tool in shopping centres, supermarkets, hotels, airports etc. These heavy duty and short term anti skid floor laminating films are perfect for protecting floor graphics.",
                    "image": "LAMINATION - FLOOR 200.webp"
                },
                {
                    "id": 37,
                    "Heading": "LAMINATION - OUTDOOR 80",
                    "Sizes": "50",
                    "Base Substrate": "Polymeric",
                    "Surface": "Matte",
                    "Thickness": "80 micron",
                    "Application": "Over Laminate/Outdoor",
                    "Adhesion": "Permanent",
                    "Coating": "",
                    "Weight": "",
                    "Length": "",
                    "Glue": "",
                    "Compatible with": "",
                    "Product Code": "SURELAM80",
                    "Category": "LAMINATION",
                    "Description": "SURELAM80 Transparent polymeric laminate with UV filter (cadmium-free, calendered), acrylic-based permanent adhesive and release liner. A plasticized lamination film for digitally printed images on polymeric vinyls. The lamination film protects images from scratches, UV radiation, stains, etc. Increases the durability of printed graphics. It is meant for application on flat and slightly curved surfaces.",
                    "image": "LAMINATION - OUTDOOR 80.webp"
                },
                {
                    "id": 38,
                    "Heading": "LAMINATION - MATTE 80",
                    "Sizes": "36, 40, 42, 50, 60",
                    "Base Substrate": "PVC",
                    "Surface": "Matte",
                    "Thickness": "80 micron",
                    "Application": "Over Laminate",
                    "Adhesion": "Permanent",
                    "Coating": "",
                    "Weight": "",
                    "Length": "",
                    "Glue": "",
                    "Compatible with": "",
                    "Product Code": "WLAM80M",
                    "Category": "LAMINATION",
                    "Description": "WYTE MATTE LAMINATION is satin matte finished over laminate with 100% clear adhesive. Provides additional protection which makes prints to stay fade resistance for a longer period.",
                    "image": "LAMINATION - MATTE 80.webp"
                },
                {
                    "id": 39,
                    "Heading": "LAMINATION - GLOSS 80",
                    "Sizes": "36, 40, 42, 50, 60",
                    "Base Substrate": "PVC",
                    "Surface": "Gloss",
                    "Thickness": "80 micron",
                    "Application": "Over Laminate",
                    "Adhesion": "Permanent",
                    "Coating": "",
                    "Weight": "",
                    "Length": "",
                    "Glue": "",
                    "Compatible with": "",
                    "Product Code": "WLAM80G",
                    "Category": "LAMINATION",
                    "Description": "WYTE GLOSS LAMINATION is an ultra clear gloss finished over laminate with 100% transparent ultra clear adhesive. Provides excellent UV protection which makes prints to stay fade resistance for a longer period. It is suitable for overall indoor & outdoor graphic protection.",
                    "image": "LAMINATION - GLOSS 80.webp"
                },
                {
                    "id": 40,
                    "Heading": "MOUNTING - CLEAR DOUBLE SIDE 60",
                    "Sizes": "50",
                    "Base Substrate": "PVC",
                    "Surface": "Clear",
                    "Thickness": "60 micron",
                    "Application": "Mounting Film",
                    "Adhesion": "Both Side Adhesive",
                    "Coating": "",
                    "Weight": "",
                    "Length": "",
                    "Glue": "",
                    "Compatible with": "",
                    "Product Code": "MOUNT60",
                    "Category": "MOUNTING",
                    "Description": "WYTE MOUNTING FILM is an acrylic adhesive based, double side mounting film. Works as an adhesive layer where self-adhesive material is not available. Acrylic based adhesive is all weather resistant and does not lose adhesion in all weather conditions.",
                    "image": "MOUNTING - CLEAR DOUBLE SIDE 60.webp"
                },






                {
                    "id": 41,
                    "Heading": "MAGNETIC - PRINTABLE FERROUS",
                    "Sizes": "50",
                    "Base Substrate": "Composite Printable PP & rubber sheet",
                    "Surface": "Matte",
                    "Thickness": "0.28 mm",
                    "Application": "Frontlit",
                    "Adhesion": "Non-Adhesive",
                    "Coating": "Dura Ink Receptive Layer (DIRL)",
                    "Weight": "",
                    "Length": "",
                    "Glue": "",
                    "Compatible with": "",
                    "Product Code": "FERRO28",
                    "Category": "MAGNETIC",
                    "Description": "FERROUS is a charged printable substrate for easy installation of graphic on magnetic base material (MAG-BASE). Printable Layer is a Polypropylene which is known for its smooth surface and brilliant color output. Treated with Dura Ink Receptive Layer (DIRL) for high ink absorption and scratch resistance. It is suitable for full-colour graphics for indoor & outdoor applications such as fast graphic replacement for retail and office etc.",
                    "image": "PRINTABLE FERROUS.webp"
                },
                {
                    "id": 42,
                    "Heading": "MAGNETIC - BASE (SA)",
                    "Sizes": "50",
                    "Base Substrate": "Charged Rubber Sheet",
                    "Surface": "",
                    "Thickness": "0.5mm",
                    "Application": "Base for Magnetic Print",
                    "Adhesion": "Permanent",
                    "Coating": "",
                    "Weight": "",
                    "Length": "",
                    "Glue": "",
                    "Compatible with": "",
                    "Product Code": "MAG-BASE",
                    "Category": "MAGNETIC",
                    "Description": "MAG-BASE is a magnetic base material substrate that provides an easy graphic replacement solution for magnetic prints (FERRO28). It has excellent adhesion properties.",
                    "image": "MAGNETIC - BASE (SA).webp"
                }



            ]

        },
        {
            id: 4,
            name: " DECOR SERIES",
            image: "CLOTH BANNER – 120 MATTE (WR).webp",
            items: [
                {
                    "id": 1,
                    "Heading": "WALL PAPER - SELF ADHESIVE - WALL GRAIN TEXTURE",
                    "Sizes (In Inches)": "50",
                    "Base Substrate": "PVC",
                    "Surface": "Textured Satin",
                    "Thickness": "180 micron",
                    "Application": "Wall Graphics",
                    "Length": "30 mtrs.",
                    "Glue": "Water Base - Permanent",
                    "Compatible with": "Eco SOI / Latex / U.V. Printers",
                    "Product Code": "WP180GT",
                    "Category": " DECOR SERIES",
                    "Description": "WP180GT is a PVC based and medium textured self-adhesive wallpaper is mostly resistant to grease and moisture than plain paper, and are good for most commercial & residential applications.Specially layered with heavy DURA Ink Receptive Layer(DIRL) for high ink absorption which gives better adhesion for darker images. It has a nice white satin surface that gives rich and enhanced color reproduction.",
                    "image": "SELF ADHESIVE - WALL GRAIN TEXTURE.webp"
                },
                {
                    "id": 2,
                    "Heading": "WALL PAPER - SELF ADHESIVE - FABRIC WALL SOFT",
                    "Sizes (In Inches)": "50",
                    "Base Substrate": "Polyester",
                    "Surface": "Textured Matte",
                    "Thickness": "200 micron",
                    "Application": "Wall Graphics",
                    "Length": "30 mtrs.",
                    "Glue": "Water Base - Permanent",
                    "Compatible with": "Eco SOI / Latex / U.V. Printers",
                    "Product Code": "WP200FSA",
                    "Category": " DECOR SERIES",
                    "Description": "WP200FSA is a 100% polyester based, medium fabric textured self-adhesive wallpaper is widely used in premium residential & commercial projects. Specially layered with heavy DURA Ink Receptive Layer (DIRL) for high ink absorption which gives better adhesion for darker images. It has a white fabric matte surface thatlooks premium which gives rich and enhanced colors.",
                    "image": "SELF ADHESIVE - FABRIC WALL SOFT.webp"
                },
                {
                    "id": 3,
                    "Heading": "WALL PAPER - NON ADHESIVE - RODIES GLITTER",
                    "Sizes (In Inches)": "54",
                    "Base Substrate": "Paper",
                    "Surface": "Matte Glitter",
                    "Thickness": "240 gsm",
                    "Application": "Wall Graphics",
                    "Length": "45 mtrs.",
                    "Glue": "",
                    "Compatible with": "Eco SOI / Latex / U.V. Printers",
                    "Product Code": "WP240RG",
                    "Category": " DECOR SERIES",
                    "Description": "WP240RG is a paper based, medium textured non-adhesive wallpaper with glitters. It is widely used in residential & commercial projects. Mostly used in kid's Specially layered with heavy DURA Ink Receptive Layer (DIRL) for high ink absorption which gives better adhesion for darker images. It has a slight off-white glittery matte Surface that looks beautiful on any wall under general lights.",
                    "image": "NON ADHESIVE - RODIES GLITTER.webp"
                },
                {
                    "id": 4,
                    "Heading": "WALL PAPER - NON ADHESIVE - HORIZONTAL RAYS",
                    "Sizes (In Inches)": "54",
                    "Base Substrate": "Paper",
                    "Surface": "Textured Matte",
                    "Thickness": "200 gsm",
                    "Application": "Wall Graphics",
                    "Length": "50 mtrs.",
                    "Glue": "",
                    "Compatible with": "Eco SOI / Latex / U.V. Printers",
                    "Product Code": "WP200HR",
                    "Category": " DECOR SERIES",
                    "Description": "WP200HR is a paper based, medium textured nori—adhesive wallpaper with matte finish. It has a unique anti—scratch coating for longer life and it is layered with heavy DURA Ink Receptive Layer (DIRL) for high ink absorption spray. It has a slight off-white textured matte surface that looks beautiful on any wall under general lights.",
                    "image": "NON ADHESIVE - HORIZONTAL RAYS.webp"
                },
                {
                    "id": 5,
                    "Heading": "WALL PAPER - CART CANVAS",
                    "Sizes (In Inches)": "42",
                    "Base Substrate": "Pulp Paper",
                    "Surface": "Textured",
                    "Thickness": "240 gsm",
                    "Application": "Wall Graphics",
                    "Length": "50 mtrs.",
                    "Glue": "",
                    "Compatible with": "Eco SOI / Latex / U.V. Printers",
                    "Product Code": "CC240",
                    "Category": " DECOR SERIES",
                    "Description": "CART CANVAS is a Pulp paper based,medium textured printable wall covering substrate with micro glitter particles, is an excellent choice for commercial & residential applications. Specially layered With heavy DURA Ink Receptive Layer (DIRL) for high ink absorption Which gives better adhesion to inks for longer durability. It has a nice white shimmer effect which gives rich and shining color reproduction.",
                    "image": "CART CANVAS.webp"
                },
                {
                    "id": 6,
                    "Heading": "WALL PAPER - NON ADHESIVE - AESTHETIC CANVAS",
                    "Sizes (In Inches)": "42",
                    "Base Substrate": "Paper",
                    "Surface": "Textured Satin",
                    "Thickness": "200 gsm",
                    "Application": "Wall Graphics",
                    "Length": "30 mtrs.",
                    "Glue": "",
                    "Compatible with": "Eco SOI / Latex / U.V. Printers",
                    "Product Code": "WP200AC",
                    "Category": " DECOR SERIES",
                    "Description": "WP200AC is a paper based, medium textured non—adhesive wallpaper With heavy Canvas like feet. It is best Suitable for abstract art designs as wall murals. Specially layered with heavy DURA Ink Receptive Layer (DIRL) for high ink absorption which gives better adhesion for darker images. It has a slight off-white textured satin surface.",
                    "image": "NON ADHESIVE - AESTHETIC CANVAS.webp"
                },
                {
                    "id": 7,
                    "Heading": "WALL PAPER - NON ADHESIVE - HELIOS 3D",
                    "Sizes (In Inches)": "42",
                    "Base Substrate": "Paper",
                    "Surface": "Textured Satin",
                    "Thickness": "200 gsm",
                    "Application": "Wall Graphics",
                    "Length": "30 mtrs.",
                    "Glue": "",
                    "Compatible with": "Eco SOI / Latex / U.V. Printers",
                    "Product Code": "WP2003D",
                    "Category": " DECOR SERIES",
                    "Description": "WP2003D is a paper based, tight textured non—adhesive wallpaper with virtual 3D brushed pattern. Specially layered with heavy DURA Ink Receptive Layer (DIRL) for high ink absorption which gives better adhesion for darker images. It has a slight off-white 3D satin surface which bounces off lights to give 3D appearance.",
                    "image": "NON ADHESIVE - HELIOS 3D.webp"
                },
                {
                    "id": 8,
                    "Heading": "WALL PAPER - Non Adhesive - Non Woven – Nowo",
                    "Sizes (In Inches)": "42,50,54,60,124",
                    "Base Substrate": "Non Woven Paper",
                    "Surface": "Smooth Matte",
                    "Thickness": "180 gsm",
                    "Application": "Wall Graphics",
                    "Length": "50 mtrs.",
                    "Glue": "",
                    "Compatible with": "Eco SOI / Latex / U.V. Printers",
                    "Product Code": "WPNOW0180",
                    "Category": " DECOR SERIES",
                    "Description": "WPNOW0180 is a non-woven paper based, non—adhe5ive wallpaper with smooth matte finish, It is the most favorite & widely used by architects and interior designers in both residential & commercial projects. Scuff resistant & specialty layered with heavy DURA Ink Receptive Layer (DIRL) for high ink absorption which gives better adhesion for darker images. It has a slight off-white plain matte",
                    "image": "Non Woven – Nowo.webp"
                },
                {
                    "id": 9,
                    "Heading": "WALL PAPER - WISTERIA",
                    "Sizes (In Inches)": "42,49",
                    "Base Substrate": "Non-Woven Fabric",
                    "Surface": "Textured",
                    "Thickness": "260 gsm",
                    "Application": "Wall Graphics",
                    "Length": "50 mtrs.",
                    "Glue": "",
                    "Compatible with": "Eco SOI / Latex / U.V. Printers",
                    "Product Code": "WT260",
                    "Category": " DECOR SERIES",
                    "Description": "WISTERIA is a Non-Woven Fabric based, heavy textured printable wall covering substrate for commercial & residential applications. Specially layered With heavy DURA Receptive Layer (DIRL) for high ink absorption which gives better adhesion to inks for longer durability.",
                    "image": "WISTERIA.webp"
                },
                {
                    "id": 10,
                    "Heading": "WALL PAPER - CEDAR LEATHERETTE",
                    "Sizes (In Inches)": "42",
                    "Base Substrate": "Pulp Paper",
                    "Surface": "Textured",
                    "Weight": "240 gsm",
                    "Application": "Wall Graphics",
                    "Length": "50 mtrs.",
                    "Glue": "",
                    "Compatible with": "Eco Sol / Latex / U.V. Printers",
                    "Product Code": "CL240",
                    "Category": " DECOR SERIES",
                    "Description": "CEDAR LEATHERETTE is a Pulp Paper based, medium leather finish printable wall covering substrate for commercial & residential applications. Specially layered with heavy DURA Ink Receptive Layer (DIRL) for high ink absorption which gives better adhesion to inks for longer durability. It has a nice leather effect which gives rich and natural color reproduction.",
                    "image": "CEDAR LEATHERETTE.webp"
                },
                {
                    "id": 11,
                    "Heading": "WALL PAPER - METALLIC TEXTURED GOLD",
                    "Sizes (In Inches)": "42",
                    "Base Substrate": "Pulp Paper",
                    "Surface": "Textured",
                    "Weight": "240 gsm",
                    "Application": "Wall Graphics",
                    "Length": "50 mtrs.",
                    "Glue": "",
                    "Compatible with": "Eco Sol / Latex / U.V. Printers",
                    "Product Code": "GMT240",
                    "Category": " DECOR SERIES",
                    "Description": "METALLIC TEXTURED GOLD is a Pulp Paper based, medium textured printable wall covering substrate in matte finish for commercial & residential applications. Specially layered with heavy DURA Ink Receptive Layer (DIRL) for high ink absorption which gives better adhesion to inks for longer durability. It has a natural grain texture which gives vintage color reproduction.",
                    "image": "METALLIC TEXTURED GOLD.webp"
                },
                {
                    "id": 12,
                    "Heading": "WALL PAPER - NON ADHESIVE – STROKES",
                    "Sizes (In Inches)": "54",
                    "Base Substrate": "PVC",
                    "Surface": "Textured Matte",
                    "Weight": "240 gsm",
                    "Application": "Wall Graphics",
                    "Length": "30 mtrs.",
                    "Glue": "",
                    "Compatible with": "Eco Sol / Latex / U.V. Printers",
                    "Product Code": "WP240ST",
                    "Category": " DECOR SERIES",
                    "Description": "WP240ST is a PVC based, non-adhesive wallpaper with beautiful brush strokes texture. It has a textile back which gives superior adhesion when installed on the wall. Specially layered with heavy DURA Ink Receptive Layer (DIRL) for high ink absorption which gives better adhesion for darker images. It has a white matte surface that looks very natural & beautiful on any wall under general lights.",
                    "image": "NON ADHESIVE – STROKES.webp"
                },
                {
                    "id": 13,
                    "Heading": "WALL PAPER - NON ADHESIVE – PVC",
                    "Sizes (In Inches)": "36, 50, 60",
                    "Base Substrate": "Poly Propylene",
                    "Surface": "Smooth Matte",
                    "Weight": "180 gsm",
                    "Application": "Wall Graphics",
                    "Length": "50 mtrs.",
                    "Glue": "",
                    "Compatible with": "Eco Sol / Latex / U.V. Printers",
                    "Product Code": "WP180PVC",
                    "Category": " DECOR SERIES",
                    "Description": "WP180PVC is a Poly Propylene based, non-adhesive substrate used as wall coverings and easy on pocket. It is coated with a premium and smooth ink absorption layer for handling medium ink volume graphics. It has a white matte smooth surface.",
                    "image": "NON ADHESIVE – PVC.webp"
                },
                {
                    "id": 14,
                    "Heading": "WALL PAPER - NON ADHESIVE – HD",
                    "Sizes (In Inches)": "36, 50, 60",
                    "Base Substrate": "Composite PP+PVC",
                    "Surface": "Textured Satin",
                    "Weight": "300 gsm",
                    "Application": "Wall Graphics",
                    "Length": "50 mtrs.",
                    "Glue": "",
                    "Compatible with": "Eco Sol / Latex / U.V. Printers",
                    "Product Code": "WP300HD",
                    "Category": " DECOR SERIES",
                    "Description": "WP300HD is a composition of Poly Propylene and PVC, non-adhesive textured substrate used as wall coverings and easy on pocket. It is heavy duty substrate & coated with a premium and smooth ink absorption layer for handling medium ink volume graphics. It has a white textured smooth surface.",
                    "image": "NON ADHESIVE – HD.webp"
                },
                {
                    "id": 15,
                    "Heading": "WALL PAPER - FABRIC – SPARKLE WALL FABRIC",
                    "Sizes (In Inches)": "50",
                    "Base Substrate": "Polyester",
                    "Surface": "Satin Sparkle",
                    "Weight": "300 gsm",
                    "Application": "Wall Graphics",
                    "Length": "50 mtrs.",
                    "Glue": "",
                    "Compatible with": "Eco Sol / Latex / U.V. Printers",
                    "Product Code": "WP300SF",
                    "Category": " DECOR SERIES",
                    "Description": "WP300SF is a polyester based, medium canvas textured, non-adhesive wallpaper with sparkles. Specially layered with heavy DURA Ink Receptive Layer (DIRL) for high ink absorption which gives better adhesion for darker images. It has a slight off-white textured satin surface with sparkles.",
                    "image": "FABRIC – SPARKLE WALL FABRIC.webp"
                },
                {
                    "id": 16,
                    "Heading": "WALL PAPER - FABRIC – WALL FABRIC",
                    "Sizes (In Inches)": "52, 126",
                    "Base Substrate": "Polyester",
                    "Surface": "Matte",
                    "Weight": "220 gsm",
                    "Application": "Wall Graphics",
                    "Length": "50 mtrs.",
                    "Glue": "",
                    "Compatible with": "Eco Sol / Latex / U.V. Printers",
                    "Product Code": "WP220F",
                    "Category": " DECOR SERIES",
                    "Description": "WP220F is a polyester based, light textured non-adhesive wall fabric with canvas feel. Specially layered with heavy DURA Ink Receptive Layer (DIRL) for high ink absorption which gives better adhesion for darker images. It has a white textured matte surface.",
                    "image": "FABRIC – WALL FABRIC.webp"
                },
                {
                    "id": 17,
                    "Heading": "FURNISHINGS - TEXTURED LEATHERETTE",
                    "Sizes": "54",
                    "Base Substrate": "PVC",
                    "Surface": "Grained Texture Matte",
                    "Thickness": "0.6mm",
                    "Application": "Wall Graphics / Furnishings",
                    "Length": "30 mtrs.",
                    "Glue": "",
                    "Compatible with": "Eco Sol / Latex / U.V. Printers",
                    "Product Code": "F600TL",
                    "Category": "DECOR SERIES",
                    "Description": "Made with a soft polyester back and a PVC face, this leatherette is a stunning addition to our customised fabric range for Furniture Upholstery, Cushion Covers, Table Top Mats etc. This digital printed leatherette fabric has a unique, beautifully grained textured leather effect, which adds depth and character. It feels modern, and is useful for people sympathetic for animal welfare such as vegans or vegetarians.",
                    "image": "TEXTURED LEATHERETTE.webp"
                },
                {
                    "id": 18,
                    "Heading": "FURNISHINGS - SMOOTH LEATHERETTE",
                    "Sizes": "54",
                    "Base Substrate": "PVC",
                    "Surface": "Smooth Matte",
                    "Thickness": "0.6mm",
                    "Application": "Wall Graphics / Furnishings",
                    "Length": "30 mtrs.",
                    "Glue": "",
                    "Compatible with": "Eco Sol / Latex / U.V. Printers",
                    "Product Code": "F600SL",
                    "Category": "DECOR SERIES",
                    "Description": "Made with a soft polyester back and a PVC face, this leatherette is a stunning addition to our customised fabric range for Furniture Upholstery, Cushion Covers, Table Top Mats etc. This digital printed leatherette fabric has a unique, beautifully smooth textured leather effect, which adds depth and character. It feels modern, and is useful for people sympathetic for animal welfare such as vegans or vegetarians.",
                    "image": "SMOOTH LEATHERETTE.webp"
                },
                {
                    "id": 19,
                    "Heading": "WINDOW BLIND - FABRIC",
                    "Sizes": "52, 126",
                    "Base Substrate": "Polyester Opaque",
                    "Surface": "Matte",
                    "Weight": "300 gsm",
                    "Thickness": "",
                    "Application": "Window Blinds",
                    "Length": "50 mtrs.",
                    "Glue": "",
                    "Compatible with": "Eco Sol / Latex / U.V. Printers",
                    "Product Code": "WB300BL",
                    "Category": "DECOR SERIES",
                    "Description": "WB300BL is a polyester based, light textured non-adhesive fabric designed for window blinds. It is both side printable substrate. Specially layered with heavy DURA Ink Receptive Layer (DIRL) for high ink absorption which gives better adhesion for darker images. It has a white textured matte surface.",
                    "image": "FABRIC.webp"
                },
                {
                    "id": 20,
                    "Heading": "FABRIC - CEILING",
                    "Sizes": "126",
                    "Base Substrate": "PVC",
                    "Surface": "Gloss",
                    "Weight": "200 gsm",
                    "Thickness": "",
                    "Application": "Backlit Ceilings",
                    "Length": "100 mtrs.",
                    "Glue": "",
                    "Compatible with": "Eco Sol / Latex / U.V. Printers",
                    "Product Code": "C200F",
                    "Category": "DECOR SERIES",
                    "Description": "C200F is a PVC based, light weight & stretchable fabric specially designed for backlit ceiling applications. Specially layered with heavy DURA Ink Receptive Layer (DIRL) for high ink absorption which gives better adhesion for darker images and makes fabric scratch resistant. It has a white smooth gloss surface.",
                    "image": "CEILING.webp"
                },
                {
                    "id": 21,
                    "Heading": "CANVAS - ARTISTIC CANVAS MATTE",
                    "Sizes": "40, 50, 60, 80, 124",
                    "Base Substrate": "Poly-Cotton",
                    "Surface": "Matte",
                    "Weight": "400 gsm",
                    "Thickness": "",
                    "Application": "Art Decor",
                    "Length": "30 mtrs.",
                    "Glue": "",
                    "Compatible with": "Eco Sol / Latex / U.V. Printers",
                    "Product Code": "CAN400M",
                    "Category": "COMMERCIAL PRINTABLE MEDIA For Ecosolvent, Latex and U.V",
                    "Description": "ARTISTIC CANVAS MATTE CAN400M is a water resistant, Optical Brightening additive (OB) free, cotton white matte canvas, top-coated with an ink-receptive layer (DIRL). It is suitable for full-colour graphics for indoor & outdoor applications such as fine art and photographic reproductions, theatre and trade show backdrops and other creative applications.",
                    "image": "ARTISTIC CANVAS MATTE.webp"
                },
                {
                    "id": 22,
                    "Heading": "CANVAS - ARTISTIC CANVAS GLOSS",
                    "Sizes": "36, 50, 60",
                    "Base Substrate": "Poly-Cotton",
                    "Surface": "Gloss",
                    "Weight": "400 gsm",
                    "Thickness": "",
                    "Application": "Art Decor",
                    "Length": "30 mtrs.",
                    "Glue": "",
                    "Compatible with": "Eco Sol / Latex / U.V. Printers",
                    "Product Code": "CAN400G",
                    "Category": "COMMERCIAL PRINTABLE MEDIA For Ecosolvent, Latex and U.V",
                    "Description": "ARTISTIC CANVAS MATTE CAN400M is a water resistant, Optical Brightening additive (OB) free, cotton white gloss canvas, top-coated with an ink-receptive layer (DIRL). It is suitable for full-colour graphics for indoor & outdoor applications such as fine art and photographic reproductions, theatre and trade show backdrops and other creative applications.",
                    "image": "ARTISTIC CANVAS GLOSS.webp"
                }
            ]
        },
        {
            id: 5,
            name: "Consumables - Ink/Solvent",
            image: "imported-mild-solvant-konica-inks-low-smell.webp",
            items: [

                {

                    "id": 1,

                    "Heading": "Imported Mild Solvent 512i/1024i/Starfire Inks Low Smell",

                    "Sizes": "",

                    "Base Substrate": "",

                    "Surface": "",

                    "Weight": "",

                    "Thickness": "",

                    "Application": "",

                    "Adhesion": "",

                    "Coating": "",

                    "Length": "",

                    "Glue": "",

                    "Compatible with": "",

                    "Product Code": "",

                    "Category": "",

                    "Description": "",

                    "image": "imported-mild-solvant-konica-inks-low-smell.webp"

                },
                {

                    "id": 2,

                    "Heading": "Imported Premium 512i/1024i/Starfire Inks High Density",

                    "Sizes": "",

                    "Base Substrate": "",

                    "Surface": "",

                    "Weight": "",

                    "Thickness": "",

                    "Application": "",

                    "Adhesion": "",

                    "Coating": "",

                    "Length": "",

                    "Glue": "",

                    "Compatible with": "",

                    "Product Code": "",

                    "Category": "",

                    "Description": "",

                    "image": "imported-mild-solvant-konica-inks-low-smell.webp"

                },
                {

                    "id": 3,

                    "Heading": "IMPORTED ALLWIN LOW SMELL INKS 512i/1024i/Starfire",

                    "Sizes": "",

                    "Base Substrate": "",

                    "Surface": "",

                    "Weight": "",

                    "Thickness": "",

                    "Application": "",

                    "Adhesion": "",

                    "Coating": "",

                    "Length": "",

                    "Glue": "",

                    "Compatible with": "",

                    "Product Code": "",

                    "Category": "",

                    "Description": "",

                    "image": "IMPORTED-ALLWIN-LOW-SMELL-INKS.webp"

                },
                {

                    "id": 4,

                    "Heading": "Imported Ricoh/Konica UV Inks",

                    "Sizes": "",

                    "Base Substrate": "",

                    "Surface": "",

                    "Weight": "",

                    "Thickness": "",

                    "Application": "",

                    "Adhesion": "",

                    "Coating": "",

                    "Length": "",

                    "Glue": "",

                    "Compatible with": "",

                    "Product Code": "",

                    "Category": "",

                    "Description": "",

                    "image": "imported-Ricohkonica-uv-inks.webp"

                },
                {

                    "id": 5,

                    "Heading": "Imported Universal Inks use for konica/starfire and sikko 6pl and above",

                    "Sizes": "",

                    "Base Substrate": "",

                    "Surface": "",

                    "Weight": "",

                    "Thickness": "",

                    "Application": "",

                    "Adhesion": "",

                    "Coating": "",

                    "Length": "",

                    "Glue": "",

                    "Compatible with": "",

                    "Product Code": "",

                    "Category": "",

                    "Description": "",

                    "image": "Imported-Universal-inks-use-for-konicastarfire-and-sikko-6pl-and-above.webp"

                },{

                    "id": 6,

                    "Heading": "Imported Allwin Inks Low Smell",

                    "Sizes": "",

                    "Base Substrate": "",

                    "Surface": "",

                    "Weight": "",

                    "Thickness": "",

                    "Application": "",

                    "Adhesion": "",

                    "Coating": "",

                    "Length": "",

                    "Glue": "",

                    "Compatible with": "",

                    "Product Code": "",

                    "Category": "",

                    "Description": "",

                    "image": "imported-allwin-inks-low-smell.webp"

                },{

                    "id": 7,

                    "Heading": "Imported Galaxy Eco Inks use for dx5, xp600, tx800 and i3200",

                    "Sizes": "",

                    "Base Substrate": "",

                    "Surface": "",

                    "Weight": "",

                    "Thickness": "",

                    "Application": "",

                    "Adhesion": "",

                    "Coating": "",

                    "Length": "",

                    "Glue": "",

                    "Compatible with": "",

                    "Product Code": "",

                    "Category": "",

                    "Description": "",

                    "image": "imported-galaxy-eco-inks-use-for-dx5,-xp600,-tx800-and-i3200.webp"

                },{

                    "id": 8,

                    "Heading": "Hard Blue Solvent",

                    "Sizes": "",

                    "Base Substrate": "",

                    "Surface": "",

                    "Weight": "",

                    "Thickness": "",

                    "Application": "",

                    "Adhesion": "",

                    "Coating": "",

                    "Length": "",

                    "Glue": "",

                    "Compatible with": "",

                    "Product Code": "",

                    "Category": "",

                    "Description": "",

                    "image": "hard-blue-solvant.webp"

                },{

                    "id": 9,

                    "Heading": "Imported High Quality Eco and Regular Solvent",

                    "Sizes": "",

                    "Base Substrate": "",

                    "Surface": "",

                    "Weight": "",

                    "Thickness": "",

                    "Application": "",

                    "Adhesion": "",

                    "Coating": "",

                    "Length": "",

                    "Glue": "",

                    "Compatible with": "",

                    "Product Code": "",

                    "Category": "",

                    "Description": "",

                    "image": "imported-high-quality-eco-and-regular-solvant.webp"

                },


            ]
        }

    ]





    return (
        <ProductContext.Provider value={{ banners, banner, setBanner, products, product, setProduct, ProductCategory, }}>
            {props.children}
        </ProductContext.Provider>
    )
}