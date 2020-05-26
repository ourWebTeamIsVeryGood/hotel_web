<template>
	<div>
		<header>
			<gohome :width="60" :height="60"></gohome>
		</header>
		<el-form ref="form" id="form" label-width="150px" :label-position="labelPosition" :model="form" :rules="rules">
			<el-form-item prop="name" label="姓名">
				<el-input id="name" v-model="form.name" placeholder="请输入姓名"></el-input>
			</el-form-item>
			<el-form-item prop="number" label="手机号">
				<el-input id="number" v-model.number="form.number" placeholder="请输入手机号"></el-input>
			</el-form-item>
			<el-form-item prop="cardNumber" label="身份证号">
				<el-input id="cardNumber" v-model.number="form.cardNumber" placeholder="请输入身份证号"></el-input>
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
  </div>
</template>
<script>
import gohome from '../component/gohome'
export default {
  name: "form",
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
		}
		callback();
	};
    return {
		labelPosition:"left",
		form: {
			name: "",
			tel: "",
			card: "",
			region: "",
			num: "",
			jg: ""
		},
	  rules:{
		name:[
			{required:true,message:'请输入姓名',trigger:'blur'},
			{min:2,message:'最少两个字符',trigger: 'blur'}
		],
		number:[
			{required:true,validator:checkNumber,trigger:'blur'},
		],
		cardNumber:[
			{required:true,validator:checkCardNumber,trigger:'blur'}
		],
		region:[
			{required:true,message:'请选择房型',trigger:'change'}
		]
	  }
    };
  },
  mounted(){
	  var str="name";
	  console.log($("#"+str+">input"))
  },
  methods: {
    handleChange(value) {
      console.log(value);
    },
    onSubmit() {
		this.$refs["form"].validate((valid)=>{
			if(valid){

			}
		})
	},
  },
  components:{gohome}
};
</script>
<style lang="scss" scoped>
.el-form{
	margin: 20px 50px 0;
}
header{
	margin-left: 50px;
	margin-top: 20px;
	// position: fixed;
	// left: 50px;
	// top: 20px;
}
</style>