<template>
  <div class="note__container">
    <div class="note__card" v-for="(data, n) in notes" :key="n + 'n'">
      <div class="note__header">
        {{ data.title}}
      </div>
      <div class="note__body">
        {{ data.desc }}
      </div>
      <div class="note__footer">
        <input type="button" :value="data.status" class="note__status">

      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      notes: [],
    }
  },
  created() {
    for (var x = 1; x <= 10; x++) {
      this.notes.push(
        {
          id: "n" + x,
          title: "Note no. " + x,
          desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          status: "To Do"
        }
      );
    }
  },
}
</script>

<style>

</style>