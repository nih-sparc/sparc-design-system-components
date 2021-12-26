import LargeModal from '@/components/LargeModal/src/LargeModal.vue'

export default {
  title: 'Components/LargeModal',
  includeStories: []
}

export const Primary = () => {
  return {
    components: { LargeModal },
    data() {
      return {
        dialogVisible: 'true',
      }
    },
    template: `
      <div>
        <large-modal
          :visible="dialogVisible"
          @close-download-dialog="dialogVisible = false"
        >
          <div class="content" slot="optionalContent">
            <h1 class="mt-0">Direct download</h1>
            <div>
              <p>You can download the raw files and metadata directly to your computer as a zip archive free of charge.</p>
              <p class="download-container__download-dataset-size">
                Dataset Size: 17.43 GB
              </p>
              <el-button class="download-button">Download</el-button>
            </div>
          </div>
          <div class="content" slot="mainContent">
            <h1 class="mt-0">Download from AWS</h1>
            <p>
              Raw files and metadata are stored in an AWS S3 Requester Pays bucket.
              You can learn more about downloading data from AWS on our
              <a href="/#" target="_blank">Help Page</a>.
            </p>
            <div>
              <p>*Requester pays means that any costs associated with downloading the data will be charged to your AWS account.
                For transfer pricing information, visit the <a href="https://aws.amazon.com/s3/pricing/" target="blank">AWS Pricing documentation.</a>
              </p>
              <div>
              <el-button class="secondary" @click="dialogVisible = false">
                Close
              </el-button>
              </div>
            </div>
          </div>
        </large-modal>
        <el-button
          plain
          @click="dialogVisible = true">
          Open Large Modal
        </el-button>
      </div>
    `
  }
}
