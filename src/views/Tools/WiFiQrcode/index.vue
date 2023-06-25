<template>
  <div class="app-content">
    <el-form class="wifi-form" :model="wifiForm" ref="wifiFormRef" :rules="wifiFormRules" :label-position="labelPosition" label-width="90px">
      <h3 class="title">WiFi 二维码制作</h3>
      <el-form-item label="WiFi 账号" prop="account">
        <el-input v-model="wifiForm.account" placeholder="请输入您的 WiFi 账号" name="account"></el-input>
      </el-form-item>

      <el-form-item label="WiFi 密码" prop="password">
        <el-input v-model="wifiForm.password" type="password" show-password placeholder="请输入您的 WiFi 密码" name="password"></el-input>
      </el-form-item>

      <el-form-item label="WiFi Logo">
        <el-upload :before-upload="beforeUpload" class="wifi-upload">
          <img :src="wifiForm.logoURL" v-if="wifiForm.logoURL" alt="logo" class="logo" draggable="false" />
          <el-icon v-else :size="30" color="var(--el-border-color)"><Plus /></el-icon>
        </el-upload>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="createCodeText" style="width: 100%">生成</el-button>
      </el-form-item>
    </el-form>

    <!-- WiFi 二维码预览弹框 -->
    <el-dialog title="WiFi 二维码预览" v-model="visiable" width="500px" center :before-close="beforeClose">
      <div class="dialog-content">
        <Qrcode :text="codeText" :logo-src="wifiForm.logoURL" :margin="0" :callback="data => (qrcodeData = data)" />
      </div>
      <el-row type="flex" justify="center" style="margin-top: 16px">
        <el-button @click="beforeClose">取消</el-button>
        <el-button type="success" @click="downloadQrcode">下载</el-button>
      </el-row>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import type { FormInstance, FormRules, UploadRawFile } from 'element-plus'

const appStore = useApp()
const { device } = storeToRefs(appStore)
// 动态计算 label 的位置
const labelPosition = computed(() => (device.value === 'mobile' ? 'top' : 'left'))

const wifiFormRef = ref<FormInstance>()
const wifiForm = reactive({
  account: '',
  password: '',
  logoURL: '',
})
const wifiFormRules: FormRules = {
  account: [{ required: true, message: 'WiFi 账号为必填项', trigger: 'blur' }],
  password: [{ required: true, message: 'WiFi 密码为必填项', trigger: 'blur' }],
}

// 上传文件之前的钩子，参数为上传的文件， 若返回false或者返回 Promise 且被 reject，则停止上传
function beforeUpload(rawFile: UploadRawFile) {
  const fileReader = new FileReader()
  fileReader.readAsDataURL(rawFile)
  fileReader.onload = (event: ProgressEvent<FileReader>) => {
    wifiForm.logoURL = event.target?.result as string
  }
  return false
}

// 二维码预览弹框是否展示
const visiable = ref(false)
// 关闭弹框
function beforeClose() {
  codeText.value = ''
  visiable.value = false
}

// 用来生成二维码的内容
const codeText = ref('')
// 生成的二维码的 base64 图片数据
const qrcodeData = ref('')
async function createCodeText() {
  try {
    await wifiFormRef.value?.validate()
    const { account, password } = wifiForm
    codeText.value = `WIFI:T:WPA2;S:${account};P:${password};H:false;`
    visiable.value = true
  } catch (error) {
    console.log('error: ', error)
  }
}
// 下载二维码
function downloadQrcode() {
  const a = document.createElement('a')
  a.download = wifiForm.account
  a.href = qrcodeData.value
  document.body.appendChild(a)
  a.click()
  a.remove()
}
</script>

<style lang="scss" scoped>
:deep(.wifi-upload) {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  transition: var(--el-transition-duration-fast);
  border: 1px dashed var(--el-border-color);
  .logo {
    width: 60px;
    height: 60px;
  }
  &:hover {
    border-color: var(--el-color-primary);
  }
}
.app-content {
  display: flex;
  justify-content: center;
}
.wifi-form {
  width: 800px;
  padding: 25px 25px 5px 25px;
  border-radius: 16px;
  background-color: #fff;
  box-shadow: 0 5px 10px 1px #0f15331a, inset -1px 1px 1px #fffc;
  .title {
    margin: 0px auto 30px auto;
    text-align: center;
    color: #707070;
  }
}

.dialog-content {
  display: flex;
  justify-content: center;
}
</style>
