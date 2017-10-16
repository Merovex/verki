<template>
  <q-item link to="/inbox/2" dense>
    <q-item-main :label="name" sublabel='label label' />
    <q-item-side icon="record_voice_over" />
  </q-item>
</template>

<script>
import {
  QItem,
  QItemSide,
  QItemMain
} from 'quasar'

export default {
  props: ['binder-item'],
  components: {
    QItem,
    QItemSide,
    QItemMain
  }
}
</script>

<style>

</style>
