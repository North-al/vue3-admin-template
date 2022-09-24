module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true
	},
	extends: ['plugin:vue/vue3-essential', 'prettier', './.eslintrc-auto-import.json'],
	parserOptions: {
		ecmaVersion: 'latest',
		parser: '@typescript-eslint/parser',
		sourceType: 'module'
	},
	plugins: ['vue', '@typescript-eslint'],
	rules: {
		indent: ['error', 'tab', { ignoredNodes: ['ConditionalExpression'] }], // 空格
		semi: ['error', 'never'], // 分号
		quotes: [
			'warn',
			'single',
			{
				avoidEscape: true, //  允许字符串使用单引号或双引号，只要字符串中包含了一个其它引号，否则需要转义
				allowTemplateLiterals: true // 允许字符串使用反勾号
			}
		],
		'use-isnan': 'error', // 要求调用 isNaN()检查 NaN
		'no-multiple-template-root': 'off', // 允许有多个跟节点
		'getter-return': 'error', // 强制在 getter 属性中出现一个 return 语句
		'no-dupe-args': 'error', // 禁止 function 定义中出现重名参数
		'no-unreachable': 'error', // 禁止在 return、throw、continue 和 break 语句之后出现不可达代码
		'no-empty': 'warn', // 禁止出现空语句块
		'valid-typeof': [
			'warn',
			{
				requireStringLiterals: true
			}
		], // 强制 typeof 表达式与有效的字符串进行比较
		eqeqeq: 'warn', // 要求使用 === 和 !==, 主要是严谨
		'no-empty-pattern': 'warn', // 禁止使用空解构模式
		'no-multi-spaces': [
			'warn',
			{
				// 禁止出现多个空格
				ignoreEOLComments: true
			}
		],
		'no-self-assign': 'warn', // 禁止自我赋值
		'no-redeclare': 'error', // 禁止重新声明变量, 防止使用 var 可以对同一个变量再次声明
		'no-unused-labels': 'warn', // 禁用出现未使用过的标
		'no-useless-escape': 'warn', // 禁用不必要的转义
		'no-with': 'warn', // 禁用 with 语句
		'no-shadow-restricted-names': 'error', // 禁止将标识符定义为受限的名字
		/*
		 * @description 数组空格
		 * @link http://eslint.cn/docs/rules/array-bracket-spacing
		 * */
		'array-bracket-spacing': [
			'warn',
			'never',
			{
				objectsInArrays: false, // 禁止在数组的方括号和数组内的对象元素的大括号之间，即 [{ 或 }]出现空格
				arraysInArrays: false, // 禁止在数组的方括号和数组内的数组元素的方括号之间，即 [[ 或 ]]出现空格
				singleValue: false // 禁止在只包含一个元素的数组的括号内使用空格
			}
		],
		'block-spacing': 'error', // 禁止或强制在代码块中开括号前和闭括号后有空格
		'comma-dangle': ['warn', 'never'], // 要求或禁止使用拖尾逗号
		'comma-spacing': ['warn', { before: false, after: true }], // 逗号后面需要空格，前面不需要
		'no-mixed-spaces-and-tabs': 'error', // 禁止使用 空格 和 tab 混合缩进
		/*
		 * @description 不允许多个空行
		 * "max" (默认为 2) 强制最大连续空行数。
		 * "maxEOF" 强制文件末尾的最大连续空行数。
		 * "maxBOF" 强制文件开始的最大连续空行数。
		 * */
		'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 1 }],
		'no-trailing-spaces': 'error', // 禁用行尾空格
		'object-curly-spacing': ['warn', 'always'], // 强制在大括号中使用一致的空格
		'space-infix-ops': 'warn', // 要求操作符周围有空格
		'spaced-comment': ['warn', 'always'], // 注释空格
		'arrow-spacing': 'warn', // 要求箭头函数的箭头之前或之后有空格
		'no-var': 'warn', // 要求使用 let 或 const 而不是 var
		'no-undef': 'off',
		'explicit-module-boundary-types': 'off',
		'vue/multi-word-component-names': 'off'
	},
	overrides: [
		{
			// 指定后缀文件启用 TypeScript 规则
			files: ['*.ts', '*.tsx', '*.vue'],
			rules: {
				'@typescript-eslint/explicit-module-boundary-types': ['off'],
				'no-undef': 'off'
			}
		}
	]
}
