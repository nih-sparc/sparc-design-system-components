export default {
  title: 'Components/Notification',
  includeStories: []
}

export const InformationNotification = () => ({
  data() {
    return {
      notification : {
        title: 'Notification Title',
        message: 'This is a notification.',
        showClose: true,
        iconClass: 'hide-icon',
        duration: 5000
      }
    }
  },
  methods: {
    clickHandler() {
      this.$notify(this.notification)
    }
  },
  template: `
    <el-button
      plain
      @click="clickHandler">
      Show Notification
    </el-button>
  `
})

export const IconInformationNotification = () => ({
  data() {
    return {
      notification : {
        title: 'Icon Notification Title',
        message: 'This is a notification with an icon.',
        showClose: true,
        iconClass: 'about-icon',
        duration: 5000
      }
    }
  },
  methods: {
    clickHandler() {
      this.$notify(this.notification)
    }
  },
  template: `
    <el-button
      plain
      @click="clickHandler">
      Show Notification
    </el-button>
  `
})

export const SuccessNotification = () => ({
  data() {
    return {
      notification : {
        message: 'Success!',
        showClose: true,
        iconClass: 'el-icon-circle-check',
        customClass: 'el-message--success',
        duration: 5000
      }
    }
  },
  methods: {
    clickHandler() {
      this.$message(this.notification)
    }
  },
  template: `
    <el-button
      plain
      @click="clickHandler">
      Show Notification
    </el-button>
  `
})

export const FailureNotification = () => ({
  data() {
    return {
      notification : {
        message: 'Failure.',
        showClose: true,
        iconClass: 'el-icon-circle-close',
        customClass: 'el-message--error',
        duration: 5000
      }
    }
  },
  methods: {
    clickHandler() {
      this.$message(this.notification)
    }
  },
  template: `
    <el-button
      plain
      @click="clickHandler">
      Show Notification
    </el-button>
  `
})
