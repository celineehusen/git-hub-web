async function getTopUsers(){
  // const usernames = ['kevinclark', 'vanpelt', 'topfunky', 'jamesgolick', 'KirinDave', 'bmizerany', 'macournoyer', 'brynary'];
  const randomNum = [];
  let topUsers = [];

  for(let i = 0; i < 8;){
    const n = Math.floor(Math.random() * 30);
    if(!randomNum.includes(n)){
      randomNum.push(n);
      i++;
    }
  }

  const allUsers = await getUsers();
  const usernames = allUsers.filter((_,i) => {
    return randomNum.some(a => a === i);
  }).map(a => a?.login);
  topUsers = usernames.map(s => getUserDetail(s));
  return topUsers;
}

function getUsers(){
  return fetch('https://api.github.com/users')
    .then(response => response.json())
    .catch(err => alert(err));
}

async function getUserDetail(username){
  const user = await loadUser(username);
  console.log(user);
  return user;
}

function loadUser(username){
  return fetch(`https://api.github.com/users/${username}`)
    .then(response => response.json())
    .catch(err => alert(err));
}

