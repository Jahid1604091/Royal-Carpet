//----googlemap api---

 
    function initMap(){
      // Map options
      var options = {
        zoom:8,
        center:{lat:27.6648,lng:-81.5158}
      }

      // New map
      var map = new google.maps.Map(document.getElementById('map'), options);

      // Listen for click on map
      google.maps.event.addListener(map, 'click', function(event){
        // Add marker
        addMarker({coords:event.latLng});
      });

      
      // Add marker
      var marker = new google.maps.Marker({
        position:{lat:42.4668,lng:-70.9495},
        map:map,
        icon:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
      });

      var infoWindow = new google.maps.InfoWindow({
        content:'<h1>Lynn MA</h1>'
      });

      marker.addListener('click', function(){
        infoWindow.open(map, marker);
      });
      
      // Array of markers
      var markers = [
        {
          coords:{lat:27.6648,lng:-81.5158},
          iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
          content:'<h1>Lynn MA</h1>'
        },
        {
          coords:{lat:27.6648,lng:-81.5158},
          content:'<h1>Amesbury MA</h1>'
        },
        {
          coords:{lat:27.6648,lng:-81.5158}
        }
      ];

      // Loop through markers
      for(var i = 0;i < markers.length;i++){
        // Add marker
        addMarker(markers[i]);
      }

      // Add Marker Function
      function addMarker(props){
        var marker = new google.maps.Marker({
          position:props.coords,
          map:map,
          //icon:props.iconImage
        });

        // Check for customicon
        if(props.iconImage){
          // Set icon image
          marker.setIcon(props.iconImage);
        }

        // Check content
        if(props.content){
          var infoWindow = new google.maps.InfoWindow({
            content:props.content
          });

          marker.addListener('click', function(){
            infoWindow.open(map, marker);
          });
        }
      }
    }
 
 

// $('.slider').slick({
//   infinite: true,
//   slideToShow: 1,
//   slideToScroll: 1,
// });

var typed = new Typed('#typed', {
  strings: ['Royal Carpet Events', 'a Best Catering Company','Get New Experiences','Brings the Flavor of Royalty ','Make Your Events','More Memorable','& More Enjoyable'],
  typeSpeed: 50,
  backSpeed: 50,
  loop: true,
});

//document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
//  anchor.addEventListener('click', function (e) {
//    e.preventDefault();
//
//    document.querySelector(this.getAttribute('href')).scrollIntoView({
//      behavior: 'smooth',
//    });
//  });
//});

