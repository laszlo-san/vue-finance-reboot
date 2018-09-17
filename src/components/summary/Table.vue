<template>
  <table v-if="data.length > 10" class="table table-hover table-bordered table-striped">
    <thead>
      <th>#<i class="fas fa-sort-down" @click="changeOrderBy"></i></th>
      <th>type</th>
      <th>ammount</th>
      <th>direction</th>
      <th>comment</th>
      <th>date</th>
    </thead>
    <tbody>
      <tr v-for="(item,index) in data" :key="item.id" @dblclick="deleteItem(index)">
        <td>{{ index + 1 }}</td>
        <td>{{ item.type }}</td>
        <td>{{ item.ammount }}</td>
        <td>{{ item.direction }}</td>
        <td>{{ item.comment }}</td>
        <td>{{ item.date }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: {
    data: Array,
  },
  data() {
    return {
      dataObjecKeys: [],
      orderBy: 'asc',
    };
  },
  methods: {
    ...mapActions([
      'deleteItem',
    ]),
    changeOrderBy() {
      this.data.reverse();
    },
  },
  created() {
    Object.keys(this.data[0]).forEach((item) => {
      if (item !== 'id') {
        this.dataObjecKeys.push(item);
      }
    });
  },
};

</script>
