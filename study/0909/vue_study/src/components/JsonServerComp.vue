<template>
  <h2>JSON Server Test Component</h2>
  <div class="server__form">
    <h3>입력 Form</h3>
    <div class="server__frm">
      <form @submit.prevent="" name="frm">
        <input type="text" name="name" id="name" placeholder="이름" v-model="subData.name">
        <input type="text" name="tel" id="tel" maxlength="11" placeholder="전화번호">
        <input type="text" name="addr" id="addr" placeholder="주소">
        <input type="text" name="email" id="email" placeholder="이메일">
        <button type="submit">데이터 전송</button>
      </form>
    </div>
  </div>
  <!-- 리스트 보여주는 -->
  <div class="server__display">
    <h3>데이터 불러오는 영역</h3>
    <button type="button" @click="loadData">Load</button>
    <div>
      <ul>
        <li v-for="user in users" :key="user.id">
          <p>이름 : {{ user.name }}</p>
          <p>전화번호 : {{ user.tel }}</p>
          <p>주소 : {{ user.addr }}</p>
          <p>이메일 : {{ user.email }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';

  // axios.post(URL, 전송할 데이터)

  export default {
    data() {
      return {
        users : [],
        // 전송할 데이터 담을 객체
        subData : {
          name : '',
          tel : '',
          addr : '',
          email : ''
        }
      }
    },
    methods : {
      async loadData() {
        try {
          // axios.get('요청할 서버 URL')
          const response = await axios.get('http://localhost:5000/users');
          this.users = await response.data;

          // const response = await fetch('http://localhost:5000/users');
          // this.users = await response.json();
        } catch (err) {
          console.error('error : ', err);
        }
      }
    },
    created() {
      this.loadData();
    }
  }
</script>

<style lang="css" scoped>
  h3 {
    margin-bottom: 10px;
  }
</style>