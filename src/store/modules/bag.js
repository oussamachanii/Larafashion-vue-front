const state = () => ({
  // bag contains an Array that is holding product objects
  // bag: ["2", "3", "5"],
  bag: [],
});
const mutations = {
  loadBag(state) {
    //checking if the web has an cookie
    // if (localStorage.getItem("bag") || localStorage.getItem("bag") != "") {
    //   return (state.bag = localStorage.getItem("bag").split("."));
    // }
    // return localStorage.setItem("bag", "");
    // if (LocalStorage.getItem("bag")) {
    //   if (localStorage.getItem("bag") != "") {
    //     return
    //   }
    // }
    if (localStorage.getItem("bag")) {
      return (state.bag = localStorage.getItem("bag").split("."));
    }
  },
  loadStorage(state) {
    const storageString = localStorage.getItem("bag");
    if (!storageString) {
      return localStorage.setItem("bag");
    }
    return state.bag.forEach((element) => {
      if (element && !storageString?.includes(element)) {
        if (storageString == "null") localStorage.setItem("bag", element + ".");
        else localStorage.setItem("bag", storageString + element + ".");
      }
    });
    // adding the new record to the current one

    // if (state.bag.includes(storageString)) {
    //   return localStorage.setItem(
    //     "bag",
    //     localStorage.getItem("bag") + storageString
    //   );
    // }
  },
  setBagItem(state, id) {
    if (state.bag.find((item) => item == id)) {
      // set the new local storage to itself without the given id
      localStorage.setItem(
        "bag",
        localStorage.getItem("bag").replace(id + ".", "")
      );
      return (state.bag = state.bag.filter((item) => item != id));
    }
    return state.bag.push(id);
  },
};
const getters = {
  getBag(state) {
    // return state.bag.map((item) => item);
    return state.bag.map((item) => parseInt(item));
  },
  getBagLength(state) {
    return state.bag.length;
  },
};
export default {
  state,
  mutations,
  getters,
};
