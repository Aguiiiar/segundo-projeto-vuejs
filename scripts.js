const { createApp } = Vue;

var members = [
]

createApp({
  data() {
    return {
      members: window.members,
      newMember: {},
      newSet: new Set()
    }
  },
  methods: {
    addMember: function () {

      const { fname,lname,instrument } = this.newMember

      if (fname && lname && instrument) {
        this.members.push(this.newMember)
        this.newMember = {}

        localStorage.setItem('members',JSON.stringify(this.members,this.newMember))
      } else {
        alert('Adicione todos os campos')
      }
    },
  },

  mounted: function () {
    const membersStorage = JSON.parse(localStorage.getItem('members'))

    for (const members of Object.values(membersStorage)) {
      this.members.push(members)
    }
  }
}).mount('#app');
