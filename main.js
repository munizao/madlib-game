function madLib() {
    var adjective = document.getElementById('adjective').value;
    var clothing = document.getElementById('clothing').value;
    var animal = document.getElementById('animal').value;
    var location = document.getElementById('location').value;
    var noun = document.getElementById('noun').value;
    var bodyPart = document.getElementById('body-part').value;
    var verb = document.getElementById('verb').value;

    story = 'Little ' + adjective + ' ' + clothing + ' wanted to go to her Granmother\'s house. To get there, she had to walk through the ' + location 
    var storyElement = document.getElementById('story');
    storyElement.textContent = story;
}

// get elements