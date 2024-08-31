   // Fotoğrafları seç
   const photos = document.querySelectorAll('.photo-container img');
   let currentIndex = 0;

   function changePhoto() {
       // Şu anki fotoğrafı gizle
       photos[currentIndex].classList.remove('active');

       // Sonraki fotoğrafın indeksini belirle
       currentIndex = (currentIndex + 1) % photos.length;

       // Sonraki fotoğrafı göster
       photos[currentIndex].classList.add('active');
   }

