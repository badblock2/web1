var Links = {
    setColor: function(color) {
        document.querySelectorAll('a').forEach(it => {
            it.style.color = color;
        })
    }
}

var Body = {
    setColor: function(color) {
        document.querySelector('body').style.color = color;
    },
    setBackgroundColor: function(color) {
        document.querySelector('body').style.backgroundColor = color;
    }
}

function themeHandler(self) {
    var target = document.querySelector('body');
    if (target.dataset.mode === 'black') {
        //Change Theme (black -> white)
        self.value = 'Black';
        target.dataset.mode = 'white';

        Body.setBackgroundColor('white');
        Body.setColor('black');
        Links.setColor('black');
    } else {
        //Change Theme (white -> black)
        self.value = 'White';
        target.dataset.mode = 'black';

        Body.setBackgroundColor('black');
        Body.setColor('white');
        Links.setColor('white');
    }
}