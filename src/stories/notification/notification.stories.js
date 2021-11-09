import { successMessage, failMessage, informationNotification, iconInformationNotification } from "../../../utils/notificationMessages"

const infoNotification = informationNotification('Notification Title', 'This is a notification.')

const iconInfoNotification = iconInformationNotification('Icon Notification Title', 'This is a notification with an icon.')

const successNotification = successMessage('Success!')

const failureNotification = failMessage('Failure.')

export default {
  title: 'Components/Notification',
  includeStories: []
}

export const InformationNotification = () => ({
  data() {
    return {
      notification : infoNotification
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
      notification : iconInfoNotification
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
      notification : successNotification
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
      notification : failureNotification
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
