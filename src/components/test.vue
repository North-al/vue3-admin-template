<script lang="ts">
import { ElInput } from 'element-plus'
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'MyInput',
	extends: ElInput,
	setup(props, ctx) {
		console.log(ElInput, 'el-input')
		console.log(ElInput.expose)
		console.log(ElInput.methods)
	}
})
</script>
