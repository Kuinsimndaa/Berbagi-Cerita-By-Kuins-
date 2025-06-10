// Presenter untuk tambah cerita

export function showAddStory(main, { addStory, addStoryView }) {
  main.innerHTML = '';
  main.appendChild(addStoryView({
    onSubmit: async (data) => {
      try {
        await addStory(data);
        location.hash = '/stories';
      } catch (e) {
        alert('Gagal menambah cerita.');
      }
    }
  }));
}
