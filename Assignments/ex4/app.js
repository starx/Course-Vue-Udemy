new Vue({
  el: '#exercise',
  data() {
    return {
      lastEffect: '',
      effectClass: '',
      effectInterval: null,
      noClassDivClass: [
          'bigBorder',
          'longDiv'
      ],
      dynaClassDivMultiClass: [],
      dynaClassDivSingleClass: '',
      dynaStyleValue: 'teal',
      progressBarValue: 0,
      progressInterval: null,
      progressBarColor: 'red'
    }
  },
  watch: {
    progressBarValue() {
      console.log('changed', this.progressVarColor);
        var vm = this;
        if (this.progressBarValue >= 90) {
          this.progressBarColor = 'green'
        } else if (this.progressBarValue >= 50) {
          this.progressBarColor = 'yellow'
        }
      console.log(this.progressBarColor);
    }
  },
  methods: {
    startEffect() {
      clearInterval(this.effectInterval);
      this.effectInterval = setInterval(() => {
          this.effectClass = this.effectClass === 'highlight' ? 'shrink' : 'highlight';
      }, 2000);
    },
    applySecretClass(event) {
      if(event.target.value === 'true') {
        if ( this.dynaClassDivMultiClass.indexOf ('bigCircle') === -1)
          this.dynaClassDivMultiClass.push('bigCircle')
      } else {
        this.dynaClassDivMultiClass = this.dynaClassDivMultiClass.filter(item => item !== 'bigCircle')
      }
    },
    getRandomProgress(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    },
    showProgress() {
      clearInterval(this.progressInterval);
      this.progressInterval = setInterval(() => {
        // If reached 100% clear the interval
        if(this.progressBarValue >= 100) {
          clearInterval(this.progressInterval);
        } else {
          this.progressBarValue += this.getRandomProgress(1, 100 - this.progressBarValue);
        }
      }, 200)
    }
  }
});
