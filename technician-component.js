const TechnicianComponent = {
    name: 'technician-component',
    template: `
      <div>
        <v-container>
          <div class="d-flex justify-space-between align-center mb-4">
            <h1 class="text-left text-h4 font-weight-light">Lista de Técnicos</h1>
              <v-btn
                outlined
                color="blue darken-2"
                class="text-capitalize mr-2"
                @click="dialog = true"
              >
                Agregar
              </v-btn>
          </div>
          <v-row>
            <v-col
              v-for="tecnico in tecnicos"
              :key="tecnico.id"
              cols="12"
              sm="6"
              md="4"
            >
              <v-card outlined>
                <v-card-title>{{ tecnico.name }}</v-card-title>
                <v-card-text>{{ tecnico.description }}</v-card-text>
                <v-card-actions>
                  <v-btn color="primary" text>Ver más</v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
        
        <!-- Modal para registrar un nuevo técnico -->
        <v-dialog v-model="dialog" max-width="600px">
          <v-card>
            <v-card-text>
              <register-technician-component :onCancel="closeDialog" />
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>

        <pagination-component />
      </div>
    `,
    components: {
      'pagination-component': PaginationComponent,
      'register-technician-component': RegisterTechnicianComponent,
    },
    data() {
        return {
            dialog: false,
            tecnicos: [
                { id: 1, name: 'Tecnico 1', description: 'Descripción del perfil 1' },
                { id: 2, name: 'Tecnico 2', description: 'Descripción del perfil 2' },
                { id: 3, name: 'Tecnico 3', description: 'Descripción del perfil 3' },
                { id: 4, name: 'Tecnico 4', description: 'Descripción del perfil 4' },
                { id: 5, name: 'Tecnico 5', description: 'Descripción del perfil 5' },
            ],
        };
    },
    methods: {
      closeDialog() {
        this.dialog = false; // Cierra el modal
      }
    }
};