// Presenter untuk tambah cerita

export function showAddStory(main, { addStory, addStoryView }) {
  main.innerHTML = '';
  main.appendChild(addStoryView({
    onSubmit: async (data) => {
      try {
        await addStory(data);
        // Tampilkan notifikasi jika izin sudah diberikan
        if (window.Notification && Notification.permission === 'granted') {
          new Notification('Cerita baru berhasil disimpan!', {
            body: 'Cerita Anda sudah masuk ke daftar.',
            icon: '/icons/icon-192.png'
          });
        }
        location.hash = '/stories';
      } catch (e) {
        alert('Gagal menambah cerita.');
      }
    }
  }));
}
