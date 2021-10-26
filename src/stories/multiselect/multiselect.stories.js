import MultiSelect from '@/components/MultiSelect/src/MultiSelect.vue'

export default {
  title: 'Components/MultiSelect',
  includeStories: []
}

const createDemo = (options) => {
  return {
    components: { MultiSelect },
    data() {
      return {
        options: options
      }
    },
    template: `
      <div class="multiselect">
				<multi-select
					:options="options"
				/>
      </div>
    `
  }
}

export const SingleLevel = () => createDemo(
	[{
		value: 1,
		label: 'Asia',
	}, {
		value: 14,
		label: 'Europe',
	}, {
		value: 23,
		label: 'North America',
	}]
)


export const MultiLevel = () => createDemo(
  [{
		value: 1,
		label: 'Asia',
		children: [{
			value: 2,
			label: 'China',
		}, {
			value: 6,
			label: 'Japan',
		}, {
			value: 10,
			label: 'Korea',
		}]
	}, {
		value: 14,
		label: 'Europe',
		children: [{
			value: 15,
			label: 'France'
		}, {
			value: 19,
			label: 'UK',
		}]
	}, {
		value: 23,
		label: 'North America',
		children: [{
			value: 24,
			label: 'US'
		}, {
			value: 28,
			label: 'Canada'
		}]
	}]
)