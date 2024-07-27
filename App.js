import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          src="https://www.logodee.com/wp-content/uploads/2022/07/little-cheers-pizza-food-company-logo-design.jpg"
          alt="image_logo"
          className="logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact US</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const resList =   [
    
  {
      "card": {
          "card": {
              "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
              "layout": {
                  "columns": 4
              },
              "id": "restaurant_grid_listing",
              "gridElements": {
                  "infoWithStyle": {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.FavouriteRestaurantInfoWithStyle",
                      "restaurants": [
                          {
                              "info": {
                                  "id": "393840",
                                  "name": "Chinese Wok",
                                  "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
                                  "locality": "Chikka Lakshmaiah Layout",
                                  "areaName": "Adugodi",
                                  "costForTwo": "₹250 for two",
                                  "cuisines": [
                                      "Chinese",
                                      "Asian",
                                      "Tibetan",
                                      "Desserts"
                                  ],
                                  "avgRating": 4.2,
                                  "parentId": "61955",
                                  "avgRatingString": "4.2",
                                  "totalRatingsString": "1K+",
                                  "sla": {
                                      "deliveryTime": 31,
                                      "lastMileTravel": 2.5,
                                      "serviceability": "SERVICEABLE",
                                      "slaString": "30-35 mins",
                                      "lastMileTravelString": "2.5 km",
                                      "iconType": "ICON_TYPE_EMPTY"
                                  },
                                  "availability": {
                                      "nextCloseTime": "2024-07-28 02:00:00",
                                      "opened": true
                                  },
                                  "badges": {},
                                  "isOpen": true,
                                  "type": "F",
                                  "badgesV2": {
                                      "entityBadges": {
                                          "imageBased": {},
                                          "textBased": {},
                                          "textExtendedBadges": {}
                                      }
                                  },
                                  "aggregatedDiscountInfoV3": {
                                      "header": "ITEMS",
                                      "subHeader": "AT ₹199"
                                  },
                                  "orderabilityCommunication": {
                                      "title": {},
                                      "subTitle": {},
                                      "message": {},
                                      "customIcon": {}
                                  },
                                  "differentiatedUi": {
                                      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                      "differentiatedUiMediaDetails": {
                                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                          "lottie": {},
                                          "video": {}
                                      }
                                  },
                                  "reviewsSummary": {},
                                  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                  "restaurantOfferPresentationInfo": {},
                                  "externalRatings": {
                                      "aggregatedRating": {
                                          "rating": "--"
                                      }
                                  },
                                  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                              },
                              "analytics": {
                                  "context": "seo-data-30c36ea2-f3c7-4cf0-b08b-0dc95b30cc1b"
                              },
                              "cta": {
                                  "link": "https://www.swiggy.com/restaurants/chinese-wok-chikka-lakshmaiah-layout-adugodi-bangalore-393840",
                                  "text": "RESTAURANT_MENU",
                                  "type": "WEBLINK"
                              },
                              "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                          },
                          {
                              "info": {
                                  "id": "5934",
                                  "name": "Burger King",
                                  "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/7f76a072-c1bc-4d74-ac56-33e0eea20c1e_5934.JPG",
                                  "locality": "Koramangala",
                                  "areaName": "Koramangala",
                                  "costForTwo": "₹350 for two",
                                  "cuisines": [
                                      "Burgers",
                                      "American"
                                  ],
                                  "avgRating": 4.3,
                                  "parentId": "166",
                                  "avgRatingString": "4.3",
                                  "totalRatingsString": "10K+",
                                  "sla": {
                                      "deliveryTime": 22,
                                      "lastMileTravel": 1.4,
                                      "serviceability": "SERVICEABLE",
                                      "slaString": "20-25 mins",
                                      "lastMileTravelString": "1.4 km",
                                      "iconType": "ICON_TYPE_EMPTY"
                                  },
                                  "availability": {
                                      "nextCloseTime": "2024-07-28 06:55:00",
                                      "opened": true
                                  },
                                  "badges": {
                                      "imageBadges": [
                                          {
                                              "imageId": "Rxawards/_CATEGORY-Burger.png",
                                              "description": "Delivery!"
                                          }
                                      ]
                                  },
                                  "isOpen": true,
                                  "type": "F",
                                  "badgesV2": {
                                      "entityBadges": {
                                          "imageBased": {
                                              "badgeObject": [
                                                  {
                                                      "attributes": {
                                                          "description": "Delivery!",
                                                          "imageId": "Rxawards/_CATEGORY-Burger.png"
                                                      }
                                                  }
                                              ]
                                          },
                                          "textBased": {},
                                          "textExtendedBadges": {}
                                      }
                                  },
                                  "aggregatedDiscountInfoV3": {
                                      "header": "60% OFF",
                                      "subHeader": "UPTO ₹120"
                                  },
                                  "orderabilityCommunication": {
                                      "title": {},
                                      "subTitle": {},
                                      "message": {},
                                      "customIcon": {}
                                  },
                                  "differentiatedUi": {
                                      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                      "differentiatedUiMediaDetails": {
                                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                          "lottie": {},
                                          "video": {}
                                      }
                                  },
                                  "reviewsSummary": {},
                                  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                  "restaurantOfferPresentationInfo": {},
                                  "externalRatings": {
                                      "aggregatedRating": {
                                          "rating": "4.2",
                                          "ratingCount": "1K+"
                                      },
                                      "source": "GOOGLE",
                                      "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                                  },
                                  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                              },
                              "analytics": {
                                  "context": "seo-data-30c36ea2-f3c7-4cf0-b08b-0dc95b30cc1b"
                              },
                              "cta": {
                                  "link": "https://www.swiggy.com/restaurants/burger-king-koramangala-bangalore-5934",
                                  "text": "RESTAURANT_MENU",
                                  "type": "WEBLINK"
                              },
                              "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                          },
                          {
                              "info": {
                                  "id": "60035",
                                  "name": "Havmor Havfunn Ice Cream",
                                  "cloudinaryImageId": "49845b494b1e637209b7bd1c7ca184ad",
                                  "locality": "Jayanagar",
                                  "areaName": "Jayanagar",
                                  "costForTwo": "₹400 for two",
                                  "cuisines": [
                                      "Ice Cream",
                                      "Ice Cream Cakes",
                                      "Desserts",
                                      "Beverages"
                                  ],
                                  "avgRating": 4.3,
                                  "parentId": "94570",
                                  "avgRatingString": "4.3",
                                  "totalRatingsString": "1K+",
                                  "sla": {
                                      "deliveryTime": 37,
                                      "lastMileTravel": 5.5,
                                      "serviceability": "SERVICEABLE",
                                      "slaString": "35-40 mins",
                                      "lastMileTravelString": "5.5 km",
                                      "iconType": "ICON_TYPE_EMPTY"
                                  },
                                  "availability": {
                                      "nextCloseTime": "2024-07-28 05:00:00",
                                      "opened": true
                                  },
                                  "badges": {},
                                  "isOpen": true,
                                  "type": "F",
                                  "badgesV2": {
                                      "entityBadges": {
                                          "imageBased": {},
                                          "textBased": {},
                                          "textExtendedBadges": {}
                                      }
                                  },
                                  "aggregatedDiscountInfoV3": {
                                      "header": "50% OFF",
                                      "subHeader": "UPTO ₹100"
                                  },
                                  "orderabilityCommunication": {
                                      "title": {},
                                      "subTitle": {},
                                      "message": {},
                                      "customIcon": {}
                                  },
                                  "differentiatedUi": {
                                      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                      "differentiatedUiMediaDetails": {
                                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                          "lottie": {},
                                          "video": {}
                                      }
                                  },
                                  "reviewsSummary": {},
                                  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                  "restaurantOfferPresentationInfo": {},
                                  "externalRatings": {
                                      "aggregatedRating": {
                                          "rating": "4.0",
                                          "ratingCount": "500+"
                                      },
                                      "source": "GOOGLE",
                                      "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                                  },
                                  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                              },
                              "analytics": {
                                  "context": "seo-data-30c36ea2-f3c7-4cf0-b08b-0dc95b30cc1b"
                              },
                              "cta": {
                                  "link": "https://www.swiggy.com/restaurants/havmor-havfunn-ice-cream-jayanagar-bangalore-60035",
                                  "text": "RESTAURANT_MENU",
                                  "type": "WEBLINK"
                              },
                              "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                          },
                          {
                              "info": {
                                  "id": "671928",
                                  "name": "KFC",
                                  "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/510f05e2-a9e7-49fe-8ab3-ea8c2eb8a5ae_671928.JPG",
                                  "locality": "7th Block",
                                  "areaName": "Koramangla",
                                  "costForTwo": "₹400 for two",
                                  "cuisines": [
                                      "Burgers",
                                      "Fast Food",
                                      "Rolls & Wraps"
                                  ],
                                  "avgRating": 4.3,
                                  "parentId": "547",
                                  "avgRatingString": "4.3",
                                  "totalRatingsString": "1K+",
                                  "sla": {
                                      "deliveryTime": 19,
                                      "lastMileTravel": 1.2,
                                      "serviceability": "SERVICEABLE",
                                      "slaString": "15-20 mins",
                                      "lastMileTravelString": "1.2 km",
                                      "iconType": "ICON_TYPE_EMPTY"
                                  },
                                  "availability": {
                                      "nextCloseTime": "2024-07-28 02:00:00",
                                      "opened": true
                                  },
                                  "badges": {},
                                  "isOpen": true,
                                  "aggregatedDiscountInfoV2": {},
                                  "type": "F",
                                  "badgesV2": {
                                      "entityBadges": {
                                          "imageBased": {},
                                          "textBased": {},
                                          "textExtendedBadges": {}
                                      }
                                  },
                                  "orderabilityCommunication": {
                                      "title": {},
                                      "subTitle": {},
                                      "message": {},
                                      "customIcon": {}
                                  },
                                  "differentiatedUi": {
                                      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                      "differentiatedUiMediaDetails": {
                                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                          "lottie": {},
                                          "video": {}
                                      }
                                  },
                                  "reviewsSummary": {},
                                  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                  "restaurantOfferPresentationInfo": {},
                                  "externalRatings": {
                                      "aggregatedRating": {
                                          "rating": "--"
                                      }
                                  },
                                  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                              },
                              "analytics": {
                                  "context": "seo-data-30c36ea2-f3c7-4cf0-b08b-0dc95b30cc1b"
                              },
                              "cta": {
                                  "link": "https://www.swiggy.com/restaurants/kfc-7th-block-koramangla-bangalore-671928",
                                  "text": "RESTAURANT_MENU",
                                  "type": "WEBLINK"
                              },
                              "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                          },
                          {
                              "info": {
                                  "id": "23678",
                                  "name": "McDonald's",
                                  "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/1/1fe8039a-0a1a-41f8-8db1-f3521ba8fada_23678.jpg",
                                  "locality": "5th Block",
                                  "areaName": "Koramangala",
                                  "costForTwo": "₹400 for two",
                                  "cuisines": [
                                      "Burgers",
                                      "Beverages",
                                      "Cafe",
                                      "Desserts"
                                  ],
                                  "avgRating": 4.5,
                                  "parentId": "630",
                                  "avgRatingString": "4.5",
                                  "totalRatingsString": "10K+",
                                  "sla": {
                                      "deliveryTime": 17,
                                      "lastMileTravel": 1.3,
                                      "serviceability": "SERVICEABLE",
                                      "slaString": "15-20 mins",
                                      "lastMileTravelString": "1.3 km",
                                      "iconType": "ICON_TYPE_EMPTY"
                                  },
                                  "availability": {
                                      "nextCloseTime": "2024-07-28 04:30:00",
                                      "opened": true
                                  },
                                  "badges": {
                                      "imageBadges": [
                                          {
                                              "imageId": "Rxawards/_CATEGORY-Burger.png",
                                              "description": "Delivery!"
                                          }
                                      ]
                                  },
                                  "isOpen": true,
                                  "type": "F",
                                  "badgesV2": {
                                      "entityBadges": {
                                          "imageBased": {
                                              "badgeObject": [
                                                  {
                                                      "attributes": {
                                                          "description": "Delivery!",
                                                          "imageId": "Rxawards/_CATEGORY-Burger.png"
                                                      }
                                                  }
                                              ]
                                          },
                                          "textBased": {},
                                          "textExtendedBadges": {}
                                      }
                                  },
                                  "aggregatedDiscountInfoV3": {
                                      "header": "20% OFF",
                                      "subHeader": "UPTO ₹50"
                                  },
                                  "orderabilityCommunication": {
                                      "title": {},
                                      "subTitle": {},
                                      "message": {},
                                      "customIcon": {}
                                  },
                                  "differentiatedUi": {
                                      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                      "differentiatedUiMediaDetails": {
                                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                          "lottie": {},
                                          "video": {}
                                      }
                                  },
                                  "reviewsSummary": {},
                                  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                  "restaurantOfferPresentationInfo": {},
                                  "externalRatings": {
                                      "aggregatedRating": {
                                          "rating": "--"
                                      }
                                  },
                                  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                              },
                              "analytics": {
                                  "context": "seo-data-30c36ea2-f3c7-4cf0-b08b-0dc95b30cc1b"
                              },
                              "cta": {
                                  "link": "https://www.swiggy.com/restaurants/mcdonalds-5th-block-koramangala-bangalore-23678",
                                  "text": "RESTAURANT_MENU",
                                  "type": "WEBLINK"
                              },
                              "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                          },
                          {
                              "info": {
                                  "id": "74444",
                                  "name": "Samosa Party",
                                  "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/9/3de49675-5a5a-470e-a30b-0eef986793d0_74444.jpg",
                                  "locality": "Koramangala",
                                  "areaName": "Koramangala",
                                  "costForTwo": "₹100 for two",
                                  "cuisines": [
                                      "Fast Food",
                                      "Snacks",
                                      "Beverages",
                                      "Chaat",
                                      "North Indian",
                                      "Street Food",
                                      "Sweets",
                                      "Desserts",
                                      "Punjabi",
                                      "Bakery"
                                  ],
                                  "avgRating": 4.4,
                                  "parentId": "6364",
                                  "avgRatingString": "4.4",
                                  "totalRatingsString": "10K+",
                                  "sla": {
                                      "deliveryTime": 25,
                                      "lastMileTravel": 2.3,
                                      "serviceability": "SERVICEABLE",
                                      "slaString": "25-30 mins",
                                      "lastMileTravelString": "2.3 km",
                                      "iconType": "ICON_TYPE_EMPTY"
                                  },
                                  "availability": {
                                      "nextCloseTime": "2024-08-03 00:00:00",
                                      "opened": true
                                  },
                                  "badges": {
                                      "textExtendedBadges": [
                                          {
                                              "iconId": "guiltfree/GF_Logo_android_3x",
                                              "shortDescription": "options available",
                                              "fontColor": "#7E808C"
                                          }
                                      ]
                                  },
                                  "isOpen": true,
                                  "type": "F",
                                  "badgesV2": {
                                      "entityBadges": {
                                          "imageBased": {},
                                          "textBased": {},
                                          "textExtendedBadges": {
                                              "badgeObject": [
                                                  {
                                                      "attributes": {
                                                          "description": "",
                                                          "fontColor": "#7E808C",
                                                          "iconId": "guiltfree/GF_Logo_android_3x",
                                                          "shortDescription": "options available"
                                                      }
                                                  }
                                              ]
                                          }
                                      }
                                  },
                                  "aggregatedDiscountInfoV3": {
                                      "header": "ITEMS",
                                      "subHeader": "AT ₹99"
                                  },
                                  "orderabilityCommunication": {
                                      "title": {},
                                      "subTitle": {},
                                      "message": {},
                                      "customIcon": {}
                                  },
                                  "differentiatedUi": {
                                      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                      "differentiatedUiMediaDetails": {
                                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                          "lottie": {},
                                          "video": {}
                                      }
                                  },
                                  "reviewsSummary": {},
                                  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                  "restaurantOfferPresentationInfo": {},
                                  "externalRatings": {
                                      "aggregatedRating": {
                                          "rating": "3.8",
                                          "ratingCount": "100+"
                                      },
                                      "source": "GOOGLE",
                                      "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                                  },
                                  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                              },
                              "analytics": {
                                  "context": "seo-data-30c36ea2-f3c7-4cf0-b08b-0dc95b30cc1b"
                              },
                              "cta": {
                                  "link": "https://www.swiggy.com/restaurants/samosa-party-koramangala-bangalore-74444",
                                  "text": "RESTAURANT_MENU",
                                  "type": "WEBLINK"
                              },
                              "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                          },
                          {
                              "info": {
                                  "id": "426776",
                                  "name": "Theobroma",
                                  "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/22/059c1c9b-6e04-475a-8aba-1cba2e61953f_426776.jpg",
                                  "locality": "7th Block",
                                  "areaName": "Koramangala",
                                  "costForTwo": "₹400 for two",
                                  "cuisines": [
                                      "Desserts",
                                      "Bakery",
                                      "Beverages"
                                  ],
                                  "avgRating": 4.7,
                                  "parentId": "1040",
                                  "avgRatingString": "4.7",
                                  "totalRatingsString": "5K+",
                                  "sla": {
                                      "deliveryTime": 22,
                                      "lastMileTravel": 2.4,
                                      "serviceability": "SERVICEABLE",
                                      "slaString": "20-25 mins",
                                      "lastMileTravelString": "2.4 km",
                                      "iconType": "ICON_TYPE_EMPTY"
                                  },
                                  "availability": {
                                      "nextCloseTime": "2024-07-27 23:00:00",
                                      "opened": true
                                  },
                                  "badges": {
                                      "imageBadges": [
                                          {
                                              "imageId": "Rxawards/_CATEGORY-Desserts.png",
                                              "description": "Delivery!"
                                          },
                                          {
                                              "imageId": "newg.png",
                                              "description": "Gourmet"
                                          }
                                      ]
                                  },
                                  "isOpen": true,
                                  "type": "F",
                                  "badgesV2": {
                                      "entityBadges": {
                                          "imageBased": {
                                              "badgeObject": [
                                                  {
                                                      "attributes": {
                                                          "description": "Delivery!",
                                                          "imageId": "Rxawards/_CATEGORY-Desserts.png"
                                                      }
                                                  },
                                                  {
                                                      "attributes": {
                                                          "description": "Gourmet",
                                                          "imageId": "newg.png"
                                                      }
                                                  }
                                              ]
                                          },
                                          "textBased": {},
                                          "textExtendedBadges": {}
                                      }
                                  },
                                  "aggregatedDiscountInfoV3": {
                                      "header": "15% OFF",
                                      "discountTag": "FLAT DEAL"
                                  },
                                  "orderabilityCommunication": {
                                      "title": {},
                                      "subTitle": {},
                                      "message": {},
                                      "customIcon": {}
                                  },
                                  "differentiatedUi": {
                                      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                      "differentiatedUiMediaDetails": {
                                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                          "lottie": {},
                                          "video": {}
                                      }
                                  },
                                  "reviewsSummary": {},
                                  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                  "restaurantOfferPresentationInfo": {},
                                  "externalRatings": {
                                      "aggregatedRating": {
                                          "rating": "--"
                                      }
                                  },
                                  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                              },
                              "analytics": {
                                  "context": "seo-data-30c36ea2-f3c7-4cf0-b08b-0dc95b30cc1b"
                              },
                              "cta": {
                                  "link": "https://www.swiggy.com/restaurants/theobroma-7th-block-koramangala-bangalore-426776",
                                  "text": "RESTAURANT_MENU",
                                  "type": "WEBLINK"
                              },
                              "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                          },
                          {
                              "info": {
                                  "id": "201224",
                                  "name": "Asha Tiffins",
                                  "cloudinaryImageId": "n15vckntsiboiod3gpco",
                                  "locality": "HSR Layout",
                                  "areaName": "HSR Layout",
                                  "costForTwo": "₹200 for two",
                                  "cuisines": [
                                      "South Indian",
                                      "Chinese",
                                      "Desserts",
                                      "Beverages",
                                      "North Indian"
                                  ],
                                  "avgRating": 4.5,
                                  "parentId": "236243",
                                  "avgRatingString": "4.5",
                                  "totalRatingsString": "10K+",
                                  "sla": {
                                      "deliveryTime": 28,
                                      "lastMileTravel": 4,
                                      "serviceability": "SERVICEABLE",
                                      "slaString": "25-30 mins",
                                      "lastMileTravelString": "4.0 km",
                                      "iconType": "ICON_TYPE_EMPTY"
                                  },
                                  "availability": {
                                      "nextCloseTime": "2024-07-27 22:30:00",
                                      "opened": true
                                  },
                                  "badges": {
                                      "imageBadges": [
                                          {
                                              "imageId": "v1695133679/badges/Pure_Veg111.png",
                                              "description": "pureveg"
                                          }
                                      ]
                                  },
                                  "isOpen": true,
                                  "type": "F",
                                  "badgesV2": {
                                      "entityBadges": {
                                          "imageBased": {
                                              "badgeObject": [
                                                  {
                                                      "attributes": {
                                                          "description": "pureveg",
                                                          "imageId": "v1695133679/badges/Pure_Veg111.png"
                                                      }
                                                  }
                                              ]
                                          },
                                          "textBased": {},
                                          "textExtendedBadges": {}
                                      }
                                  },
                                  "aggregatedDiscountInfoV3": {
                                      "header": "50% OFF",
                                      "subHeader": "UPTO ₹100"
                                  },
                                  "orderabilityCommunication": {
                                      "title": {},
                                      "subTitle": {},
                                      "message": {},
                                      "customIcon": {}
                                  },
                                  "differentiatedUi": {
                                      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                      "differentiatedUiMediaDetails": {
                                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                          "lottie": {},
                                          "video": {}
                                      }
                                  },
                                  "reviewsSummary": {},
                                  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                  "restaurantOfferPresentationInfo": {},
                                  "externalRatings": {
                                      "aggregatedRating": {
                                          "rating": "4.4",
                                          "ratingCount": "10K+"
                                      },
                                      "source": "GOOGLE",
                                      "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                                  },
                                  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                              },
                              "analytics": {
                                  "context": "seo-data-30c36ea2-f3c7-4cf0-b08b-0dc95b30cc1b"
                              },
                              "cta": {
                                  "link": "https://www.swiggy.com/restaurants/asha-tiffins-hsr-layout-bangalore-201224",
                                  "text": "RESTAURANT_MENU",
                                  "type": "WEBLINK"
                              },
                              "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                          }
                      ],
                      "theme": "SeoRestaurantListingGridWidget"
                  }
              }
          }
      }
  },

]
 console.log(resList)
const restaurants = resList[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

console.log(restaurants);

const RestarantCard = (props) => {

  const {name,cuisines,avgRating,costForTwo ,cloudinaryImageId } = props?.resData?.info




  return (
    <div className="res-card">
      <img
        src= { "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId
        }
        alt="res-logo"
        className="res-logo"
      />
      <h4 >{name}</h4>
      <h5 className=" text">{cuisines.join(',')}</h5>
      <h5>{avgRating}Stars</h5>
      <h5>{costForTwo} </h5>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
       

       {restaurants.map(res => <RestarantCard resData ={res}/>)}
        
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
