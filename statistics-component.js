const StatisticsComponent = {
    name: 'statistics-component',
    template: `
      <v-container>
          <v-row justify="start" align="start" wrap>
            <v-col cols="12" sm="6" md="4" lg="3" xl="2">
                <v-card outlined>
                    <v-card-title class="text-h6 font-weight-bold">Gráfica de Pastel</v-card-title>
                    <v-card-text>
                        <pie-chart-component />
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="12" sm="6" md="4" lg="3" xl="2">
                <v-card outlined>
                    <v-card-title class="text-h6 font-weight-bold">Gráfica de Barras</v-card-title>
                    <v-card-text>
                        <bar-chart-component />
                    </v-card-text>
                </v-card>
            </v-col>
          </v-row>
      </v-container>
    `,
    components: {
      'pie-chart-component': PieChartComponent,
      'bar-chart-component': BarChartComponent,
    },
};