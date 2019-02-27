<template>
  <el-row :gutter="40" class="panel-group">
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel" >
        <div class="card-panel-icon-wrapper icon-people">
            <i class="fa fa-users fa-fw"></i>
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">New Visits</div>
          <div class="card-panel-num">1250</div>
        </div>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel" >
        <div class="card-panel-icon-wrapper icon-message">
          <i class="fa fa-bell fa-fw"></i>
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">Messages</div>
          <div class="card-panel-num">6200</div>
        </div>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel" >
        <div class="card-panel-icon-wrapper icon-money">
          <i class="fa fa-rmb (alias) fa-fw"></i>
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">Purchases</div>
          <div class="card-panel-num">1594</div>
        </div>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel" >
        <div class="card-panel-icon-wrapper icon-shopping">
          <i class="fa fa-shopping-cart fa-fw"></i>
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">Shoppings</div>
          <div class="card-panel-num">58964</div>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
}
</script>

<style lang='less' scoped>
@import '~common/style/mixin.less';
.panel-group {
  .card-panel-col{
    margin-bottom: 32px;
  }
  .card-panel {
    .flex(space-between);
    height: 108px;
    cursor: pointer;
    font-size: 12px;
    position: relative;
    overflow: hidden;
    color: #666;
    background: #fff;
    box-shadow: 4px 4px 40px rgba(0, 0, 0, .05);
    border-color: rgba(0, 0, 0, .05);
    &:hover {
      .card-panel-icon-wrapper {
        color: #fff;
      }
      .icon-people {
         background: #40c9c6;
      }
      .icon-message {
        background: #36a3f7;
      }
      .icon-money {
        background: #f4516c;
      }
      .icon-shopping {
        background: #34bfa3
      }
    }
    .icon-people {
      color: #40c9c6;
    }
    .icon-message {
      color: #36a3f7;
    }
    .icon-money {
      color: #f4516c;
    }
    .icon-shopping {
      color: #34bfa3
    }
    .fa-fw{
        font-size: 50px;
    }
    .card-panel-icon-wrapper {
      float: left;
      margin: 8px 0 0 14px;
      padding: 10px;
      transition: all 0.38s ease-out;
      border-radius: 6px;
    }
    .card-panel-description {
      font-weight: bold;
    //   margin: 26px;
      margin-right: 20px;
      .card-panel-text {
        line-height: 18px;
        color: rgba(0, 0, 0, 0.45);
        font-size: 16px;
        margin-bottom: 12px;
      }
      .card-panel-num {
        font-size: 20px;
      }
    }
  }
}
</style>