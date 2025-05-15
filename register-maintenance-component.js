const RegisterMaintenanceComponent = {
    name: 'register-maintenance-component',
    props: {
        onCancel: {
            type: Function,
            required: true,
        },
    },
    template: `
      <v-container>
        <h2 class="text-h5 font-weight-bold mb-4">Registrar Mantenimiento</h2>
        <v-form ref="form" v-model="valid">
          <!-- Campo para elegir activo -->
          <v-select
            v-model="maintenance.asset"
            :items="assets"
            label="Seleccionar Activo"
            :rules="[rules.required]"
            outlined
            dense
          ></v-select>

          <!-- Campo para elegir fecha -->
          <v-menu
            ref="menu"
            v-model="menu"
            :close-on-content-click="false"
            :nudge-right="40"
            transition="scale-transition"
            offset-y
            min-width="290px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="maintenance.date"
                label="Fecha de Mantenimiento"
                readonly
                v-bind="attrs"
                v-on="on"
                outlined
                dense
                :rules="[rules.required]"
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="maintenance.date"
              @input="menu = false"
            ></v-date-picker>
          </v-menu>

          <!-- Campo para tipo de mantenimiento -->
          <v-radio-group
            v-model="maintenance.type"
            :rules="[rules.required]"
            label="Tipo de Mantenimiento"
            row
          >
            <v-radio label="Preventivo" value="Preventivo"></v-radio>
            <v-radio label="Correctivo" value="Correctivo"></v-radio>
          </v-radio-group>

          <!-- Botones -->
          <div class="d-flex justify-end mt-4">
            <v-btn
              :disabled="!valid"
              color="blue darken-2"
              class="mr-2"
              @click="submitForm"
            >
              Guardar
            </v-btn>
            <v-btn
              text
              color="red darken-1"
              @click="onCancel"
            >
              Cancelar
            </v-btn>
          </div>
        </v-form>
      </v-container>
    `,
    data() {
        return {
            valid: false,
            menu: false, // Controla el menú de selección de fecha
            maintenance: {
                asset: null,
                date: null,
                type: null,
            },
            assets: ['Compresor A', 'Motor B', 'Generador C', 'Turbina D'], // Lista de activos
            rules: {
                required: (value) => !!value || 'Este campo es obligatorio',
            },
        };
    },
    methods: {
        submitForm() {
            if (this.$refs.form.validate()) {
                console.log('Mantenimiento registrado:', this.maintenance);
                // Aquí puedes agregar la lógica para enviar los datos al backend
                this.resetForm();
            }
        },
        resetForm() {
            this.maintenance = {
                asset: null,
                date: null,
                type: null,
            };
            this.$refs.form.reset();
        },
    },
};