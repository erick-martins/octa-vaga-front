<template>
  <div class="sidebar">
    <div class="sidebar-logo">
      <img src="/images/logo-octadesk-small.png" alt="Octadesk">
    </div>
    <div class="components">
      <draggable v-model="components"
                class="components-items-list" :options="dragOptions" :clone="onClone">
        <div v-for="component in components" :key="component.id" class="component-item"><i :class="component.icon"></i></div>
      </draggable>
    </div>
  </div>
</template>

<script>
  import draggable from 'vuedraggable';

  export default {
    components: {
      draggable
    },
    data() {
      return {
        components: [
          { icon:"fas fa-keyboard", title: 'Text Field', type: 'input', id: '1' },
          { icon:"fas fa-check-square", title: 'CheckBox List', type: 'checkbox-list', id: '2' },
          { icon:"far fa-hand-point-down", title: 'Button', type: 'button', id: '3' }
        ]
      }
    },
    computed: {
      dragOptions () {
        return  {
          group: {
            name: 'items',
            pull: 'clone',
            put: false
          },
          sort: false
        };
      }
    },
    methods: {
      onClone (item) {
        let id = this.uniqueID()
        return {
          id: id,
          name: id,
          type: item.type,
          inputType: '',
          title: item.title,
          editing: false,
          placeholder: '',
          items: 'item 1;item 2',
          skin: 'primary',
          style: {
            component: {
              background: '',
              color: ''
            },
            label:{
              background: '',
              color: ''
            }
          }

        };
      },
      uniqueID() {
        return (Date.now().toString(36) + Math.random().toString(36).substr(2, 5));
      }
    }
}
</script>
