<template>
  <div>
    <h2>About Buttons</h2>
    <p>Buttons are a vital element in creating a positive and productive user experience. At their most basic, UX buttons are styled links that grab the user’s attention and help drive them in a particular direction. Buttons can link us to other pages or complete an action like “Browse Datasets.” They are often used as calls to actions (CTA) we want our users to complete on our website.</p>

    <h3>Primary Button</h3>
    <p>This button is used for a primary call to action</p>
    <el-button>Button</el-button>
    <el-button disabled>Button</el-button>

    <h3>Secondary Button</h3>
    <p>This button is used for a non-primary call to action that still needs attention</p>
    <el-button class="secondary">Button</el-button>
    <el-button class="secondary" disabled>Button</el-button>

    <h3>Secondary (alt) Button</h3>
    <p>This button is used for a non-primary call to action</p>
    <el-button class="secondary alt">Button</el-button>
    <el-button class="secondary alt" disabled>Button</el-button>

    <h3>Danger</h3>
    <el-button class="danger">Button</el-button>
    <el-button class="danger" disabled>Button</el-button>
  </div>
</template>

<script>
  export default {
    name: 'ButtonDemo'
  }
</script>

<style lang="scss" scoped>

</style>
