const form = document.getElementById('commentForm');
    const commentsDiv = document.getElementById('comments');

    form.addEventListener('submit', function(event) {
      event.preventDefault();

      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const comment = document.getElementById('comment').value;

      const commentElement = document.createElement('div');
      commentElement.className = 'comment';
      commentElement.innerHTML = `
        <span>${name}</span> (${email}):<br>
        ${comment}
      `;

      commentsDiv.appendChild(commentElement);

      form.reset();
    });