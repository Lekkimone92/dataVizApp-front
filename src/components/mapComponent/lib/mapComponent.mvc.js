import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import PulseLoader from "vue-spinner/src/PulseLoader";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

export default {
    name: "MapComponent",
    props: ["depGares", "selectedGare"],
    components: {
        PulseLoader,
    },
    data(){
        return {
            nbGares: 0,
            color: '#5bc0de',
            size: '45px',
            loading: true,
            map : null,
            url: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png\'',
            center: null,
            markers: [],
            arrayMarkers: [],
            opts: {
                attribution:'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attributions">CARTO</a>',
                subdomains: 'abcd',
                maxZoom: 20,
                minZoom: 0
            }
        }
    },

    watch: {
        depGares: function(newVal) {
            this.nbGares = this.depGares.length;
            this.clearMarkers();

            this.center = L.latLng(newVal[0].geometry.coordinates[1], newVal[0].geometry.coordinates[0]);
            this.map.setView(this.center, 10);

            this.garesLocations();
            this.addMarkers();
        },
        selectedGare(){
            this.center = L.latLng(this.selectedGare.geometry.coordinates[1], this.selectedGare.geometry.coordinates[0]);
            this.map.setView(this.center, 15);
        }
    },

    mounted(){
        this.nbGares = this.depGares.length;
        this.map = L.map('map', this.opts);
        this.center = L.latLng(this.depGares[4].geometry.coordinates[1], this.depGares[0].geometry.coordinates[0]);
        this.map.setView(this.center, 10);
        L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', ).addTo(this.map);
        this.garesLocations();
        this.addMarkers();

    },

    methods: {
        garesLocations(){
            let locs = [];
            if(this.depGares){
                for(let coord of this.depGares){
                    locs.push({coord: [coord.geometry.coordinates[0], coord.geometry.coordinates[1]],libelle: coord.fields.commune});
                }
            }
            this.arrayMarkers = locs;
        },
        addMarkers(){
            for (let marker of this.arrayMarkers){
                this.markers.push(new L.marker([marker.coord[1],marker.coord[0]])
                    .bindPopup(marker.libelle)
                    .addTo(this.map));
            }
        },
        clearMarkers(){
            for (let marker of this.markers){
                this.map.removeLayer(marker);
            }
        }
    }
}