document.addEventListener('DOMContentLoaded', () => {
    const title = document.getElementById('main-title');
    title.addEventListener('click', () => {
        alert('Вы кликнули на заголовок - так держать!');
    });

    title.addEventListener('mouseover', () => {
        title.style.transform = 'scale(1.025)'; 
        title.style.transition = 'transform 0.3s'; 
    })

    title.addEventListener('mouseout', () => {
        title.style.transform = 'scale(1)';
    })

    const studentPhoto = document.getElementById('student-photo');

    studentPhoto.addEventListener('mouseover', () => {
        studentPhoto.style.transition = 'transform 2s'; 
        studentPhoto.style.transform = "scale(1.1) rotate(360deg)";
    });

    studentPhoto.addEventListener('mouseout', () => {
        studentPhoto.style.transform = 'scale(1) rotate(0deg)';
    });

    studentPhoto.addEventListener('click', () => {
        studentPhoto.src = 'assets/img/goodprepod.jpg';
        studentPhoto.alt = 'Любимый преподаватель';
    });

    studentPhoto.addEventListener('dblclick', () => {
        alert('Не налегай, у меня не так много любимых преподавателей');
    });

    const paragraph = document.getElementById("frontend__p");
    paragraph.style.transition = "color 0.5s ease-in-out";
    paragraph.style.color = "gray";
    
    paragraph.addEventListener("click", () => {
        const currentColor = window.getComputedStyle(paragraph).color;
        paragraph.style.color = 
            currentColor === "rgb(128, 128, 128)" ? "lightblue" : "gray";
    });
});