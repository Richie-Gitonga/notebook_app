const addNote = document.querySelector('button');
const titleEl = document.querySelector('input');
const contentEl = document.querySelector('textarea')
const addItem = document.querySelector('.plus')
const closeButton = document.querySelector('.close-button')
const popupEl = document.querySelector('.popup')


const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
const notes = JSON.parse(localStorage.getItem('notes') || '[]')
let isUpdate = false, updateId;



addNote.addEventListener('click', (e) => {
  console.log("clicked")
  e.preventDefault()
  let noteTitle = titleEl.value, 
  noteContent = contentEl.value;
  if(noteTitle || noteContent) {
    let dateEl = new Date(),
    month = months[dateEl.getMonth()],
    day = dateEl.getDate(),
    year = dateEl.getFullYear()

    let noteInfo = {
      title : noteTitle,
      content : noteContent,
      date: `${day} ${month}, ${year}`
    }
    console.log(noteInfo)

    if(!isUpdate) {
    notes.push(noteInfo);
  } else {
    isUpdate = false;
    notes[updateId] = noteInfo;
  }
  }
  
  localStorage.setItem('notes', JSON.stringify(notes));
  closeIcon.click();
  showNotes();
})