const createPost = (title, text = 'Default text', date = new Date().toLocaleDateString()) => {
  return {title,text,date}
}

const post = createPost('Скоро новый год!')
console.log(post)