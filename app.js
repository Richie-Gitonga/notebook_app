const addBox = document.querySelector('.add-note');
const notesContainer = document.querySelector('.notes-container')
const popup = document.querySelector('popup');
const titleEl = document.querySelector('input')
const contentEl = document.querySelector('textarea')
const addButton = document.querySelector('.add-note-icon')

function showNotes() {
    document.querySelectorAll('.note').forEach(note => note.remove());
    showNotes.forEach((note, index)=> {
        let divEl = `<div class="note">
          <div class="note-header">
            <h1>${note.title}</h1>
            <span>
              <img src="https://www.flaticon.com/free-icon/setting_2040504" alt="">
            </span>
          </div>
          <div class="description">
            <p>${note.description}</p>
          </div>
          <footer class="note-footer">
            <span>${note.date}</span>
          </footer>
        </div>`;
        addBox.insertAdjacentElement('afterbegin', divEl)
    })
    shownotes
}