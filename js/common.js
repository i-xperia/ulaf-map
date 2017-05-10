AmCharts.makeChart( "mapdiv", {
  /**
   * this tells amCharts it's a map
   */
  "type": "map",

  /**
   * create data provider object
   * map property is usually the same as the name of the map file.
   * getAreasFromMap indicates that amMap should read all the areas available
   * in the map data and treat them as they are included in your data provider.
   * in case you don't set it to true, all the areas except listed in data
   * provider will be treated as unlisted.
   */
  "dataProvider": {
    "map": "ukraineLow",
    "getAreasFromMap": true,
    "showDescriptionOnHover" : true,
    "images": [
      {
        "type": "circle",
        "label": "Lviv",
        "latitude": 49.83,
        "longitude": 24,
        "labelColor": "#cc0000",
        "labelRollOverColor": "#000000",
        "title": "Lviv",
        "description": "Lviv Lions"
      },
      {
        "type": "circle",
        "label": "Odessa",
        "latitude": 46.29,
        "longitude": 30.43,
        "labelColor": "#cc0000",
        "labelRollOverColor": "#000000",
        "title": "Odessa",
        "description": "Odessa Pirates"
      },
      {
        "type": "circle",
        "label": "Vinnytsia",
        "latitude": 49.14,
        "longitude": 28.28,
        "labelColor": "#cc0000",
        "labelRollOverColor": "#000000",
        "title": "Vinnytsia",
        "description": "Vinnytsia Wolves"
      },
      {
        "type": "circle",
        "label": "Kyiv",
        "latitude": 50.4,
        "longitude": 30.61,
        "labelColor": "#cc0000",
        "labelRollOverColor": "#000000",
        "title": "Kyiv",
        "description": "Kyiv Bandits <br> Kyiv Slavs <br> Kyiv Patriots <br> Kyiv Rebels <br> Kyiv Jokers <br> Kyiv Bulldogs"

      },
       {
        "type": "circle",
        "label": "Uzhhorod",
        "latitude": 48.37,
        "longitude": 22.17,
        "labelColor": "#cc0000",
        "labelRollOverColor": "#000000",
        "title": "Uzhhorod",
        "description": "Uzhhorod Lumberjacks"

      },
      {
        "type": "circle",
        "label": "Kharkiv",
        "latitude": 50,
        "longitude": 36.13,
        "labelColor": "#cc0000",
        "labelRollOverColor": "#000000",
        "title": "Kharkiv",
        "description": "Kharkiv Atlantes <br> Kharkiv Tigers"

      },
      {
        "type": "circle",
        "label": "Kamianets-Podilskyi",
        "latitude": 48.71,
        "longitude": 26.35,
        "labelColor": "#cc0000",
        "labelRollOverColor": "#000000",
        "title": "Kamianets-Podilskyi",
        "description": "Titans Kamianets-Podilskiy "

      },
      {
        "type": "circle",
        "label": "Mariupol",
        "latitude": 47.05,
        "longitude": 37.32,
        "labelColor": "#cc0000",
        "labelRollOverColor": "#000000",
        "title": "Mariupol",
        "description": "Azovsk Dolphins"

      },
      {
        "type": "circle",
        "label": "Mykolaiv",
        "latitude": 46.7,
        "longitude": 32,
        "labelColor": "#cc0000",
        "labelRollOverColor": "#000000",
        "title": "Mykolaiv",
        "description": "Vikings Mykolaiv"

      },
       {
        "type": "circle",
        "label": "Kherson",
        "latitude": 46.5,
        "longitude": 32.35,
        "labelColor": "#cc0000",
        "labelRollOverColor": "#000000",
        "title": "Kherson",
        "description": "Sharks Kherson"

      },
      {
        "type": "circle",
        "label": "Yuzhne",
        "latitude": 46.5,
        "longitude": 30.7,
        "labelColor": "#cc0000",
        "labelRollOverColor": "#000000",
        "title": "Yuzhne",
        "description": "Gepards Yuzhne"

      },
      {
        "type": "circle",
        "label": "Dnipro",
        "latitude": 48.27,
        "longitude": 34.59,
        "labelColor": "#cc0000",
        "labelRollOverColor": "#000000",
        "title": "Dnipro",
        "description": "Rockets Dnipro"

      },
      {
        "type": "circle",
        "label": "Rivne",
        "latitude": 50.47,
        "longitude": 26.15,
        "labelColor": "#cc0000",
        "labelRollOverColor": "#000000",
        "title": "Rivne",
        "description": "Monarchs Rivne"

      },
      {
        "type": "circle",
        "label": "Khmelnytskyi",
        "latitude": 49.35,
        "longitude": 27,
        "labelColor": "#cc0000",
        "labelRollOverColor": "#000000",
        "title": "Khmelnytskyi",
        "description": "Gladiators Khmelnytskyi"

      },
      {
        "type": "circle",
        "label": "Zdolbuniv",
        "latitude": 50.30,
        "longitude": 26.15,
        "labelColor": "#cc0000",
        "labelRollOverColor": "#000000",
        "title": "Zdolbuniv",
        "description": "Eagles Zdolbuniv"

      }
    ]
  },

  /**
   * create areas settings
   * autoZoom set to true means that the map will zoom-in when clicked on the area
   * selectedColor indicates color of the clicked area.
   */
  "areasSettings": {
    "autoZoom": false,
    "selectedColor": "#CC0000",
    "color" : "#999999",
    "accessibleLabel" : ""
  },
  "zoomControl": {
    "zoomControlEnabled": false,
    "maxZoomLevel": 1
  },
  /**
   * let's say we want a small map to be displayed, so let's create it
   */
  "smallMap": {}
} );