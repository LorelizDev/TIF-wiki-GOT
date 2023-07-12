new Vue({
  el: '#productos-lista',
  data: {
    productos: []
  },
  created() {
    this.fetchData('https://lorelizdev.pythonanywhere.com/productos');
  },
  methods: {
    fetchData(url) {
      fetch(url)
        .then(response => response.json())
        .then(data => {
          this.productos = data;
        })
        .catch(err => {
          console.error(err);
        });
    }
  },
  template: `
  <div id="productos-lista" class="row row-cols-1 row-cols-md-3 g-4">
      <div class="col" v-for="producto in productos" :key="producto.id">
      <div class="card">
          <img :src="producto.imagen" class="card-img-top" :alt="producto.nombre">
          <div class="card-body">
              <h5 class="card-title">{{ producto.nombre }}</h5>
              <p class="card-text">$ {{ producto.precio }}</p>
          </div>
          <div class="card-footer">
              <small class="text-body-secondary">stock: {{ producto.stock }}</small>
          </div>
      </div>
  </div>
  `
});