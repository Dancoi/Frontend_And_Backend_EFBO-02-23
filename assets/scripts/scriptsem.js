document.addEventListener('DOMContentLoaded', () => {
    const practiceButton = document.getElementById('change-practice-button');
    const practiceTable = document.getElementById('practice-table');
    practiceButton.addEventListener('click', () => {
        practiceTable.innerHTML =  practiceTable.innerHTML = `
            <thead>
                <tr>
                    <td>Номер</td>
                    <td>Тема</td>
                    <td>Посещение</td>
                    <td>Выполнение</td>
                </tr>
            </thead>
            <tr>
                <td>1</td>
                <td>Базовое бэкенд-приложение</td>
                <td><input type="checkbox"></td>
                <td><input type="checkbox"></td>
            </tr>
            <tr>
                <td>2</td>
                <td>HTTP-запросы</td>
                <td><input type="checkbox"></td>
                <td><input type="checkbox"></td>
            </tr>
            <tr>
                <td>3</td>
                <td>JSON и работа с ним</td>
                <td><input type="checkbox"></td>
                <td><input type="checkbox"></td>
            </tr>
            <tr>
                <td>4</td>
                <td>HTTP-ответы</td>
                <td><input type="checkbox"></td>
                <td><input type="checkbox"></td>
            </tr>
            <tr>
                <td>5</td>
                <td>Проектирование API</td>
                <td><input type="checkbox"></td>
                <td><input type="checkbox"></td>
            </tr>
            <tr>
                <td>6</td>
                <td>Роутинг и его настройка</td>
                <td><input type="checkbox"></td>
                <td><input type="checkbox"></td>
            </tr>
            <tr>
                <td>7</td>
                <td>NoSQL базы данных</td>
                <td><input type="checkbox"></td>
                <td><input type="checkbox"></td>
            </tr>
            <tr>
                <td>8</td>
                <td>Обеспечение авторизации и доступа пользователей</td>
                <td><input type="checkbox"></td>
                <td><input type="checkbox"></td>
            </tr>
            <tr>
                <td>9</td>
                <td>Работа сторонних сервисов уведомления и авторизации</td>
                <td><input type="checkbox"></td>
                <td><input type="checkbox"></td>
            </tr>
            <tr>
                <td>10</td>
                <td>Основы ReactJS</td>
                <td><input type="checkbox"></td>
                <td><input type="checkbox"></td>
            </tr>
            <tr>
                <td>11</td>
                <td>Работа с компонентами динамической DOM</td>
                <td><input type="checkbox"></td>
                <td><input type="checkbox"></td>
            </tr>
            <tr>
                <td>12</td>
                <td>Использование хуков в React</td>
                <td><input type="checkbox"></td>
                <td><input type="checkbox"></td>
            </tr>
            <tr>
                <td>13</td>
                <td>Основы микросервисной архитектуры</td>
                <td><input type="checkbox"></td>
                <td><input type="checkbox"></td>
            </tr>
            <tr>
                <td>14</td>
                <td>Разработка классических модулей веб-приложений</td>
                <td><input type="checkbox"></td>
                <td><input type="checkbox"></td>
            </tr>
        `;

        const headtable = document.getElementById("name_table");
        headtable.textContent = "Практики в течении второго семестра";
        practiceButton.style.display = "none";
    });

    const table = document.getElementById("lectures__table");
    table.style.display = "none";
    table.style.opacity = 0;
    table.style.transition = "opacity 0.5s ease-in-out";
    const button = document.getElementById("button_lectures");

    button.addEventListener('click', () => {
        if (table.style.display === "none") {
            table.style.display = "table";
            setTimeout(() => {
                table.style.opacity = "1";
            }, 0);
        } else {
            table.style.opacity = "0";
            setTimeout(() => {
                table.style.display = "none";
            }, 500); 
        }
    })
    
});