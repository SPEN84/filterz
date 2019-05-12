const colors = ['#87E2D0', '#559F4D', '#FFE0F4', '#7E7E7E', '#FF2D2D', '#F7FFEC'];
let filteredColors = [];

colors.forEach(color => {
    if (color[1] === 'F') {
        filteredColors.push(color);
    }
})