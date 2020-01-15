<template>
    <div>
        <v-container class="grey lighten-5">
            <h2 class="sm12 md6 lg6 offset-md5 offset-lg-5">Nombre de Gares par département</h2>
            <v-data-table
                    :headers="list.headers"
                    :items="listDep"
                    :items-per-page="10"
                    class="elevation-1 top"
            >

                <template v-slot:top>
                    <v-toolbar flat color="white">
                        <v-toolbar-title>Liste des départements</v-toolbar-title>
                        <v-divider
                                class="mx-4"
                                inset
                                vertical
                        ></v-divider>
                        <v-spacer></v-spacer>
                        <v-dialog v-model="dialog" max-width="800px">
                            <v-card>
                                <v-card-title>
                                    <span class="headline">Liste des Gares</span>
                                </v-card-title>

                                <v-card-text>
                                    <v-container>
                                        <v-data-table
                                                :headers="listGares.headers"
                                                :items="listDepGare"
                                                :items-per-page="10"
                                                class="elevation-1"
                                        ></v-data-table>
                                    </v-container>
                                </v-card-text>

                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                    </v-toolbar>
                </template>
                <template v-slot:item.action="{ item }">
                    <v-icon
                            small
                            class="mr-2"
                            @click="fetchSelectedDepGares(item)"
                    >
                        visibility
                    </v-icon>
                </template>
            </v-data-table>
        </v-container>
    </div>
</template>

<script src="./lib/departementComponent.mvc.js"></script>

<style src="./lib/departementComponent.css" scoped></style>