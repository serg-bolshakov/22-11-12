const userOne = {
    role: 'admin',
    firstname: 'Дмитрий',
}

const userTwo = {
    role: 'manager',
    firstname: 'Артем',
}

function checkAccess (user, role) {
    if (user.role === role) {
        return true;
    } 
    return false;
    }

function showSuccessMessage (user) {
    console.log ('#');
    console.log (`Доступ открыт ${user.firstname}`);
    console.log ('#');
}

function showErrorMessage (user) {
    console.log ('#');
    console.log (`${user.firstname} - Доступ закрыт`);
    console.log ('#');
}
if (checkAccess(userOne, 'noadmin')) {
    showSuccessMessage(userOne);
} else {
    showErrorMessage(userOne);
}

function checkAccessAndShowMessage (user, role) {
    if (user.role === role) {
        showSuccessMessage(user);//console.log (`Доступ открыт ${user.firstname}`);  
    } else {
        showErrorMessage(user);//console.log (`${user.firstname} - Доступ закрыт`);
    }
}

checkAccessAndShowMessage (userOne, 'admin');
checkAccessAndShowMessage (userTwo, 'manager');