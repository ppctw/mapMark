// 初始化地圖
var map = L.map('map').setView([22.683225, 120.481481], 13);

// 使用 OpenStreetMap 地圖瓦片
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
    maxZoom: 18,
}).addTo(map);

// 標記地址
var addressList = [
  {
    name: "屏東市民族路399號",
    lat: 22.665778,
    lng: 120.482555
  },
  {
    name: "屏東市建興南路41巷14號",
    lat: 22.659086,
    lng: 120.494612
  },
  {
    name: "屏東市機場北路730號4樓",
    lat: 22.681168,
    lng: 120.460843
  },
  {
    name: "屏東市林森路一巷86號",
    lat: 22.671020,
    lng: 120.487901
  },
  {
    name: "屏東縣麟洛鄉麟趾村中正路10號",
    lat: 22.598786,
    lng: 120.542500
  },
  {
    name: "屏東縣內埔鄉嗌寮村清涼路206巷6號",
    lat: 22.632145,
    lng: 120.582882
  }
];

// 設定標記圖標
var icon = L.icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/9700/9700640.png',
  iconSize: [16, 16],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

// 標記地址
for (var i = 0; i < addressList.length; i++) {
  var address = addressList[i];
  var marker = L.marker([address.lat, address.lng], {icon: icon}).addTo(map);
  marker.bindPopup(address.name).openPopup();
}

// 設定標記閃爍動畫
setInterval(function() {
  var markers = document.getElementsByClassName("leaflet-marker-icon");
  for (var i = 0; i < markers.length; i++) {
    markers[i].classList.toggle("marker-animation");
  }
}, 500);
