const TableComponent = {
    name: 'table-component',
    template: `
      <div>
        <v-data-table
          :headers="headers"
          :items="items"
          :items-per-page="5"
          class="elevation-1"
        >
          <template v-slot:top>
            <v-toolbar flat>
              <v-toolbar-title>Mantenimientos próximos</v-toolbar-title>
              <v-divider class="mx-4" inset vertical></v-divider>
              <v-spacer></v-spacer>
              
              <v-btn @click="dialog = true" color="green darken-1" style="color: white;">
                Nuevo mantenimiento
              </v-btn>

              
            </v-toolbar>
          </template>
        </v-data-table>
        
        <!-- Modal para registrar un nuevo mantenimiento -->
        <v-dialog v-model="dialog" max-width="600px">
          <v-card style="max-height: 90vh; overflow-y: auto;">
            <v-card-text>
              <register-maintenance-component :onCancel="closeDialog" />
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>

      </div>
    `,
    components: {
        'register-maintenance-component': RegisterMaintenanceComponent,
    },
    data() {
        return {
            dialog: false,
            headers: [
                { text: 'Activo', value: 'activo' },
                { text: 'Fecha Programada', value: 'fecha' },
                { text: 'Tipo de Mantenimiento', value: 'tipo' },
            ],
            items: [
                { activo: 'Compresor A', fecha: '2025-05-15', tipo: 'Preventivo' },
                { activo: 'Motor B', fecha: '2025-05-20', tipo: 'Correctivo' },
                { activo: 'Generador C', fecha: '2025-05-24', tipo: 'Preventivo' },
                { activo: 'Turbina D', fecha: '2025-05-30', tipo: 'Correctivo' },
                { activo: 'Bomba E', fecha: '2025-06-05', tipo: 'Preventivo' },
                { activo: 'Compresor F', fecha: '2025-06-10', tipo: 'Correctivo' },
                { activo: 'Motor G', fecha: '2025-06-15', tipo: 'Preventivo' },
                { activo: 'Generador H', fecha: '2025-06-20', tipo: 'Correctivo' },
                { activo: 'Turbina I', fecha: '2025-06-25', tipo: 'Preventivo' },
                { activo: 'Bomba J', fecha: '2025-07-01', tipo: 'Correctivo' },
            ],
        };
    },
    methods: {
        closeDialog() {
            this.dialog = false;
        },
    },
};