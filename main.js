// import fetch from 'node-fetch';
// import fs from 'fs/promises';

// async function Recipes() {
//     const resp = await fetch('https://dummyjson.com/recipes');
//     const data = await resp.json();

//     const recipes = data.recipes.map((recipe) => ({
//         name: recipe.name,
//         ingredients: recipe.ingredients,
//         prepTimeMinutes: recipe.prepTimeMinutes,
//         rating: recipe.rating
//     }));

//     await fs.writeFile('recipes.json', JSON.stringify(recipes));

    
// }

// Recipes();




import fetch from 'node-fetch';
import fs from 'fs/promises';
import moment from 'moment';

async function users() {
    const resp = await fetch('https://dummyjson.com/users');
    const data = await resp.json();

    const userjson = data.users.map((user) => ({
        id: user.id,
        fullName: user.firstName + ' ' + user.lastName,
        email: user.email,
        birthDate: user.birthDate ? moment(user.birthDate).format('YYYY-MM-DD'): null,
        country: user.address.country || null
    }));

    await fs.writeFile('users.json',JSON.stringify(userjson));
    for (let user of userjson) {
        await fs.writeFile(`${user.id}.json`,JSON.stringify(user));
    }
}



users();