<template>
    <div class="grey lighten-5">
        <v-row no-gutters v-if="selectedDep.length > 0">
            <v-col
                    :key="1"
                    :cols="3"
            >
                <v-card
                        class="pa-2"
                        tile
                        outlined
                >
                    <v-card-title class="indigo white--text headline">
                        Liste départements
                    </v-card-title>
                    <v-list>
                        <v-list-group
                                v-for="(dep, i) in selectedDep"
                                :key="i"
                                @click="fetchSelectedDepGares(dep)"
                        >
                            <template v-slot:activator>
                                <v-list-item-title>{{dep.entry}}</v-list-item-title>
                            </template>

                            <v-list-item
                                    v-for="(gare, i) in depWithGares"
                                    :key="i"
                                    link
                                    @click="centerOnGare(gare)"
                            >
                                <v-list-item-title v-text="gare.fields.libelle"></v-list-item-title>

                            </v-list-item>
                        </v-list-group>
                    </v-list>
                    <v-card-actions>
                        <v-btn
                                @click="addMoreDeps"
                                text>
                            ...see more
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>

            <v-col
                    :key="2"
                    :cols="9"
            >
                <v-card
                        class="pa-2"
                        tile
                        outlined
                >
                    <pulse-loader class="col-2 offset-4" v-if="loading" :loading="loading" :color="color" :size="size"></pulse-loader>
                    <map-component v-else :depGares="depWithGares" :selectedGare="gareToCenterOn"></map-component>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script src="./lib/asideDepartementListComponent.mvc.js"></script>

<style src="./lib/asideDepartementListComponent.css" scoped></style>