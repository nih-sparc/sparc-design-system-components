import DropdownMultiselect from '@/components/DropdownMultiselect/src/DropdownMultiselect.vue'
import './demo-styles.scss';

export default {
  title: 'Components/DropdownMultiselect',
  includeStories: []
}

const createDemo = (category) => {
  return {
    components: { DropdownMultiselect },
    data() {
      return {
        category: category,
      }
    },
    template: `
      <div class="fit-content">
        <dropdown-multiselect
          :category="category"
        />
      </div>
    `
  }
}

const createDemoWithTooltip = (category) => {
  return {
    components: { DropdownMultiselect },
    data() {
      return {
        category: category,
        tooltip: "This is a tooltip for the<br/>dropdown multiselect<br/>component."
      }
    },
    template: `
      <div class="fit-content">
        <dropdown-multiselect
          :category="category"
          :tooltip="tooltip"
        />
      </div>
    `
  }
}

export const OneOption = () => createDemo(
  {
    label: 'One Option',
    id: '0',
    data: [
    {
      label: 'One',
      id: '1',
    }]
  }
)

export const TwoOptions = () => createDemo(
  {
    label: 'Two Options',
    id: '0',
    data: [
    {
      label: 'One',
      id: '1',
    },
    {
      label: 'Two',
      id: '2',
    }]
  }
)

export const NineOptions = () => createDemo(
  {
    label: 'Nine Options',
    id: '0',
    data: [
    {
      label: 'One',
      id: '1',
    },
    {
      label: 'Two',
      id: '2',
    },
    {
      label: 'Three',
      id: '3',
    },
    {
      label: 'Four',
      id: '4',
    },
    {
      label: 'Five',
      id: '5',
    },
    {
      label: 'Six',
      id: '6',
    },
    {
      label: 'Seven',
      id: '7',
    },
    {
      label: 'Eight',
      id: '8',
    },
    {
      label: 'Nine',
      id: '9',
    }]
  }
)

export const FifteenOptions = () => createDemo(
  {
    label: 'Fifteen Options',
    id: '0',
    data: [
    {
      label: 'One',
      id: '1',
    },
    {
      label: 'Two',
      id: '2',
    },
    {
      label: 'Three',
      id: '3',
    },
    {
      label: 'Four',
      id: '4',
    },
    {
      label: 'Five',
      id: '5',
    },
    {
      label: 'Six',
      id: '6',
    },
    {
      label: 'Seven',
      id: '7',
    },
    {
      label: 'Eight',
      id: '8',
    },
    {
      label: 'Nine',
      id: '9',
    },
    {
      label: 'Ten',
      id: '10'
    },
    {
      label: 'Eleven',
      id: '11',
    },
    {
      label: 'Twelve',
      id: '12',
    },
    {
      label: 'Thirteen',
      id: '13',
    },
    {
      label: 'Fourteen',
      id: '14',
    },
    {
      label: 'Fifteen',
      id: '15'
    }]
  }
)

export const Multilevel = () => createDemo(
  {
    label: 'Multi-Level',
    id: '0',
    data: [
    {
      label: 'One',
      id: '1',
      children: [
      {
        label: 'Child One',
        id: '6',
      },
      {
        label: 'Child Two',
        id: '7',
      },
      {
        label: 'Child Three',
        id: '8',
      }]
    },
    {
      label: 'Two',
      id: '2',
    },
    {
      label: 'Three',
      id: '3',
      children: [
      {
        label: 'Child One',
        id: '9',
      },
      {
        label: 'Child Two',
        id: '10',
      },
      {
        label: 'Child Three',
        id: '11',
      },
      {
        label: 'Child Four',
        id: '12',
      },
      {
        label: 'Child Five',
        id: '13',
      },
      {
        label: 'Child Six',
        id: '14',
      },
      {
        label: 'Child Seven',
        id: '15',
      },
      {
        label: 'Child Eight',
        id: '16',
      },
      {
        label: 'Child Nine',
        id: '17',
      }]
    },
    {
      label: 'Four',
      id: '4',
    },
    {
      label: 'Five',
      id: '5',
    }]
  }
)

export const HelpIcon = () => createDemoWithTooltip(
  {
    label: 'Multiselect with help icon',
    id: '0',
    data: [
    {
      label: 'One',
      id: '1',
    },
    {
      label: 'Two',
      id: '2',
    },
    {
      label: 'Three',
      id: '3',
    },
    {
      label: 'Four',
      id: '4',
    },
    {
      label: 'Five',
      id: '5',
    }]
  }
)