const RegisterTechnicianComponent = {
    name: 'register-technician-component',
    props: {
      onCancel: {
        type: Function,
        required: true,
      },
    },  
    template: `
      <v-container>
        <h2 class="text-h5 font-weight-bold mb-4">Registrar Nuevo Técnico</h2>
        <v-form ref="form" v-model="valid">
          <v-text-field
            v-model="technician.name"
            label="Nombre completo del Técnico"
            :rules="[rules.required]"
            outlined
            dense
          ></v-text-field>
          <v-text-field
            v-model="technician.specialty"
            label="Especialidad"
            :rules="[rules.required]"
            outlined
            dense
          ></v-text-field>
          <v-file-input
            v-model="technician.image"
            label="Foto"
            accept="image/*"
            outlined
            dense
          ></v-file-input>
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
        technician: {
          name: '',
          specialty: '',
          image: null,
        },
        rules: {
          required: (value) => !!value || 'Este campo es obligatorio',
          isNumber: (value) => !isNaN(value) || 'Debe ser un número válido',
        },
      };
    },
    methods: {
      submitForm() {
        if (this.$refs.form.validate()) {
          console.log('Técnico registrado:', this.technician);
          // Agregar la lógica para enviar el formulario al backend
          this.resetForm();
        }
      },
      resetForm() {
        this.technician = {
          name: '',
          specialty: '',
          image: null,
        };
        this.$refs.form.reset();
      },
    },
  };