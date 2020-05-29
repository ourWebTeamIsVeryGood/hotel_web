<template>
	<div class="formId">
		<header>
			<gohome :width="60" :height="60"></gohome>
			<el-button type="danger" v-show="isKeyBoard" @click="isKeyBoard=false">关闭键盘</el-button>
		</header>
		<el-form ref="form" label-width="150px" :label-position="labelPosition" :model="form" :rules="rules">
			<el-form-item prop="name" label="姓名">
				<el-input @focus="keyboard('name')" v-model="form.name" placeholder="请输入姓名"></el-input>
			</el-form-item>
			<el-form-item prop="number" label="手机号">
				<el-input @focus="keyboard('number')" v-model="form.number" placeholder="请输入手机号"></el-input>
			</el-form-item>
			<el-form-item prop="cardNumber" label="身份证号">
				<el-input @focus="keyboard('cardNumber')" v-model="form.cardNumber" placeholder="请输入身份证号"></el-input>
			</el-form-item>
			<el-form-item prop="region" label="选择房型">
				<el-select style="width:100%" v-model="form.region" placeholder="请选择房型">
					<el-option label="房型一" value="shanghai"></el-option>
					<el-option label="房型二" value="beijing"></el-option>
				</el-select>
			</el-form-item>
			<el-form-item label="入住天数">
				<el-input-number v-model="form.num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
			</el-form-item>
			<el-form-item label="价格">
				<el-input v-model.number="form.jg" readonly></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="onSubmit">确认提交</el-button>
			</el-form-item>
		</el-form>
		<keyboard ref="keyboard" v-show="isKeyBoard" class="keyboard" :shift="shift" @delZn='delZn' @updatekey="updatekey"></keyboard>
  </div>
</template>
<script>
import gohome from '../components/gohome'
import keyboard from '../components/keyboard'
export default {
  name: "myForm",
  data() {
		var checkNumber = (rule, value, callback) => {
		if (!value) {
			return callback(new Error("手机号不能为空"));
		}
		var reg = /^1[3456789]\d{9}$/;
		if (!reg.test(value)) {
			return callback(new Error("请输入正确的手机号"));
		}
		callback();
	};
	var checkCardNumber = (rule, value, callback) => {
		if (!value) {
			return callback(new Error("身份证号不能为空"));
		}
		var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
		if (!reg.test(value)) {
			return callback(new Error("请输入正确的身份证号"));
		}else{
			let str = value.stringObject.slice(0,value.length-1);
			let arr=str.split("");
			let arr2="7 9 10 5 8 4 2 1 6 3 7 9 10 5 8 4 2".split(" ");
			let arr3="1 0 X 9 8 7 6 5 4 3 2".split(" ");
			var sum=0;
			for (let index = 0; index < arr.length; index++) {
				sum+=arr[index]*arr2[index];
			}
			let lastStr=arr3[sum%11];
			if(value[value.length-1].toLocaleUpperCase()!=lastStr.toLowerCase){
				return callback(new Error("请输入正确的身份证号"));
			}
		}
		callback();
	};
    return {
		labelPosition:"left",
		countDown:this.$countDown,
		form: {
			name: "",
			number: "",
			cardNumber: "",
			region: "",
			num: "",
			jg: ""
		},
		shift:true,
		isKeyBoard:false,
		rules:{
			name:[
				{required:true,message:'请输入姓名',trigger:'change'},
				{min:2,message:'最少两个字符',trigger: 'change'}
			],
			number:[
				{required:true,validator:checkNumber,trigger:'change'},
			],
			cardNumber:[
				{required:true,validator:checkCardNumber,trigger:'change'}
			],
			region:[
				{required:true,message:'请选择房型',trigger:'change'}
			]
		}
    };
  },
  created(){
	let timer = setInterval(() => {
		this.countDown--;
		if(this.countDown<=0){
			this.$router.push({
				path:'/'
			})
			clearInterval(timer);
		}
	}, 1000);
  },
  methods: {
	  initCountDown(){
		  this.countDown=this.$countDown;
	  },
    handleChange(value) {
      this.initCountDown();
    },
    onSubmit() {
		this.initCountDown();
		let money=1000;
		this.$refs["form"].validate((valid)=>{
			if(valid){
				this.$router.push({
					name: 'selectPay',
					params: {
						money: money
					}
				})
			}
		})
	},
	updatekey(a){
		this.initCountDown();
		if(this.setFormVal){
			console.log(this.setFormVal);
			if(this.setFormVal=="name"){
				this.form[this.setFormVal]+=a;
			}else{
				this.form[this.setFormVal]=a;
			}
		}
	},
	delZn(){
		this.initCountDown();
		let name=this.form.name
		this.form.name = name.length ? name.substring(0, name.length - 1) : name;
	},
	keyboard(str){
		this.initCountDown();
		if(str=="name"){
			this.shift=true;
		}else{
			this.shift=false;
		}
		this.$refs['keyboard'].setKeyvalue(this.form[str]);
		this.isKeyBoard=true;
		this.setFormVal=str;
	}
  },
  components:{gohome,keyboard}
};
</script>
<style lang="scss" scoped>
.formId{
	width: 100vw;
	height: 100vh;
	overflow: hidden;
}
.el-form{
	box-sizing: border-box;
	padding: 20px 50px 0;
}
header{
	margin-left: 50px;
	margin-top: 20px;
	margin-right: 50px;
	display: flex;
	justify-content: space-between;
	.el-button{
		font-size: 26px;
		line-height: 60px;
	}
}
.keyboard{
	position: fixed;
	bottom: 0;
	left: 50%;
	transform: translate(-50%,0);
	background-color: #fff;
	z-index: 1000;
}
</style>