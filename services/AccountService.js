const findByNumber = () => {
    const account = {
        id: 1,
        name: 'account1'
    }

    return account;
}


const dataFake = [{
    person: {
        id: 1,
        name: 'david'
    },
    accountName: "cuenta 1",
    saldo: 5000
}, {
    person: {
        id: 2,
        name: 'sofia'
    },
    accountName: "cuenta 2",
    saldo: 10000
}, {
    person: {
        id: 3,
        name: 'maite'
    },
    accountName: "cuenta 3",
    saldo: 15000
}]

const finAllByPerson = async (personId) => {
    return dataFake.find(account => account.person.id === personId);
}


const accountService = {
    findByNumber,
    finAllByPerson: finAllByPerson,
}

module.exports = accountService;


