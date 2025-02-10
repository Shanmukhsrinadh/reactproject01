const products = [
    { id: 1, title: "Casual Shirt", category: "men", subcategory: "shirts", price: 25 },
    { id: 2, title: "Formal Pants", category: "men", subcategory: "pants", price: 40 },
    { id: 3, title: "Running Shoes", category: "men", subcategory: "footwear", price: 60 },
    { id: 4, title: "Smartwatch", category: "men", subcategory: "wearables", price: 120 },
    { id: 5, title: "Jeans Shirt", category: "men", subcategory: "shirts", price: 30 },
    { id: 6, title: "Casual Top", category: "women", subcategory: "tops", price: 20 },
    { id: 7, title: "Evening Dress", category: "women", subcategory: "dresses", price: 50 },
    { id: 8, title: "Heels", category: "women", subcategory: "footwear", price: 70 },
    { id: 9, title: "Smart Ring", category: "women", subcategory: "wearables", price: 90 },
    { id: 10, title: "Long Dress", category: "women", subcategory: "dresses", price: 60 },
    { id: 11, title: "Kid's Dress", category: "kids", subcategory: "dresses", price: 30 },
    { id: 12, title: "Toy Car", category: "kids", subcategory: "toys", price: 15 },
    { id: 13, title: "Sneakers", category: "kids", subcategory: "footwear", price: 35 },
    { id: 14, title: "Smart Band", category: "kids", subcategory: "wearables", price: 45 },
    { id: 15, title: "Stuffed Bear", category: "kids", subcategory: "toys", price: 25 },
    {
      id: 16,
      title: "Casual Cotton Shirt",
      price: 25.99,
      currency: "USD",
      category: "Casual",
      brand: "UrbanStyle",
      thumbnail: 'https://cdn.pixabay.com/photo/2024/12/28/03/20/parrot-9295172_640.jpg',
    },
    {
      id: 17,
      title: "Slim Fit Denim Shirt",
      price: 29.99,
      currency: "USD",
      category: "Denim",
      brand: "DenimWear",
      thumbnail: "images/slim_fit_denim_shirt.jpg"
    },
    {
      id: 18,
      title: "Formal White Shirt",
      price: 34.99,
      currency: "USD",
      category: "Formal",
      brand: "ElegantFormals",
      thumbnail: "images/formal_white_shirt.jpg"
    },
    {
      id: 19,
      title: "Linen Summer Shirt",
      price: 27.99,
      currency: "USD",
      category: "Linen",
      brand: "BreezyWear",
      thumbnail: "images/linen_summer_shirt.jpg"
    },
    {
      id: 20,
      title: "Flannel Checked Shirt",
      price: 30.99,
      currency: "USD",
      category: "Casual",
      brand: "CozyStyle",
      thumbnail: "images/flannel_checked_shirt.jpg"
    },
    {
      id: 21,
      title: "Oxford Button Down Shirt",
      price: 32.99,
      currency: "USD",
      category: "Formal",
      brand: "ClassicWear",
      thumbnail: "images/oxford_button_down_shirt.jpg"
    },
    {
      id: 22,
      title: "Hawaiian Printed Shirt",
      price: 28.99,
      currency: "USD",
      category: "Casual",
      brand: "TropicalVibes",
      thumbnail: "images/hawaiian_printed_shirt.jpg"
    },
    {
      id: 23,
      title: "Black Party Wear Shirt",
      price: 39.99,
      currency: "USD",
      category: "Party Wear",
      brand: "NightOut",
      thumbnail: "images/black_party_wear_shirt.jpg"
    },
    {
      id: 24,
      title: "Chambray Blue Shirt",
      price: 31.99,
      currency: "USD",
      category: "Casual",
      brand: "SoftWear",
      thumbnail: "images/chambray_blue_shirt.jpg"
    },
    {
      id: 25,
      title: "Striped Office Shirt",
      price: 33.99,
      currency: "USD",
      category: "Formal",
      brand: "OfficeStyle",
      thumbnail: "images/striped_office_shirt.jpg"
    },
    {
      id: 26,
      title: "V-Neck Polo Shirt",
      price: 22.99,
      currency: "USD",
      category: "Casual",
      brand: "PoloTrend",
      thumbnail: "images/v_neck_polo_shirt.jpg"
    },
    {
      id: 27,
      title: "Tartan Plaid Shirt",
      price: 29.49,
      currency: "USD",
      category: "Casual",
      brand: "PlaidWear",
      thumbnail: "images/tartan_plaid_shirt.jpg"
    },
    {
      id: 28,
      title: "Navy Blue Twill Shirt",
      price: 35.99,
      currency: "USD",
      category: "Formal",
      brand: "EliteFormals",
      thumbnail: "images/navy_blue_twill_shirt.jpg"
    },
    {
      id: 29,
      title: "Beige Short Sleeve Shirt",
      price: 26.49,
      currency: "USD",
      category: "Casual",
      brand: "ComfyWear",
      thumbnail: "images/beige_short_sleeve_shirt.jpg"
    },
    {
      id: 30,
      title: "Dark Green Corduroy Shirt",
      price: 37.99,
      currency: "USD",
      category: "Casual",
      brand: "RusticStyle",
      thumbnail: "images/dark_green_corduroy_shirt.jpg"
    },
    {
      id: 31,
      title: "Grey Utility Shirt",
      price: 31.49,
      currency: "USD",
      category: "Casual",
      brand: "UtilityWear",
      thumbnail: "images/grey_utility_shirt.jpg"
    },
    {
      id: 32,
      title: "Sky Blue Mandarin Collar Shirt",
      price: 32.99,
      currency: "USD",
      category: "Casual",
      brand: "MinimalTrend",
      thumbnail: "images/sky_blue_mandarin_shirt.jpg"
    },
    {
      id: 33,
      title: "Checked Business Shirt",
      price: 36.99,
      currency: "USD",
      category: "Formal",
      brand: "BusinessClass",
      thumbnail: "images/checked_business_shirt.jpg"
    },
    {
      id: 34,
      title: "Red and Black Flannel Shirt",
      price: 30.49,
      currency: "USD",
      category: "Casual",
      brand: "CozyWear",
      thumbnail: "images/red_black_flannel_shirt.jpg"
    },
    {
      id: 35,
      title: "Classic Black Dress Shirt",
      price: 41.99,
      currency: "USD",
      category: "Formal",
      brand: "EliteDressing",
      thumbnail: "images/classic_black_dress_shirt.jpg"
    }
  ];
  
  export default products;
  