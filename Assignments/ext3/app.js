new Vue({
        el: '#exercise',
        data() {
            return {
                value: 0,
                timeoutTime: 5000,
            }
        },
        computed: {
            result() {
                clearTimeout(this.timeoutInstance);
                this.timeoutInstance = setTimeout(() => {
                    this.value = 0;
                }, this.timeoutTime);
                return this.value < 37 ? 'not there yet' : 'done';
            }
        }
    });


// Instructor's approach
//
//
// new Vue({
//     el: '#exercise',
//     data: {
//         value: 0
//     },
//     computed: {
//         result: function() {
//             return this.value == 37 ? 'done' : 'not there yet';
//         }
//     },
//     watch: {
//         result: function() {
//             var vm = this;
//             setTimeout(function() {
//                 vm.value = 0;
//             }, 5000);
//         }
//     }
// });