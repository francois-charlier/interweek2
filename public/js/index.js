let mymap;

var coo_demo = [
    [50.665789231460536, 4.611847851845287],
    [50.66518399236119, 4.612373564792285],
    [50.664850767504554, 4.612738345204488],
    [50.66429992122932, 4.612609599176651],
    [50.664510739702926, 4.611880038352247],
    [50.664429132664196, 4.6114186984191665],
    [50.66452604100696, 4.6112899523913295],
    [50.66479466308698, 4.611244354839805],
    [50.664917072639035, 4.611348960987422],
    [50.665432209340075, 4.611373100867642],
    [50.66573019634217, 4.611754414457751]
];

const color_tracker = "#0898ff";

function add_marker_demo() {

    L.polyline(coo_demo, {color: 'red'}).addTo(mymap);

}

function draw_map() {
    mymap = L.map('map').setView([50.66595108289637, 4.612268456094151], 17);

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
        maxZoom: 20,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1
    }).addTo(mymap);
}