new Vue ({
  el: '#app',
  data: {
    message: "Hello Vue.js!",
    style: `
.red{
  color: tomato;
}
@media (max-width: 300px) {
    body{
      background: pink;
  }
}`,
    width: "300",
    height: "200",
    code: `
<h1 class="red">Hello</h1>`,
    edit: false,
  },
  methods: {
    sp: function() {
      this.width = 300
    },
    pc: function() {
      this.width = 600
    }
  },
  computed: {
    html: function() {
      return `<!DOCTYPE html><html><body>${this.code}</body></html><style>${this.style}</style>`
    }
  }
})