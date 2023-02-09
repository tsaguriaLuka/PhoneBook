export const state = () => ({
    contacts_data_default: [],
    contacts_data: [],
    pagination_pages: [],
    selected_pagination_page: 0
})
export const getters = {
    get_contacts(state) {
        return state.contacts_data
    },
    get_pagination_pages(state) {
        return state.pagination_pages
    },
    get_selected_pagination_page(state) {
        return state.selected_pagination_page
    }
}

export const mutations = {
    contacts_data(state, contacts) {
        state.contacts_data = []
        contacts.forEach(contact => {
            const contactSample = {
                id: contact.id,
                updated_at: contact.updated_at,
                created_at: contact.created_at,
                full_name: contact.full_name,
                phone_number: contact.phone_number
            }
            state.contacts_data.push(contactSample)
            state.contacts_data_default.push(contactSample)
        })
    },
    delete_contact(state, id) {
        state.contacts_data = state.contacts_data.filter((contact) => contact.id !== id)
    },
    edit_contact(state, data) {
        const newArr = [...state.contacts_data]
        newArr.forEach((contact,index) => {
            if (contact.id === data.id) {
                newArr[index] = {
                    id: data.id,
                    updated_at: data.updated_at,
                    created_at: data.created_at,
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
    },
    find_contact(state, inputValue) {
        state.contacts_data = state.contacts_data_default
        const newArr = [...state.contacts_data]
        state.contacts_data = newArr.filter((contact) =>
            contact.phone_number.includes(inputValue)
        )
    },
    create_new_contact(state, newContact) {
        state.contacts_data.push(newContact)
    },
    set_pagination_pages(state, pagesCount) {
        state.pagination_pages = pagesCount
    },
    select_pagination_page(state) {
        state.selected_pagination_page = localStorage.getItem('selected_pagination_page')
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
        this.$axios.put(`${process.env.contacts_api}/${data.id}`, data.editedContact).then(response => {
            commit('edit_contact', response.data)
            alert('Success')
        })
    },
    sortData({commit}, sortType) {
        commit('sort_data', sortType)
    },
    findContact({commit}, inputValue) {
        commit('find_contact', inputValue)
    },
    createNewContact({commit}, newContact) {
        this.$axios.post(`${process.env.contacts_api}/`, newContact).then((response) => {
            commit('create_new_contact', response.data)
            alert('Success')
        })
    },
    setPaginationPages({commit}, pagesCount) {
        commit('set_pagination_pages', pagesCount)
    },
    selectPaginationPage({commit}) {
        commit('select_pagination_page')
    }
}
