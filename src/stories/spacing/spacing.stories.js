import './demo-styles.scss';

export default {
  title: 'Layout/Spacing'
}

export const MarginSingleSide = () => ({
  template: `
    <div class="spacing-demo-styles">
      <div class="wrapper"><div class="mt-32 target">Target</div></div>
      <div class="wrapper"><div class="mr-32 target">Target</div></div>
      <div class="wrapper"><div class="mb-32 target">Target</div></div>
      <div class="wrapper"><div class="ml-32 target">Target</div></div>
    </div>
  `
})

export const MarginAllSides = () => ({
  template: `
    <div class="spacing-demo-styles">
      <div class="wrapper"><div class="m-32 target">Target</div></div>
    </div>
  `
})

export const MarginVerticalSide = () => ({
  template: `
    <div class="spacing-demo-styles">
      <div class="wrapper"><div class="my-32 target">Target</div></div>
    </div>
  `
})

export const MarginHorizontalSide = () => ({
  template: `
    <div class="spacing-demo-styles">
      <div class="wrapper"><div class="mx-32 target">Target</div></div>
    </div>
  `
})


export const PaddingSingleSide = () => ({
  template: `
    <div class="spacing-demo-styles">
      <div class="wrapper pt-32"><div class="target">Target</div></div>
      <div class="wrapper pr-32"><div class="target">Target</div></div>
      <div class="wrapper pb-32"><div class="target">Target</div></div>
      <div class="wrapper pl-32"><div class="target">Target</div></div>
    </div>
  `
})

export const PaddingAllSides = () => ({
  template: `
    <div class="spacing-demo-styles">
      <div class="wrapper p-32"><div class="target">Target</div></div>
    </div>
  `
})

export const PaddingVerticalSide = () => ({
  template: `
    <div class="spacing-demo-styles">
      <div class="wrapper py-32"><div class="target">Target</div></div>
    </div>
  `
})

export const PaddingHorizontalSide = () => ({
  template: `
    <div class="spacing-demo-styles">
      <div class="wrapper px-32"><div class="target">Target</div></div>
    </div>
  `
})
