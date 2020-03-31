new Vue({
        el: '#exercise',
        data() {
            return {
                value: ''
            }
        },
        methods: {
            showAlert: () => alert('A basic alert'),
            valueBeingTyped(event) {
                this.value = event.target.value;
            }
        }
});