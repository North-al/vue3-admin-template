<template>
	<div class="material">
		<input
			v-model="value"
			:disabled="disabled"
			:required="required"
			:type="type"
			@focus="onFocus"
			@blur="onBlur"
			@change="onChange"
			class="material-input"
		/>
		<span class="material-highlight"></span>
		<div class="material-bar"></div>
		<label class="material-label">{{ label }}</label>
	</div>
</template>

<script setup lang="ts">
interface MaterialInputProps {
	modelValue: string | number
	label?: string
	required?: boolean
	disabled?: boolean
	readonly?: boolean
	type?: string
}

interface MaterialInputEmits {
	(event: 'update:modelValue', value: string | number): void
	(event: 'focus', value: string | number): void
	(event: 'blur', value: string | number): void
	(event: 'change', value: string | number): void
}

const props = withDefaults(defineProps<MaterialInputProps>(), {
	label: '',
	required: true,
	disabled: false,
	type: 'text'
})

const emits = defineEmits<MaterialInputEmits>()

const value = computed({
	get() {
		return props.modelValue || ''
	},
	set(v: string | number) {
		emits('update:modelValue', v)
	}
})

const onFocus = () => {
	emits('focus', props.modelValue)
}

const onBlur = () => {
	emits('blur', props.modelValue)
}

const onChange = () => {
	emits('change', props.modelValue)
}
</script>

<style lang="scss" scoped>
$material-primary: #2196f3;
$material-border: #757575;

input {
	outline: none;
	border: none;
	background-color: transparent;
}

.material {
	position: relative;
	margin-bottom: 45px;

	&-input {
		display: block;
		width: 100%;
		font-size: 14px;
		padding: 10px 10px 10px 5px;
		border-bottom: 1px solid $material-border;

		&:focus ~ .material-label,
		&:valid ~ .material-label {
			top: -10px;
			font-size: 14px;
			color: $material-primary;
		}

		&:focus ~ .material-bar:before,
		&:focus ~ .material-bar:after {
			width: 50%;
		}

		&:focus ~ .material-highlight {
			animation: inputHighlighter 0.3s ease;
		}
	}

	&-label {
		color: #999;
		font-size: 12px;
		font-weight: normal;
		position: absolute;
		z-index: 1;
		pointer-events: none;
		left: 4px;
		top: 14px;
		transition: 0.2s ease all;
	}

	&-bar {
		position: relative;

		&:before,
		&:after {
			content: '';
			height: 2px;
			width: 0;
			bottom: 1px;
			position: absolute;
			background: $material-primary;
			transition: 0.2s ease all;
		}
		&:before {
			left: 50%;
		}
		&:after {
			right: 50%;
		}
	}

	&-highlight {
		position: absolute;
		height: 60%;
		top: 25%;
		left: 0;
		pointer-events: none;
		opacity: 0.5;
	}
}

@keyframes inputHighlighter {
	from {
		background: $material-primary;
	}
	to {
		width: 0;
		background: transparent;
	}
}
</style>
