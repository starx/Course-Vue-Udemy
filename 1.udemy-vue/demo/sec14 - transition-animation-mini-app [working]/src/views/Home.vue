<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-sm-8 col-md-6">
        <h1 class="text-center">The Super Quiz</h1>
      </div>
    </div>
    <hr>
    <div class="row">
      <div class="col-12">
        <transition
          name="flip"
          mode="out-in"
        >
          <component
            :is="mode" @answered="answered($event)"
            @confirmed="mode = 'app-question'"></component>
        </transition>

      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Question from '@/components/Question.vue';
import Answer from '@/components/Answer.vue';

export default {
  data() {
    return {
      mode: 'app-question',
    };
  },
  methods: {
    answered(isCorrect) {
      if (isCorrect) {
        this.mode = 'app-answer';
      } else {
        this.mode = 'app-question';
        console.error('Wrong, try again!');
      }
    },
  },
  components: {
    appQuestion: Question,
    appAnswer: Answer,
  },
};
</script>

<style>
  /*.flip-enter {*/
  /*  transform: rotateY(0deg)*/
  /*}*/

  .flip-enter-active {
    animation: flip-in 0.5s ease-out forwards;
  }

  /*.flip-leave {*/
  /*  transform: rotateY(0deg)*/
  /*}*/

  .flip-leave-active {
    animation: flip-out 0.5s ease-out forwards;
  }

  @keyframes flip-out {
    from {
      transform: rotateY(0deg);
    }
    to {
      transform: rotateY(90deg);
    }
  }
  @keyframes flip-in {
    from {
      transform: rotateY(90deg);
    }
    to {
      transform: rotateY(0deg);
    }
  }
</style>
