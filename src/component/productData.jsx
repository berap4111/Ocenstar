// We'll use placeholder paths for the images.
// You should replace these with the actual paths to your images.
import ship from "../assets/image/ship1.jpg"; // Placeholder path

export const productCategories = [
    {
        categoryTitle: "Drilling Mud / Polymers",
        products: [
            { id: 1, name: "Barite Powder API", image: ship, description: "High-quality Barite Powder for drilling applications. Barite increases the density of drilling fluids, helping to control formation pressure and prevent blowouts. Compliant with API standards for drilling operations." },
            { id: 2, name: "Bentonite Powder API and OCMA", image: "/images/products/bentonite-powder.jpg", description: "Bentonite Powder API and OCMA description. Used as a viscosifier and filtration control agent in drilling mud. Meets API and OCMA standards, ensuring quality and performance in various drilling conditions. It helps to stabilize the wellbore and remove drill cuttings." },
            { id: 3, name: "Guargum Powder", image: "/images/products/guargum-powder.jpg", description: "Guargum Powder description. A natural polymer used to increase viscosity in water-based drilling fluids. It aids in carrying drill cuttings to the surface and reducing fluid loss into the formation. Environmentally friendly and effective in a wide range of salinities." },
            { id: 4, name: "Sodium Chloride", image: "/images/products/sodium-chloride.jpg", description: "Sodium Chloride description. Used to increase the density of drilling fluids and inhibit clay swelling. It helps to maintain wellbore stability and prevent formation damage. Available in various grades to suit different drilling requirements." },
            { id: 5, name: "Drilling Starch", image: "/images/products/drilling-starch.jpg", description: "Drilling Starch description. A polysaccharide used as a fluid loss control agent in drilling mud. It helps to reduce the amount of fluid that seeps into the formation, improving wellbore stability and preventing differential sticking. Biodegradable and effective in various water-based mud systems." },
        ],
    },
    {
        categoryTitle: "Lost Circulation Materials (LCM)",
        products: [
            { id: 6, name: "Mica Flakes - Fine, Medium and Coarse", image: "/images/products/mica-flakes.jpg", description: "Mica Flakes description. Used to seal fractures and porous formations, preventing loss of drilling fluid. Available in fine, medium, and coarse grades to address different sizes of fractures. Chemically inert and compatible with most drilling fluids." },
            { id: 7, name: "Quick Seal - Fine, Medium and Coarse", image: "/images/products/quick-seal.jpg", description: "Quick Seal description. A blend of materials designed to quickly seal off lost circulation zones. Available in fine, medium, and coarse grades for various applications. It helps to restore circulation and continue drilling operations." },
            { id: 8, name: "Walnut Shell (Nut Plug) - Fine / Medium / Coarse", image: "/images/products/walnut-shell.jpg", description: "Walnut Shell description. A biodegradable LCM used to plug fractures and porous formations. Available in fine, medium, and coarse sizes. It helps to reduce fluid loss and maintain wellbore pressure. Environmentally friendly and effective in a variety of drilling fluids." },
            { id: 9, name: "Fibra Seal (Cellulose Fiber) - Fine / Medium / Coarse", image: "/images/products/fibra-seal.jpg", description: "Fibra Seal description. A cellulose fiber product used to control lost circulation. Available in fine, medium, and coarse grades. It helps to create a tight seal in fractures and porous zones, minimizing fluid loss. Biodegradable and compatible with most drilling fluids." },
            { id: 10, name: "Cotton Seed Hull", image: "/images/products/cotton-seed-hull.jpg", description: "Cotton Seed Hull description. An LCM made from processed cotton seed hulls. It helps to reduce fluid loss and prevent differential sticking. Biodegradable and effective in a range of drilling conditions. It forms a mat-like structure to seal off porous formations." },
            { id: 11, name: "Graphite Powder", image: "/images/products/graphite-powder.jpg", description: "Graphite Powder description. Used as a lubricant and sealant in drilling fluids. It helps to reduce torque and drag, prevent differential sticking, and seal off micro-fractures. Chemically inert and compatible with most drilling fluids. It also enhances wellbore stability." },
        ],
    },
    {
        categoryTitle: "Drilling Fluid Additives and Chemicals",
        products: [
            { id: 12, name: "Spotting Fluid", image: "/images/products/spotting-fluid.jpg", description: "Spotting Fluid description. A specialized fluid used to free stuck pipe. It penetrates the filter cake and lubricates the contact area, allowing the pipe to be worked free. Formulated with surfactants, solvents, and lubricants for optimal performance." },
            { id: 13, name: "Drilling Detergent", image: "/images/products/drilling-detergent.jpg", description: "Drilling Detergent description. A surfactant used to reduce surface tension and improve the cleaning action of drilling fluids. It helps to remove drill cuttings and prevent bit balling. Effective in both water-based and oil-based mud systems." },
            { id: 14, name: "Silicone Defoamer", image: "/images/products/silicone-defoamer.jpg", description: "Silicone Defoamer description. Used to control foam in drilling fluids. It prevents air entrainment and ensures accurate fluid density measurements. Effective in small concentrations and compatible with most drilling fluids." },
            { id: 15, name: "Cloud Point Glycol", image: "/images/products/cloud-point-glycol.jpg", description: "Cloud Point Glycol description. Used to prevent hydrate formation in drilling fluids. It lowers the freezing point and inhibits the formation of gas hydrates, preventing blockages in the wellbore. Effective in cold environments and deepwater drilling." },
            { id: 16, name: "EP Mud Lube", image: "/images/products/ep-mud-lube.jpg", description: "EP Mud Lube description. An extreme pressure lubricant used to reduce torque and drag in drilling operations. It forms a protective film on metal surfaces, minimizing friction and wear. Effective in high-angle and extended-reach wells." },
            { id: 17, name: "Pour Point Depressants (PPD)", image: "/images/products/ppd.jpg", description: "Pour Point Depressants description. Used to lower the pour point of oil-based drilling fluids. It prevents the fluid from gelling at low temperatures, ensuring pumpability and performance in cold environments. Essential for offshore and arctic drilling operations." },
            { id: 18, name: "Corrosion Inhibitor", image: "/images/products/corrosion-inhibitor.jpg", description: "Corrosion Inhibitor description. Used to protect metal components from corrosion in drilling fluids. It forms a protective layer on the metal surface, preventing attack from corrosive agents. Essential for extending the life of drilling equipment and preventing failures." },
            { id: 19, name: "Primary Emulsifier", image: "/images/products/primary-emulsifier.jpg", description: "Primary Emulsifier description. Used to create stable emulsions in oil-based drilling fluids. It helps to disperse water droplets in the oil phase, creating a stable and homogeneous fluid. Essential for maintaining fluid properties and performance." },
            { id: 20, name: "Secondary Emulsifier", image: "/images/products/secondary-emulsifier.jpg", description: "Secondary Emulsifier description. Used to enhance the stability of emulsions in oil-based drilling fluids. It helps to prevent phase separation and maintain fluid properties over time. Used in conjunction with primary emulsifiers for optimal performance." },
        ],
    },
];