<template>
    <div class="list row">
      <div class="col-md-6">
        <h4>Lembretes List</h4>
        <ul class="list-group">
          <li
            class="list-group-item"
            :class="{ active: index == currentIndex }"
            v-for="(Lembrete, index) in Lembretes"
            :key="index"
            @click="setActiveLembrete(Lembrete, index)"
          >
            {{ Lembrete.title }}
          </li>
        </ul>
  
        <button class="m-3 btn btn-sm btn-danger" @click="removeAllLembretes">
          Remove All
        </button>
      </div>
      <div class="col-md-6">
        <div v-if="currentLembrete">
          <Lembrete-details
            :Lembrete="currentLembrete"
            @refreshList="refreshList"
          />
        </div>
        <div v-else>
          <br />
          <p>Pressione um Lembrete...</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import LembreteDataService from "../services/LembreteDataService";
  import LembreteDetails from "./Lembrete";
  
  export default {
    name: "Lembretes-list",
    components: { LembreteDetails },
    data() {
      return {
        Lembretes: [],
        currentLembrete: null,
        currentIndex: -1
      };
    },
    methods: {
      onDataChange(items) {
        let _Lembretes = [];
  
        items.forEach((item) => {
          let key = item.key;
          let data = item.val();
          _Lembretes.push({
            key: key,
            title: data.title,
            description: data.description,
            published: data.published,
          });
        });
  
        this.Lembretes = _Lembretes;
      },
  
      refreshList() {
        this.currentLembrete = null;
        this.currentIndex = -1;
      },
  
      setActiveLembrete(Lembrete, index) {
        this.currentLembrete = Lembrete;
        this.currentIndex = index;
      },
  
      removeAllLembretes() {
        LembreteDataService.deleteAll()
          .then(() => {
            this.refreshList();
          })
          .catch((e) => {
            console.log(e);
          });
      },
    },
    mounted() {
      LembreteDataService.getAll().on("value", this.onDataChange);
    },
    beforeDestroy() {
      LembreteDataService.getAll().off("value", this.onDataChange);
    }
  };
  </script>