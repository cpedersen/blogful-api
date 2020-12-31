document.querySelector('.make-request').addEventListener('click', e => {
    fetch('http://localhost:8000/articles/911')
      .then(res => res.json())
      .then(body => {
        document.querySelector('.content').innerHTML = body.content
      })
  })