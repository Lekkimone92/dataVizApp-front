
export default {
    name: "DepartementComponent",
    mounted(){
        this.$store.dispatch("getDepartement");
    },
    data(){
        return {
            dialog: false,
            list: {
                headers: [
                    {
                        text: 'departement',
                        align: 'left',
                        sortable: false,
                        value: 'departement',
                    },
                    { text: 'nombre total de gares', value: 'nb_gares' },
                    { text: 'Actions', value: 'action', sortable: false },
                ],
                fields: []
            },

            listGares: {
                headers: [
                    {
                        text: 'commune',
                        align: 'left',
                        sortable: false,
                        value: 'commune',
                    },
                    { text: 'libéllé', value: 'libelle' },
                    { text: 'code ligne', value: 'code_ligne' },
                ],
                fields: []
            }
        }
    },


    watch: {
        dialog (val) {
            val || this.close()
        },
    },

    computed: {
        dep(){
            return this.$store.state.depData;
        },

        depGares(){
            return this.$store.state.depGares;
        },

        listDep(){
            if (this.dep){
                for (let record of this.dep){

                    let data = {
                        departement: record.entry,
                        nb_gares: record.count,
                    };
                    this.list.fields.push(data)
                }
            }
            return this.list.fields;
        },

        listDepGare(){
            if (this.depGares){
                for (let gare of this.depGares){

                    let data = {
                        commune: gare.fields.commune,
                        libelle: gare.fields.libelle,
                        code_ligne: gare.fields.code_ligne
                    };
                    this.listGares.fields.push(data)
                }

            }
            return this.listGares.fields;
        }
    },

    methods: {
        fetchSelectedDepGares(dep) {
            this.$store.dispatch('getDepGares', dep.departement);
            this.dialog = true;
        },

        close () {
            this.dialog = false;
            setTimeout(() => {
            }, 300)
        },
    }
}