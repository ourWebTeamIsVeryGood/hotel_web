<template>
<div>
    <div class="zn" v-if="hasShifted">
        <div>
            {{keyvalue.toLowerCase()}}
            <div class="icon" v-if="znArr.length>16">
                <i @click="onPage" class="el-icon-arrow-left"></i>
                <i @click="nextPage" class="el-icon-arrow-right"></i>
            </div>
        </div>
        <div>
            <span @click="znVal(znArr[index+offset])" v-for="(i,index) in znArr.length>16?16:znArr.length" :key="index">
                {{znArr[index+offset]}}
            </span>
        </div>
    </div>
    <ul class="keyboard">
        <li
        v-for="(key,index) in keyList"
        :key="index"
        track-by="$index"
        :class="{delete: key === 'Delete', tab: key === 'Tab', capslock: key === 'Caps', enter: key === 'Enter', shift: key === 'Shift', space: key === 'Space', shifted: (key === 'Shift') && hasShifted, capsed: (key === 'Caps') && hasCapsed }"
        v-text="key"
        @click="clickKey(key)"
        ></li>
    </ul>
</div>
</template>
<script>
const zn = require("../assets/js/zn.js")
export default {
  data() {
    return {
      keyList: [],
      normalKeyList: [],
      shiftedKeyList: [],
      capsedKeyList: [],
      hasCapsed: false,
      hasShifted:this.shift,
      keyvalue: "",
      zn:"",
      znArr:[],
      offset:0
    };
  },
  created() {
    this.ready();
  },
  props:['shift'],
  methods: {
    clickKey(key) {
      switch (key) {
        case "Delete":
          let kbt = this.keyvalue;
          this.keyvalue = kbt.length ? kbt.substring(0, kbt.length - 1) : kbt;
          if(this.hasShifted){
                if(this.keyvalue.length==0){
                    this.$emit("delZn");
                }
                let allZn = zn[this.keyvalue.toLowerCase()];
                if(allZn){
                    this.znArr = allZn.split("")
                }else{
                    this.znArr=[]
                }
            }
          break;

        case "Tab":
          this.keyvalue += "\t";
          break;

        case "Enter":
          this.keyvalue += "\n";
          break;

        case "Space":
          this.keyvalue += " ";
          break;

        case "Caps":
          this.hasCapsed = !this.hasCapsed;
          this.keyList = this.hasCapsed
            ? this.capsedKeyList
            : this.normalKeyList;
          break;

        case "Shift":
            // this.setKeyvalue('');
            // this.hasShifted = !this.hasShifted;
            // this.keyList = this.hasShifted
            // ? this.shiftedKeyList
            // : this.normalKeyList;
          break;

        default:
            this.keyvalue += key;
            if(this.hasShifted){
                this.offset=0;
                let allZn = zn[this.keyvalue.toLowerCase()];
                if(allZn){
                    this.znArr = allZn.split("")
                }else{
                    this.znArr=[]
                }
            }
          break;
      }
      if(!this.hasShifted){
        this.$emit("updatekey", this.keyvalue);
      }
    },
    znVal(val){
        if(this.hasShifted){
            this.$emit("updatekey", val);
            this.setKeyvalue("");
            this.znArr=[];
        }
    },
    setKeyvalue(str){
        this.keyvalue=str;
    },
    onPage(){
        if(this.offset==0){
            return;
        }
        this.offset-=16;
    },
    nextPage(){
        if(this.znArr.length-this.offset>16){
            this.offset+=16;
        }
        
    },
    ready() {
      let normalKeyList = [
          "`",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "0",
          "-",
          "=",
          "Delete",
          "Tab",
          "q",
          "w",
          "e",
          "r",
          "t",
          "y",
          "u",
          "i",
          "o",
          "p",
          "[",
          "]",
          "\\",
          "Caps",
          "a",
          "s",
          "d",
          "f",
          "g",
          "h",
          "j",
          "k",
          "l",
          ";",
          "'",
          "Enter",
          "Shift",
          "z",
          "x",
          "c",
          "v",
          "b",
          "n",
          "m",
          ",",
          ".",
          "/",
          "Shift",
          "Space"
        ],
        shiftedKeyList = [
          "~",
          "!",
          "@",
          "#",
          "$",
          "%",
          "^",
          "&",
          "*",
          "(",
          ")",
          "_",
          "+",
          "Delete",
          "Tab",
          "Q",
          "W",
          "E",
          "R",
          "T",
          "Y",
          "U",
          "I",
          "O",
          "P",
          "{",
          "}",
          "|",
          "Caps",
          "A",
          "S",
          "D",
          "F",
          "G",
          "H",
          "J",
          "K",
          "L",
          ":",
          '"',
          "Enter",
          "Shift",
          "Z",
          "X",
          "C",
          "V",
          "B",
          "N",
          "M",
          "<",
          ">",
          "?",
          "Shift",
          "Space"
        ],
        capsedKeyList = [
          "`",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "0",
          "-",
          "=",
          "Delete",
          "Tab",
          "Q",
          "W",
          "E",
          "R",
          "T",
          "Y",
          "U",
          "I",
          "O",
          "P",
          "[",
          "]",
          "\\",
          "Caps",
          "A",
          "S",
          "D",
          "F",
          "G",
          "H",
          "J",
          "K",
          "L",
          ";",
          "'",
          "Enter",
          "Shift",
          "Z",
          "X",
          "C",
          "V",
          "B",
          "N",
          "M",
          ",",
          ".",
          "/",
          "Shift",
          "Space"
        ];
        this.normalKeyList = normalKeyList
        this.shiftedKeyList = shiftedKeyList;
        this.capsedKeyList = capsedKeyList;
        if(this.hasShifted){
            this.keyList = this.shiftedKeyList;
        }else{
            this.keyList = this.normalKeyList;
        }
    }
  },
  watch:{
    shift(val){
      this.hasShifted=val
      if(this.hasShifted){
          this.keyList = this.shiftedKeyList;
      }else{
          this.keyList = this.normalKeyList;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.zn{
    >div:first-child{
        height: 30px;
        font-size: 20px;
        padding-left: 20px;
        position: relative;
        .icon{
            position: absolute;
            right: 75px;
            top: 0;
            line-height: 30px;
            i{
                display: inline-block;
                margin-left: 20px;
                font-size: 30px;
            }
        }
    }
    >div:last-child{
        height: 60px;
    }
    span{
        display: inline-block;
        width: 60px;
        text-align: center;
        line-height: 60px;
        font-size: 28px;
    }
}
.keyboard {
  width: 948px;
  margin: 0;
  padding: 0;
  list-style: none;
  user-select: none;

  li {
    float: left;
    margin: 0 5px 5px 0;
    width: 60px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    background: #fff;
    border: 1px solid #e5e5e5;
    border-radius: 5px;
    font-size: 24px;

    &:hover {
      position: relative;
      border-color: gray;
      cursor: pointer;
    }
    &:active {
      top: 1px;
      left: 1px;
    }
  }

  .tab,
  .delete {
    width: 70px;
    font-size: 20px;
  }
  .capslock {
    width: 107px;
    font-size: 20px;
  }
  .enter {
    width: 90px;
    font-size: 20px;
  }
  .shift {
    width: 132px;
    font-size: 20px;
  }
  .space {
    clear: left;
    width: 941px;
  }
  .shifted {
    position: relative;
    top: 1px;
    left: 1px;
    border-color: #e5e5e5;
    cursor: pointer;
  }
  .capsed {
    position: relative;
    top: 1px;
    left: 1px;
    border-color: #e5e5e5;
    cursor: pointer;
  }
}
</style>