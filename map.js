          var map = L.map('map', {
              crs: L.CRS.Simple
          });
          var bounds = [[0,0], [740,498]];
          var image = L.imageOverlay("campusMap.png", bounds).addTo(map);
          map.fitBounds(bounds);


          let first_layer;
          const layer_1 = [first_layer];
          a = generateObject("object_1", 150, 150, "This is the contents",layer_1);
          b = generateObject("object_2", 160, 140, "This is the contents",layer_1);
          c = generateObject("object_3", 170, 130, "This is the contents",layer_1);
          d = generateObject("object_4", 180, 120, "This is the contents",layer_1);
          generateLayer(layer_1);
          addToLayer(a,layer_1);
          addToLayer(b,layer_1);
          addToLayer(c,layer_1);
          addToLayer(d,layer_1);


          let second_layer;
          const layer_2 = [second_layer];

          x = generateObject("object_5", 300, 300, "This is the CUSA",layer_2);
          y = generateObject("object_6", 350, 300, "This is the new contents",layer_2);
          generateLayer(layer_2);
          addToLayer(x, layer_2);
          addToLayer(y, layer_2);

          let third_layer;
          const layer_3 = [third_layer];

          x = generateObject("object_7", 400, 300, "This is the contents",layer_3);
          y = generateObject("object_8", 450, 300, "This is the new contents",layer_3);
          generateLayer(layer_3);
          addToLayer(x, layer_3);
          addToLayer(y, layer_3);

          let fourth_layer;
          const layer_4 = [fourth_layer];

          x = generateObject("object_9", 500, 300, "This is the contents",layer_4);
          y = generateObject("object_10", 550, 300, "This is the new contents",layer_4);
          generateLayer(layer_4);
          addToLayer(x, layer_4);
          addToLayer(y, layer_4);

          let fifth_layer;
          const layer_5 = [fifth_layer];

          x = generateObject("object_11", 600, 300, "This is the contents",layer_5);
          y = generateObject("object_12", 650, 300, "This is the new contents",layer_5);
          generateLayer(layer_5);
          addToLayer(x, layer_5);
          addToLayer(y, layer_5);

          function generateLayer(obj){
              obj[0] = L.layerGroup([]);
              obj[0].addTo(map);
              obj[1] = 0;
          }

          function generateObject(name, x, y, content,obj){
              name = L.marker([y,x]).bindPopup(content);
              return name;
          }

          function addToLayer(item,obj){
              item.addTo(obj[0]);
          }

          function addRemove(obj, ID){

              if (obj[1] === 1){
                  obj[0].addTo(map);
                  obj[1] = 0;
                  document.getElementById(ID).style.backgroundColor = "rgba(192,192,192,1)";
              }else{
                  obj[0].remove();
                  obj[1] = 1;
                  document.getElementById(ID).style.backgroundColor = "rgba(255,255,255,1)";
              }
          }