<template>
	<div id="app">
		<router-view/>
	</div>
</template>

<style lang="scss">
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #2c3e50;
	}
	body {
		margin: 0;
		padding: 0;
	}
	.el-form-item label{
		font-size: 26px !important;
	}
	.el-input{
		font-size: 26px !important;
		input{
			height: 60px !important;
			line-height: 60px !important;
		}
	}
	.el-select-dropdown__item{
		height: 60px !important;
		span{
			font-size: 26px !important;
		}
		line-height: 60px !important;
		
	}
	.el-scrollbar{
		height: auto !important;
	}
	.el-input-number{
		.el-input-number__increase,.el-input-number__decrease{
			width: 60px;
			height: 60px;
			line-height: 60px;
			font-size: 26px;
		}
	}
	.el-form .el-form-item{
		margin-bottom:30px;
		.el-button{
			font-size: 26px;
			line-height: 60px;
			width: 350px;
		}
		.el-select .el-input .el-select__caret{
			font-size: 26px;
			line-height: 60px;
		}
		.el-form-item__error{
			font-size: 20px;
		}
	}
	.el-message-box{
		.el-message-box__message{
			font-size: 32px;
			
		}
		.el-message-box__content{
			height: 50px;
			line-height: 50px;
		}
		.el-message-box__status,.el-icon-warning{
			font-size: 32px !important;
		}
		.el-button{
			font-size: 26px;
		}
	}
</style>
