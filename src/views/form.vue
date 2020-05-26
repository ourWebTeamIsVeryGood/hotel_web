<template>
	<el-form ref="form" :model="form">
		<el-form-item label="活动名称">
			<el-input v-model="form.name"></el-input>
		</el-form-item>
		<el-form-item label="活动区域">
			<el-select v-model="form.region" placeholder="请选择活动区域">
			<el-option label="区域一" value="shanghai"></el-option>
			<el-option label="区域二" value="beijing"></el-option>
			</el-select>
		</el-form-item>
		<el-form-item label="活动时间">
			<el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
		</el-form-item>
		<el-form-item>
			<el-button type="primary" @click="onSubmit">确认提交</el-button>
		</el-form-item>
	</el-form>
</template>
<script>
export default {
    name: 'form',
    data(){
        return{
            
        }
	},
	methods:{
		handleChange(value){
			console.log(value);
		},
		onSubmit(){

		}
	}
}
</script>
<style lang="scss" scoped>

</style>