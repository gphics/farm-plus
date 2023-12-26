const soils = [
  {
    name: "loam",
    image_url:
      "https://www.boughton.co.uk/wp-content/uploads/sites/14/2019/07/Loam-Soil.jpg",
    description:
      "Loam soil is a mixture of sand, silt and clay that are combined to avoid the negative effects of each type.These soils are fertile, easy to work with and provide good drainage. Depending on their predominant composition they can be either sandy or clay loam. As the soils are a perfect balance of soil particles, they are considered to be a gardeners best friend, but still benefit from topping up with additional organic matter. Loam(in geology and soil science) is soil composed mostly of sand(particle size > 63 micrometres(0.0025 in)), silt(particle size > 2 micrometres(7.9×10−5 in)), and a smaller amount of clay(particle size < 2 micrometres(7.9×10−5 in)).[citation needed] By weight, its mineral composition is about 40–40–20 % concentration of sand–silt–clay, respectively.These proportions can vary to a degree, however, and result in different types of loam soils: sandy loam, silty loam, clay loam, sandy clay loam, silty clay loam, and loam.[",
    suitable_plants:
      "Plant that thrive well on loam soil are wheat,vegetables, sugarcane, cotton, jute, pulses, and oilseeds",
    uses: "Loam is considered ideal for gardening and agricultural uses because it retains nutrients well and retains water while still allowing excess water to drain away.[4] A soil dominated by one or two of the three particle size groups can behave like loam if it has a strong granular structure, promoted by a high content of organic matter. However, a soil that meets the textural (geological) definition of loam can lose its characteristic desirable qualities when it is compacted, depleted of organic matter, or has clay dispersed throughout its fine-earth fraction",
  },
  {
    name: "chalk",
    suitable_plants:
      "chalky soils are best suited to plants that like sharp drainage and are not too greedy in terms of nutrient requirements. The best climbing plants for chalky soils include akebia, clematis, grape vines, ivy, jasmine, lonicera and virginia creeper",
    image_url:
      "https://www.boughton.co.uk/wp-content/uploads/sites/14/2019/07/Chalk-Soil.jpg",
    description:
      "Chalk soil can be either light or heavy but always highly alkaline due to the calcium carbonate (lime) within its structure. As these soils are alkaline they will not support the growth of ericaceous plants that require acidic soils to grow.If a chalky soil shows signs of visible white lumps then they can’t be acidified and gardeners should be resigned to only choose plants that prefer an alkaline soil.",
    uses: "In agriculture, chalk is used for raising pH in soils with high acidity. The most common forms are CaCO3 (calcium carbonate) and CaO (calcium oxide). Small doses of chalk can also be used as an antacid. Additionally, the small particles of chalk make it a substance ideal for cleaning and polishing",
  },
  {
    name: "peat",
    description:
      "Peat soil is high in organic matter and retains a large amount of moisture.This type of soil is very rarely found in a garden and often imported into a garden to provide an optimum soil base for planting.",
    uses: "Peat is used in horticulture as a component of garden plant substrates, in agriculture for the production of garden soil and as an organic fertilizer, and in balneology as a material for baths and wraps.",
    suitable_plants:
      "Crops such as potatoes, sugar beet, celery, onions, carrots, lettuce and market garden crops are commonly grown.",
    image_url:
      "https://www.boughton.co.uk/wp-content/uploads/sites/14/2019/07/Peat-Soil.jpg",
  },
  {
    name: "sandy",
    image_url:
      "https://www.boughton.co.uk/wp-content/uploads/sites/14/2019/07/Sandy-Soil-1.jpg",
    suitable_plants:
      "The crops that grow well in sandy soil include carrot, beetroot, cucumber, muskmelon, watermelon, fenugreek, radish.",
    uses: "sandy soil can be used for agricultural, ph changing, beautification, construction etc purposes.",
    description:
      "Sandy Soil is light, warm, dry and tends to be acidic and low in nutrients. Sandy soils are often known as light soils due to their high proportion of sand and little clay (clay weighs more than sand). These soils have quick water drainage and are easy to work with. They are quicker to warm up in spring than clay soils but tend to dry out in summer and suffer from low nutrients that are washed away by rain. The addition of organic matter can help give plants an additional boost of nutrients by improving the nutrient and water holding capacity of the soil.",
  },
  {
    name: "clay",
    image_url:
      "https://www.boughton.co.uk/wp-content/uploads/sites/14/2019/07/Clay-Soil-1.jpg",
    uses: "Clays are used for making pottery, both utilitarian and decorative, and construction products, such as bricks, walls, and floor tiles. Different types of clay, when used with different minerals and firing conditions, are used to produce earthenware, stoneware, and porcelain.",
    suitable_plants:
      "clay soils are suitable for crops like Broccoli, Brussels sprouts, Cabbage (red and green), Cabbage (Napa and savoy), Cauliflower, Kale, Bean, Pea, Potato and Daikon radish.",
    description:
      "Clay Soil is a heavy soil type that benefits from high nutrients. Clay soils remain wet and cold in winter and dry out in summer. These soils are made of over 25 percent clay, and because of the spaces found between clay particles, clay soils hold a high amount of water. Because these soils drain slowly and take longer to warm up in summer, combined with drying out and cracking in summer, they can often test gardeners.",
  },
  {
    name: "silt",
    image_url:
      "https://www.boughton.co.uk/wp-content/uploads/sites/14/2019/07/Silt-Soil.jpg",
    suitable_plants:
      " A wide range of crops can be grown contain wheat, potatoes, sugar beet, vining peas, bulbs and field vegetables.",
    uses: "Agriculture: Silt soil is great for agriculture, as it has good water retention properties and is rich in nutrients. It is commonly used to grow crops such as wheat, rice, and other grains. Construction: Silt soil is also used in construction projects, as it can be easily compacted and provides a stable foundation.",
    description:
      "ilt Soil is a light and moisture retentive soil type with a high fertility rating. As silt soils compromise of medium sized particles they are well drained and hold moisture well. As the particles are fine, they can be easily compacted and are prone to washing away with rain. By adding organic matter, the silt particles can be bound into more stable clumps.",
  },
];

export default soils;
