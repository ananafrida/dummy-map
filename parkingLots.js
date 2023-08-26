import { PARKING, icons } from "./constants";

var markersmain = [];
export function parkingLots(map, markers){
    let modalContent = document.querySelector(".parking-modal-content");
    let closeModal = document.querySelector(".parking-close-modal");

      PARKING.forEach(({position, title, type, pic, description}, i) => {
        const marker = new google.maps.Marker({
        position: position,
        icon: icons[type].icon,
        });
        marker.addListener("click", () => {
          map.setZoom(17);
          map.setCenter(marker.getPosition());
          modalContent.classList.remove("hidden-modal");
          document.getElementById("parking-header").innerHTML = title;
          document.getElementById("parking-desc").innerHTML = description;
          document.getElementById("parking-img").src = pic;
        });
        /*modal closing*/
        closeModal.addEventListener("click",() =>{
          modalContent.classList.add("hidden-modal")
          map.setZoom(15)
          map.setCenter({ lat: 41.556240724638144, lng: -72.65683037211356 })
        });
        /*modal closing*/
        markersmain = markers;
        marker.setMap(null)
        document.getElementById("parkingBtn").addEventListener("click", hideMarkers);
        document.getElementById("parkingBtn").addEventListener("click", setMarker);
        function setMarker(){
          map.setZoom(15)
          map.setCenter({ lat: 41.556240724638144, lng: -72.65683037211356 })
          marker.setMap(map)
        }
        markersmain.push(marker);
      });
}

function setMapOnAll(map) {
    for (let i = 0; i < markersmain.length; i++) {
      markersmain[i].setMap(map);
    }
}
  
function hideMarkers() {
    setMapOnAll(null);
}