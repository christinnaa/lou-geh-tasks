<template>
  <div class="note__container">

    <div class="note__filter">
      <button :class="`note__filterButton ${chosenTab == 1 ? 'chosenTab':''}`" @click="chooseTab(1)">
        <font-awesome-icon icon="list" /> &nbsp; All Tasks
      </button>
      <button :class="`note__filterButton ${chosenTab == 2 ? 'chosenTab':''}`" @click="chooseTab(2)">
        <font-awesome-icon icon="square" /> &nbsp; To Dos
      </button>
      <button :class="`note__filterButton ${chosenTab == 3 ? 'chosenTab':''}`" @click="chooseTab(3)">
        <font-awesome-icon icon="bars-progress" /> &nbsp; In Progress
      </button>
      <button :class="`note__filterButton ${chosenTab == 4 ? 'chosenTab':''}`" @click="chooseTab(4)">
        <font-awesome-icon icon="square-check" /> &nbsp; Done
      </button>
      <button :class="`note__filterButton ${chosenTab == 5 ? 'chosenTab':''}`" @click="chooseTab(5)">
        <font-awesome-icon icon="ban" /> &nbsp; Cancelled
      </button>
    </div>

    <div class="note__scroller">
      <div class="note__holder" v-for="(data, n) in notes_list" :key="n + 'n'">
        <div class="note__card">
          <div class="note__header"> {{ data.title}} </div>
          <div class="note__body"> {{ data.desc }} </div>
          <div class="note__footer">

            <input type="button" :value="data.status" :class="`note__status ${data.class}`" @click="open_card(n)">
          </div>

        </div>

        <div class="note__dropdown" v-show="n == current_card && current_card != null">
          <div class="note__statuss" v-for="(data, s) in noteStatus" :key="'s'+s" @click="changeStatus(n, data)">
            {{ data.status}}
          </div>

        </div>
      </div>
    </div>


  </div>
</template>

<script>
export default {
  data() {
    return {
      notes: [],
      chosenTab: 1,
      tab_key: "",
      noteStatus: [
        {
          id: 0,
          status: "To Do",
          class: "notesCommon"
        },
        {
          id: 1,
          status: "In Progress",
          class: "notesEdit"
        },
        {
          id: 2,
          status: "Done",
          class: "notesSuccess"
        },
        {
          id: 3,
          status: "Cancelled",
          class: "notesCrit"
        },
      ]
    }
  },
  methods: {
    chooseTab(tab) {
      this.chosenTab = tab;

      if (tab == 1) {
        //all tasks
        this.tab_key = "";
      } else if (tab == 2) {
        // To Dos
        this.tab_key = "to do";

      } else if (tab == 3) {
        // in progress
        this.tab_key = "in progress";

      } else if (tab == 4) {
        // done
        this.tab_key = "done";

      } else if (tab == 5) {
        // cancelled
        this.tab_key = "cancelled";

      }
    },

    changeStatus(key, status) {
      // console.log(key);
      this.$store.dispatch("change_status", { key: key, status: status });
    },
    open_card(index) {
      console.log(index);
      this.$store.dispatch("open_card", { index: index });
    },
    getNotes() {
      for (var x = 0; x < 8; x++) {
        this.notes.push(
          {
            id: "n" + x,
            title: "Note no. " + x,
            desc: "Lorem Ipsum is simply dummy text of the xprinting and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            status: "To Do",
            class: "notesCommon"
          }
        );
      }
      this.$store.dispatch("store_notes", { notes: this.notes });

    }


  },
  created() {
    // POPULATE notes ARRAY
    this.getNotes();

    // PUT DATA ON STATE notes
    this.$store.dispatch("store_notes", { notes: this.notes });

    // STORE notes ARRAY IN LOCAL STORAGE
    localStorage.notes = JSON.stringify(this.notes);

    // REVERT STRING TO ARRAY OBJECT
    // var temp = JSON.parse(localStorage.notes);
    // console.log(localStorage.notes);
    // console.log(tem{key: key}
  },
  computed: {
    statuss() {
      return this.$store.getters.getCardStatus;
    },
    notes_list() {
      return this.$store.getters.getNotes.filter(data => {
        return (String(data.status).toLowerCase().includes(this.tab_key));
      });
    },
    current_card() {
      return this.$store.getters.getOpenCard;
    }
  }
}
</script>

<style>

</style>