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
    },
    edit_contact(state, data) {
        const newArr = [...state.contacts_data]
        newArr.forEach(contact => {
            if (contact.id === data.id) {
                const contactIndex = newArr.indexOf(contact)
                newArr[contactIndex] = {
                    id: data.id,
                    updated_at: data.updated_at.substring(0, 10),
                    created_at: data.created_at.substring(0, 10),
                    full_name: data.full_name,
                    phone_number: data.phone_number
                }
            }
        })
        state.contacts_data = newArr
    },
    sort_data(state, sortType) {
        sortType === 'to_oldest' ?
        state.contacts_data = state.contacts_data.sort(
            (a, b) => Date.parse(b.created_at) - Date.parse(a.created_at)
        ) :
        state.contacts_data = state.contacts_data.sort(
            (a, b) => Date.parse(a.created_at) - Date.parse(b.created_at)
        )
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
    },
    editContact({commit}, data) {
        this.$axios.put(`${process.env.contacts_api}/${data.id}`, data.updatedContact).then(response => {
            commit('edit_contact', response.data)
            alert('Success')
        })
    },
    sortData({commit}, sortType) {
        commit('sort_data', sortType)
    }
}
