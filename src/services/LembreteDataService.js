import firebase from "../firebase";

const db = firebase.ref("/Lembretes");

class LembreteDataService {
  getAll() {
    return db;
  }

  create(Lembrete) {
    return db.push(Lembrete);
  }

  update(key, value) {
    return db.child(key).update(value);
  }

  delete(key) {
    return db.child(key).remove();
  }

  deleteAll() {
    return db.remove();
  }
}

export default new LembreteDataService();