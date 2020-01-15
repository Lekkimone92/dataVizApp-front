<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Sncf Gare App</span>
      </v-toolbar-title>
      <v-row class="text-center">
          <v-col sm2 md2 lg2><v-btn class="ma-2" depressed small to="/">Departements</v-btn></v-col>
          <v-col sm2 md2 lg2><v-btn class="ma-2" depressed small to="/map">carte</v-btn></v-col>
          <v-col sm2 md2 lg2><v-btn class="ma-2" depressed small to="/chartVisual">visuel-chart</v-btn></v-col>
          <v-col sm2 md2 lg2><v-btn class="ma-2" depressed small to="/d3Pack">D3-pack</v-btn></v-col>
          <v-col sm2 md2 lg2><v-btn class="ma-2" depressed small to="/d3Radial">D3-radial</v-btn></v-col>
      </v-row>
    </v-app-bar>

    <v-content>
      <router-view/>
    </v-content>
      <v-footer dark padless>
        <v-card class="flex" flat tile>
          <v-card-title class="teal">
            <strong class="subheading">Application qui listes toutes les gares de sncf</strong>

            <v-spacer></v-spacer>
            <span>Master 2 IDC</span>
          </v-card-title>

          <v-card-text class="py-2 white--text text-center">
            {{ new Date().getFullYear() }} — <strong>UNICAEN</strong>
          </v-card-text>
        </v-card>
      </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {

  },
  data: () => ({
    //
  }),
};
</script>
