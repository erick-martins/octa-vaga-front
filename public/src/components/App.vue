<template>
  <div id="app">

    <Sidebar />
    <DropArea />
  </div>
</template>


<script>
  import Sidebar from './Sidebar.vue';
  import DropArea from './DropArea.vue';

  export default {
    name: 'app',
    data() {
      return {}
    },
    components: {
      Sidebar,
      DropArea
    },

  }
</script>


<style>
.drop-area {
    width: 100%;
    min-height: 100%;
    background: #fff;
    display: block;
    padding: 20px;
    position: absolute;
    z-index: 1;
    padding-left: 95px;
    padding-top: 80px;
}
.components-drop {
    width: 100%;
    min-height: 100%;
    background: #fff;
    display: block;
    padding: 50px 20px;
    border: 1px dashed #CCC;
}

.component-panel {
    background-color: #4c4e54;
    color: #FFF;
    border-radius: 10px 10px 0px 0px;
    padding: 0px 10px;
    text-align: right;
    margin-top: -24px;
    opacity: 0;
}
.component-panel a {
    padding: 2px 8px 2px 15px;
    border-left: 1px solid rgba(255, 255, 255, 0.5);
    font-size: 14px;
}
.form-component:hover .component-panel,
.component-panel.component-panel-true{
  opacity: 1;
}
.form-component{
border: 1px dashed transparent;
}
.form-component:hover{
border: 1px dashed #CCC;
}
.components {
    padding: 10px;
}
.component-item {
    font-size: 26px;
    text-align: center;
    margin: 5px 0px;
    padding: 5px 0px;
    cursor: all-scroll;
    color: #4c4e54;
}
.sidebar {
    width: 75px;
    background: #dddddd;
    height: 100%;
    position: absolute;
    border-right: 1px solid #d6d6d6;
    z-index: 2;
}
.sidebar img {
    width: 45px;
    margin: 10px auto;
    display: block;
}
.sidebar-logo {
    padding: 10px;
}
.editor {
    padding: 20px;
    text-align: left;
}
.editor .form-group label{
  text-align:right;
}
.editor strong {
    margin-top: 20px;
    display: block;
    margin-bottom: 10px;
    background-color: rgba(0, 0, 0, 0.05);
}
#top-bar {
    width: 100%;
    position: absolute;
    padding: 10px;
    padding-left: 0px;
    margin-top: -80px;
    background: #4c4e54;
    margin-left: -95px;
    text-align: right;
}
#top-bar button {
    color: #FFF;
    cursor:pointer;
}
.modal-backdrop{
  z-index: 0;
}
#preview { border: 4px solid #88c; }
@media (max-width: 1024px)
{
  .sidebar {
    width: 200px;
    display: table;
    vertical-align: middle;
    height: 67px;
  }
  .sidebar > div {
      display: table-cell;
      padding: 0 10px;
  }
  .sidebar-logo {
      padding: 10px;
  }
  .components {
      padding: 0px;
      margin: 0px;
  }
  .components-items-list {
      width: 200px;
  }
  .component-item {
      padding: 9px 20px;
      float: left;
  }
  .drop-area {
      padding-left: 20px;
  }
  #top-bar {
      height: 67px;
      margin-left: -20px;
      padding-top: 13px;
  }

}
@media (max-width: 768px)
{

  #top-bar {
    margin-top: -13px;
    padding: 0;
    height: 40px;
    text-align: center;
    bottom: 0;
  }
  .sidebar {
      width: 100%;
  }
  .sidebar-logo {
      width: 80px;
  }
  .drop-area{
    padding-bottom: 50px;
  }
}

</style>
