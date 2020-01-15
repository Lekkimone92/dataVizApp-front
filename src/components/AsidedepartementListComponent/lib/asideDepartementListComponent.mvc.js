
import MapComponent from '../../mapComponent/MapComponent';
import PulseLoader from "vue-spinner/src/PulseLoader";
export default {
    name: "AsideDepartementListComponent",
    components: {
        PulseLoader,
        MapComponent
    },
    mounted(){
        this.$store.dispatch("getDepartement");
        this.$store.dispatch('getDepGares', 'CREUSE');
    },
    data(){
        return {
            color: '#5bc0de',
            size: '45px',
            loading: true,
            selectedDep: [],
            gareToCenterOn: ''
        }
    },


    computed: {
        deps(){
            return this.$store.state.depData;
        },
        depWithGares(){
            return this.$store.state.depGares;
        }

    },

    watch: {
        depWithGares: function (newVal) {
            this.loading = false;
        },
        deps(newVal){
            for (let i=0; i<15; i++){
                this.selectedDep.push(newVal[i]);
            }
        }
    },

    methods: {
        async fetchSelectedDepGares(dep) {
             await this.$store.dispatch('getDepGares', dep.entry);
        },
        addMoreDeps(){
            let startIndex = this.selectedDep.length;
            for (let i=0; i<5; i++){
                this.selectedDep.push(this.deps[startIndex + i]);
            }
        },
        centerOnGare(gare){
            this.gareToCenterOn = gare;
        }
    }
}