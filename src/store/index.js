export const state = () => ({
    contacts_data: []
})
export const getters = {
    get_contacts(state) {
        return state.contacts_data
    }
}

export const mutations = {
    contacts_data(state, contacts) {
        state.contacts_data = []
        contacts.forEach(contact => {
            state.contacts_data.push({
                id: contact.id,
                updated_at: contact.updated_at.substring(0, 10),
                created_at: contact.created_at.substring(0, 10),
                full_name: contact.full_name,
                phone_number: contact.phone_number
            })
        })
    },
    delete_contact(state, id) {
        state.contacts_data = state.contacts_data.filter((contact) => contact.id !== id)
    }
}

export const actions = {
    fetchAllContacts({commit}) {
        this.$axios
            .get(process.env.contacts_api).then((response) => {
            commit('contacts_data', response.data)
        })
    },
    deleteContact({commit}, id) {
        this.$axios.delete(`${process.env.contacts_api}/${id}`).then((response) => {
            if (response.status === 200) {
                commit('delete_contact', response.data.id)
                alert('Success')
            }
        })
    }
}
