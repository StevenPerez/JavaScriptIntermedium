var modAgenda = agenda,
    myAgenda  = modAgenda();


myAgenda.add({ id: 0, name: 'Steven', cel: '222' });
myAgenda.add({ id: 1, name: 'Carmen', cel: '333' });
myAgenda.add({ id: 2, name: 'Murfia', cel: '444' });

console.log( myAgenda.db() );

myAgenda.del(1);

console.log( myAgenda.db() );