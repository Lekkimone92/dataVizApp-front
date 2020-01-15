import * as d3 from "d3";
export default {
    name: "D3RadialComponent",
    data(){
        return{
            width: 100,
            height: 100,
            h: d3.hierarchy({}),
            groupOrder: ['departement', 'commune'],
            colors: [
                "#63b598", "#ce7d78", "#ea9e70", "#a48a9e", "#c6e1e8", "#648177" ,"#0d5ac1" ,
                "#f205e6" ,"#1c0365" ,"#14a9ad" ,"#4ca2f9" ,"#a4e43f" ,"#d298e2" ,"#6119d0",
                "#d2737d" ,"#c0a43c" ,"#f2510e" ,"#651be6" ,"#79806e" ,"#61da5e" ,"#cd2f00" ,
                "#9348af" ,"#01ac53" ,"#c5a4fb" ,"#996635","#b11573" ,"#4bb473" ,"#75d89e" ,
                "#2f3f94" ,"#2f7b99" ,"#da967d" ,"#34891f" ,"#b0d87b" ,"#ca4751" ,"#7e50a8" ,
                "#c4d647" ,"#e0eeb8" ,"#11dec1" ,"#289812" ,"#566ca0" ,"#ffdbe1" ,"#2f1179" ,
                "#935b6d" ,"#916988" ,"#513d98" ,"#aead3a", "#9e6d71", "#4b5bdc", "#0cd36d",
                "#250662", "#cb5bea", "#228916", "#ac3e1b", "#df514a", "#539397", "#880977",
                "#f697c1", "#ba96ce", "#679c9d", "#c6c42c", "#5d2c52", "#48b41b", "#e1cf3b",
                "#5be4f0", "#57c4d8", "#a4d17a", "#225b8", "#be608b", "#96b00c", "#088baf",
                "#f158bf", "#e145ba", "#ee91e3", "#05d371", "#5426e0", "#4834d0", "#802234",
                "#6749e8", "#0971f0", "#8fb413", "#b2b4f0", "#c3c89d", "#c9a941", "#41d158",
                "#fb21a3", "#51aed9", "#5bb32d", "#807fb", "#21538e", "#89d534", "#d36647",
                "#7fb411", "#0023b8", "#3b8c2a", "#986b53",
            ],
            interval: null
        }
    },
    computed:{
        allDeps(){
            return this.$store.state.allDeps;
        },
        layout(){
            return d3.cluster()
                .size([Math.PI * 2, this.radius]);
        },
        radius(){
            return Math.min(this.width, this.height) * 0.5;
        },
        center(){
          return {
              x: this.width * 0.5,
              y: this.height * 0.5
          };
        },
        nester(){
            const n = d3.nest();

            this.groupOrder.forEach(val => {
                n.key(node => node[val])
            });

            return n;
        },
        nestedData(){
            return {
                key: 'root',
                values: this.nester.entries(this.allDeps)
            };
        },
        depthScale(){
            return d3.scaleOrdinal()
                .range(this.colors);
        },
        lineGenerator(){
            return d3.line()
                .x(item => this.center.x + (Math.cos(item.x) * item.y))
                .y(item => this.center.y + (Math.sin(item.x) * item.y));
        }

    },
    watch: {
        layout(){
            this.layout(this.h);
        },
        nestedData(newVal) {
            const h = d3.hierarchy(newVal, v => v.values);

            h.sum(v => v.idreseau);
            h.sort((a,b) => d3.ascending(a.value, b.value));

            this.layout(h);

            this.h = h;
        }
    },
    methods: {
        updateSize(){
            const {
                width,
                height
            } = this.$el.getBoundingClientRect();

            this.width = width;
            this.height = height;
        },
        fillCircles(item){
            return this.depthScale(item.depth);
        },
        toX(point){
            return Math.cos(point.x) * point.y;
        },
        toY(point){
            return Math.sin(point.x) * point.y;
        },
        updateData(){
            this.interval = setInterval(() => {
                const r = Math.random();
                const limit = Math.floor(r * (101 - 4282) + 4282);
                this.$store.dispatch("getAllDeps", limit);
            }, 5000);
        }
    },
    mounted(){
        this.updateSize();
        this.$store.dispatch("getAllDeps",200);
        this.updateData();
    },
    created() {
        window.addEventListener("resize", this.updateSize);
    },
    destroyed() {
        window.removeEventListener("resize", this.updateSize);
    },
    beforeDestroy () {
        clearInterval(this.interval)
    }
}