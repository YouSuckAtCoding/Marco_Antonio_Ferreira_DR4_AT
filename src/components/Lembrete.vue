<template>
    <div v-if="currentLembrete" class="edit-form">
      <h4>Lembrete</h4>
      <form>
        <div class="form-group">
          <label for="title">Data</label>
          <input
            type="text"
            class="form-control"
            id="title"
            v-model="currentLembrete.title"
          />
        </div>
  
        <div class="form-group">
          <label for="description">Descrição</label>
          <input
            type="text"
            class="form-control"
            id="description"
            v-model="currentLembrete.description"
          />
        </div>
  
        <div class="form-group">
          <label><strong>Status:</strong></label>
          {{ currentLembrete.published ? "Published" : "Pending" }}
        </div>
      </form>
  
      <button
        class="badge badge-primary mr-2"
        v-if="currentLembrete.published"
        @click="updatePublished(false)"
      >
        UnPublish
      </button>
      <button
        v-else
        class="badge badge-primary mr-2"
        @click="updatePublished(true)"
      >
        Publish
      </button>
  
      <button class="badge badge-danger mr-2" @click="deleteLembrete">
        Delete
      </button>
  
      <button type="submit" class="badge badge-success" @click="updateLembrete">
        Update
      </button>
      <p>{{ message }}</p>
    </div>
  
    <div v-else>
      <br />
      <p>Pressione um lembrete para mais informações...</p>
    </div>
  </template>
  
  <script>
  import LembreteDataService from "../services/LembreteDataService";
  
  export default {
    name: "Lembrete",
    props: ["Lembrete"],
    data() {
      return {
        currentLembrete: null,
        message: "",
      };
    },
    watch: {
      Lembrete: function(Lembrete) {
        this.currentLembrete = { ...Lembrete };
        this.message = "";
      },
    },
    methods: {
      updatePublished(status) {
        LembreteDataService.update(this.currentLembrete.key, {
          published: status,
        })
          .then(() => {
            this.currentLembrete.published = status;
            this.message = "Status atualizado com sucesso!";
          })
          .catch((e) => {
            console.log(e);
          });
      },
  
      updateLembrete() {
        const data = {
          title: this.currentLembrete.title,
          description: this.currentLembrete.description,
        };
  
        LembreteDataService.update(this.currentLembrete.key, data)
          .then(() => {
            this.message = "Lembrete atualizado com sucesso!";
          })
          .catch((e) => {
            console.log(e);
          });
      },
  
      deleteLembrete() {
        LembreteDataService.delete(this.currentLembrete.key)
          .then(() => {
            this.$emit("refreshList");
          })
          .catch((e) => {
            console.log(e);
          });
      },
    },
    mounted() {
      this.message = "";
      this.currentLembrete = { ...this.Lembrete }
    },
  };
  </script>