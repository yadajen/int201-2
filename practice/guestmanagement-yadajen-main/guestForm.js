//65130500017 yada jenrungrodsakul
// import { createGuestList } from './data/guestdata.js'
const createGuestList = require('./data/guestdata.js')

const guestList = createGuestList()
function guestForm() {
  //provide initial guests data list created from GuestManagement class
  let guests = guestList

  // 1. register event for searching and adding
  function registerEventHandling() {
    const search = document.querySelector('#search-input')
    search.addEventListener('keyup', () => {
      searchGuest(search.value)
    })
    const btn = document.querySelector('#add-guest-btn')
    btn.addEventListener('click', addGuest)
  }

  // 2. Function to display one guest in the display area
  function displayGuest(guestItem) {
    const displayarea = document.querySelector('#display-area')
    // console.log(displayarea)
    const newdiv = document.createElement('div')
    const span1 = document.createElement('span')
    span1.textContent = guestItem.firstname + ' ' + guestItem.lastname

    const span2 = document.createElement('span')
    span2.setAttribute('class', 'remove-icon')
    span2.setAttribute('id', guestItem.firstname + '-' + guestItem.lastname)
    span2.setAttribute('style', 'cursor:pointer;color:red')
    span2.textContent = '[X]'
    // const btndelete = document.querySelector()
    span2.addEventListener('click', () => {
      removeGuest(span2.id)
    })

    displayarea.appendChild(newdiv)
    newdiv.appendChild(span1)
    newdiv.appendChild(span2)
  }

  // 3. Function to display all existing guests in the display area
  function displayGuests(guestResult) {
    const prevGuest = document.querySelector('#display-area')
    prevGuest.textContent = ''
    Array.from(guestResult).forEach((name) => {
      displayGuest(name)
    })
  }

  // 4. Function to search and display matching guests
  function searchGuest(event) {
    const guestResult = guests.searchGuests(event)
    displayGuests(guestResult)
  }

  // 5. Function to add a new guest
  function addGuest() {
    const guestfname = document.querySelector('#firstname-input')
    const guestlname = document.querySelector('#lastname-input')
    const newGuestObjlist = guests.addNewGuest(
      guestfname.value,
      guestlname.value
    )
    const newGuestObject = newGuestObjlist[newGuestObjlist.length - 1]
    displayGuest(newGuestObject) /////
    guestfname.value = ''
    guestlname.value = ''
  }

  // 6. Function to remove a guest
  function removeGuest(event) {
    const arrguest = event.split('-')
    const deleteGuest = { firstname: arrguest[0], lastname: arrguest[1] }
    guests.removeGuest(deleteGuest)
    displayGuests(guests.getAllGuests())

    // guests.removeGuest(event)
  }

  return {
    registerEventHandling,
    displayGuests,
    searchGuest,
    addGuest,
    removeGuest,
  }
}

module.exports = guestForm

// export { guestForm }
// const { registerEventHandling, displayGuests } = guestForm()
// registerEventHandling()
// displayGuests(guestList.getAllGuests())
