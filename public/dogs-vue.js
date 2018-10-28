(function(){
    var breedsVue = new Vue({
        el: '#breedsVue',
        data: {
            status: null,
            message: null,
            all: []
        },

        created: function() {
            var self = this;
            axios.get('https://dog.ceo/api/breeds/list/all')
                .then(function(res) {
                    self.all = res.data;
                })
                .catch(function(res) {
                    self.all = [];
                });
        },
        methods: {
            
        }
    })
    console.log(breedsVue)
})();