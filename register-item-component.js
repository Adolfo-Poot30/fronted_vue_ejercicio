const RegisterItemComponent = {
  name: 'register-item-component',
  props: {
    onCancel: {
      type: Function,
      required: true,
    },
  },  
  template: `
    <v-container>
      <h2 class="text-h5 font-weight-bold mb-4">Registrar Nuevo Item</h2>
      <v-form ref="form" v-model="valid">
        <v-text-field
          v-model="item.name"
          label="Nombre del Item"
          :rules="[rules.required]"
          outlined
          dense
        ></v-text-field>
        <v-textarea
          v-model="item.description"
          label="Descripción"
          :rules="[rules.required]"
          outlined
          dense
        ></v-textarea>
        <v-text-field
          v-model="item.price"
          label="Precio"
          type="number"
          :rules="[rules.required, rules.isNumber]"
          outlined
          dense
        ></v-text-field>
        <v-text-field
          v-model="item.stock"
          label="Stock"
          type="number"
          :rules="[rules.required, rules.isNumber]"
          outlined
          dense
        ></v-text-field>
        <v-file-input
          v-model="item.image"
          label="Imagen del Item"
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
      item: {
        name: '',
        description: '',
        price: null,
        stock: null, 
        image: null,
      },
      rules: {
        required: (value) => !!value || 'Este campo es obligatorio',
        isNumber: (value) => !isNaN(value) || 'Debe ser un número válido',
      },
    };
  },
  methods: {
    async submitForm() {
      if (this.$refs.form.validate()) {
        try {
          const response = await fetch('http://localhost:8000/api/items', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              nombre: this.item.name,
              descripcion: this.item.description,
              precio: this.item.price,
              stock: this.item.stock,
            }),
          });
  
          if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
          }
  
          const data = await response.json();
          console.log('Item registrado en el servidor:', data);
  
          // Limpia el formulario después de un registro exitoso
          this.resetForm();
        } catch (error) {
          console.error('Error al registrar el item:', error.message);
        }
      }
    },
    resetForm() {
      this.item = {
        name: '',
        description: '',
        price: null,
        stock: null, // Restablecer el stock
        image: null,
      };
      this.$refs.form.reset();
    },
  },
};