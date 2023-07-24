<template>
  <div class="app-content">
    <el-card>
      <el-form inline>
        <el-form-item label="角色名称">
          <el-input placeholder="请输入角色名称"></el-input>
        </el-form-item>
        <el-form-item label="角色编码">
          <el-input placeholder="请输入角色编码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" icon="Search">查询</el-button>
          <el-button icon="Refresh">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>

    <el-card class="clearFix">
      <el-row>
        <el-button type="primary" icon="Plus">新增</el-button>
        <el-button type="primary" icon="Download">导出</el-button>
        <el-button type="primary" icon="Upload">导入</el-button>
      </el-row>

      <el-table :data="roleList" border highlight-current-row>
        <el-table-column align="center" label="角色名称" prop="roleName"></el-table-column>
        <el-table-column align="center" label="角色编码" prop="roleCode"></el-table-column>
        <el-table-column align="center" label="创建时间" prop="createTime"></el-table-column>
        <el-table-column align="center" label="操作">
          <template #default="scope">
            <div class="edit-row">
              <el-text type="primary" class="item">用户</el-text>
              <el-text type="primary" class="item">授权</el-text>
              <el-dropdown class="item">
                <span class="el-dropdown-link">
                  <span>更多</span>
                  <el-icon class="el-icon--right"><ArrowDown /></el-icon>
                </span>
                <template #dropdown>
                  <el-dropdown-menu>
                    <el-dropdown-item>编辑</el-dropdown-item>
                    <el-dropdown-item>详情</el-dropdown-item>
                    <el-dropdown-item>删除</el-dropdown-item>
                    <el-dropdown-item>首页配置</el-dropdown-item>
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
            </div>
          </template>
        </el-table-column>
      </el-table>

      <el-row class="pagination-container">
        <el-pagination background layout="total, prev, pager, next, sizes" :total="10" />
      </el-row>
    </el-card>
  </div>
</template>

<script setup lang="ts">
defineOptions({ name: 'Role' })

const roleList = [
  { roleName: '管理员', roleCode: 'admin', createTime: '2018-12-21 18:03:39' },
  { roleName: '临时工', roleCode: 'temp', createTime: '2018-12-20 10:59:04' },
  { roleName: '财务出纳', roleCode: 'treasurer', createTime: '2018-12-22 18:03:39' },
  { roleName: '人力资源部', roleCode: 'hr', createTime: '2018-12-22 18:03:39' },
  { roleName: '第三方登录角色', roleCode: 'third_role', createTime: '2020-05-02 18:20:58' },
]
</script>

<style lang="scss" scoped>
.app-content {
  .el-card {
    &:not(:first-of-type) {
      margin-top: 16px;
    }
  }
  .el-form-item {
    margin-bottom: 0;
  }

  .edit-row {
    display: flex;
    justify-content: center;
    align-items: center;
    .item {
      font-size: 14px;
      &:not(:first-of-type) {
        margin-left: 12px;
      }
      &.el-dropdown {
        display: flex;
        align-items: center;
        line-height: inherit;
        margin-left: 12px;
      }
    }
  }

  .el-table {
    margin: 16px 0;
  }

  .pagination-container {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
  }

  .el-dropdown-link {
    cursor: pointer;
    color: var(--el-color-primary);
    &:focus-visible {
      outline: none;
    }
  }
}

.mobile {
  .el-form-item {
    margin-bottom: 16px;
  }
}
</style>
