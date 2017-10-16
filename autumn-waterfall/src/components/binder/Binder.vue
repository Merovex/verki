<template>
	<div>
  <q-list no-border link inset-delimiter striped>
    <q-list-header>Binder</q-list-header>
    <binder-item v-for="item in items"></binder-item>
  </q-list>
	</div>
</template>

<script>
import {
  QList,
  QListHeader
} from 'quasar'

import BinderItem from './BinderItem.vue'

export default {
  data () {
    return {
      items: [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' },
        { id: 11, name: 'Item 1' },
        { id: 12, name: 'Item 2' },
        { id: 13, name: 'Item 3' },
        { id: 21, name: 'Item 1' },
        { id: 22, name: 'Item 2' },
        { id: 23, name: 'Item 3' },
        { id: 31, name: 'Item 1' },
        { id: 32, name: 'Item 2' },
        { id: 33, name: 'Item 3' },
        { id: 41, name: 'Item 1' },
        { id: 42, name: 'Item 2' },
        { id: 43, name: 'Item 3' },
        { id: 51, name: 'Item 1' },
        { id: 52, name: 'Item 2' },
        { id: 53, name: 'Item 3' },
        { id: 54, name: 'Item 4' }
      ]
    }
  },
  components: {
    BinderItem,
    QList,
    QListHeader
  }
}
</script>

<style>
</style>
