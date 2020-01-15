<template>
    <v-container>
        <v-row>
            <v-card width="100%" class="pa-5  space">
                <v-card-title primary-title class="justify-center .font-weight-black">Visualisation des département avec une pie-chart</v-card-title>

                <pie-chart height="500px" :data="deps" :colors="colors"></pie-chart>
            </v-card>
        </v-row>
        <v-row>
            <v-card width="100%">
                <v-card-title class="justify-center .font-weight-black">Visualisation des département avec un column-chart</v-card-title>
                <column-chart :stacked="true" :data="deps"  :colors="['#63b598']"></column-chart>
            </v-card>
        </v-row>
    </v-container>
</template>

<script src="./lib/chartVisualizationComponent.js"></script>

<style src="./lib/chartVisualizationComponent.css" scoped></style>