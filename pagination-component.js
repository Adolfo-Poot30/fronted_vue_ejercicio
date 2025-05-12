const PaginationComponent = {
    name: 'pagination-component',
    template: `
        <div class="text-center">
            <v-pagination
            v-model="page"
            :length="4"
            prev-icon="mdi-menu-left"
            next-icon="mdi-menu-right"
            ></v-pagination>
        </div>
    `,
    data() {        
        return {
            page: 1,
        };
    },
}