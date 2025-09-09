<template>
  <h1>Study Vue</h1>
  <ul>
    <li v-for="number in numbers" :key="number"></li>
  </ul>
  <p>{{ str }}</p>
  <button type="button" @click="handleClick">Click</button>
  <p>{{ isStatus }}</p>
  <button type="button" @click="handleClick">Status Change</button>
  <!-- v-bind:Props명="넘길 데이터" -->
  <PropsComp :numbers="numbers" />
</template>

<script>
  import PropsComp from './components/PropsComp.vue';

  export default {
    components: {
      PropsComp
    },
    data() {
      return {
        str : 'hi',
        numbers: [1, 2, 3, 4, 5],
        isStatus: true
      }
    },
    methods : {
      // 이벤트 관련 핸들러
      // 버튼 클릭 시, str 값을 'hello'로 변경
      handleClick() {
        this.str = 'hello';
      },
      // 클릭 시, isStatus 값을 반전
      statusChange() {
        this.isStatus = !this.isStatus;
      }
    }
  }
</script>

<style lang="">
  
</style>