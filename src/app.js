import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#app',
    data: {
      selectedCountry: null,
      countries: []
    },

    mounted() {
      this.showCountry()
    },

    computed: {
      totalPop: function () {
        return this.countries.reduce((sum, country) => {
          return sum + country.population
        },0);
      },

    },
    methods: {
      showCountry: function() {
        const request = fetch("https://restcountries.eu/rest/v2/all")
          .then(response => response.json())
          .then(data => this.countries = data)
      },
      selectCountry: function (e) {
        const index = e.target.value;
        this.selectedCountry = this.countries[index];
        // console.log(this.selectedCountry);
      }
    }
  })
})
