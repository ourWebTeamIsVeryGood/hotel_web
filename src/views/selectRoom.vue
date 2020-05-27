<template>
  <div class="box">
    <div @click="selectRoom()" v-for="item in roomList" :key="item.id">
      <svg
        t="1590590303066"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="2614"
        width="128"
        height="128"
      >
        <path
          d="M512 112.8a86.88 86.88 0 0 1 63.04 26.88l313.76 327.04c23.2 24.48 25.28 47.04 19.68 59.36a39.2 39.2 0 0 1-37.28 23.2h-64V816c0 52.96-37.92 96-84.48 96H300c-46.56 0-84.48-43.2-84.48-96V550.56l-46.88-1.12H151.2a39.84 39.84 0 0 1-36.8-23.36c-5.28-11.84-3.36-34.4 20-58.72L448 139.84a86.4 86.4 0 0 1 64-27.04z m0-48a134.88 134.88 0 0 0-97.6 41.76L99.84 433.6c-39.84 41.44-41.12 84.96-29.28 112a87.52 87.52 0 0 0 78.08 51.68h18.88V816c0 80 59.36 144 132.48 144h423.04c73.12 0 132.48-64 132.48-144V597.44h18.56a86.56 86.56 0 0 0 78.4-51.84c12-26.72 10.56-70.24-29.12-112L609.12 106.56A134.08 134.08 0 0 0 512 64.8z"
          fill="#1296db"
          p-id="2615"
          data-spm-anchor-id="a313x.7781069.0.i8"
          class="selected"
        />
        <path
          d="M512 352a160 160 0 1 1-160 160 160 160 0 0 1 160-160z m0-32a192 192 0 1 0 192 192 192 192 0 0 0-192-192z"
          fill="#0070FF"
          p-id="2616"
          data-spm-anchor-id="a313x.7781069.0.i6"
          class
        />
        <path
          d="M473.76 441.76a32 32 0 0 1 27.52 48 38.56 38.56 0 0 0-3.36 8 38.56 38.56 0 0 0-8 3.36 32 32 0 0 1-16 4.48 31.04 31.04 0 0 1-20.16-7.36 32 32 0 0 1 20.32-56.64z m0-32a64 64 0 0 0-40.8 113.28 62.88 62.88 0 0 0 40.64 14.72 64 64 0 0 0 32-8.96l47.04 48 33.92 34.08a16 16 0 1 0 22.72-22.72l-22.72-22.72 22.72-22.56a16 16 0 0 0 4.64-11.36 16 16 0 0 0-27.36-11.2l-22.56 22.56-35.52-35.36a64 64 0 0 0-55.04-96z"
          fill="#0070FF"
          p-id="2617"
          data-spm-anchor-id="a313x.7781069.0.i7"
          class
        />
      </svg>
      <span>{{item.name}}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "selectRoom",
  data() {
    return {
      roomList: [
        {
          id: 1,
          name: 101
        },
        {
          id: 2,
          name: 101
        },
        {
          id: 3,
          name: 101
        },
        {
          id: 4,
          name: 101
        },
        {
          id: 5,
          name: 101
        },
        {
          id: 6,
          name: 101
        },
        {
          id: 7,
          name: 101
        }
      ]
    };
  },
  methods: {
    selectRoom() {
      this.$confirm("确定选择此房间吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "成功!"
          });
        })
    }
  }
};
</script>
<style lang="scss" scoped>
.box {
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  div {
    background-color: #ffffff;
    flex-shrink: 0;
    width: 23vw;
    margin: 1vw;
    height: 23vw;
    text-align: center;
    border-radius: 8px;
    box-shadow: #7e9c7e4a 7px 7px 0;
    text-align: center;
    padding-top: 50px;
    box-sizing: border-box;
    svg {
      display: block;
      margin: 0 auto;
    }
    span {
      font-size: 32px;
      font-weight: bold;
      color: #1296db;
    }
  }
  div:active {
    box-shadow: #7e9c7e4a 2px 2px 0;
  }
}
</style>