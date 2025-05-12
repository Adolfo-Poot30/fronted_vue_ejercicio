const ItemsComponent = {
  name: 'items-component',
  template: `
      <div>
        <v-container>
          <div class="d-flex justify-space-between align-center mb-4">
            <h1 class="text-left text-h4 font-weight-light">Lista de Activos</h1>
            <div class="d-flex align-center">
              <!-- Botón para abrir el modal -->
              <v-btn
                outlined
                color="blue darken-2"
                class="text-capitalize mr-2"
                @click="dialog = true"
              >
                Agregar
              </v-btn>
              <v-btn
                outlined
                color="grey darken-1"
                class="text-capitalize"
                @click="openFilterDialog"
              >
                <v-icon left>mdi-filter-variant</v-icon>
                Filtrar
              </v-btn>
            </div>
          </div>
          <v-row>
            <v-col
              v-for="item in items"
              :key="item.id"
              cols="12"
              sm="6"
              md="4"
            >
              <v-card outlined>
                <v-card-title class="d-flex justify-space-between align-center">
                  {{ item.nombre }}
                  <v-btn icon @click="editItem(item)">
                    <v-icon>mdi-pencil</v-icon>
                  </v-btn>
                </v-card-title>
                <v-card-text>{{ item.descripcion }}</v-card-text>
                <v-card-actions>
                  <v-btn color="primary" text>Ver más</v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
        <!-- Modal para registrar un nuevo item -->
        <v-dialog v-model="dialog" max-width="600px">
          <v-card>
            <v-card-text>
              <register-item-component :onCancel="closeDialog" />
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
    'register-item-component': RegisterItemComponent,
  },
  mounted() {
    this.fetchItems();
  },
  data() {
    return {
      dialog: false,
      items: [],
    };
  },
  methods: {
    closeDialog() {
      this.dialog = false;
    },
    async fetchItems() {
      try {
        const response = await fetch('http://localhost:8000/api/items');
        this.items = await response.json();
        console.log('Items fetched:', this.items);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    },
    editItem(item) {
      console.log('Editar item:', item);
      //lógica de editar
    },
  }
};