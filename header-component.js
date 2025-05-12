const HeaderComponent = {
  name: 'header-component',
  template: `
    <v-app-bar app color="blue darken-4" dark>
      <v-toolbar-title>Mantenimiento</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text to="/inicio">Inicio</v-btn>
      <v-btn text to="/estadisticas">Estadísticas</v-btn>
      <v-btn text to="/activos">Activos</v-btn>
      <v-btn text to="/tecnicos">Técnicos</v-btn>
    </v-app-bar>
  `,
};