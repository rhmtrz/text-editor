document.addEventListener("DOMContentLoaded", function(event) {
  const editorArea = document.getElementById('editor')
  editorArea.style.display = 'flex'
  createTextCursor()
  moveCursorByArrowKeys()
});

const createTextCursor = () => {
  const textCursor = document.getElementById('text-cursor')
  textCursor.style.fontSize = '1.6rem'
  let isShow = true
  setInterval(() => {
    if(isShow) {
      textCursor.style.opacity = 0;
      isShow = false
    } else {
      textCursor.style.opacity = 1
      isShow = true
    }
  }, 400)
}

const moveCursorByArrowKeys = () => {
  const textCursor = document.getElementById('text-cursor')
  const textInputArea = document.getElementById('text-area')
  const brTag = document.createElement('br')
  
  let text = ''
  
  textCursor.style.position = 'relative'
  const horizontalSpace = 0.3
  let horizontalPosition = 0;
  const verticalSpace = 6
  let verticalPosition = 0
  document.addEventListener('keydown', (e) => {
    switch (e.keyCode) {
      case 37:
        if (horizontalPosition >= 0) horizontalPosition = horizontalPosition - horizontalSpace
        textCursor.style.left = horizontalPosition + '%'
        break;
      case 38:
        if (verticalPosition > 0) verticalPosition = verticalPosition - verticalSpace
        textCursor.style.top = verticalPosition + '%'
        break;
      case 39:
        if (horizontalPosition <= 100) horizontalPosition = horizontalPosition + horizontalSpace
        textCursor.style.left = horizontalPosition + '%'
        break;
      case 40:
        if (verticalPosition < 100) verticalPosition = verticalPosition + verticalSpace
        textCursor.style.top = verticalPosition + '%'
        break;
      case 13:
        if (verticalPosition < 100) verticalPosition = verticalPosition + 8
        textCursor.style.left = '0';
        horizontalPosition = 0
        textCursor.style.top = verticalPosition + '%'
        text = text + '<br>'
    }
    
    if (event.keyCode >= 48 && event.keyCode <= 122) {
      text = text + event.key
      textInputArea.innerHTML = text
      
    }
  })
}

