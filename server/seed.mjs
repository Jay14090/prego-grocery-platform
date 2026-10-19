import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
dotenv.config({ path: join(__dirname, '.env') });

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: Array, required: true },
  price: { type: Number, required: true },
  offerPrice: { type: Number, required: true },
  image: { type: Array, required: true },
  category: { type: String, required: true },
  inStock: { type: Boolean, default: true },
}, { timestamps: true });

const Product = mongoose.model('product', productSchema);

// All IDs verified live from Unsplash search pages
const u = (id) => `https://images.unsplash.com/photo-${id}?w=500&auto=format&fit=crop`;

const products = [
  // ── ORGANIC VEGGIES (15) ────────────────────────────────────────────────────
  { name: 'Organic Tomatoes (500g)', category: 'Organic Veggies', price: 40, offerPrice: 35, image: [u('1582284540020-8acbe03f4924')], description: ['Farm-fresh organic tomatoes', 'Rich in lycopene and Vitamin C', 'Zero pesticides, sustainably grown', 'Perfect for curries, salads & sauces'] },
  { name: 'Fresh Baby Spinach (250g)', category: 'Organic Veggies', price: 30, offerPrice: 25, image: [u('1557844352-761f2565b576')], description: ['Tender baby spinach leaves', 'High in iron, calcium & Vitamin K', 'Washed and ready to use', 'Great for salads, smoothies & sabzi'] },
  { name: 'Broccoli (500g)', category: 'Organic Veggies', price: 80, offerPrice: 70, image: [u('1579113800032-c38bd7635818')], description: ['Crisp green broccoli florets', 'Packed with vitamins C and K', 'Organically certified', 'Ideal for stir-fry and soups'] },
  { name: 'Organic Carrots (500g)', category: 'Organic Veggies', price: 45, offerPrice: 38, image: [u('1590779033100-9f60a05a013d')], description: ['Crunchy orange carrots', 'Rich in beta-carotene & fibre', 'Naturally sweet flavour', 'Great raw, roasted or in halwa'] },
  { name: 'Baby Potatoes (500g)', category: 'Organic Veggies', price: 35, offerPrice: 30, image: [u('1518843875459-f738682238a6')], description: ['Small tender baby potatoes', 'Creamy texture when cooked', 'Perfect for roasting & curries', 'Organically grown, no chemicals'] },
  { name: 'Red Onions (1kg)', category: 'Organic Veggies', price: 35, offerPrice: 28, image: [u('1518977822534-7049a61ee0c2')], description: ['Fresh, firm red onions', 'Essential for Indian cooking', 'Rich in antioxidants', 'Long shelf life when stored dry'] },
  { name: 'Cucumber (500g)', category: 'Organic Veggies', price: 25, offerPrice: 20, image: [u('1566385101042-1a0aa0c1268c')], description: ['Cool and crisp cucumbers', '96% water – great for hydration', 'Low calorie, high fibre', 'Ideal for salads and raita'] },
  { name: 'Green Capsicum (3 pcs)', category: 'Organic Veggies', price: 60, offerPrice: 50, image: [u('1542838132-92c53300491e')], description: ['Crunchy green bell peppers', 'Rich in Vitamin C & antioxidants', 'Great for stir-fry and stuffing', 'Fresh and crisp, farm direct'] },
  { name: 'Eggplant / Baingan (500g)', category: 'Organic Veggies', price: 35, offerPrice: 28, image: [u('1609126986933-e3c84f19d49c')], description: ['Fresh purple eggplants', 'Great for baingan bharta & curries', 'Low in calories and fat', 'Organically sourced'] },
  { name: 'Fresh Mushrooms (200g)', category: 'Organic Veggies', price: 90, offerPrice: 75, image: [u('1597362925123-77861d3fbac7')], description: ['Button mushrooms, freshly picked', 'Rich in protein and B vitamins', 'Perfect for soups & pasta', 'Refrigerate and use within 3 days'] },
  { name: 'Green Peas (500g)', category: 'Organic Veggies', price: 50, offerPrice: 42, image: [u('1610348725531-843dff563e2c')], description: ['Sweet and tender green peas', 'High in plant-based protein', 'Fresh from the farm', 'Great for pulao, curry & snacks'] },
  { name: 'French Beans (250g)', category: 'Organic Veggies', price: 55, offerPrice: 45, image: [u('1473648717346-73c9c15cbad6')], description: ['Crisp, slender French beans', 'Rich in folate and iron', 'Snap and cook fresh', 'Great stir-fried with garlic'] },
  { name: 'Fresh Ginger (200g)', category: 'Organic Veggies', price: 40, offerPrice: 32, image: [u('1489450278009-822e9be04dff')], description: ['Aromatic fresh ginger root', 'Anti-inflammatory and digestive aid', 'Essential in Indian cooking', 'Use in chai, curries and marinades'] },
  { name: 'Sweet Corn (2 pcs)', category: 'Organic Veggies', price: 30, offerPrice: 25, image: [u('1471193945509-9ad0617afabf')], description: ['Juicy, sweet corn on the cob', 'Rich in fibre and antioxidants', 'Great boiled, grilled or in salads', 'Harvested fresh daily'] },
  { name: 'Lady Finger / Okra (250g)', category: 'Organic Veggies', price: 40, offerPrice: 33, image: [u('1624668430039-0175a0fbf006')], description: ['Tender okra pods', 'High in fibre and Vitamin C', 'Classic for bhindi masala', 'Fresh, firm and crisp'] },

  // ── FRESH FRUITS (15) ───────────────────────────────────────────────────────
  { name: 'Red Apples (6 pcs)', category: 'Fresh Fruits', price: 120, offerPrice: 99, image: [u('1560761098-21f5722ecb14')], description: ['Crisp, juicy red apples', 'Rich in fibre and Vitamin C', 'Naturally sweet, low calorie', 'Great for snacking and baking'] },
  { name: 'Bananas (12 pcs)', category: 'Fresh Fruits', price: 60, offerPrice: 50, image: [u('1487376480913-24046456a727')], description: ['Ripe, ready-to-eat bananas', 'High in potassium and energy', 'Perfect pre-workout snack', 'Naturally sweet and filling'] },
  { name: 'Alphonso Mangoes (6 pcs)', category: 'Fresh Fruits', price: 250, offerPrice: 199, image: [u('1619566636858-adf3ef46400b')], description: ['King of mangoes – Alphonso variety', 'Intensely aromatic and sweet', 'Sourced from Ratnagiri, Maharashtra', 'Limited seasonal availability'] },
  { name: 'Oranges (6 pcs)', category: 'Fresh Fruits', price: 90, offerPrice: 75, image: [u('1635774855717-0aec182f92cc')], description: ['Juicy Nagpur oranges', 'Excellent source of Vitamin C', 'Fresh, tangy and sweet', 'Great for juicing or eating'] },
  { name: 'Green Grapes (500g)', category: 'Fresh Fruits', price: 80, offerPrice: 65, image: [u('1610832958506-aa56368176cf')], description: ['Seedless Thompson grapes', 'Sweet with a mild tartness', 'High in antioxidants', 'Perfect for snacking and fruit salads'] },
  { name: 'Strawberries (250g)', category: 'Fresh Fruits', price: 150, offerPrice: 120, image: [u('1535227798054-e4373ef3795a')], description: ['Fresh Mahabaleshwar strawberries', 'Bright red, sweet and juicy', 'Rich in antioxidants and Vitamin C', 'Great for smoothies, cakes and eating fresh'] },
  { name: 'Watermelon (whole ~3kg)', category: 'Fresh Fruits', price: 80, offerPrice: 65, image: [u('1498579397066-22750a3cb424')], description: ['Seedless watermelon, chilled', '92% water – perfect for hydration', 'Sweet, refreshing summer fruit', 'Freshness guaranteed'] },
  { name: 'Pineapple (whole)', category: 'Fresh Fruits', price: 60, offerPrice: 50, image: [u('1580691155297-c6dfa3ca61c4')], description: ['Ripe, golden pineapple', 'Rich in Vitamin C and bromelain', 'Naturally sweet with tropical flavour', 'Great fresh, grilled or juiced'] },
  { name: 'Papaya (half)', category: 'Fresh Fruits', price: 45, offerPrice: 35, image: [u('1586099529369-00432c0492cd')], description: ['Ripe, orange papaya', 'Excellent for digestion (papain enzyme)', 'Low calorie, high in Vitamin A', 'Eat with a squeeze of lime'] },
  { name: 'Pomegranate (2 pcs)', category: 'Fresh Fruits', price: 100, offerPrice: 85, image: [u('1592918489661-b098eb4e343c')], description: ['Juicy pomegranates from Solapur', 'Loaded with antioxidants', 'Rich ruby-red arils', 'Great for juicing or as a topping'] },
  { name: 'Kiwi (6 pcs)', category: 'Fresh Fruits', price: 180, offerPrice: 149, image: [u('1641642399576-487909d0ddbc')], description: ['Imported green kiwi', 'High in Vitamin C and Vitamin K', 'Tangy and refreshing', 'Excellent for immunity and digestion'] },
  { name: 'Pears (6 pcs)', category: 'Fresh Fruits', price: 110, offerPrice: 90, image: [u('1628689469838-524a4a973b8e')], description: ['Sweet, ripe Nashpati pears', 'Good source of dietary fibre', 'Mild and sweet flavour', 'Great for kids and adults'] },
  { name: 'Sweet Lime / Mosambi (6 pcs)', category: 'Fresh Fruits', price: 80, offerPrice: 65, image: [u('1658431618300-a69b07fb5782')], description: ['Fresh Mosambi citrus fruit', 'High in Vitamin C and potassium', 'Best for fresh juice', 'Mild, sweet flavour with no bitterness'] },
  { name: 'Guava (500g)', category: 'Fresh Fruits', price: 55, offerPrice: 45, image: [u('1592558480962-903b06077406')], description: ['Ripe, fragrant guavas', 'Very high in Vitamin C', 'Rich in antioxidants and fibre', 'Eat with salt and chilli or as juice'] },
  { name: 'Dragon Fruit (1 pc)', category: 'Fresh Fruits', price: 200, offerPrice: 165, image: [u('1631209121750-a9f656d28f46')], description: ['Exotic pink dragon fruit', 'Rich in Vitamin C and fibre', 'Low calorie, high antioxidants', 'Unique, mild, sweet flavour'] },

  // ── COLD DRINKS (10) ────────────────────────────────────────────────────────
  { name: 'Coca-Cola (2L)', category: 'Cold Drinks', price: 95, offerPrice: 85, image: [u('1619719304580-c6f308e5315a')], description: ['Classic Coca-Cola carbonated drink', 'Chilled and refreshing', 'Perfect with meals or as a mixer', 'Best served cold over ice'] },
  { name: 'Pepsi (2L)', category: 'Cold Drinks', price: 90, offerPrice: 80, image: [u('1526746687473-593f256d8b97')], description: ['Pepsi cola carbonated beverage', 'Bold, refreshing taste', 'Great for parties and gatherings', 'Chill before serving'] },
  { name: 'Sprite (2L)', category: 'Cold Drinks', price: 90, offerPrice: 80, image: [u('1551265935-b7354f59a3fd')], description: ['Crisp lemon-lime sparkling drink', 'Clear, refreshing carbonation', 'Zero caffeine, great for all ages', 'Pairs well with food'] },
  { name: 'Frooti Mango Drink (1L)', category: 'Cold Drinks', price: 55, offerPrice: 48, image: [u('1473425990767-8324e48b48b5')], description: ["India's favourite mango drink", 'Made from Alphonso mango pulp', 'Sweet, thick and refreshing', 'A classic since 1985'] },
  { name: 'Real Orange Juice (1L)', category: 'Cold Drinks', price: 120, offerPrice: 99, image: [u('1625865019845-7b2c89b8a8a9')], description: ['100% natural orange juice', 'No added sugar, preservative-free', 'Rich in Vitamin C', 'Shake well before pouring'] },
  { name: 'Tropicana Apple Juice (1L)', category: 'Cold Drinks', price: 115, offerPrice: 95, image: [u('1544241907-f3f1f5ded15a')], description: ['Pure pressed apple juice', 'No artificial colours or flavours', 'Great for kids and adults', 'Chilled or at room temperature'] },
  { name: 'Mountain Dew (2L)', category: 'Cold Drinks', price: 95, offerPrice: 85, image: [u('1625865019554-220ea80ea813')], description: ['Citrus-flavoured carbonated drink', 'High energy, bold citrus taste', 'Served cold for best taste', 'Popular gaming and sports drink'] },
  { name: 'Maaza Mango (600ml, 6-pack)', category: 'Cold Drinks', price: 160, offerPrice: 140, image: [u('1568309344402-e55115e869fe')], description: ['Maaza thick mango drink', '6-bottle party pack', 'Real mango pulp, refreshing taste', 'Chilled or over ice'] },
  { name: 'Red Bull Energy Drink (250ml)', category: 'Cold Drinks', price: 125, offerPrice: 110, image: [u('1649550275607-e0835d18a9a7')], description: ['Red Bull energy drink', 'Contains caffeine, B vitamins and taurine', 'Improves concentration and energy', 'Popular pre-workout and study drink'] },
  { name: 'Minute Maid Pulpy Orange (1L)', category: 'Cold Drinks', price: 105, offerPrice: 90, image: [u('1690988109092-6b29ef11107f')], description: ['Orange juice with real pulp bits', 'Feels like freshly squeezed', 'Rich in Vitamin C', 'Refreshing anytime drink'] },

  // ── INSTANT FOOD (10) ───────────────────────────────────────────────────────
  { name: 'Maggi Noodles (12-pack)', category: 'Instant Food', price: 120, offerPrice: 105, image: [u('1562525882-d9dabe507593')], description: ["India's most loved instant noodles", '2-minute cooking time', 'Classic Masala flavour', 'Pack of 12 – great value'] },
  { name: 'Yippee Noodles Magic Masala (8-pack)', category: 'Instant Food', price: 96, offerPrice: 85, image: [u('1635843115775-286b807d4a51')], description: ['Longer, slurp-worthy noodles', 'Non-sticky after cooking', 'Bold Magic Masala flavour', 'Pack of 8 – family pack'] },
  { name: 'MTR Poha Mix (200g)', category: 'Instant Food', price: 55, offerPrice: 48, image: [u('1621956838481-f8f616950454')], description: ['Ready-in-minutes poha breakfast', 'Authentic South Indian taste', 'Just add water and temper', 'Wholesome and tasty'] },
  { name: 'MTR Upma Mix (200g)', category: 'Instant Food', price: 55, offerPrice: 48, image: [u('1615485290628-c5033c657a8c')], description: ['Classic South Indian upma in minutes', 'Just add boiling water and stir', 'No oil needed', 'Healthy, filling breakfast'] },
  { name: 'Haldirams Dal Makhani (300g)', category: 'Instant Food', price: 130, offerPrice: 110, image: [u('1673158191698-f1550a68c422')], description: ['Ready-to-eat Dal Makhani', 'Restaurant-style taste at home', 'Heat and eat in 3 minutes', 'No preservatives, authentic recipe'] },
  { name: 'Cup Noodles Masala (3-pack)', category: 'Instant Food', price: 75, offerPrice: 65, image: [u('1668337624325-e49fd5bf1446')], description: ['On-the-go cup noodles', 'Just add boiling water', 'Spicy masala flavour', 'Great for travel and office'] },
  { name: 'ITC Kitchen of India Butter Chicken (300g)', category: 'Instant Food', price: 150, offerPrice: 125, image: [u('1506368249639-73a05d6f6488')], description: ['Restaurant-quality Butter Chicken', 'Rich, creamy tomato gravy', 'Ready in 3 minutes', 'Pairs perfectly with naan or rice'] },
  { name: 'Knorr Soupy Noodles (6-pack)', category: 'Instant Food', price: 90, offerPrice: 75, image: [u('1591272216626-b09e38519371')], description: ['Soups and noodles in one', 'Comes with real vegetable bits', 'Comforting hot meal in minutes', 'Great for monsoon evenings'] },
  { name: 'Patanjali Atta Noodles (4-pack)', category: 'Instant Food', price: 60, offerPrice: 52, image: [u('1653511774008-b191fd19347b')], description: ['Whole wheat atta noodles', 'Healthier than maida noodles', 'Good source of fibre', 'Tasty and filling for kids'] },
  { name: 'Wai Wai Crispy Noodles (6-pack)', category: 'Instant Food', price: 72, offerPrice: 62, image: [u('1562525922-cde78e2119f9')], description: ['Crispy or cooked Wai Wai noodles', 'Popular Nepali-style instant noodles', 'Bold chicken masala taste', 'Can be eaten dry or with broth'] },

  // ── DAIRY PRODUCTS (10) ─────────────────────────────────────────────────────
  { name: 'Amul Full Cream Milk (1L)', category: 'Dairy Products', price: 65, offerPrice: 62, image: [u('1550583724-b2692b85b150')], description: ['Full cream Amul milk, 6% fat', 'Rich, creamy taste', 'Great for chai, coffee and cooking', 'Tetra pack – no refrigeration until opened'] },
  { name: 'Amul Butter (500g)', category: 'Dairy Products', price: 240, offerPrice: 225, image: [u('1628088062854-d1870b4553da')], description: ['Creamy Amul pasteurised butter', 'Salted variety for everyday use', 'Perfect for cooking, baking and toast', "India's most trusted butter brand"] },
  { name: 'Amul Processed Cheddar Cheese (200g)', category: 'Dairy Products', price: 185, offerPrice: 165, image: [u('1594731884638-8197c3102d1d')], description: ['Mild and creamy cheddar cheese block', 'Great for sandwiches, pizza and pasta', 'Easy to slice and grate', "Made from pure cow's milk"] },
  { name: 'Mother Dairy Dahi (400g)', category: 'Dairy Products', price: 55, offerPrice: 48, image: [u('1596151163116-98a5033814c2')], description: ['Thick, creamy set dahi', 'Probiotic-rich for gut health', 'Made from fresh pasteurised milk', 'Perfect with meals or for lassi'] },
  { name: 'Amul Mozzarella Cheese (200g)', category: 'Dairy Products', price: 200, offerPrice: 175, image: [u('1602153508753-4ace888c10a0')], description: ['Stretchy Mozzarella cheese', 'Perfect melt for pizza and pasta', 'Mild flavour, high in protein', 'Keep refrigerated'] },
  { name: 'Mother Dairy Paneer (200g)', category: 'Dairy Products', price: 90, offerPrice: 80, image: [u('1500595046743-cd271d694d30')], description: ['Fresh, soft paneer', 'High in protein – 18g per 100g', 'Great for paneer butter masala & tikka', 'Use within 2 days of opening'] },
  { name: 'Amul Pure Ghee (500ml)', category: 'Dairy Products', price: 280, offerPrice: 260, image: [u('1634141510639-d691d86f47be')], description: ["Pure cow's milk ghee", 'Rich, nutty aroma', 'Essential in Indian cooking and rituals', 'High smoke point – ideal for frying'] },
  { name: 'Britannia Cheese Slices (200g)', category: 'Dairy Products', price: 155, offerPrice: 135, image: [u('1523473827533-2a64d0d36748')], description: ['Individually wrapped cheese slices', 'Perfect for burgers and sandwiches', 'Melts evenly and quickly', "Kids' favourite"] },
  { name: 'Go Cheese Spread (180g)', category: 'Dairy Products', price: 160, offerPrice: 145, image: [u('1601436423474-51738541c1b1')], description: ['Creamy spreadable cheese', 'Original flavour – mild and buttery', 'Perfect on toast, crackers & bread', 'Great for sandwiches and dips'] },
  { name: 'Amul Lassi (200ml, 6-pack)', category: 'Dairy Products', price: 120, offerPrice: 105, image: [u('1550630997-aea8d3d982ed')], description: ['Chilled sweet lassi', "Made from Amul's fresh dahi", 'Refreshing and probiotic-rich', 'Classic Indian drink, serve cold'] },

  // ── BAKERY & BREADS (10) ────────────────────────────────────────────────────
  { name: 'Britannia Brown Bread (400g)', category: 'Bakery & Breads', price: 40, offerPrice: 35, image: [u('1568254183919-78a4f43a2877')], description: ['Whole wheat brown bread', 'Rich in fibre and nutrients', 'Soft texture, great for sandwiches', 'No artificial preservatives'] },
  { name: 'Modern White Sandwich Bread (400g)', category: 'Bakery & Breads', price: 35, offerPrice: 30, image: [u('1587241321921-91a834d6d191')], description: ['Soft white sandwich bread', 'Fluffy texture, easy to slice', 'Great for toast, sandwiches and rolls', 'Classic everyday bread'] },
  { name: 'Britannia Whole Wheat Bread (400g)', category: 'Bakery & Breads', price: 45, offerPrice: 40, image: [u('1577595927087-dedbe84f0e4d')], description: ['100% whole wheat bread', 'High in dietary fibre', 'Nutty flavour, dense texture', 'Healthier choice for the family'] },
  { name: 'Chocolate Truffle Cake (500g)', category: 'Bakery & Breads', price: 350, offerPrice: 299, image: [u('1612539466296-4ecf1db303e3')], description: ['Rich, moist chocolate truffle cake', 'Dark chocolate ganache frosting', 'Perfect for birthdays and celebrations', 'Serves 6-8 people'] },
  { name: 'Butter Croissants (4 pcs)', category: 'Bakery & Breads', price: 160, offerPrice: 135, image: [u('1571942948809-74637bfc59b9')], description: ['Flaky, buttery French croissants', 'Golden, layered pastry', 'Best served warm with jam or butter', 'Baked fresh daily'] },
  { name: 'Multigrain Bagels (4 pcs)', category: 'Bakery & Breads', price: 150, offerPrice: 125, image: [u('1560427183-4efd29c38997')], description: ['Dense, chewy multigrain bagels', 'Seeds: sesame, poppy and oats', 'Great with cream cheese or avocado', 'High in fibre and complex carbs'] },
  { name: 'English Muffins (6 pcs)', category: 'Bakery & Breads', price: 130, offerPrice: 110, image: [u('1598373182308-3270495d2f58')], description: ['Soft English muffins', 'Perfect for Eggs Benedict', 'Toast and top with butter or jam', 'Light and fluffy texture'] },
  { name: 'Garlic Breadsticks (200g)', category: 'Bakery & Breads', price: 120, offerPrice: 99, image: [u('1566698629409-787a68fc5724')], description: ['Crispy garlic-seasoned breadsticks', 'Baked, not fried', 'Perfect with soups and dips', 'Light, crunchy snack'] },
  { name: 'Pita Bread (4 pcs)', category: 'Bakery & Breads', price: 95, offerPrice: 80, image: [u('1567042661848-7161ce446f85')], description: ['Soft and pillowy pita bread', 'Great for hummus, falafel and wraps', 'Pocket-shaped for easy stuffing', 'Heat on a tawa before serving'] },
  { name: 'Banana Walnut Muffins (4 pcs)', category: 'Bakery & Breads', price: 180, offerPrice: 150, image: [u('1579697096985-41fe1430e5df')], description: ['Moist banana and walnut muffins', 'Baked fresh without preservatives', 'Rich banana flavour, crunchy walnuts', 'Great for breakfast or snacks'] },

  // ── GRAINS (10) ─────────────────────────────────────────────────────────────
  { name: 'Daawat Basmati Rice (5kg)', category: 'Grains', price: 450, offerPrice: 399, image: [u('1775259608525-cf332eaf89d3')], description: ['Premium long-grain Basmati rice', 'Aged for 2 years for extra aroma', 'Fluffy, non-sticky grains', 'Perfect for biryani and pulao'] },
  { name: 'Fortune Chakki Atta (10kg)', category: 'Grains', price: 380, offerPrice: 349, image: [u('1668337624325-e49fd5bf1446')], description: ['100% whole wheat chakki atta', 'Stone-ground for softness', 'Makes soft, fluffy rotis', 'High in fibre and nutrients'] },
  { name: 'Toor Dal (1kg)', category: 'Grains', price: 145, offerPrice: 130, image: [u('1673158191698-f1550a68c422')], description: ['Premium Arhar / Toor dal', 'High in protein and iron', 'Quick to cook, easy to digest', 'Essential for dal tadka'] },
  { name: 'Chana Dal (1kg)', category: 'Grains', price: 125, offerPrice: 110, image: [u('1635843115775-286b807d4a51')], description: ['Split Bengal gram – Chana dal', 'Nutty flavour, creamy texture', 'Rich in protein and dietary fibre', 'Great for dal, halwa and pakoras'] },
  { name: 'Moong Dal (1kg)', category: 'Grains', price: 140, offerPrice: 125, image: [u('1621956838481-f8f616950454')], description: ['Yellow split moong dal', 'Easy to digest, high in protein', 'Great for khichdi and dal', 'Ideal for babies and the elderly'] },
  { name: 'Poha / Flattened Rice (1kg)', category: 'Grains', price: 70, offerPrice: 60, image: [u('1615485290628-c5033c657a8c')], description: ['Thin, white flattened rice', 'Low calorie, iron-rich breakfast grain', 'Quick to cook – just soak 5 minutes', 'Classic for poha, chivda and chaat'] },
  { name: 'Quaker Rolled Oats (1kg)', category: 'Grains', price: 180, offerPrice: 155, image: [u('1562525882-d9dabe507593')], description: ['100% whole grain rolled oats', 'Reduces cholesterol naturally', 'High in beta-glucan fibre', 'Versatile – porridge, smoothies, baking'] },
  { name: 'Rajma / Kidney Beans (1kg)', category: 'Grains', price: 135, offerPrice: 120, image: [u('1653511774008-b191fd19347b')], description: ['Dark red kidney beans', 'High in protein and fibre', 'Soak overnight before cooking', 'Classic for Punjabi Rajma Chawal'] },
  { name: 'Quinoa (500g)', category: 'Grains', price: 220, offerPrice: 189, image: [u('1673158190693-d1bd10414338')], description: ['White quinoa – complete protein source', 'All 9 essential amino acids', 'Gluten-free grain', 'Cook like rice, use in salads or bowls'] },
  { name: 'Semolina / Suji (1kg)', category: 'Grains', price: 55, offerPrice: 48, image: [u('1714062105923-5cb2a3a07499')], description: ['Fine semolina / suji', 'Essential for upma, halwa and idli', 'Good source of iron and B vitamins', 'Coarse texture, golden colour'] },

  // ── SNACKS (10) ─────────────────────────────────────────────────────────────
  { name: "Lay's Classic Salted (6-pack)", category: 'Snacks', price: 120, offerPrice: 105, image: [u('1604565011092-c0fa4416f80f')], description: ['Classic salted potato chips', 'Light and crispy wafer-thin slices', 'Perfect party snack', 'Pack of 6 – great value'] },
  { name: 'Kurkure Masala Munch (5-pack)', category: 'Snacks', price: 100, offerPrice: 88, image: [u('1647764430080-6000fbe7efee')], description: ["India's favourite puffed corn snack", 'Spicy masala flavour', 'Crunchy, puffed and light', 'Great with chai or cold drink'] },
  { name: 'Doritos Nacho Cheese', category: 'Snacks', price: 140, offerPrice: 120, image: [u('1708746333890-8e775f97f0a6')], description: ['Bold nacho cheese tortilla chips', 'Thick, crunchy triangular chips', 'Intense flavour, great with dips', 'Imported snack'] },
  { name: 'Haldirams Bhujia (400g)', category: 'Snacks', price: 165, offerPrice: 145, image: [u('1599490659213-e2b9527bd087')], description: ['Authentic Bikaner bhujia namkeen', 'Crispy, spiced gram flour sev', 'Classic Indian tea-time snack', 'No artificial colours or flavours'] },
  { name: 'Pringles Original (130g)', category: 'Snacks', price: 180, offerPrice: 155, image: [u('1613919113640-25732ec5e61f')], description: ['Stacked saddle-shaped potato crisps', 'Uniform, crispy texture', 'Classic original flavour', "Once you pop, you can't stop"] },
  { name: 'Haldirams Aloo Bhujia (400g)', category: 'Snacks', price: 140, offerPrice: 120, image: [u('1688217170693-e821c6e18d72')], description: ['Crispy potato bhujia namkeen', 'Spiced with traditional masalas', 'Great for snacking or topping chaats', 'Made with natural ingredients'] },
  { name: 'Bingo Mad Angles (5-pack)', category: 'Snacks', price: 100, offerPrice: 88, image: [u('1617102738820-bee2545405fd')], description: ['Triangular wheat crisps', 'Achari masti and cheese flavours', 'Unique angular shape for extra crunch', 'Great school and office snack'] },
  { name: 'Cornitos Nachos Crisps (150g)', category: 'Snacks', price: 130, offerPrice: 110, image: [u('1528751014936-863e6e7a319c')], description: ['Authentic Mexican-style nachos', 'Thick, crunchy tortilla chips', 'Best with salsa and guacamole', 'No artificial trans fats'] },
  { name: 'Too Yumm Multigrain Chips (6-pack)', category: 'Snacks', price: 120, offerPrice: 105, image: [u('1566478989037-eec170784d0b')], description: ['Baked multigrain chips – not fried', '50% less fat than regular chips', 'Crunchy with bold spice flavours', 'Guilt-free healthy snacking'] },
  { name: 'Parle Monaco Salted Crackers (3-pack)', category: 'Snacks', price: 60, offerPrice: 52, image: [u('1599490659101-963323d1da50')], description: ['Light, crispy salted crackers', 'Perfect with cheese and dips', 'Great for quick bites', 'Packs of 3 for sharing'] },

  // ── CHOCOLATES (8) ──────────────────────────────────────────────────────────
  { name: 'Cadbury Dairy Milk (200g)', category: 'Chocolates', price: 160, offerPrice: 140, image: [u('1553452118-621e1f860f43')], description: ['Creamy, melt-in-mouth milk chocolate', 'Made with real milk', "India's most loved chocolate", 'Perfect gift for all occasions'] },
  { name: 'KitKat (6-pack)', category: 'Chocolates', price: 150, offerPrice: 130, image: [u('1549007994-cb92caebd54b')], description: ['Crispy wafer covered in milk chocolate', 'Have a break, have a KitKat', 'Pack of 6 for sharing', 'Perfect snack break'] },
  { name: 'Toblerone Swiss Milk Chocolate (100g)', category: 'Chocolates', price: 280, offerPrice: 245, image: [u('1526081715791-7c538f86060e')], description: ['Swiss chocolate with honey and almond nougat', 'Iconic triangular bar', 'Smooth, rich premium chocolate', 'Great gifting option'] },
  { name: 'Ferrero Rocher (16 pcs)', category: 'Chocolates', price: 650, offerPrice: 580, image: [u('1566565286951-f81c7ba5619d')], description: ['Whole roasted hazelnut in creamy filling', 'Crispy wafer, coated in milk chocolate', 'Premium gift box of 16 pieces', 'The gold standard of gifting chocolates'] },
  { name: 'Lindt 70% Dark Chocolate (100g)', category: 'Chocolates', price: 380, offerPrice: 330, image: [u('1599599810769-bcde5a160d32')], description: ['Premium Swiss dark chocolate', '70% cocoa – intense, smooth taste', 'Rich in antioxidants', "Connoisseur's choice"] },
  { name: 'Cadbury 5 Star (6-pack)', category: 'Chocolates', price: 120, offerPrice: 105, image: [u('1627647227768-705244233b56')], description: ['Chewy caramel and nougat chocolate bar', 'Soft, chewy and indulgent', 'Classic Indian chocolate since 1969', 'Pack of 6 for the family'] },
  { name: 'Snickers (4-pack)', category: 'Chocolates', price: 200, offerPrice: 175, image: [u('1587271644048-2fbb187de8d8')], description: ['Peanuts, caramel and nougat in milk chocolate', 'High energy, filling chocolate bar', 'Hungry? Grab a Snickers', 'Pack of 4'] },
  { name: 'Amul Dark Chocolate (150g)', category: 'Chocolates', price: 130, offerPrice: 115, image: [u('1574183878891-e08ec44abc37')], description: ['55% cocoa Amul dark chocolate', 'Rich, bittersweet flavour', 'Great for baking and eating', 'Made in India with quality cocoa'] },

  // ── SPICES (8) ──────────────────────────────────────────────────────────────
  { name: 'MDH Garam Masala (100g)', category: 'Spices', price: 80, offerPrice: 70, image: [u('1581600140682-d4e68c8cde32')], description: ['Authentic whole spice garam masala blend', 'Aromatic and flavourful', 'Essential finishing spice for curries', 'MDH – Asli Masale Sach Sach'] },
  { name: 'Everest Rajma Masala (100g)', category: 'Spices', price: 75, offerPrice: 65, image: [u('1592457711340-2412dc07b733')], description: ['Specially crafted for Rajma curry', 'Perfect spice balance', 'Easy to use – just add to cooked beans', 'No artificial colours'] },
  { name: 'MDH Chana Masala (100g)', category: 'Spices', price: 75, offerPrice: 65, image: [u('1547332226-395d746d139a')], description: ['Classic spice blend for chana', 'Tangy, bold and aromatic', 'Works for chole and pindi chana', 'Trusted recipe since 1919'] },
  { name: 'Organic Turmeric Powder (250g)', category: 'Spices', price: 90, offerPrice: 78, image: [u('1596040033229-a9821ebd058d')], description: ['Pure organic haldi powder', 'High curcumin content', 'Anti-inflammatory and antioxidant', 'Essential in every Indian kitchen'] },
  { name: 'Red Chilli Powder (250g)', category: 'Spices', price: 85, offerPrice: 72, image: [u('1606914469633-bd39206ea739')], description: ['Bright red, hot chilli powder', 'Adds heat and colour to dishes', 'Dried Kashmiri and Byadgi blend', 'No artificial colour added'] },
  { name: 'Coriander Powder (250g)', category: 'Spices', price: 70, offerPrice: 60, image: [u('1509358271058-acd22cc93898')], description: ['Finely ground dhania powder', 'Mild, citrusy base spice', 'Freshly ground for maximum aroma', 'Essential in curries and marinades'] },
  { name: 'Cumin Seeds / Jeera (100g)', category: 'Spices', price: 65, offerPrice: 55, image: [u('1589536677029-c0aa1808fba6')], description: ['Whole cumin seeds – earthy aroma', 'Use for tadka and seasoning', 'Aids digestion', 'Premium quality, clean and sorted'] },
  { name: 'Black Pepper Powder (100g)', category: 'Spices', price: 120, offerPrice: 105, image: [u('1591272216626-b09e38519371')], description: ['Freshly ground black pepper', 'Bold, pungent flavour', 'Great for marinades and finishing dishes', 'Natural source of piperine'] },

  // ── BISCUITS & COOKIES (10) ─────────────────────────────────────────────────
  { name: 'Parle-G Glucose Biscuits (800g)', category: 'Biscuits & Cookies', price: 85, offerPrice: 75, image: [u('1600454252672-d87dc589afdf')], description: ["India's most popular biscuit", 'Sweet, crispy glucose biscuit', 'Great with chai', "World's largest selling biscuit brand"] },
  { name: 'Britannia Good Day Cashew (3-pack)', category: 'Biscuits & Cookies', price: 90, offerPrice: 80, image: [u('1590400926865-1c70a2586bb5')], description: ['Buttery biscuits with real cashew bits', 'Crunchy with rich butter flavour', 'Perfect tea-time biscuit', 'Pack of 3 family packs'] },
  { name: 'Oreo Original (5-pack)', category: 'Biscuits & Cookies', price: 120, offerPrice: 105, image: [u('1621353354739-1420ff28ead9')], description: ['Chocolate sandwich cookies with cream filling', 'Twist, lick and dunk tradition', 'Original vanilla cream filling', 'Pack of 5 for the family'] },
  { name: 'Digestive Marie Biscuits (500g)', category: 'Biscuits & Cookies', price: 110, offerPrice: 95, image: [u('1586714932157-5853aed2e64b')], description: ['Classic Marie digestive biscuits', 'Light, thin, slightly sweet', 'Good with tea and coffee', 'Traditional breakfast biscuit'] },
  { name: 'Hide & Seek Chocolate Chip (250g)', category: 'Biscuits & Cookies', price: 75, offerPrice: 65, image: [u('1486893732792-ab0085cb2d43')], description: ['Buttery cookies with chocolate chips', 'Crispy with melt-in-mouth choco bits', 'Premium biscuit by Parle', 'Great for snacking anytime'] },
  { name: 'Bourbon Chocolate Biscuits (250g)', category: 'Biscuits & Cookies', price: 65, offerPrice: 55, image: [u('1612117568851-c6f49f8f0e87')], description: ['Dark chocolate biscuit sandwich', 'Creamy chocolate filling inside', 'Rich cocoa flavour', 'Classic Britannia favourite'] },
  { name: 'Krackjack Sweet & Salty (400g)', category: 'Biscuits & Cookies', price: 80, offerPrice: 70, image: [u('1558961363-fa8fdf82db35')], description: ['Unique sweet and salty cracker biscuit', 'Addictive flavour combination', 'Light and crispy texture', 'Great for guilt-free snacking'] },
  { name: "McVitie's Digestive Biscuits (400g)", category: 'Biscuits & Cookies', price: 190, offerPrice: 165, image: [u('1576717585968-8ea8166b89b8')], description: ['Wholemeal wheat digestive biscuits', 'High in fibre, nutty flavour', 'British classic since 1892', 'Great plain or with cheese'] },
  { name: 'Chocolate Chip Cookies (200g)', category: 'Biscuits & Cookies', price: 150, offerPrice: 130, image: [u('1613703154528-fa47dd7ffcfd')], description: ['Freshly baked chocolate chip cookies', 'Chewy centres, crispy edges', 'Loaded with real chocolate chips', 'Baked without artificial preservatives'] },
  { name: 'Sunfeast Dark Fantasy Choco Fills (300g)', category: 'Biscuits & Cookies', price: 130, offerPrice: 115, image: [u('1626025645971-ad4780528ff5')], description: ['Cookie with flowing chocolate centre', 'Bite into pure chocolate indulgence', 'Crispy outside, gooey inside', 'Premium ITC biscuit'] },
];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGODB_URI, { dbName: 'greencart' });
    console.log('Connected to MongoDB');
    await mongoose.connection.collection('products').deleteMany({});
    console.log('Cleared existing products');
    await Product.insertMany(products);
    console.log(`\nSeeded ${products.length} products successfully!`);
    const counts = {};
    products.forEach(p => { counts[p.category] = (counts[p.category] || 0) + 1; });
    Object.entries(counts).forEach(([cat, count]) => console.log(`  ${cat}: ${count}`));
  } catch (err) {
    console.error('Seed failed:', err.message);
  } finally {
    await mongoose.disconnect();
    console.log('\nDone.');
  }
}

seed();
