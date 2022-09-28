<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="title">Data</label>
        <input
          type="datetime-local"
          class="form-control"
          id="title"
          required
          v-model="Lembrete.title"
          name="title"
        />
      </div>

      <div class="form-group">
        <label for="description">Descrição</label>
        <input
          class="form-control"
          id="description"
          required
          v-model="Lembrete.description"
          name="description"
        />
      </div>

      <button @click="saveLembrete" class="btn btn-success">Submeter</button>
    </div>

    <div v-else>
      <h4>Successo!</h4>
      <button class="btn btn-success" @click="newLembrete">Adicionar</button>
    </div>
  </div>
  </template>
  
  <script>
  import LembreteDataService from "../services/LembreteDataService";
  
  export default {
    name: "add-lembrete",
    data() {
      return {
        Lembrete: {
          title: "",
          description: "",
          published: false
        },
        submitted: false
      };
    },
    methods: {
      saveLembrete() {
        var data = {
          title: this.Lembrete.title,
          description: this.Lembrete.description,
          published: false
        };
  
        LembreteDataService.create(data)
          .then(() => {
            console.log("Novo lembrete criado com sucesso");
            this.submitted = true;
          })
          .catch(e => {
            console.log(e);
          });
      },
      
      newLembrete() {
        this.submitted = false;
        this.Lembrete = {
          title: "",
          description: "",
          published: false
        };
      }
    }
  };
  </script>