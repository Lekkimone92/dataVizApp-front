
<template>
    <div id="container">
        <v-flex id="nb_gare" xs4 sm4 md4 offset-xs9 offset-lg9>
            <v-card outlined tile>
                <v-card-text>{{depGares[0].fields.departement}}: {{nbGares}} gares</v-card-text>
            </v-card>
        </v-flex>
        <div id="map"></div>
    </div>
</template>

<script src="./lib/mapComponent.mvc.js"></script>

<style src="./lib/mapComponent.css" scoped></style>